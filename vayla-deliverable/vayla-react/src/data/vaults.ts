import type { Vault } from '@/types';

/**
 * No illustrative vault catalogue is shipped as live data.
 * Populate this list only from a verified, timestamped Arena API response.
 */
export const VAULTS: Vault[] = [];

export function findVault(_slug: string) {
  return undefined;
}
