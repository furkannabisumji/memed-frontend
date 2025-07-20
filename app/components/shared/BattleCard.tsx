import { ClockIcon, FlameIcon } from "lucide-react";
import meme1 from "@/assets/images/meme1.webp";
import meme2 from "@/assets/images/meme2.jpg";

interface BattleCardProps {
  leftImage: string;
  rightImage: string;
  leftLabel: string;
  rightLabel: string;
  leftViews: string;
  rightViews: string;
  timeLeft: string;
  progress: number; // 0 to 100
  isLeftLeading: boolean;
}

export const BattleCard = ({
  leftImage,
  rightImage,
  leftLabel,
  rightLabel,
  leftViews,
  rightViews,
  timeLeft,
  progress,
  isLeftLeading,
}: BattleCardProps) => {
  return (
    <div className="flex flex-col  gap-4 bg-neutral-800 pb-2 ">
      <div className="  overflow-hidden flex   justify-between w-full relative">
        {/* Left image */}
        <div className="relative w-1/2  overflow-hidden">
          <img
            src={leftImage}
            alt={leftLabel}
            className="w-full h-full object-cover"
            style={{
              clipPath: "polygon(0 0, 100% 0%, 85% 100%, 0% 100%)",
            }}
          />
        </div>

        {/* Right image */}
        <div className="relative w-1/2 overflow-hidden">
          <img
            src={rightImage}
            alt={rightLabel}
            className="w-full h-full object-cover"
            style={{
              clipPath: "polygon(15% 0, 100% 0%, 100% 100%, 0% 100%)",
            }}
          />
        </div>
      </div>
      {/* Bottom overlay content container */}
      <div className=" px-1 flex justify-between items-center text-sm text-white text-opacity-80 font-semibold pointer-events-none">
        <span>
          {leftLabel}
          <br />
          <span className=" flex items-center gap-1 text-xs">
            <FlameIcon size={12} className="text-orange-500" /> {leftViews}{" "}
            <span className="bg-green-700/50 text-green-500 px-1  text-[10px] rounded-full ml-1">
              leading
            </span>
          </span>
        </span>
        <span className="text-right">
          {rightLabel}
          <br />
          <span className="flex items-center gap-1 text-xs">
            <FlameIcon size={12} className="text-orange-500" />
            {rightViews}
          </span>
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full px-1">
        {" "}
        <div className=" bottom-0 left-0 right-0 h-2 bg-green-900/50  rounded-full">
          <div
            className="h-2 bg-green-500  rounded-full"
            style={{ width: "80%" }}
          />
        </div>
      </div>
      {/* Time Left */}
      <div className="absolute bottom-2 right-4 flex items-center gap-1 text-xs text-neutral-400 pointer-events-none">
        <ClockIcon className="w-4 h-4" />
        <span>{timeLeft}</span>
      </div>
    </div>
  );
};
