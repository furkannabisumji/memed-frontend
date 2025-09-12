import { TrendingUp, Flame, SwordIcon } from "lucide-react";

export default function MintPriceAndHeat() {
  return (
    <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800">
      {/* Current Mint Price Section */}
      <div className="flex items-center gap-3 ">
        <SwordIcon className="w-6 h-6 text-yellow-500" />
        <h2 className="text-xl  text-white">Current Mint Price</h2>
      </div>
      <p className="text-xs text-neutral-500">
        Dynamic pricing based on community heat score
      </p>

      <div className="my-6  flex items-center justify-between">
        <div>
          {" "}
          <div className="text-xl font-semibold  text-white mb-2">
            5,800 MEME
          </div>
          <div className="text-sm text-gray-400 mb-4">
            Base: 5,000 • Heat Bonus: 800
          </div>
        </div>
        <div className="flex justify-end h-fit">
          <div className="flex items-center gap-1 px-3 py-1 bg-green-500/20 text-green-500 rounded-md text-sm font-medium">
            <TrendingUp className="w-4 h-4" />
            +16.0%
          </div>
        </div>
      </div>

      {/* Community Heat Score Section */}
      <div className="flex items-center gap-3 mb-4">
        <Flame className="w-6 h-6 text-orange-500" />
        <h2 className="text-xl font-semibold text-white">
          Community Heat Score
        </h2>
        <div className="ml-auto text-xl font-bold text-white">92,311</div>
      </div>

      <div className="w-full bg-neutral-800 rounded-full h-3 mb-2">
        <div
          className="bg-gradient-to-r from-green-500 to-orange-500 h-3 rounded-full transition-all duration-300"
          style={{ width: "74%" }}
        ></div>
      </div>
      <div className="flex justify-between text-xs text-gray-400">
        <span>0</span>
        <span className="text-center">75%</span>
        <span>150%</span>
      </div>
    </div>
  );
}
