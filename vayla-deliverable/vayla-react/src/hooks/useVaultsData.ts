import { useQuery } from '@tanstack/react-query';
import type { Vault } from '@/types';

/**
 * The public static deployment has no verified catalogue endpoint. Keep the
 * empty state local so the browser does not generate noisy 404 requests.
 */
export function useVaultsData() {
  return useQuery({
    queryKey: ['vaults'],
    queryFn: async (): Promise<Vault[]> => [],
    initialData: [],
    staleTime: 60_000,
  });
}
