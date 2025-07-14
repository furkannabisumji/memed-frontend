import { TrendingUp, Swords, DollarSign } from 'lucide-react';
import { StatCard } from './StatCard';

export function StatsSection() {
  const stats = [
    {
      icon: <TrendingUp size={20} />,
      label: 'Circulating Supply',
      value: '1.2M MEME',
      change: '+6.2% today',
    },
    {
      icon: <Swords size={20} />,
      label: 'Active Battles',
      value: '420',
      change: '44 new today',
    },
    {
      icon: <DollarSign size={20} />,
      label: 'Avg Price',
      value: '$0.0042',
      change: '+5.2% today',
    },
  ];

  return (
    <section className="py-20 px-4 ">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto  ">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              icon={stat.icon}
              label={stat.label}
              value={stat.value}
              change={stat.change}
            />
          ))}
        </div>
      </div>
    </section>
  );
}