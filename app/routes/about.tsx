import { useState } from 'react';
import { Header } from '@/components/home/Header';
import { MobileMenu } from '@/components/home/MobileMenu';
import { Footer } from '@/components/home/Footer';
import { MissionSection } from '@/components/about/MissionSection';
import { StorySection } from '@/components/about/StorySection';
import { AboutDifferentiationSection } from '@/components/about/AboutDifferentiationSection';
import { TeamSection } from '@/components/about/TeamSection';
import { TechnologySection } from '@/components/about/TechnologySection';
import { JoinUsSection } from '@/components/about/JoinUsSection';

export default function About() {
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
      
      <main>
        <MissionSection />
        <StorySection />
        <AboutDifferentiationSection />
        <TeamSection />
        <TechnologySection />
        <JoinUsSection />
      </main>
      
      <Footer />
    </div>
  );
}
