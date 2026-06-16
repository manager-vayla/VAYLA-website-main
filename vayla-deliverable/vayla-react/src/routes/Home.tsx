import { useReveal } from '@/hooks/useReveal';
import { HeroLegacy } from '@/components/sections/HeroLegacy';
import { MarqueeOne, MarqueeTwo } from '@/components/sections/Marquee';
import { Thesis } from '@/components/sections/Thesis';
import { LiveDashInline } from '@/components/sections/LiveDashInline';
import { VaultsArena } from '@/components/sections/VaultsArena';
import { Mechanism } from '@/components/sections/Mechanism';
import { Token } from '@/components/sections/Token';
import { Roadmap } from '@/components/sections/Roadmap';
import { FinalCTA } from '@/components/sections/FinalCTA';
import '@/components/sections/vaults-arena.css';

export function Home() {
  useReveal();
  return (
    <main>
      <HeroLegacy />
      <MarqueeOne />
      <Thesis />
      <LiveDashInline />
      <VaultsArena />
      <Mechanism />
      <MarqueeTwo />
      <Token />
      <Roadmap />
      <FinalCTA />
    </main>
  );
}
