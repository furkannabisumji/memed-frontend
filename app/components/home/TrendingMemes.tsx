import { MemeCard } from './MemeCard';
import meme from "@/assets/images/meme.png"
export function TrendingMemes() {
  const memes = [
    {
      id: '1',
      title: 'GLMP',
      creator: 'Rebeca',
      image: meme,
      price: '$14k',
      marketCap: 'Market Cap: 30k',
      change24h: 24,
      volume: '30k',
    },
    {
      id: '2',
      title: 'GLMP',
      creator: 'Rebeca',
      image:  meme,
      price: '$14k',
      marketCap: 'Market Cap: 30k',
      change24h: 24,
      volume: '30k',
    },
    {
      id: '3',
      title: 'GLMP',
      creator: 'Rebeca',
      image: meme,
      price: '$14k',
      marketCap: 'Market Cap: 30k',
      change24h: 24,
      volume: '30k',
    },
    {
      id: '4',
      title: 'GLMP',
      creator: 'Rebeca',
      image: meme,
      price: '$14k',
      marketCap: 'Market Cap: 30k',
      change24h: 24,
      volume: '30k',
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Trending Memes
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {memes.map((meme) => (
            <MemeCard
              key={meme.id}
              title={meme.title}
              creator={meme.creator}
              image={meme.image}
              marketCap={meme.marketCap}
              change24h={meme.change24h}
            />
          ))}
        </div>
      </div>
    </section>
  );
}