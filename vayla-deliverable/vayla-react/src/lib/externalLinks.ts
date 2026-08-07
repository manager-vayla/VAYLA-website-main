import { VAYLA_FACTS } from './officialFacts';

/** Public endpoints aligned with the official link-tree and BNB-chain listings. */

export const VAYLA_EXTERNAL = {
  marketingSite: 'https://vayla.io/',
  arena: 'https://vayla-arena.com/',
  twitter: 'https://x.com/vaylaofficial_',
  telegramOfficial: 'https://t.me/Vayla_Vaylian',
  discord: 'https://discord.gg/gM8EfBH6Vu',
  linkedinCompany: 'https://www.linkedin.com/company/vaylatechnology/',
  /** Official link hub — docs, disclosures, outbound resources (mirrors marketing site CTAs). */
  linkHub: 'https://manager-vayla.github.io/VAYLA-link-tree/',
  whitepaper: VAYLA_FACTS.source.whitepaper,
  whitepaperRepository: VAYLA_FACTS.source.whitepaperRepository,
  githubOrg: 'https://github.com/manager-vayla',
  coinGecko: 'https://www.coingecko.com/en/coins/vayla',
  coinMarketCap: 'https://coinmarketcap.com/currencies/vayla/',
  bscscanToken:
    'https://bscscan.com/token/0x3b6b2593475FC2Bf546F237Fd401D63a655cE53f',
  contact: 'mailto:hello@vayla.xyz',
} as const;
