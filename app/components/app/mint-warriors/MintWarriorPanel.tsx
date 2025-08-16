import { useState } from "react";
import { Sword } from "lucide-react";

interface MintWarriorPanelProps {
  tokenName?: string;
}

export default function MintWarriorPanel({
  tokenName = "Warriors",
}: MintWarriorPanelProps) {
  const [quantity, setQuantity] = useState(1);

  // Calculate total based on quantity
  const calculateTotal = (qty: number) => {
    const basePrice = 5600;
    return (basePrice * qty).toLocaleString();
  };

  return (
    <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800 sticky top-8">
      <div className="flex items-center gap-3 mb-6">
        <h2 className="text-xl font-semibold text-white">
          Mint {tokenName} Warriors
        </h2>
      </div>

      <p className="text-gray-400 text-sm mb-6">
        Choose the number of NFT warriors
      </p>

      {/* Quantity Selector */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-400 mb-2">
          Quantity:
        </label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
          className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 text-white focus:outline-none "
        />
      </div>

      {/* Price Details */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-gray-400">Unit price:</span>
          <span className="text-white font-medium">5,600 MEME</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-400">Quantity:</span>
          <span className="text-white font-medium">{quantity}</span>
        </div>
        <div className="flex justify-between border-t border-neutral-700 pt-3">
          <span className="text-gray-400">Total:</span>
          <span className="text-white font-semibold">
            {calculateTotal(quantity)} MEME
          </span>
        </div>
      </div>

      {/* Mint Button and Total on same line */}
      <div className="flex items-center justify-between gap-4">
        <button className="flex-1 bg-green-600 hover:bg-green-700 text-black font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
          <Sword className="w-5 h-5" />
          Mint {quantity} {tokenName} Warrior{quantity > 1 ? "s" : ""}
        </button>
      </div>
    </div>
  );
}
