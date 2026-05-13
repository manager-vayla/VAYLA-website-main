import type { Vault } from '@/types';

const months = ['2025-12','2026-01','2026-02','2026-03','2026-04'];

function makeMonthly(base: number, drift: number) {
  return months.map((m, i) => ({
    m,
    tvl: Math.round(base * (1 + drift * i) * (0.92 + Math.random() * 0.16)),
    revenue: Math.round(base * 0.04 * (1 + drift * i) * (0.85 + Math.random() * 0.3)),
  }));
}

export const VAULTS: Vault[] = [
  {
    id: 'v-001', slug: 'noor', creator: 'NOOR', handle: '@noor',
    category: 'music', avatarColor: '#70F3D8',
    tagline: 'Avant-pop · 2.1M monthly listeners',
    description: 'Berlin-based artist. Self-released, sold-out world tour 2025. Vault revenues tied to streams, drops and master ownership.',
    tvl: 4_820_311, apy: 38.4, apy30d: 41.2, apy90d: 36.8,
    fans: 8421, capacity: 12000, boost: 1.42, lockup: 0,
    riskScore: 3, momentum: 0.72,
    revenue: [
      { source: 'Streaming', usd: 142_000, share: 0.34 },
      { source: 'Drops & Merch', usd: 98_000, share: 0.24 },
      { source: 'Live & Touring', usd: 121_000, share: 0.29 },
      { source: 'IP & Sync', usd: 53_000, share: 0.13 },
    ],
    monthly: makeMonthly(3_900_000, 0.05),
    fanTier: [
      { name: 'Listener', min: 100, perks: ['Pro-rata yield', 'Vault chat'] },
      { name: 'Believer', min: 1000, perks: ['Drop pre-sale', 'Quarterly call'] },
      { name: 'Founder', min: 10000, perks: ['Master share', 'Backstage'] },
    ],
    contract: '0xN001000000000000000000000000000000000001',
  },
  {
    id: 'v-002', slug: 'rin', creator: 'RIN ASUKA', handle: '@rin',
    category: 'creator', avatarColor: '#9CFBE4',
    tagline: 'Anime · 4.8M YT subs · IP licensing',
    description: 'Independent animator turned studio. Vault holders earn from streaming licenses, merch and a slate of three feature films.',
    tvl: 7_120_004, apy: 29.1, apy30d: 30.5, apy90d: 28.2,
    fans: 12_104, capacity: 20000, boost: 1.30, lockup: 90,
    riskScore: 4, momentum: 0.48,
    revenue: [
      { source: 'YouTube AdSense', usd: 78_000, share: 0.18 },
      { source: 'Streaming Licenses', usd: 162_000, share: 0.38 },
      { source: 'Merch & Print', usd: 84_000, share: 0.20 },
      { source: 'IP Licensing', usd: 102_000, share: 0.24 },
    ],
    monthly: makeMonthly(6_500_000, 0.03),
    fanTier: [
      { name: 'Watcher', min: 100, perks: ['Pro-rata yield'] },
      { name: 'Patron', min: 2500, perks: ['Episode credits', 'Story Q&A'] },
      { name: 'Producer', min: 25000, perks: ['IP rev share', 'Studio visit'] },
    ],
    contract: '0xN002000000000000000000000000000000000002',
  },
  {
    id: 'v-003', slug: 'kova', creator: 'KOVA', handle: '@kova',
    category: 'gaming', avatarColor: '#4DE6C0',
    tagline: 'Indie studio · 380k Steam wishlists',
    description: 'Two-person studio shipping a single deeply-loved roguelike. Vault returns from sales, DLC and tournament hosting.',
    tvl: 2_310_902, apy: 51.2, apy30d: 56.8, apy90d: 47.1,
    fans: 4012, capacity: 8000, boost: 1.65, lockup: 30,
    riskScore: 6, momentum: 0.91,
    revenue: [
      { source: 'Game Sales', usd: 88_000, share: 0.55 },
      { source: 'DLC', usd: 28_000, share: 0.18 },
      { source: 'Tournaments', usd: 16_000, share: 0.10 },
      { source: 'Merch', usd: 27_000, share: 0.17 },
    ],
    monthly: makeMonthly(1_900_000, 0.08),
    fanTier: [
      { name: 'Player', min: 100, perks: ['Pro-rata yield', 'Beta keys'] },
      { name: 'Pro', min: 1500, perks: ['Tourney seat', 'Discord VIP'] },
    ],
    contract: '0xN003000000000000000000000000000000000003',
  },
  {
    id: 'v-004', slug: 'lumen', creator: 'LUMEN', handle: '@lumen',
    category: 'music', avatarColor: '#3FE0BC',
    tagline: 'Producer · 18 platinum credits',
    description: 'Behind-the-scenes producer for top-40 hits. Vault holders earn from production credits, sample royalties and beat licensing.',
    tvl: 9_840_120, apy: 21.6, apy30d: 22.1, apy90d: 21.0,
    fans: 22_500, capacity: 30000, boost: 1.15, lockup: 180,
    riskScore: 2, momentum: 0.38,
    revenue: [
      { source: 'Production Royalties', usd: 220_000, share: 0.50 },
      { source: 'Sample Licensing', usd: 78_000, share: 0.18 },
      { source: 'Beat Marketplace', usd: 65_000, share: 0.15 },
      { source: 'Mentorship', usd: 75_000, share: 0.17 },
    ],
    monthly: makeMonthly(9_100_000, 0.02),
    fanTier: [
      { name: 'Crate Digger', min: 200, perks: ['Pro-rata yield'] },
      { name: 'A&R', min: 5000, perks: ['Unreleased drops', 'Studio sessions'] },
    ],
    contract: '0xN004000000000000000000000000000000000004',
  },
  {
    id: 'v-005', slug: 'vex', creator: 'VEX FC', handle: '@vexfc',
    category: 'sports', avatarColor: '#1FB89A',
    tagline: 'eSports · 6 majors finalist',
    description: 'Top-tier competitive team. Vault revenue from prize pools, sponsorships and content rev share.',
    tvl: 5_602_010, apy: 33.7, apy30d: 35.1, apy90d: 32.6,
    fans: 9402, capacity: 15000, boost: 1.28, lockup: 60,
    riskScore: 5, momentum: 0.61,
    revenue: [
      { source: 'Prize Pools', usd: 145_000, share: 0.31 },
      { source: 'Sponsorships', usd: 195_000, share: 0.42 },
      { source: 'Content Rev', usd: 60_000, share: 0.13 },
      { source: 'Merch', usd: 65_000, share: 0.14 },
    ],
    monthly: makeMonthly(5_200_000, 0.04),
    fanTier: [
      { name: 'Rookie', min: 100, perks: ['Pro-rata yield'] },
      { name: 'Sixth Man', min: 3000, perks: ['Match-day chat', 'Roster votes'] },
      { name: 'Owner', min: 50000, perks: ['Sponsor splits', 'IRL events'] },
    ],
    contract: '0xN005000000000000000000000000000000000005',
  },
  {
    id: 'v-006', slug: 'sable', creator: 'SABLE & CO.', handle: '@sable',
    category: 'film', avatarColor: '#70F3D8',
    tagline: 'Indie production · Sundance grand jury',
    description: 'Production house with three festival darlings. Vault returns tied to distribution, streaming and IP development.',
    tvl: 3_204_888, apy: 26.8, apy30d: 27.2, apy90d: 26.0,
    fans: 5210, capacity: 10000, boost: 1.22, lockup: 120,
    riskScore: 4, momentum: 0.42,
    revenue: [
      { source: 'Distribution', usd: 92_000, share: 0.38 },
      { source: 'Streaming Licenses', usd: 78_000, share: 0.32 },
      { source: 'Festival Awards', usd: 22_000, share: 0.09 },
      { source: 'IP Development', usd: 50_000, share: 0.21 },
    ],
    monthly: makeMonthly(3_000_000, 0.03),
    fanTier: [
      { name: 'Audience', min: 200, perks: ['Pro-rata yield'] },
      { name: 'Producer', min: 5000, perks: ['Screening invites', 'EP credit'] },
    ],
    contract: '0xN006000000000000000000000000000000000006',
  },
];

export function findVault(slug: string) {
  return VAULTS.find(v => v.slug === slug);
}
