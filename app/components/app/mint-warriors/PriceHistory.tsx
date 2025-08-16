export default function PriceHistory() {
  return (
    <div className="bg-neutral-900 rounded-lg p-6 border border-neutral-800">
      <h2 className="text-xl font-semibold text-white mb-4">
        24H Price History
      </h2>
      <p className="text-gray-400 text-sm mb-6">
        Monitor the NFT price fluctuations over the last 24 hours
      </p>
      <div className="relative h-64 bg-neutral-800 rounded-lg p-4">
        {/* Simple SVG Chart */}
        <svg className="w-full h-full" viewBox="0 0 400 200">
          <defs>
            <linearGradient
              id="priceGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Chart area fill */}
          <path
            d="M 0 150 L 66 140 L 132 120 L 198 100 L 264 80 L 330 60 L 400 40 L 400 200 L 0 200 Z"
            fill="url(#priceGradient)"
          />

          {/* Chart line */}
          <path
            d="M 0 150 L 66 140 L 132 120 L 198 100 L 264 80 L 330 60 L 400 40"
            stroke="#22c55e"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        {/* Y-axis labels */}
        <div className="absolute left-2 top-2 text-xs text-gray-400">5000</div>
        <div className="absolute left-2 top-12 text-xs text-gray-400">4000</div>
        <div className="absolute left-2 top-24 text-xs text-gray-400">3000</div>
        <div className="absolute left-2 top-36 text-xs text-gray-400">2000</div>
        <div className="absolute left-2 bottom-8 text-xs text-gray-400">
          1000
        </div>

        {/* X-axis labels */}
        <div className="absolute bottom-2 left-4 text-xs text-gray-400">
          00:00
        </div>
        <div className="absolute bottom-2 left-1/4 text-xs text-gray-400">
          04:00
        </div>
        <div className="absolute bottom-2 left-2/4 text-xs text-gray-400">
          08:00
        </div>
        <div className="absolute bottom-2 left-3/4 text-xs text-gray-400">
          12:00
        </div>
        <div className="absolute bottom-2 right-16 text-xs text-gray-400">
          16:00
        </div>
        <div className="absolute bottom-2 right-8 text-xs text-gray-400">
          20:00
        </div>
        <div className="absolute bottom-2 right-2 text-xs text-gray-400">
          24:00
        </div>
      </div>
    </div>
  );
}
