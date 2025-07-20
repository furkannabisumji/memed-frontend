import { useState } from 'react';
import { Header } from '@/components/home/Header';
import { MobileMenu } from '@/components/home/MobileMenu';
import { Footer } from '@/components/home/Footer';
import { TokenDistributionSection } from '@/components/about/TokenDistributionSection';
import { BondingCurveSection } from '@/components/about/BondingCurveSection';
import { FairLaunchSection } from '@/components/about/FairLaunchSection';
import { StakingAndEngagementSection } from '@/components/about/StakingAndEngagementSection';
import { BattleSystemSection } from '@/components/about/BattleSystemSection';
import { AntiSniperSection } from '@/components/about/AntiSniperSection';
import { EconomicProjectionsSection } from '@/components/about/EconomicProjectionsSection';
import { PlatformDifferentiationSection } from '@/components/about/PlatformDifferentiationSection';

export default function Tokenomics() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header 
        onMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMenuOpen={isMobileMenuOpen}
      />
      
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      
      <main className="pt-20 md:pt-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-12">Memed.fun Tokenomics</h1>
        </div>
        <TokenDistributionSection />
        <BondingCurveSection />
        <FairLaunchSection />
        <StakingAndEngagementSection />
        <BattleSystemSection />
        <AntiSniperSection />
        <EconomicProjectionsSection />
        <PlatformDifferentiationSection />
      </main>
      
      <Footer />
    </div>
  );
}
