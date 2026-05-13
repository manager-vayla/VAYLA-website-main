import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';
import { VAULTS as STATIC_VAULTS } from '@/data/vaults';
import type { Vault } from '@/types';

/**
 * Live API when `/api` exists (Vite + server); otherwise static demo vaults so
 * `/vaults` and `/marketplace` stay populated in Next static export builds.
 */
export function useVaultsData() {
  return useQuery({
    queryKey: ['vaults'],
    queryFn: async (): Promise<Vault[]> => {
      try {
        const live = await api.vaults();
        if (Array.isArray(live) && live.length > 0) return live;
      } catch {
        /* no backend — fall through */
      }
      return STATIC_VAULTS;
    },
    staleTime: 60_000,
  });
}
