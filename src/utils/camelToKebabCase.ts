export function camelToKebabCase(str: string): string {
	return str.replace(/[A-Z]/g, match => '-' + match.toLowerCase());
}

export function toKebabCaseProps(obj: Record<string, any>) {
	const result: Record<string, any> = {};

	for (const [key, value] of Object.entries(obj)) {
		const kebabKey = camelToKebabCase(key);

		// Si la valeur est un tableau ou un objet → stringify pour Web Component
		result[kebabKey] =
		Array.isArray(value) || typeof value === 'object'
			? JSON.stringify(value)
			: value;
	}

	return result;
}
