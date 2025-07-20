import { useState } from "react";
import { Gift, Activity, ChevronLeft, ChevronRight } from "lucide-react";

export default function EngagementRewards() {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 300;

  const rewardsData = Array(9)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      amount: "420 MEME",
      status: "Available to Claim",
      rank: "#42",
      type: "Weekly Rewards",
      memeAmount: "62 MEME",
    }));

  const recentActivity = [
    {
      action: "Reward Claimed",
      amount: "420 MEME",
      meme: "Meme 1",
      time: "2 hours ago",
    },
    {
      action: "Reward Claimed",
      amount: "420 MEME",
      meme: "Meme 1",
      time: "2 hours ago",
    },
    {
      action: "Reward Claimed",
      amount: "420 MEME",
      meme: "Meme 1",
      time: "2 hours ago",
    },
    {
      action: "Reward Claimed",
      amount: "420 MEME",
      meme: "Meme 1",
      time: "2 hours ago",
    },
    {
      action: "Reward Claimed",
      amount: "420 MEME",
      meme: "Meme 1",
      time: "5 hours ago",
    },
    {
      action: "Reward Claimed",
      amount: "420 MEME",
      meme: "Meme 1",
      time: "5 hours ago",
    },
    {
      action: "Reward Claimed",
      amount: "420 MEME",
      meme: "Meme 1",
      time: "5 hours ago",
    },
  ];

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPageNumbers = () => {
    const pages = [];
    const showPages = 4;

    for (let i = 1; i <= showPages; i++) {
      pages.push(i);
    }

    if (currentPage > showPages) {
      pages.push("...");
      pages.push(totalPages);
    } else if (showPages < totalPages) {
      pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="min-h-screen  text-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Engagement Rewards
          </h1>
          <p className="text-gray-400">
            Earn rewards based on your meme engagement and Heat Score
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 xl:items-start">
          {/* Left Column - Rewards Grid */}
          <div className="xl:col-span-2 bg-neutral-900 rounded-lg p-6  h-fit">
            <div className="flex items-center gap-3 mb-6">
              <Gift className="w-6 h-6 text-green-500" />
              <h2 className="text-2xl font-semibold text-white">
                Your Rewards
              </h2>
            </div>

            {/* Rewards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {rewardsData.map((reward) => (
                <div
                  key={reward.id}
                  className="bg-neutral-800 rounded-lg p-6 border border-neutral-700"
                >
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-green-500 mb-2">
                      {reward.amount}
                    </div>
                    <div className="text-sm text-gray-400">{reward.status}</div>
                  </div>

                  <div className="space-y-2 mb-6 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Rank</span>
                      <span className="text-white font-medium">
                        {reward.rank}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">{reward.type}</span>
                      <span className="text-white font-medium">
                        {reward.memeAmount}
                      </span>
                    </div>
                  </div>

                  <button className="w-full bg-green-600 hover:bg-green-700 text-black cursor-pointer font-semibold py-2 px-2 rounded-lg transition-colors">
                    Claim Reward
                  </button>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 text-gray-400 hover:text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {getPageNumbers().map((page, index) => (
                <button
                  key={index}
                  onClick={() =>
                    typeof page === "number" ? handlePageChange(page) : null
                  }
                  disabled={page === "..."}
                  className={`px-3 py-2 rounded text-sm font-medium cursor-pointer ${
                    page === currentPage
                      ? "bg-green-600 text-white "
                      : page === "..."
                        ? "text-gray-400 cursor-default"
                        : "text-gray-400 hover:text-white hover:bg-neutral-800"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="p-2 text-gray-400 hover:text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column - Recent Activity */}
          <div className="xl:col-span-1 bg-neutral-900 rounded-lg p-6  h-fit xl:sticky xl:top-8">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="w-6 h-6 text-blue-500" />
              <h2 className="text-xl font-semibold text-white">
                Recent Activity
              </h2>
            </div>

            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="border-b border-neutral-800 pb-4 last:border-b-0"
                >
                  <div className="flex justify-between items-start mb-1">
                    <div className="text-neutral-500 font-medium">
                      {activity.action}
                    </div>
                    <div className="text-xs text-neutral-700">
                      {activity.time}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-neutral-700">
                    <span className=" font-semibold">{activity.amount}</span>
                    <span className="">•</span>
                    <span className="">{activity.meme}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
