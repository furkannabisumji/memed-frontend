import { CoinsIcon } from "lucide-react";

const CommitGHOForm = () => {
  return (
    <div className="bg-neutral-900 p-6 rounded-xl w-full">
      <h2 className="text-white text-lg font-semibold mb-4 flex gap-2 items-center">
        <CoinsIcon className=" text-green-500" /> Commit GHO
      </h2>

      <p className="text-sm text-neutral-600 py-2">Stake Amount</p>

      {/* Input */}
      <input
        type="number"
        placeholder="Enter GHO Amount"
        className="w-full mb-4 p-2 rounded-md bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:ring-0 "
      />

      {/* Submit Button */}
      <button className="w-full bg-green-500 hover:bg-green-600 text-black font-medium py-2 rounded-md transition">
        Commit
      </button>

      {/* Warning Box */}
      <div className="bg-yellow-500/40 border border-yellow-600 text-yellow-300 text-sm mt-4 p-3 rounded-md">
        ⚠️ Commit-Reveal Process
        <br />
        <span className="text-xs text-yellow-300">
          Large commitments (&gt; 100 GHO) require Lens verification to prevent
          sniping.
        </span>
      </div>
    </div>
  );
};

export default CommitGHOForm;
