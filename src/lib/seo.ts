import { VAYLA_EXTERNAL } from '@/lib/externalLinks';
import { VAYLA_FACTS } from '@/lib/officialFacts';

export const SITE_URL = 'https://vayla.io';
export const SITE_TITLE = 'VAYLA Arena — Web3 Music Fandom Platform';
export const SITE_DESCRIPTION =
  'VAYLA Arena is a Beta Web3 music fandom platform where fans participate in creator support, voting and creation, with participation-based rewards.';
export const OG_IMAGE = SITE_URL + '/og-image.svg';

export const ROUTE_SEO: Record<string, { title: string; description: string; index?: boolean }> = {
  '/': { title: SITE_TITLE, description: SITE_DESCRIPTION },
  '/arena': { title: 'VAYLA Arena — Music Fandom Participation', description: 'Explore VAYLA Arena Beta, VAYLA Boost, On-chain V Chart and Create & Earn participation features.' },
  '/chart': { title: 'On-chain V Chart — VAYLA Arena', description: 'Learn about VAYLA Arena participation and prediction voting based on selected global music chart data.' },
  '/token': { title: '$VAYLA Token — BNB Smart Chain Utility', description: 'Verified VAYLA token facts: BEP-20 on BNB Smart Chain, 3 billion total supply and official source links.' },
  '/tokenutility': { title: '$VAYLA Utility — Official Facts', description: 'Learn how VAYLA is described as a utility token for participation, platform fees, rewards, NFTs and membership benefits.' },
  '/whitepaper': { title: 'VAYLA Whitepaper v3.8 — Official Source', description: 'Read the official VAYLA whitepaper v3.8 summary, core features, token facts, allocation and risk notice.' },
  '/doc': { title: 'VAYLA Documentation — Official Sources', description: 'Official VAYLA documentation, whitepaper v3.8 and verified platform facts.' },
  '/vaults': { title: 'VAYLA Arena Catalogue — Verified Data Status', description: 'Explore VAYLA Arena creator and campaign data. Unverified illustrative vault metrics are not displayed.' },
  '/marketplace': { title: 'VAYLA Marketplace — Data Status', description: 'VAYLA marketplace availability and source-backed listing status.' },
  '/ai': { title: 'VAYLA AI Layer — Preview', description: 'Preview the VAYLA AI participation interface. Recommendations require a verified Arena data source.' },
  '/start': { title: 'Start with VAYLA Arena', description: 'A plain-language guide to VAYLA Arena, VAYLA Boost, voting, Create & Earn and public risk information.' },
  '/creator': { title: 'VAYLA Creator Portal — Preview', description: 'Creator onboarding preview for VAYLA Arena participation.' },
  '/onboarding': { title: 'VAYLA Arena Onboarding — Preview', description: 'A guided introduction to VAYLA Arena participation flows and official sources.' },
  '/dashboard': { title: 'VAYLA Public Dashboard — Preview', description: 'Public dashboard preview. Verified balances, rewards and performance data are not currently published.' },
  '/calculator': { title: 'VAYLA Public Calculator — Educational Tool', description: 'Educational music revenue calculator. Outputs are estimates and not VAYLA performance data.' },
  '/brutal-math': { title: 'VAYLA Public Calculator — Educational Tool', description: 'Educational music revenue calculator. Outputs are estimates and not VAYLA performance data.', index: false },
  '/legal': { title: 'VAYLA Legal Disclosures', description: 'VAYLA legal documents, risk disclosure, privacy and disclaimer.' },
  '/legal/terms': { title: 'VAYLA Terms of Service', description: 'Terms for the current VAYLA public information and product-preview website.', index: false },
  '/legal/privacy': { title: 'VAYLA Privacy Notice', description: 'Privacy information for browsing the current VAYLA public website and voluntarily contacting the project.', index: false },
  '/legal/cookies': { title: 'VAYLA Cookie Policy', description: 'Cookie categories, preferences and third-party link disclosures for the VAYLA public website.', index: false },
  '/legal/risk': { title: 'VAYLA Risk Disclosure', description: 'Risks relating to digital assets, external blockchain services and participation features described by VAYLA.', index: false },
  '/legal/disclaimer': { title: 'VAYLA Disclaimer', description: 'Educational, availability and no-investment-advice disclaimer for VAYLA public information.', index: false },
};

const developerNodes = VAYLA_FACTS.developers.map(developer => ({
  '@type': 'Person',
  name: developer.name,
  jobTitle: developer.role,
  sameAs: [developer.linkedin, developer.github],
}));

export const jsonLdGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': SITE_URL + '/#organization',
      name: VAYLA_FACTS.name,
      url: SITE_URL + '/',
      logo: SITE_URL + '/icon-512.png',
      image: OG_IMAGE,
      description: SITE_DESCRIPTION,
      sameAs: [
        VAYLA_EXTERNAL.twitter,
        VAYLA_EXTERNAL.telegramOfficial,
        VAYLA_EXTERNAL.githubOrg,
        VAYLA_EXTERNAL.coinGecko,
        VAYLA_EXTERNAL.coinMarketCap,
        VAYLA_EXTERNAL.bscscanToken,
        VAYLA_EXTERNAL.linkHub,
      ],
      member: developerNodes,
    },
    ...developerNodes.map((developer, index) => ({ ...developer, '@id': SITE_URL + '/#developer-' + (index + 1) })),
    {
      '@type': 'WebSite',
      '@id': SITE_URL + '/#website',
      url: SITE_URL + '/',
      name: 'VAYLA Arena',
      description: SITE_DESCRIPTION,
      publisher: { '@id': SITE_URL + '/#organization' },
      inLanguage: 'en-US',
    },
    {
      '@type': 'WebApplication',
      name: 'VAYLA Arena',
      applicationCategory: 'MusicApplication',
      operatingSystem: 'Web',
      description: SITE_DESCRIPTION,
      url: SITE_URL + '/arena',
      isPartOf: { '@id': SITE_URL + '/#website' },
    },
  ],
};
