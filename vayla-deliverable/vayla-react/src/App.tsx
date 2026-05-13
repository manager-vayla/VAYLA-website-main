import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Nav } from '@/components/Nav';
import { GlobalChrome } from '@/components/GlobalChrome';
import { CookieConsent } from '@/components/CookieConsent';
import { FootOriginal } from '@/components/sections/FootOriginal';
import { Home } from '@/routes/Home';
import { Vaults } from '@/routes/Vaults';
import { VaultDetail } from '@/routes/VaultDetail';
import { Dashboard } from '@/routes/Dashboard';
import { AI } from '@/routes/AI';
import { Marketplace } from '@/routes/Marketplace';
import { Whitepaper } from '@/routes/Whitepaper';
import { CreatorPortal } from '@/routes/CreatorPortal';
import { Onboarding } from '@/routes/Onboarding';
import { Start } from '@/routes/Start';
import { Legal } from '@/routes/Legal';
import { TokenPage } from '@/routes/TokenPage';
import { Calculator } from '@/routes/Calculator';

export function App() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  return (
    <>
      <GlobalChrome />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vaults" element={<Vaults />} />
        <Route path="/vault/:slug" element={<VaultDetail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
        <Route path="/creator" element={<CreatorPortal />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/start" element={<Start />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/legal/:slug" element={<Legal />} />
        <Route path="/token" element={<TokenPage />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/brutal-math" element={<Calculator />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <FootOriginal />
      <CookieConsent />
    </>
  );
}
