import { Clock } from "lucide-react";

const CountdownTimer = () => {
  return (
    <div className="bg-neutral-900 p-6 rounded-xl text-center">
      <h2 className="text-white text-lg font-semibold mb-2 flex gap-2 items-center">
        <Clock className="text-orange-500" /> Time Remaining
      </h2>
      <div className="text-white text-3xl font-bold mb-1">4d 12h 30m</div>
      <p className="text-neutral-400 text-sm">Until launch window closes</p>
    </div>
  );
};

export default CountdownTimer;
