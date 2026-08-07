// Server-side vault catalogue. No verified public vault metrics are currently
// published, so the API must not expose fabricated TVL, APY, fan or contract
// values. Replace this empty catalogue only with a source-backed adapter.
export interface ServerVault {
  id: string;
  slug: string;
  creator: string;
  handle: string;
  category: 'music' | 'film' | 'gaming' | 'creator' | 'sports';
  avatarColor: string;
  tagline: string;
  description: string;
  tvl: number;
  apy: number;
  apy30d: number;
  apy90d: number;
  fans: number;
  capacity: number;
  boost: number;
  lockup: number;
  riskScore: number;
  momentum: number;
  revenue: { source: string; usd: number; share: number }[];
  monthly: { m: string; tvl: number; revenue: number }[];
  fanTier: { name: string; min: number; perks: string[] }[];
  contract: string;
}

export const VAULTS: ServerVault[] = [];

export function findVault(slugOrId: string): ServerVault | undefined {
  return VAULTS.find((vault) => vault.slug === slugOrId || vault.id === slugOrId);
}
