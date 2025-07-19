import {
  EyeIcon,
  HeartIcon,
  MessageSquareIcon,
  RepeatIcon,
  Share2Icon,
  TrendingUp,
} from "lucide-react";

const stats = [
  { label: "Likes", value: "89.4K", icon: <HeartIcon /> },
  { label: "Mirrors", value: "89.4K", icon: <RepeatIcon /> },
  { label: "Comments", value: "89.4K", icon: <MessageSquareIcon /> },
  { label: "Views", value: "89.4K", icon: <EyeIcon /> },
  { label: "Shares", value: "89.4K", icon: <Share2Icon /> },
];

const SocialMediaStats = () => {
  return (
    <div className="bg-neutral-900 p-6 rounded-xl">
      <h2 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
        <TrendingUp className="text-green-500" /> Social Media Engagement
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-green-900/40 rounded-lg p-4 flex flex-col items-center justify-center"
          >
            <div className="text-2xl text-green-500">{stat.icon}</div>
            <div className="text-green-400 font-semibold text-xl">
              {stat.value}
            </div>
            <div className="text-sm text-neutral-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaStats;
