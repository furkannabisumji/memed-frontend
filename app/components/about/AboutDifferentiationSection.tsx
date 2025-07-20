import { Zap, Users, Gem } from 'lucide-react';

const differentiationPoints = [
  {
    icon: Zap,
    title: 'Direct Engagement, Direct Rewards',
    description: 'Unlike other platforms, your social influence on Lens Protocol directly impacts your earnings. No complex formulas, no hidden pools—just pure, transparent rewards for your creativity.',
  },
  {
    icon: Users,
    title: 'Built for the Community, by the Community',
    description: 'We started with a 100% fair launch. No team tokens, no pre-mine, no VCs. Every token in circulation was earned by the community, ensuring that our success is your success.',
  },
  {
    icon: Gem,
    title: 'A Sustainable Economy for Memes',
    description: 'Our unique bonding curve and battle mechanics are designed for long-term growth, not just short-term hype. We\'re building a lasting ecosystem where quality and engagement are rewarded.',
  },
];

export function AboutDifferentiationSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">What Makes Us Different?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiationPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div key={index} className="bg-gray-800/50 p-8 rounded-lg text-center border border-green-500/20">
                  <Icon className="w-12 h-12 mx-auto mb-6 text-green-400" />
                  <h3 className="text-xl font-semibold text-white mb-3">{point.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{point.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
