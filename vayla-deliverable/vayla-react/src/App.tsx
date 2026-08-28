import { Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { Nav } from '@/components/Nav';
import { GlobalChrome } from '@/components/GlobalChrome';
import { CookieConsent } from '@/components/CookieConsent';
import { FootOriginal } from '@/components/sections/FootOriginal';
import { Home } from '@/routes/Home';
import { WalletProvider } from '@/store/wallet';

const Vaults = lazy(() => import('@/routes/Vaults').then(({ Vaults }) => ({ default: Vaults })));
const VaultDetail = lazy(() => import('@/routes/VaultDetail').then(({ VaultDetail }) => ({ default: VaultDetail })));
const Dashboard = lazy(() => import('@/routes/Dashboard').then(({ Dashboard }) => ({ default: Dashboard })));
const AI = lazy(() => import('@/routes/AI').then(({ AI }) => ({ default: AI })));
const Marketplace = lazy(() => import('@/routes/Marketplace').then(({ Marketplace }) => ({ default: Marketplace })));
const Whitepaper = lazy(() => import('@/routes/Whitepaper').then(({ Whitepaper }) => ({ default: Whitepaper })));
const CreatorPortal = lazy(() => import('@/routes/CreatorPortal').then(({ CreatorPortal }) => ({ default: CreatorPortal })));
const Onboarding = lazy(() => import('@/routes/Onboarding').then(({ Onboarding }) => ({ default: Onboarding })));
const Start = lazy(() => import('@/routes/Start').then(({ Start }) => ({ default: Start })));
const Legal = lazy(() => import('@/routes/Legal').then(({ Legal }) => ({ default: Legal })));
const TokenPage = lazy(() => import('@/routes/TokenPage').then(({ TokenPage }) => ({ default: TokenPage })));
const Calculator = lazy(() => import('@/routes/Calculator').then(({ Calculator }) => ({ default: Calculator })));
const Arena = lazy(() => import('@/routes/Arena').then(({ Arena }) => ({ default: Arena })));

export function App() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);

  return (
    <WalletProvider>
      <GlobalChrome />
      <Nav />
      <Suspense fallback={<main className="section"><div className="wrap"><p className="section-eyebrow">Loading page</p></div></main>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vaults" element={<Vaults />} />
          <Route path="/vault/:slug" element={<VaultDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/arena" element={<Arena />} />
          <Route path="/chart" element={<Arena />} />
          <Route path="/tokenutility" element={<TokenPage />} />
          <Route path="/doc" element={<Whitepaper />} />
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
      </Suspense>
      <FootOriginal />
      <CookieConsent />
    </WalletProvider>
  );
}
