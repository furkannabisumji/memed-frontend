import { SwordsIcon } from "lucide-react";
import meme1 from "@/assets/images/meme1.webp";
import meme2 from "@/assets/images/meme2.jpg";
import { BattleCard } from "@/components/shared/BattleCard";

const cards = [
  {
    leftImage: meme1,
    rightImage: meme2,
    leftLabel: "Meme 1",
    rightLabel: "Meme 2",
    leftViews: "3.1M",
    rightViews: "2.9M",
  },
  {
    leftImage: meme2,
    rightImage: meme1,
    leftLabel: "Meme 3",
    rightLabel: "Meme 4",
    leftViews: "1.2M",
    rightViews: "4.5M",
  },
];

const ActiveBattles = () => {
  return (
    <div className="bg-neutral-900 p-6 rounded-xl mx-auto">
      <h2 className="text-white text-xl font-semibold mb-6 flex items-center gap-2">
        <SwordsIcon />
        Active Battles
      </h2>

      <div className="grid lg:grid-cols-2 gap-6">
        {cards.map((card, i) => (
          <BattleCard
            key={i}
            leftImage={card.leftImage}
            rightImage={card.rightImage}
            leftLabel={card.leftLabel}
            rightLabel={card.rightLabel}
            leftViews={card.leftViews}
            rightViews={card.rightViews}
          />
        ))}
      </div>
    </div>
  );
};

export default ActiveBattles;
