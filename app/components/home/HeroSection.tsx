import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import heroImage from "@/assets/images/heroChecks.svg"

export function HeroSection() {
  return (
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20"      style={{ backgroundImage: `url(${heroImage})` }}>

        {/* Your existing gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-transparent " />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            The Lens-powered meme
            <br />
            token revolution.
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Earn, stake, and battle memes on the first social-token economy built entirely on Lens engagement.
            Memed.fun lets your memes go viral — and valuable.
          </p>

          <Link
              to="/app"
              className="inline-flex items-center px-8 py-4 bg-green-500 text-black font-bold rounded-full hover:bg-green-400 transition-colors group"
          >
            Launch App
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </section>
  );
}