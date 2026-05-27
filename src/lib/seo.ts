/** Shared SEO copy and JSON-LD for vayla.io (GEO-aligned). */

export const SITE_URL = 'https://vayla.io';

export const SITE_TITLE = 'VAYLA — Web3 Music Fandom Platform';

export const SITE_DESCRIPTION =
  'VAYLA is a global Web3 music fandom platform that connects fans, artists, and music IP through on-chain participation, VAYLA Boost, AI music discovery, voting, rewards, NFTs, and token-based ecosystem utilities.';

export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const jsonLdGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'VAYLA',
      legalName: 'VAYLA Technology Inc',
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/icon-512.png`,
      image: OG_IMAGE,
      description: SITE_DESCRIPTION,
      foundingDate: '2026',
      sameAs: [
        'https://x.com/vaylamanager',
        'https://t.me/Vayla_Official',
        'https://github.com/manager-vayla',
        'https://www.coingecko.com/en/coins/vayla-2',
        'https://coinmarketcap.com/currencies/vayla/',
        'https://bscscan.com/token/0x3b6b2593475FC2Bf546F237Fd401D63a655cE53f',
        'https://manager-vayla.github.io/VAYLA-link-tree/',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'VAYLA',
      description: SITE_DESCRIPTION,
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'en-US',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/arena?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'VAYLA',
      applicationCategory: 'MusicApplication',
      operatingSystem: 'Web',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      description: SITE_DESCRIPTION,
      url: `${SITE_URL}/`,
      screenshot: OG_IMAGE,
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is VAYLA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: SITE_DESCRIPTION,
          },
        },
        {
          '@type': 'Question',
          name: 'What is VAYLA Boost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'VAYLA Boost is how fans support artists and music IP on VAYLA through on-chain participation and campaign engagement. Short UX label: V-Boost. It focuses on fan participation, artist growth, and community-driven discovery—not traditional financing language.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is VAYLA Arena?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'VAYLA Arena is the discovery and participation layer where fans explore artists, submit music via YouTube links, vote, earn rewards, and engage with music IP through AI-assisted discovery.',
          },
        },
        {
          '@type': 'Question',
          name: 'Why does VAYLA use Boost instead of Funding?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'VAYLA uses VAYLA Boost to describe fan support and participation clearly—without language that could be confused with securities, investments, or guaranteed returns. Boost reflects engagement, campaigns, and ecosystem utility.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do voting, rewards, NFTs, and token utilities work in VAYLA?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Fans participate in Arena campaigns, voting, and discovery; rewards and NFTs reflect engagement; the $VAYLA token provides ecosystem utility across participation flows. Details vary by campaign and are disclosed in-app.',
          },
        },
        {
          '@type': 'Question',
          name: 'How is VAYLA different from traditional music platforms?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Traditional platforms optimize distribution and ads. VAYLA connects fans, artists, and music IP with transparent on-chain participation, VAYLA Boost, AI discovery, and token-based utilities built for Web3 fandom.',
          },
        },
      ],
    },
  ],
};
