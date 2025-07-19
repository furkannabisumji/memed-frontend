import { Trophy } from "lucide-react";

const BattleHistory = () => {
  const battles = [
    {
      id: 1,
      opponent: "@paperhands",
      timeAgo: "2 days ago",
      result: "win",
      amount: "+100 MEME",
    },
    {
      id: 2,
      opponent: "@ngmi",
      timeAgo: "2 days ago",
      result: "win",
      amount: "+70 MEME",
    },
    {
      id: 3,
      opponent: "@ngmi",
      timeAgo: "2 days ago",
      result: "loss",
      amount: "-70 MEME",
    },
  ];

  return (
    <div className="bg-neutral-900 rounded-xl p-6 w-full">
      <h2 className="text-white text-xl font-semibold mb-6 flex gap-2 items-center">
        <Trophy className="text-yellow-500" /> Battle History
      </h2>

      {/* Battle List */}
      <div className="space-y-3">
        {battles.map((battle) => (
          <div
            key={battle.id}
            className="bg-neutral-800 p-4 rounded-lg flex items-center justify-between"
          >
            {/* Left side - status indicator and battle info */}
            <div className="flex items-center gap-3">
              {/* Status dot */}
              <div
                className={`w-3 h-3 rounded-full ${
                  battle.result === "win" ? "bg-green-500" : "bg-red-500"
                }`}
              ></div>

              {/* Battle details */}
              <div>
                <div className="text-white text-sm font-medium">
                  vs {battle.opponent}
                </div>
                <div className="text-neutral-400 text-xs">{battle.timeAgo}</div>
              </div>
            </div>

            {/* Right side - amount */}
            <div
              className={`text-sm font-medium px-3 py-1 rounded-full ${
                battle.result === "win"
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {battle.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BattleHistory;
