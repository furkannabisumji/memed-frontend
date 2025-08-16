import { Shield, Wallet, Zap, Shuffle } from "lucide-react";

const antiSniperData = {
  title: "7. Anti-Sniper & Security",
  multiLayer: {
    title: "Multi-Layer Protection",
    items: [
      { icon: Shield, text: "Commit-Reveal + Lens Verification" },
      {
        icon: Wallet,
        text: "Wallet Caps: 500 GHO/address during fundraising (Reviewable) (300 without social proof)",
      },
    ],
  },
  dynamicFees: {
    title: "Dynamic Fees",
    items: [
      { icon: Zap, text: "15% fee on sells <48h post-launch" },
      { icon: Shuffle, text: "5% fee on all battle exits" },
    ],
  },
  batchProcessing: {
    title: "Batch Processing",
    description: "Randomized transaction ordering for fairness",
  },
  smartContractExample: {
    title: "Smart Contract Example",
    code: `function enterBattle(uint256 stakeAmount) external {
    require(balanceOf(msg.sender) >= stakeAmount, "Insufficient MEME");
    _burn(msg.sender, stakeAmount * 15 / 100); // 15% burn on entry
    battles[msg.sender] = stakeAmount * 85 / 100;
}`,
  },
};

export function AntiSniperSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            {antiSniperData.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-900/50 p-6 rounded-lg border border-green-500/20">
                <h3 className="text-xl font-semibold text-green-400 mb-4">
                  {antiSniperData.multiLayer.title}
                </h3>
                <ul className="space-y-3">
                  {antiSniperData.multiLayer.items.map((item, index) => {
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
              <div className="bg-gray-900/50 p-6 rounded-lg border border-green-500/20">
                <h3 className="text-xl font-semibold text-green-400 mb-4">
                  {antiSniperData.dynamicFees.title}
                </h3>
                <ul className="space-y-3">
                  {antiSniperData.dynamicFees.items.map((item, index) => {
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

            <div className="bg-black/30 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-green-400 mb-4">
                {antiSniperData.smartContractExample.title}
              </h3>
              <pre className="bg-gray-900/70 p-4 rounded-md text-sm text-gray-300 overflow-x-auto">
                <code>{antiSniperData.smartContractExample.code}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
