const economicProjectionsData = {
  title: "8. Economic Projections",
  headers: ["Metric", "Launch", "Month 4", "Month 12"],
  rows: [
    ["Circulating Supply", "150M", "400M", "850M"],
    ["Avg. Price (GHO)", "0.0015", "0.0042", "0.0098"],
    ["Active Battles/Day", "20", "100+", "300+"],
    ["Burn Rate/Day", "50k MEME", "250k MEME", "600k MEME"],
  ],
};

export function EconomicProjectionsSection() {
  return (
    <section className="py-12 md:py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">
            {economicProjectionsData.title}
          </h2>
          <div className="overflow-x-auto rounded-lg border border-green-500/20 bg-gray-800/50">
            <table className="min-w-full divide-y divide-green-500/20 text-center">
              <thead className="bg-gray-800/80">
                <tr>
                  {economicProjectionsData.headers.map((header) => (
                    <th
                      key={header}
                      scope="col"
                      className="px-6 py-3 text-xs font-medium text-green-400 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {economicProjectionsData.rows.map((row, rowIndex) => (
                  <tr
                    key={rowIndex}
                    className="hover:bg-gray-700/60 transition-colors"
                  >
                    {row.map((cell, cellIndex) => (
                      <td
                        key={cellIndex}
                        className={`px-6 py-4 whitespace-nowrap text-sm ${cellIndex === 0 ? "text-left font-medium text-gray-300" : "text-green-300"}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
