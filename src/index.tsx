/*
DCE - Front
==================================
Fichier principal du site hors-React (très haut niveau).
Charge le fichier principal du site React (haut niveau).
*/

import { scan }           from 'react-scan';
if (import.meta.env.DEV) {
    scan({log: false});
}

import { StrictMode, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from '@src/App';
import { startReactDsfr } from "@codegouvfr/react-dsfr/spa";
import '@src/styles/index.scss';
import "@codegouvfr/react-dsfr/main.css";
import { beforeSend } from '@src/utils/glitchtip';
import {
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType,
} from "react-router";
import * as Sentry from "@sentry/react";

if (import.meta.env.VITE_GLITCHTIP_DSN !== 'DISABLED') {
    Sentry.init({
        dsn: import.meta.env.VITE_GLITCHTIP_DSN,
        environment: import.meta.env.VITE_GLITCHTIP_ENVIRONMENT,
        tracesSampleRate: 1.0,
        profilesSampleRate: 1.0,
        sendDefaultPii: false,
        maxValueLength: 8192,
        beforeSend,
        integrations: [
            Sentry.reactRouterV7BrowserTracingIntegration({
                useEffect,
                useLocation,
                useNavigationType,
                createRoutesFromChildren,
                matchRoutes,
            })
        ],
    });
}

startReactDsfr({ defaultColorScheme: "system" });

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error("Erreur fatale : impossible de trouver l'élément root dans le DOM.");
}

ReactDOM.createRoot(
    rootElement, {
        // Callback called when an error is thrown and not caught by an ErrorBoundary.
        onUncaughtError: Sentry.reactErrorHandler((error, errorInfo) => {
            console.error('Uncaught error', error, errorInfo.componentStack);
        }),
        // Callback called when React catches an error in an ErrorBoundary.
        onCaughtError: Sentry.reactErrorHandler(),
        // Callback called when React automatically recovers from errors.
        onRecoverableError: Sentry.reactErrorHandler(),
    }
).render(
    <StrictMode>
        <App />
    </StrictMode>
);
