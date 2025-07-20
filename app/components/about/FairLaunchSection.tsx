import { ShieldCheck, TrendingUp, ThumbsDown, Users, Megaphone, Info } from 'lucide-react';

const fairLaunchData = {
  title: '4. 7-Day Fair Launch Protocol',
  fundraising: {
    title: 'Fundraising Window',
    items: [
      { icon: ShieldCheck, text: 'Must raise ≥20,000 GHO within 7 days.' },
      { icon: TrendingUp, text: 'Commit-Reveal: Max 500 GHO/wallet, unknown final price.' },
      { icon: ThumbsDown, text: 'Lens Verification required for large commitments.' },
    ],
  },
  earlyLaunch: {
    title: 'Early Launch Option',
    description: 'Launch immediately if goal reached early (e.g., 48h).',
  },
  failure: {
    title: 'Failure to Raise',
    description: 'If not met, 90% refund, and creator is blocked for 1 month.',
  },
  engagement: {
    title: 'Community Engagement During Fundraise',
    items: [
      { icon: Users, text: 'Daily Progress Updates: Real-time progress bars and countdowns in the dApp.' },
      { icon: Megaphone, text: 'Community Calls & Socials: Regular engagement to maintain hype and transparency.' },
      { icon: Info, text: 'Clear Communication: Users are informed that the 7-day window is for fairness, inclusivity, and anti-bot protection.' },
    ],
  },
};

export function FairLaunchSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">{fairLaunchData.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="bg-gray-900/50 p-6 rounded-lg border border-green-500/20">
              <h3 className="text-2xl font-semibold text-green-400 mb-4">{fairLaunchData.fundraising.title}</h3>
              <ul className="space-y-3">
                {fairLaunchData.fundraising.items.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={index} className="flex items-start">
                      <Icon className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-900/50 p-6 rounded-lg border border-green-500/20">
                <h3 className="text-xl font-semibold text-green-400 mb-2">{fairLaunchData.earlyLaunch.title}</h3>
                <p className="text-gray-300">{fairLaunchData.earlyLaunch.description}</p>
              </div>
              <div className="bg-red-900/30 p-6 rounded-lg border border-red-500/30">
                <h3 className="text-xl font-semibold text-red-400 mb-2">{fairLaunchData.failure.title}</h3>
                <p className="text-gray-300">{fairLaunchData.failure.description}</p>
              </div>
            </div>

          </div>

          <div className="mt-12 bg-gray-900/50 p-6 rounded-lg border border-green-500/20">
            <h3 className="text-2xl font-semibold text-green-400 mb-4">{fairLaunchData.engagement.title}</h3>
            <ul className="space-y-3">
              {fairLaunchData.engagement.items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="flex items-start">
                    <Icon className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
