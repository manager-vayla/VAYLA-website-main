import GlobalBreathingEffect from '@/components/atoms/GlobalBreathingEffect';
import StitchHeader from '@/components/organisms/StitchHeader';
import StitchHero from '@/components/organisms/StitchHero';
import StitchCoreUtility from '@/components/organisms/StitchCoreUtility';
import StitchEcosystemRotation from '@/components/organisms/StitchEcosystemRotation';
import StitchArenaLayer from '@/components/organisms/StitchArenaLayer';
import StitchInfrastructure from '@/components/organisms/StitchInfrastructure';
import StitchMultiAgent from '@/components/organisms/StitchMultiAgent';
import StitchRoadmap from '@/components/organisms/StitchRoadmap';
import StitchPartners from '@/components/organisms/StitchPartners';
import StitchGovernance from '@/components/organisms/StitchGovernance';
import StitchFooter from '@/components/organisms/StitchFooter';

export default function Home() {
  return (
    <>
      <GlobalBreathingEffect />
      <StitchHeader />
      <main>
        <StitchHero />
        <div className="section-divider"></div>
        <StitchCoreUtility />
        <div className="section-divider"></div>
        <StitchEcosystemRotation />
        <div className="section-divider"></div>
        <StitchArenaLayer />
        <div className="section-divider"></div>
        <StitchInfrastructure />
        <div className="section-divider"></div>
        <StitchMultiAgent />
        <div className="section-divider"></div>
        <StitchRoadmap />
        <div className="section-divider"></div>
        <StitchPartners />
        <div className="section-divider"></div>
        <StitchGovernance />
      </main>
      <StitchFooter />
    </>
  );
}
