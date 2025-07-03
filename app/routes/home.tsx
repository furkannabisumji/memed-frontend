import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { WalletConnection } from "../components/shared/WalletConnection";
import { Web3ErrorBoundary } from "../components/shared/Web3ErrorBoundary";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Memed.fun - Turn Your Memes Into Tokens" },
    {
      name: "description",
      content:
        "Lens-powered meme token platform with bonding curve pricing, staking rewards, and battle mechanics. Create, stake, and battle with your meme tokens.",
    },
    {
      name: "keywords",
      content:
        "meme tokens, lens protocol, bonding curve, staking, web3, defi, memes",
    },
    {
      property: "og:title",
      content: "Memed.fun - Turn Your Memes Into Tokens",
    },
    {
      property: "og:description",
      content:
        "Lens-powered meme token platform with bonding curve pricing, staking rewards, and battle mechanics.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://memed.fun" },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        <Web3ErrorBoundary>
          <WalletConnection />
        </Web3ErrorBoundary>
        <Welcome />
      </div>
    </div>
  );
}
