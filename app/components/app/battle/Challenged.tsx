import React, { useState } from "react";
import { Plus } from "lucide-react";

export default function Challenged() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-80 bg-neutral-900 rounded-2xl border-4 border-neutral-800 border-dashed shadow-2xl">
      <div
        className="flex flex-col items-center justify-center py-32 px-8 cursor-pointer transition-all duration-200 hover:bg-neutral-800"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`w-16 h-16 rounded-full border-2 border-neutral-500 flex items-center justify-center mb-6 transition-all duration-200 ${
            isHovered ? "border-neutral-400 scale-105" : ""
          }`}
        >
          <Plus
            size={24}
            className={`text-neutral-500 transition-colors duration-200 ${
              isHovered ? "text-neutral-400" : ""
            }`}
          />
        </div>

        <p
          className={`text-neutral-500 text-base font-medium transition-colors duration-200 ${
            isHovered ? "text-neutral-400" : ""
          }`}
        >
          Select meme to start Battle
        </p>
      </div>
    </div>
  );
}
