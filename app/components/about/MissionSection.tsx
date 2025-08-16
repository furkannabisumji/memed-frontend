import { Target } from "lucide-react";

export function MissionSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-900/50">
      <div className="container mx-auto px-4 text-center">
        <Target className="w-16 h-16 mx-auto mb-6 text-green-400" />
        <h2 className="text-4xl font-bold text-white mb-4">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
          To build the world's most engaging and fair meme coin platform, where
          social creativity and community engagement are directly rewarded.
          We're putting the power of memes back into the hands of the creators.
        </p>
      </div>
    </section>
  );
}
