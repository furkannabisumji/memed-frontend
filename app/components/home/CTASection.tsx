import
{ Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import footerImage from "@/assets/images/footerboxes.svg";


export function CTASection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden" style={{ backgroundImage: `url(${footerImage})` }}>
      {/* Your existing gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-green-500/20 " />

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to turn your memes
            <br />
            into real rewards ?
          </h2>
          
          <p className="text-lg text-gray-400 mb-8">
            Join the Web3 meme economy where every like, mirror, and quote earns you tokens. 
            Stake, battle, and go viral — all on-chain.
          </p>
          
          <Link
            to="/app"
            className="inline-flex items-center px-8 py-4 bg-green-500 text-black font-bold rounded-full hover:bg-green-400 transition-colors group"
          >
            Launch App
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}