const tokenDistributionData = {
  title: '2. Token Distribution (1B Fixed Supply)',
  headers: ['Allocation', 'Tokens', 'Purpose', 'Release Schedule / Notes'],
  rows: [
    ['Fair Launch (Curve)', '200M (20%)', 'Price discovery + fundraising', 'Bonding curve active for 7-day fair launch only'],
    ['Staking Rewards', '200M (20%)', 'Meme token staking incentives', 'Released every 3 months'],
    ['Creator Incentives', '150M (15%)', 'Tiered engagement rewards', '2-month vesting'],
    ['Engagement Rewards', '150M (15%)', 'Monthly rewards for Lens activity', 'Released every 4 days'],
    ['Uniswap LP', '300M (30%)', 'Liquidity pool seeded', '19,000 GHO (of 20,000 raised) paired with 300M MEME tokens'],
  ],
};

export function TokenDistributionSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">{tokenDistributionData.title}</h2>
          <div className="overflow-x-auto rounded-lg border border-green-500/20 bg-gray-900/50">
            <table className="min-w-full divide-y divide-green-500/20">
              <thead className="bg-gray-800/50">
                <tr>
                  {tokenDistributionData.headers.map((header) => (
                    <th key={header} scope="col" className="px-6 py-3 text-left text-xs font-medium text-green-400 uppercase tracking-wider">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {tokenDistributionData.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-gray-800/60 transition-colors">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
