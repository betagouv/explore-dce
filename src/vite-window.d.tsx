/// TypeScript type definitions for Matomo
// window._mtm

declare global {
    interface Window {
        _mtm?: any[];
        _paq?: { push: (args: any[]) => void };
    }
}

export {};
