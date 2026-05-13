/** Public endpoints aligned with https://vayla.io/, link hub, and BNB-chain listings. */

export const VAYLA_EXTERNAL = {
  marketingSite: 'https://vayla.io/',
  twitter: 'https://x.com/vaylamanager',
  telegramOfficial: 'https://t.me/Vayla_Official',
  /** Official link hub — docs, disclosures, outbound resources (mirrors marketing site CTAs). */
  linkHub: 'https://manager-vayla.github.io/VAYLA-link-tree/',
  githubOrg: 'https://github.com/manager-vayla',
  coinGecko: 'https://www.coingecko.com/en/coins/vayla-2',
  coinMarketCap: 'https://coinmarketcap.com/currencies/vayla/',
  bscscanToken:
    'https://bscscan.com/token/0x3b6b2593475FC2Bf546F237Fd401D63a655cE53f',
} as const;
