import * as Sentry from '@sentry/react';

interface ScrubbableObject {
    [key: string]: Scrubbable;
  }

  type Scrubbable = ScrubbableObject | ScrubbableArray | string | Sentry.ErrorEvent | unknown;

  interface ScrubbableArray extends Array<Scrubbable> {}

// Define which field names are considered sensitive.
const SENSITIVE_FIELDS = new Set([
  "secret", "keycloak_refresh_token", "code",
  "refresh_token", "access_token", "redeem_token",
  "proconnect_id_token", "id_token", "password",
  "token_output", 
]);

function scrubFieldsInString(s: string): string {
  // Replace JSON-style key/value pairs with double quotes.
  const pattern = new RegExp(`("(${[...SENSITIVE_FIELDS].join('|')})":\\s*)"[^"]+"`, 'gi');
  s = s.replace(pattern, '$1"[Filtered]"');

  // Replace JSON-style key/value pairs with single quotes.
  const patternSingle = new RegExp(`('(${[...SENSITIVE_FIELDS].join('|')})':\\s*)'[^']+'`, 'gi');
  s = s.replace(patternSingle, `$1'[Filtered]'`);

  // Replace Python repr-style key=value pairs with single quotes.
  const patternRepr = new RegExp(`((${[...SENSITIVE_FIELDS].join('|')})=\\s*)'[^']*'`, 'gi');
  s = s.replace(patternRepr, `$1'[Filtered]'`);

  // Replace Python URL-style key=value pairs as a query string (key=value&).
  const patternUrl = new RegExp(`((${[...SENSITIVE_FIELDS].join('|')})=\\s*)[^&]*(?=(&|$))`, 'gi');
  s = s.replace(patternUrl, `$1[Filtered]`);

  // For unstructured messages containing a Key tuple
  const patternTuple = /Key\s*\(\s*(?<fields>[^)]+)\s*\)\s*=\s*\(\s*(?<values>[^)]+)\s*\)/gi;
  s = s.replace(patternTuple, (_match: string, p1: string, p2: string): string => {
    const fields = p1.split(',').map(f => f.trim());
    const values = p2.split(',').map(v => v.trim());
    const newValues = values.map((value, index) =>
      SENSITIVE_FIELDS.has(fields[index].toLowerCase()) ? "[Filtered]" : value
    );
    return `Key (${fields.join(", ")})=(${newValues.join(", ")})`;
  });

  return s;
}

function recursiveScrub(item: Scrubbable): Scrubbable {
    if (typeof item === 'object' && item !== null) {
      if (Array.isArray(item)) {
        return item.map(recursiveScrub) as ScrubbableArray;
      } else {
        const newDict: ScrubbableObject = {};
        for (const key in item) {
          if (SENSITIVE_FIELDS.has(key.toLowerCase())) {
            newDict[key] = "[Filtered]";
          } else {
            newDict[key] = recursiveScrub((item as ScrubbableObject)[key]);
          }
        }
        return newDict;
      }
    } else if (typeof item === 'string') {
      return scrubFieldsInString(item);
    }
    return item;
  }

export function beforeSend(event: Sentry.ErrorEvent): Sentry.ErrorEvent | null {
  event = recursiveScrub(event) as Sentry.ErrorEvent;

  // Censor request headers
  const request = event.request;
  const headers = request?.headers;

  if (headers) {
    const sensitiveHeaders = [
      "authorization", "cookie",
      "datalma-connect-secret",
      "datalma-connect-admin-otp",
      "datalma-connect-admin-sig"
    ];

    const sensitiveHeadersLower = sensitiveHeaders.map(header => header.toLowerCase());

    Object.keys(headers).forEach(header => {
      if (sensitiveHeadersLower.includes(header.toLowerCase())) {
        headers[header] = "[Filtered]";
      }
    });

    event.request!.headers = headers;
  }

  return event;
}