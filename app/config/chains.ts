import { chains } from "@lens-chain/sdk/viem";
import { env } from "../utils/env";

/**
 * Chain configuration for Memed.fun based on environment
 */
export function getChainConfig() {
  const isDevelopment = env.isDevelopment;

  if (isDevelopment) {
    // Development: Use both mainnet and testnet for testing
    return {
      chains: [chains.mainnet, chains.testnet] as const,
      transports: {
        [chains.mainnet.id]: chains.mainnet.rpcUrls.default.http[0]!,
        [chains.testnet.id]: chains.testnet.rpcUrls.default.http[0]!,
      },
    };
  } else {
    // Production: Use mainnet only
    return {
      chains: [chains.mainnet] as const,
      transports: {
        [chains.mainnet.id]: chains.mainnet.rpcUrls.default.http[0]!,
      },
    };
  }
}
