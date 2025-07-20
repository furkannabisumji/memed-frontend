import { Coins, Flame, Clock } from 'lucide-react';

const stakingData = {
  title: '5. Meme Token Staking & Engagement Economy',
  dualReward: {
    title: 'Dual Reward System',
    staking: {
      icon: Coins,
      title: 'Meme Token Staking',
      description: 'Users stake meme tokens to earn more meme tokens from the 200M pool.',
      table: {
        headers: ['Period', 'Months', 'APR'],
        rows: [
          ['Q1', '1–3', '150%'],
          ['Q2', '4–6', '100%'],
          ['Q3', '7–9', '75%'],
          ['Q4', '10–12', '50%'],
        ],
      },
      notes: [
        'Early stakers are rewarded most, incentivizing quick participation and long-term holding.',
        'Early un-staking may incur a penalty, supporting deflation and discouraging speculation.',
      ],
    },
    engagement: {
      icon: Flame,
      title: 'Lens Engagement Rewards',
      description: '150M tokens distributed monthly based on Lens engagement (Heat Score).',
      formula: 'Heat Score: (Likes × 1) + (Mirrors × 3) + (Quotes × 5)',
      claim: 'Rewards are claimable; 50% instant, 50% linear vesting over 15 days.',
    },
  },
  vesting: {
    icon: Clock,
    title: 'Vesting Schedule',
    items: [
      'Creators: 25% monthly unlocks over 4 months',
      'Users: As above for engagement rewards',
    ],
  },
};

export function StakingAndEngagementSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">{stakingData.title}</h2>
          
          <div className="bg-gray-900/50 p-6 md:p-8 rounded-lg border border-green-500/20">
            <h3 className="text-2xl font-semibold text-green-400 mb-6">{stakingData.dualReward.title}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Staking Section */}
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <stakingData.dualReward.staking.icon className="w-7 h-7 text-green-500 mr-3" />
                  <h4 className="text-xl font-bold text-white">{stakingData.dualReward.staking.title}</h4>
                </div>
                <p className="text-gray-300 mb-4">{stakingData.dualReward.staking.description}</p>
                <div className="overflow-x-auto rounded-md border border-gray-700">
                  <table className="min-w-full divide-y divide-gray-700">
                    <thead className="bg-gray-800">
                      <tr>
                        {stakingData.dualReward.staking.table.headers.map(header => (
                          <th key={header} className="px-4 py-2 text-left text-xs font-medium text-gray-400 uppercase">{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {stakingData.dualReward.staking.table.rows.map((row, i) => (
                        <tr key={i}>
                          {row.map((cell, j) => (
                            <td key={j} className="px-4 py-2 whitespace-nowrap text-sm text-gray-300">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-gray-400">
                  {stakingData.dualReward.staking.notes.map((note, i) => <li key={i}>- {note}</li>)}
                </ul>
              </div>

              {/* Engagement Section */}
              <div className="flex flex-col">
                <div className="flex items-center mb-4">
                  <stakingData.dualReward.engagement.icon className="w-7 h-7 text-green-500 mr-3" />
                  <h4 className="text-xl font-bold text-white">{stakingData.dualReward.engagement.title}</h4>
                </div>
                <p className="text-gray-300 mb-4">{stakingData.dualReward.engagement.description}</p>
                <div className="bg-black/40 p-4 rounded-md mb-4">
                  <p className="font-mono text-center text-green-300">{stakingData.dualReward.engagement.formula}</p>
                </div>
                <p className="text-gray-300">{stakingData.dualReward.engagement.claim}</p>
              </div>
            </div>

            {/* Vesting Section */}
            <div className="mt-10 pt-6 border-t border-green-500/20">
               <div className="flex items-center mb-4">
                  <stakingData.vesting.icon className="w-7 h-7 text-green-500 mr-3" />
                  <h4 className="text-xl font-bold text-white">{stakingData.vesting.title}</h4>
                </div>
              <ul className="space-y-2 text-gray-300">
                {stakingData.vesting.items.map((item, i) => <li key={i}>• {item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
