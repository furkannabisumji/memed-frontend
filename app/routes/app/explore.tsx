import type { Route } from "./+types/explore";
import { Intro } from "@/components/app/explore/Intro";
import { MemeTokensList } from "@/components/app/explore/MemeTokensList";
import { Leaderboard } from "@/components/app/explore/Leaderboard";
import meme from "@/assets/images/meme.png";
import { HorizontalCard } from "@/components/app/explore/HorizontalCard";
export default function Explore() {
  const memeTokens = [
    {
      id: 1,
      name: "GLMP",
      creator: "Odaruk",
      price: 3.5,
      marketCap: "52K",
      progress: 52,
      active: true,
      badge: "Active",
      badgeColor: "bg-green-500",
    },
    {
      id: 2,
      name: "PEPE",
      creator: "FrogKing",
      price: 0.0012,
      marketCap: "2.8M",
      progress: 85,
      active: false,
      badge: "Trending",
      badgeColor: "bg-orange-500",
    },
    {
      id: 3,
      name: "DOGE2",
      creator: "ShibaLord",
      price: 0.85,
      marketCap: "1.2M",
      progress: 78,
      active: true,
      badge: "Hot",
      badgeColor: "bg-red-500",
    },
    {
      id: 4,
      name: "MOON",
      creator: "CryptoAstro",
      price: 12.34,
      marketCap: "456K",
      progress: 34,
      active: false,
      badge: "New",
      badgeColor: "bg-blue-500",
    },
    {
      id: 5,
      name: "CATS",
      creator: "KittyMaster",
      price: 0.067,
      marketCap: "890K",
      progress: 67,
      active: false,
      badge: "At 100%",
      badgeColor: "bg-yellow-500",
    },
    {
      id: 6,
      name: "ROCKET",
      creator: "SpaceMan",
      price: 5.67,
      marketCap: "234K",
      progress: 23,
      active: false,
      badge: "New",
      badgeColor: "bg-blue-500",
    },
    {
      id: 7,
      name: "DIAMOND",
      creator: "GemLord",
      price: 45.89,
      marketCap: "1.5M",
      progress: 92,
      badge: "Active",
      badgeColor: "bg-green-500",
    },
    {
      id: 8,
      name: "WOJAK",
      creator: "SadBoy",
      price: 1.23,
      marketCap: "678K",
      progress: 45,
      badge: "Trending",
      badgeColor: "bg-orange-500",
    },
    {
      id: 9,
      name: "BONK",
      creator: "DogeMaster",
      price: 0.00034,
      marketCap: "3.2M",
      progress: 88,
      badge: "At 100%",
      badgeColor: "bg-yellow-500",
    },
    {
      id: 10,
      name: "SHIB2",
      creator: "InuKing",
      price: 0.0089,
      marketCap: "567K",
      progress: 56,
      active: true,
      badge: "Hot",
      badgeColor: "bg-red-500",
    },
    {
      id: 11,
      name: "FLOKI",
      creator: "VikingMeme",
      price: 0.156,
      marketCap: "789K",
      progress: 71,
      active: false,
      badge: "Active",
      badgeColor: "bg-green-500",
    },
    {
      id: 12,
      name: "SAFE",
      creator: "MoonSafe",
      price: 0.0002,
      marketCap: "123K",
      progress: 12,
      active: false,
      badge: "New",
      badgeColor: "bg-blue-500",
    },
  ];

  const leaderboard = [
    {
      id: 1,
      rank: 1,
      name: "Meme Name",
      username: "@memegod",
      image: meme,
      score: 42069,
      engagement: "9.4K",
    },
    {
      id: 2,
      rank: 2,
      name: "Meme Name",
      username: "@memegod",
      image: meme,
      score: 42069,
      engagement: "9.4K",
    },
    {
      id: 3,
      rank: 3,
      name: "Meme Name",
      username: "@memegod",
      image: meme,
      score: 42069,
      engagement: "9.4K",
    },
    {
      id: 4,
      rank: 4,
      name: "Meme Name",
      username: "@memegod",
      image: meme,
      score: 42069,
      engagement: "9.4K",
    },
    {
      id: 5,
      rank: 5,
      name: "Meme Name",
      username: "@memegod",
      image: meme,
      score: 42069,
      engagement: "9.4K",
    },
  ];

  return (
    <div className="min-h-screen  w-full">
      <div className=" px-2 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8 space-y-4 sm:space-y-6 lg:space-y-8 w-full ">
        <Intro />

        <div className="overflow-x-auto w-full scrollbar-hide pb-4 mb-4">
          <div className="flex gap-4  w-full overflow-x-auto">
            <HorizontalCard name="Glimp" creator="0Xbruh" price="$21k" />
            <HorizontalCard name="Glimp" creator="0Xbruh" price="$21k" />
            <HorizontalCard name="Glimp" creator="0Xbruh" price="$21k" />
            <HorizontalCard name="Glimp" creator="0Xbruh" price="$21k" />
            <HorizontalCard name="Glimp" creator="0Xbruh" price="$21k" />
            <HorizontalCard name="Glimp" creator="0Xbruh" price="$21k" />
            <HorizontalCard name="Glimp" creator="0Xbruh" price="$21k" />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row gap-4 md:gap-6 xl:gap-8 w-full">
          {/* Meme Tokens Grid */}
          <div className="flex-1 min-w-0 ">
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-2 sm:gap-4 xl:gap-2">
              {/* Meme Tokens List - always first */}
              <MemeTokensList tokens={memeTokens} />

              {/* Heat Score Leaderboard - always second, beside on xl screens */}
              <Leaderboard items={leaderboard} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
