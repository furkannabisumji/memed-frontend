import meme from "@/assets/images/meme.png";
import { FlameIcon, Share2Icon } from "lucide-react";

const MemeIntroCard = () => {
  return (
    <div className="bg-neutral-900 text-white p-4 rounded-xl  mx-auto">
      <div className="flex flex-col md:flex-row gap-6 items-stretch">
        {/* Left: Frog Image */}
        <div className="w-full md:w-1/6 h-full">
          <img
            src={meme}
            alt="Frog"
            className="w-full h-full rounded-xl object-cover"
          />
        </div>

        {/* Right: Content */}
        <div className="flex-1 flex flex-col">
          {/* Title */}
          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-2xl md:text-3xl font-semibold">
              Pepe's Revenge
            </h1>
          </div>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-neutral-400 mb-3">
            <span className="text-green-400 font-medium">@memegod</span>
            <span className="w-1 h-1 bg-neutral-600 rounded-full" />
            <span>Created 2025-11-15</span>
          </div>

          {/* Description */}
          <p className="text-neutral-300 mb-4">
            The ultimate comeback story of our beloved green friend. This time,
            he's not just sad – he's <span className="font-semibold">MAD</span>!
          </p>

          {/* Bottom Row */}
          <div className="flex flex-wrap items-center gap-3 mt-auto">
            <div className="flex items-center text-orange-400 font-semibold">
              <FlameIcon size={14} /> <span className="ml-1">42,069 Heat</span>
            </div>

            <button className="bg-green-500 hover:bg-green-600 text-black font-medium px-4 py-1.5 cursor-pointer rounded-md flex items-center gap-2 transition">
              <Share2Icon size={13} />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemeIntroCard;
