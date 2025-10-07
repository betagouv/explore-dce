/// <reference types="vite/client" />

export interface ImportMetaEnv {
    readonly VITE_GLITCHTIP_DSN: string
    readonly VITE_GLITCHTIP_ENVIRONMENT: string
    readonly VITE_MATOMO_TMC_URL: string
}

export interface ImportMeta {
    readonly env: ImportMetaEnv
}
