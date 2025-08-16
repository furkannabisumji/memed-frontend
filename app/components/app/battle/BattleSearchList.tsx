import { useState } from "react";
import { Grid3X3, Search, Flame, Layout, LayoutGrid } from "lucide-react";
import meme from "@/assets/images/meme.png";
interface Meme {
  id: number;
  name: string;
  creator: string;
  image: string;
  flames: string;
  marketCap: string;
}
function MemeCard({ data }: { data: Meme }) {
  return (
    <div className="bg-neutral-800 rounded-xl p-3 sm:p-4 border border-neutral-700 hover:border-neutral-600 transition-colors cursor-pointer">
      <div className="flex items-stretch gap-3 h-full">
        {/* Image on the left - full height */}
        <div className="w-16 sm:w-20 md:w-24 flex-shrink-0 rounded-lg overflow-hidden bg-neutral-700">
          <img
            src={data.image || meme}
            alt={data.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content on the right */}
        <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
          <div>
            <h3 className="text-white font-semibold text-base sm:text-lg mb-1 truncate">
              {data.name}
            </h3>
            <p className="text-white text-xs ">
              <span className="text-neutral-500">Created by </span>
              {data.creator}
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs sm:text-sm mt-2">
            <div className="flex items-center gap-1 text-orange-400">
              <Flame size={12} className="sm:w-3.5 sm:h-3.5" />
              <span>{data.flames}</span>
            </div>
            <div className="text-green-400">
              <span>Market Cap: {data.marketCap}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SearchBar({
  searchTerm,
  onSearchChange,
}: {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}) {
  return (
    <div className="relative max-w-md ml-auto">
      <Search
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={20}
      />
      <input
        type="text"
        placeholder="Search By Title"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-10 pr-4 py-2 border border-neutral-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-neutral-500"
      />
    </div>
  );
}

export default function BattleSearchList() {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data - replace with your actual data
  const memes = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: "GLMP",
    creator: "Oxbruh",
    image: meme,
    flames: "3.1M",
    marketCap: "$21K",
  }));

  const filteredMemes = memes.filter((meme) =>
    meme.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Header */}
      <div className="border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <LayoutGrid className="text-white" size={24} />
              <h1 className="text-xl font-semibold text-white">Memes</h1>
            </div>
            <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-6">
          {filteredMemes.map((meme) => (
            <MemeCard key={meme.id} data={meme} />
          ))}
        </div>

        {filteredMemes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">
              No memes found matching "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
