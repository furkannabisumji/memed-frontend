import top from "@/assets/images/battle-top.svg";
import bottom from "@/assets/images/battle-bottom.svg";
import meme from "@/assets/images/meme.png";
import Challenger from "@/components/app/battle/Challenger";
import Challenged from "@/components/app/battle/Challenged";
import BattleSearchList from "@/components/app/battle/BattleSearchList";

export default function Battles() {
  return (
    <div className="min-h-screen w-full">
      <div className="px-2 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8 space-y-4 sm:space-y-6 lg:space-y-8 w-full">
        <div className="flex items-center justify-between w-full ">
          <img src={top} alt="" className="w-full" />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 xl:gap-32 justify-items-center max-w-6xl mx-auto">
          <Challenger
            data={{
              image: meme,
              name: "Dummy Challenger",
              creator: "Dummy",
              flames: "1.2M",
              marketCap: "$10K",
            }}
          />
          <Challenged />
        </div>
        <div className="flex items-center justify-between w-full relative py-10 ">
          <img src={bottom} alt="" className="w-full" />

          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-t cursor-pointer  from-primary-900 to-black text-white px-6 py-2">
            START BATTLE
          </button>
        </div>

        <BattleSearchList />
      </div>
    </div>
  );
}
