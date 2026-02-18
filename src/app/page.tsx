import Hero from '@/components/organisms/Hero';
import Features from '@/components/organisms/Features';
import CoreUtilitySection from '@/components/organisms/CoreUtilitySection';
import PlatformSection from '@/components/organisms/PlatformSection';
import RevenueSection from '@/components/organisms/RevenueSection';

import TokenEconomySection from '@/components/organisms/TokenEconomySection';
import RoadmapSection from '@/components/organisms/RoadmapSection';

import GlobalBreathingEffect from '@/components/atoms/GlobalBreathingEffect';

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-teal-500/30 selection:text-teal-200">
      <GlobalBreathingEffect />
      <Hero />
      <Features />
      <CoreUtilitySection />
      <PlatformSection />
      <RevenueSection />

      <TokenEconomySection />
      <RoadmapSection />
    </div>
  );
}

