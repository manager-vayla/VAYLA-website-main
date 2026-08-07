/**
 * Public facts that are safe to reuse across the website, llms.txt and SEO.
 * Keep claims here tied to a first-party source and never place live market
 * values in this module; those belong in a timestamped metrics adapter.
 */

export const VAYLA_FACTS = {
  name: 'VAYLA',
  arenaName: 'VAYLA Arena',
  stage: 'Beta',
  description:
    'VAYLA Arena is a Web3 music fandom platform where fans participate in creator support, voting and creation, with participation-based rewards.',
  network: 'BNB Smart Chain',
  tokenStandard: 'BEP-20',
  tokenSymbol: 'VAYLA',
  totalSupply: '3,000,000,000 VAYLA',
  contractAddress: '0x3b6b2593475FC2Bf546F237Fd401D63a655cE53f',
  whitepaperVersion: 'v3.8',
  whitepaperUpdated: '2026-04',
  source: {
    linkHub: 'https://manager-vayla.github.io/VAYLA-link-tree/',
    whitepaper:
      'https://manager-vayla.github.io/VAYLA-link-tree/%28EN%29_VAYLA_WHITEPAPER_v3.8.pdf',
    whitepaperRepository:
      'https://github.com/manager-vayla/VAYLA-link-tree/blob/stitch_design/%28EN%29_VAYLA_WHITEPAPER_v3.8.pdf',
  },
  features: [
    'VAYLA Boost',
    'On-chain V Chart',
    'Create & Earn',
    'Community voting',
    'Participation-based rewards',
    'NFT and membership benefits',
  ],
  tokenAllocation: [
    { label: 'Ecosystem / Exchange', percentage: 45 },
    { label: 'Marketing / Airdrop', percentage: 15 },
    { label: 'Investors / Private', percentage: 15 },
    { label: 'Team / Advisors', percentage: 15 },
    { label: 'Treasury / Reserve', percentage: 10 },
  ],
  developers: [
    {
      name: 'Pham Thanh Binh',
      role: 'CTO',
      linkedin: 'https://www.linkedin.com/in/ptb310/',
      github: 'https://github.com/binhpt310',
    },
    {
      name: 'Van Minh Hoang',
      role: 'Senior FE Developer',
      linkedin: 'https://www.linkedin.com/in/van-minh-hoang-739a891b0/',
      github: 'https://github.com/minhhoang-dev1902',
    },
    {
      name: 'Nguyen Van Thanh',
      role: 'Senior BE Developer',
      linkedin: 'https://www.linkedin.com/in/thanhnv-be/',
      github: 'https://github.com/ThanhBlack273',
    },
  ],
} as const;

export type PublicMetricStatus = 'verified' | 'unavailable' | 'illustrative';

export type PublicMetric = {
  label: string;
  value: string;
  status: PublicMetricStatus;
  source?: string;
  updatedAt?: string;
};

/** Safe fallback until a server-side source adapter returns a verified value. */
export const UNAVAILABLE_METRIC = (label: string): PublicMetric => ({
  label,
  value: 'Unavailable',
  status: 'unavailable',
});
