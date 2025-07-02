"use client";

import { WagmiProvider, createConfig, http } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { env } from "../utils/env";
import { getChainConfig } from "../config/chains";

const chainConfig = getChainConfig();

const config = createConfig(
  getDefaultConfig({
    chains: chainConfig.chains,
    transports: Object.fromEntries(
      chainConfig.chains.map(chain => [
        chain.id,
        http(chainConfig.transports[chain.id])
      ])
    ),
    walletConnectProjectId: env.walletConnectProjectId,
    appName: "Memed.fun",
    appDescription: "Turn your memes into tokens.",
    appUrl: "https://memed.fun",
    appIcon: "https://memed.fun/icon.png",
  })
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
