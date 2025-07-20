import { FlameIcon } from "lucide-react";

interface ChallengerProps {
  data: {
    image: string;
    name: string;
    creator: string;
    flames: string;
    marketCap: string;
  };
}

export default function Challenger({ data }: ChallengerProps) {
  return (
    <div className="w-80 bg-neutral-900 rounded-lg overflow-hidden shadow-xl flex flex-col justify-between p-2">
      <div className="h-72 flex items-center justify-center ">
        <div className="relative w-full h-full">
          <img
            src={data?.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className=" pb-3">
        <div className="text-white font-bold text-lg mb-2">{data?.name}</div>
        <div className="flex justify-between items-center text-xs gap-3">
          <div>
            <p className="text-gray-400">Created by {data?.creator}</p>
          </div>
          <div className="flex items-center gap-1 text-gray-300">
            <div className="flex items-center gap-1">
              <FlameIcon size={14} className="text-orange-500" />
              <span>{data?.flames}</span>
            </div>
            <div>
              <span className="text-green-400">Market Cap:</span>
              <span className="ml-1">{data?.marketCap}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
