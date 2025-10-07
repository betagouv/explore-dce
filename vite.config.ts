import { defineConfig, loadEnv } from 'vite';
import path from "path";
import react from "@vitejs/plugin-react-swc";
import { sentryVitePlugin } from "@sentry/vite-plugin";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    // Set Sentry environment variables from .env file
    const env = loadEnv(mode, process.cwd(), 'PRIVATE_GLITCHTIP_');
    // Load environment variables from .env file
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};
    return {
        plugins: [
            react(),
            sentryVitePlugin({
                url: env.PRIVATE_GLITCHTIP_URL,
                org: env.PRIVATE_GLITCHTIP_ORG,
                project: env.PRIVATE_GLITCHTIP_PROJECT,
                authToken: env.PRIVATE_GLITCHTIP_AUTH_TOKEN,
                sourcemaps: {
                    filesToDeleteAfterUpload: [
                        "dist/assets/**/*.js.map",
                    ],
                }
            }),
            {
                name: 'vite:check:env',
                config: () => {
                    const requiredEnvVars = [
                        "VITE_GLITCHTIP_DSN",
                        "VITE_GLITCHTIP_ENVIRONMENT",
                        "VITE_MATOMO_TMC_URL",
                    ];

                    const missing = requiredEnvVars.filter(
                        (name) => !process.env[name]
                    );

                    if (missing.length) {
                        throw new Error(`❌ Missing or empty env vars: ${missing.join(', ')}`);
                    }
                }
            }
        ],
        build: {
            chunkSizeWarningLimit: 3000,
            rollupOptions: {
                output: {
                    manualChunks: {
                        mui: [
                            '@mui/icons-material',
                            '@mui/material',
                            '@mui/system',
                            '@mui/x-charts',
                            '@mui/x-data-grid'
                        ],
                    }
                }
            },
            sourcemap: true,
        },
        resolve: {
            alias: {
                "@src": path.resolve(__dirname, "./src"),
            }
        },
        optimizeDeps: {
            exclude: [
                "react-scan",
            ]
        }
    }
});
