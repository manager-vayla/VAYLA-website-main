import Navbar from '@/components/organisms/Navbar';
import Hero from '@/components/organisms/Hero';
import Features from '@/components/organisms/Features';
import PlatformSection from '@/components/organisms/PlatformSection';
import RevenueSection from '@/components/organisms/RevenueSection';
import SecuritySection from '@/components/organisms/SecuritySection';
import TokenEconomySection from '@/components/organisms/TokenEconomySection';
import RoadmapSection from '@/components/organisms/RoadmapSection';
import Footer from '@/components/organisms/Footer';

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-teal-500/30 selection:text-teal-200">
      <Navbar />
      <Hero />
      <Features />
      <PlatformSection />
      <RevenueSection />
      <SecuritySection />
      <TokenEconomySection />
      <RoadmapSection />
      <Footer />
    </div>
  );
}

