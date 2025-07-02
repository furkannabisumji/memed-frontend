/**
 * Environment variable validation and configuration for Memed.fun
 */

export function validateEnvironment() {
  const walletConnectProjectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;
  
  if (!walletConnectProjectId) {
    throw new Error(
      'VITE_WALLETCONNECT_PROJECT_ID is required. Please add it to your .env file.'
    );
  }

  return {
    walletConnectProjectId,
    lensApiUrl: import.meta.env.VITE_LENS_API_URL || 'https://api-v2.lens.dev',
    environment: import.meta.env.VITE_ENVIRONMENT || 'development',
    isDevelopment: import.meta.env.DEV,
    isProduction: import.meta.env.PROD,
  };
}

export const env = validateEnvironment();
