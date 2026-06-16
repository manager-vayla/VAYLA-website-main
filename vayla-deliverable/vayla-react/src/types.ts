export type VaultCategory = 'music' | 'film' | 'gaming' | 'creator' | 'sports';

export interface Vault {
  id: string;
  slug: string;
  creator: string;
  handle: string;
  category: VaultCategory;
  avatarColor: string; // hex/gradient hint for procedural avatar
  tagline: string;
  description: string;
  tvl: number;            // USD
  apy: number;            // %
  apy30d: number;
  apy90d: number;
  fans: number;
  capacity: number;
  boost: number;          // multiplier
  lockup: number;         // days, 0 = none
  riskScore: number;      // 1-10, lower = safer
  momentum: number;       // -1..1, signal
  revenue: { source: string; usd: number; share: number }[];
  monthly: { m: string; tvl: number; revenue: number }[];
  fanTier: { name: string; min: number; perks: string[] }[];
  contract: `0x${string}`;
}

export interface Position {
  vaultId: string;
  staked: number;     // VAYLA staked
  earned: number;     // USD earned
  boostExp: number;   // unix seconds
  entry: number;      // unix seconds
  share: number;      // % of vault
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  ts: number;
}
