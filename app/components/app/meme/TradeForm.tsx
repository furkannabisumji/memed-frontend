import { useState } from "react";

export default function TradeForm() {
  const [mode, setMode] = useState<"buy" | "sell">("buy");

  return (
    <div className="w-full max-w-sm mx-auto rounded-xl bg-neutral-900 p-4 sm:p-6  text-white space-y-4">
      <h2 className="text-lg font-semibold">Trade MEME</h2>

      {/* Buy / Sell Toggle */}
      <div className="flex bg-neutral-800 rounded-lg overflow-hidden">
        <button
          onClick={() => setMode("buy")}
          className={`w-1/2 py-2 font-medium cursor-pointer ${
            mode === "buy" ? "bg-green-700/20 text-green-400" : "text-white"
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setMode("sell")}
          className={`w-1/2 py-2 font-medium cursor-pointer ${
            mode === "sell" ? "bg-green-700/20 text-green-400" : "text-white"
          }`}
        >
          Sell
        </button>
      </div>

      {/* Pay With GHO */}
      <div>
        <label className="block text-sm mb-1">Pay With GHO</label>
        <input
          type="number"
          placeholder="0.00 GHO"
          className="w-full px-4 py-3 bg-neutral-800 rounded-lg placeholder-neutral-400 text-sm appearance-none focus:outline-none focus:ring-0"
        />
      </div>

      {/* Arrow */}
      <div className="text-center text-2xl text-neutral-400">↓</div>

      {/* Receive MEME */}
      <div>
        <label className="block text-sm mb-1">Receive MEME</label>
        <input
          type="number"
          placeholder="0.00"
          className="w-full px-4 py-3 bg-neutral-800 rounded-lg placeholder-neutral-400 text-sm appearance-none focus:outline-none focus:ring-0"
        />
      </div>

      {/* Submit */}
      <button className="w-full py-3 cursor-pointer rounded-lg text-sm font-semibold bg-green-400 text-black hover:bg-green-600 transition-colors">
        {mode === "buy" ? "Buy MEME" : "Sell MEME"}
      </button>
    </div>
  );
}
