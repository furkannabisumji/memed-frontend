export function JoinUsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-900/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Join the Movement</h2>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed mb-8">
          Memed.fun is more than just a platform—it's a community. Whether you're a creator, a degen, or just a meme lover, there's a place for you here. Let's build the future of meme culture together.
        </p>
        <div className="flex justify-center gap-4">
          <a 
            href="/app"
            className="inline-block px-8 py-4 text-lg font-semibold rounded-lg bg-green-500 text-black hover:bg-green-600 transition-transform transform hover:scale-105"
          >
            Launch App
          </a>
          <a 
            href="https://discord.gg/your-invite-code" // Replace with your actual Discord link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-lg font-semibold rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition-transform transform hover:scale-105"
          >
            Join our Discord
          </a>
        </div>
      </div>
    </section>
  );
}
