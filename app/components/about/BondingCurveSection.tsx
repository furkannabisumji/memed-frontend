import { Zap, TrendingDown } from 'lucide-react';

const bondingCurveData = {
  title: '3. Bonding Curve Architecture',
  formula: 'Price = Base Price × (1 + k × Supply)² (Quadratic)',
  basePrice: '0.001 GHO',
  kValue: '0.00001 (adjusts with engagement)',
  supply: 'Tokens minted',
  adjustments: {
    title: 'Dynamic Adjustments',
    items: [
      {
        icon: Zap,
        title: 'Lens Engagement Boost',
        description: 'Each like/mirror/quote increases k-value by 0.000001 for 24h.',
      },
      {
        icon: TrendingDown,
        title: 'Anti-Dump Triggers',
        description: '>10% price drop triggers 24h cooldown and 15% sell tax.',
      },
    ],
  },
};

export function BondingCurveSection() {
  return (
    <section className="py-12 md:py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">{bondingCurveData.title}</h2>
          
          <div className="bg-gray-800/60 p-6 rounded-lg border border-green-500/20 mb-8">
            <h3 className="text-xl font-semibold text-green-400 mb-4">Price Formula:</h3>
            <p className="text-lg text-center font-mono bg-black/50 p-4 rounded-md text-white tracking-wider">{bondingCurveData.formula}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 text-center">
              <div>
                <p className="text-sm text-gray-400">Base Price</p>
                <p className="font-semibold text-green-300">{bondingCurveData.basePrice}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">k-value</p>
                <p className="font-semibold text-green-300">{bondingCurveData.kValue}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Supply</p>
                <p className="font-semibold text-green-300">{bondingCurveData.supply}</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{bondingCurveData.adjustments.title}</h3>
            <div className="space-y-4">
              {bondingCurveData.adjustments.items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start p-4 bg-gray-800/40 rounded-lg">
                    <Icon className="w-8 h-8 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-lg text-green-400">{item.title}</h4>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
