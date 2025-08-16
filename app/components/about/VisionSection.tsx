import { CheckCircle } from "lucide-react";

export function VisionSection() {
  const differentiators = [
    "Token value is driven by Lens engagement (likes, mirrors, quotes).",
    "Pricing follows a quadratic bonding curve with anti-dump mechanics.",
    "Zero pre-distribution: All tokens are earned via staking or engagement, not airdropped or pre-allocated.",
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-400">
            Memed.fun Tokenomics v2
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            A Lens-Powered, Meme Token Staking Economy with Bonding Curve
            Pricing and Direct Battle Rewards
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">
            1. Vision & Differentiation
          </h2>
          <p className="text-lg text-gray-400 mb-6">
            <span className="font-semibold text-green-400">
              Beyond Pump.fun:
            </span>{" "}
            Memed.fun is a creator-first meme platform where:
          </p>
          <ul className="space-y-4">
            {differentiators.map((text, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-300">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
