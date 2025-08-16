import { CheckCircle } from "lucide-react";

const differentiationData = {
  title: "9. Platform Differentiation",
  points: [
    "Lens-powered virality: Meme token value and battle outcomes are tied to social engagement.",
    "Direct battle rewards: No pools—winner takes from loser, with deflationary burns.",
    "Quadratic bonding curve: Ensures price stability and organic growth.",
    "Mobile-first and cross-chain ready.",
    "Governance: Future DAO for meme holders to vote on upgrades and parameters.",
    "Transparency: All reward calculations and distributions are on-chain and auditable.",
  ],
};

export function PlatformDifferentiationSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            {differentiationData.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiationData.points.map((point, index) => (
              <div
                key={index}
                className="flex items-start p-4 bg-gray-900/50 rounded-lg border border-green-500/10"
              >
                <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <p className="text-gray-300">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
