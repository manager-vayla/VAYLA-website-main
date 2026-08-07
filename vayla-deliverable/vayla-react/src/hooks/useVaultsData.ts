import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api';
import type { Vault } from '@/types';

/**
 * Use the API only when it returns a verified catalogue. The public static
 * deployment intentionally renders an empty state instead of demo vaults.
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
      return [];
    },
    staleTime: 60_000,
  });
}
