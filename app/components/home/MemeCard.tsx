import {Flame} from "lucide-react";

interface MemeCardProps {
  title: string;
  creator: string;
  image: string;
  marketCap: string;
  change24h: number;
  isActive?: boolean;
}

export function MemeCard({ 
  title, 
  creator, 
  image, 
  marketCap, 
  change24h,
  isActive = true

}: MemeCardProps) {
  const isPositive = change24h >= 0;
  
  return (
    <div className="  rounded-xl bg-neutral-900 rounded-md overflow-hidden transition-all  cursor-pointer ">
      <div className="aspect-square relative overflow-hidden  p-3">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-3 space-y-5">
        <div className="flex justify-between items-center">
          <h3 className="text-white font-semibold text-base">{title}</h3>
          {isActive && (
              <div className="pt-2 text-center">
            <span className="inline-block bg-green-500/10 text-green-500 text-xs font-medium px-3 py-1 rounded-full">
              Active
            </span>
              </div>
          )}
        </div>

        <div className="flex items-center justify-between">

          <div className="text-gray-500 text-xs">
            Created by: <span className="text-white">{creator}</span>
          </div>


          <div className="text-gray-500 flex items-center gap-3 text-xs">
            <div className="flex items-center ">
             <Flame size={15} className="text-orange-500"/> <span className="text-white">14M</span></div>
            <div className="flex items-center gap-2 ">
             <span className="text-green-500">Market cap:</span>  <span className="text-white">$3.2k</span></div>
          </div>


        </div>
        


      </div>
    </div>
  );
}