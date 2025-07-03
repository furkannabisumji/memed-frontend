/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Web3 & Wallet Configuration
  readonly VITE_WALLETCONNECT_PROJECT_ID: string;
  readonly VITE_ENVIRONMENT?: "development" | "staging" | "production";

  // API Configuration
  readonly VITE_APP_BACKEND?: string;
  readonly VITE_API_TIMEOUT?: string;
  readonly VITE_API_RETRIES?: string;
  readonly VITE_ENABLE_API_CACHE?: string;

  // External Services
  readonly VITE_LENS_API_URL?: string;
  readonly VITE_IPFS_GATEWAY?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
