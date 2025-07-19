import { useState } from "react";
import { CoinsIcon, Lightbulb, TrendingDown } from "lucide-react";

const UnstakeForm = () => {
  const [unstakeAmount, setUnstakeAmount] = useState("");

  return (
    <div className="bg-neutral-900 p-6 rounded-xl">
      <h2 className="text-white text-lg font-semibold mb-4 flex gap-2 items-center">
        <CoinsIcon className="text-red-500" /> Unstake
      </h2>

      <p className="text-sm text-neutral-400 py-2 mb-4">Unstake Amount</p>

      {/* Input */}
      <input
        type="number"
        placeholder="Enter MEME Amount"
        value={unstakeAmount}
        onChange={(e) => setUnstakeAmount(e.target.value)}
        className="w-full mb-4 p-2 rounded-md bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:ring-0"
      />

      {/* Submit Button */}
      <button className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 rounded-md transition mb-4">
        Stake MEME
      </button>

      {/* Warning Box */}
      <div className="bg-red-500/20 border border-red-600 text-red-300 text-sm p-3 rounded-md">
        {" "}
        <span className="flex items-center ">
          {" "}
          <Lightbulb size={20} /> Meme-Specific Unstaking
        </span>
        <br />
        <span className="text-xs text-red-300">
          Early un-staking may incur a penalty, supporting deflation and
          discouraging speculation.
        </span>
      </div>
    </div>
  );
};

export default UnstakeForm;
