import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Position } from '@/types';

interface AppState {
  vaylaBalance: number;
  positions: Position[];
  totalEarned: number;
  taste: { genres: string[]; risk: number; horizon: number };
  hasOnboarded: boolean;

  setTaste: (t: Partial<AppState['taste']>) => void;
  finishOnboarding: () => void;

  deposit: (vaultId: string, amount: number, lockup: number) => void;
  exit: (vaultId: string) => void;
  reset: () => void;
}

const INITIAL: Pick<AppState, 'vaylaBalance' | 'positions' | 'totalEarned' | 'taste' | 'hasOnboarded'> = {
  vaylaBalance: 18_420,
  positions: [],
  totalEarned: 0,
  taste: { genres: [], risk: 5, horizon: 90 },
  hasOnboarded: false,
};

export const useApp = create<AppState>()(
  persist(
    (set, get) => ({
      ...INITIAL,
      setTaste: (t) => set({ taste: { ...get().taste, ...t } }),
      finishOnboarding: () => set({ hasOnboarded: true }),
      deposit: (vaultId, amount, lockup) => {
        const s = get();
        if (amount <= 0 || amount > s.vaylaBalance) return;
        const existing = s.positions.find(p => p.vaultId === vaultId);
        const now = Math.floor(Date.now() / 1000);
        const next: Position[] = existing
          ? s.positions.map(p => p.vaultId === vaultId
              ? { ...p, staked: p.staked + amount, boostExp: now + lockup * 86400 }
              : p)
          : [...s.positions, {
              vaultId, staked: amount, earned: 0,
              boostExp: now + lockup * 86400, entry: now, share: 0,
            }];
        set({ vaylaBalance: s.vaylaBalance - amount, positions: next });
      },
      exit: (vaultId) => {
        const s = get();
        const p = s.positions.find(x => x.vaultId === vaultId);
        if (!p) return;
        set({
          vaylaBalance: s.vaylaBalance + p.staked,
          totalEarned: s.totalEarned + p.earned,
          positions: s.positions.filter(x => x.vaultId !== vaultId),
        });
      },
      reset: () => set({ ...INITIAL }),
    }),
    { name: 'vayla:app:v1' }
  )
);
