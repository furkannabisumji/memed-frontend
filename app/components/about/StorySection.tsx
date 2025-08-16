import { Rocket, Lightbulb } from "lucide-react";

export function StorySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            The Story of Memed.fun
          </h2>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <Lightbulb className="w-20 h-20 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-green-400 mb-2">
                  The Spark of an Idea
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  It all started with a simple observation: in the world of
                  crypto, memes drive culture, yet the creators and communities
                  fueling this culture rarely see the rewards. We saw a
                  disconnect—value was being created, but it wasn't flowing back
                  to the people who deserved it. That's when the idea for
                  Memed.fun was born: a platform built from the ground up to be
                  different.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="flex-shrink-0">
                <Rocket className="w-20 h-20 text-red-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-green-400 mb-2">
                  Building the Future
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We assembled a team of degens, developers, and designers
                  united by a single mission. We spent countless hours
                  architecting a system that was not only fair and transparent
                  but also fun. Our hard work and innovative approach were
                  validated when we won first place in the Lens Protocol
                  Hackathon. This recognition fueled our passion, proving our
                  commitment to building a better home for meme culture
                  on-chain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
