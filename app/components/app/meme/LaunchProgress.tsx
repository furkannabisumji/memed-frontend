import { TargetIcon } from "lucide-react";

const LaunchProgress = () => {
  return (
    <div className="bg-neutral-900 p-6 rounded-xl">
      <h2 className="text-white text-lg font-semibold mb-4 flex  gap-2 items-center">
        {" "}
        <TargetIcon />
        Launch Progress
      </h2>

      {/* Progress Bar */}
      <div className="w-full bg-neutral-800 h-3 rounded-full mb-2">
        <div
          className="bg-gray-300 h-3 rounded-full"
          style={{ width: "65%" }}
        />
      </div>
      <div className="flex justify-between text-sm text-neutral-400 mb-6">
        <span>65% Complete</span>
        <span>13,000 / 20,000 GHO</span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-neutral-800 rounded-lg p-4 text-center">
          <div className="text-green-400 text-2xl font-semibold">1,337</div>
          <div className="text-sm text-neutral-400">Contributors</div>
        </div>
        <div className="bg-neutral-800 rounded-lg p-4 text-center">
          <div className="text-blue-400 text-2xl font-semibold">9.7 GHO</div>
          <div className="text-sm text-neutral-400">Avg Contribution</div>
        </div>
      </div>
    </div>
  );
};

export default LaunchProgress;
