import { Cpu, Book } from "lucide-react";
import { Link } from "react-router";

export function TechnologySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Cpu className="w-16 h-16 mx-auto mb-6 text-green-400" />
          <h2 className="text-4xl font-bold text-white mb-4">Our Technology</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            We've built Memed.fun on a foundation of cutting-edge, transparent
            technology. Our platform leverages the Lens Protocol for social
            engagement, a quadratic bonding curve for fair pricing, and fully
            on-chain mechanics for battles and rewards. It's a system designed
            for fairness, transparency, and long-term sustainability.
          </p>
        </div>
      </div>
    </section>
  );
}
