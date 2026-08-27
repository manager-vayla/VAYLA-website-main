import { useQuery } from '@tanstack/react-query';
import { VAULTS } from '@/data/vaults';
import type { Vault } from '@/types';

export function useVaultsData() {
  return useQuery({
    queryKey: ['vaults'],
    queryFn: async (): Promise<Vault[]> => VAULTS,
    initialData: VAULTS,
    staleTime: 60_000,
  });
}
