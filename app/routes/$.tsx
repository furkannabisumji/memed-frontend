import { Link } from "react-router";

export function meta() {
  return [
    { title: "404 - Page Not Found | Memed.fun" },
    { name: "description", content: "The page you're looking for doesn't exist on Memed.fun. Return to create and battle with meme tokens." },
    { name: "robots", content: "noindex, nofollow" },
  ];
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Animated 404 */}
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 animate-pulse">
            404
          </h1>
          <div className="text-6xl mb-4 animate-bounce">🤔</div>
        </div>

        {/* Error Message */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-4">
            Oops! This meme got lost
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            The page you're looking for doesn't exist. Maybe it was turned into a token and traded away? 
            Let's get you back to creating some epic memes!
          </p>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link
              to="/"
              className="block w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              🏠 Back to Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="block w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 border border-white/30"
            >
              ← Go Back
            </button>
          </div>

          {/* Fun Stats */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-sm text-gray-400 mb-2">While you're here...</p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-lg font-bold text-purple-400">∞</div>
                <div className="text-xs text-gray-400">Memes Created</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <div className="text-lg font-bold text-pink-400">🚀</div>
                <div className="text-xs text-gray-400">To The Moon</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-sm mt-6">
          Lost? Confused? That's just the meme economy for you! 📈
        </p>
      </div>
    </div>
  );
}
