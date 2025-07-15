import meme from "@/assets/images/meme.png";

interface HorizontalCardProps {
  name: string;
  creator: string;
  price: string;
}

export function HorizontalCard({ name, creator, price }: HorizontalCardProps) {
  return (
    <div className="flex flex-shrink-0 items-center gap-2 sm:gap-4 min-w-[200px] px-3 sm:px-4 py-2 bg-neutral-900 border-neutral-800 border rounded-full relative">
      <img
        src={meme}
        alt="sample meme"
        className="w-6 h-6 sm:w-[30px] sm:h-[30px] rounded-full"
      />
      <div className="flex flex-col flex-1 min-w-0">
        <h3 className="text-sm sm:text-base font-semibold">{name}</h3>
        <div className="flex justify-between items-center">
          <div className="flex space-x-1 sm:space-x-2 text-xs">
            <span className="text-neutral-500 hidden sm:inline">
              Created by:
            </span>
            <span className="text-neutral-500 sm:hidden">by</span>
            <span className="text-white truncate">{creator}</span>
          </div>
          <div className="text-primary-500 text-xs font-semibold whitespace-nowrap pl-3">
            {price}
          </div>
        </div>
      </div>
    </div>
  );
}
