import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

type WalletContextValue = {
  address: string;
  setAddress: (next: string) => void;
  clear: () => void;
};

const WalletContext = createContext<WalletContextValue | null>(null);

const STORAGE_KEY = 'vayla.wallet.address';

export function WalletProvider({ children }: { children: ReactNode }) {
  const [address, setAddressState] = useState('');

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) || '';
      if (stored) setAddressState(stored);
    } catch {
      /* ignore */
    }
  }, []);

  const setAddress = useCallback((next: string) => {
    setAddressState(next);
    try {
      if (next) window.localStorage.setItem(STORAGE_KEY, next);
      else window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  const clear = useCallback(() => setAddress(''), [setAddress]);

  const value = useMemo<WalletContextValue>(
    () => ({ address, setAddress, clear }),
    [address, setAddress, clear],
  );

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>;
}

export function useWallet() {
  const ctx = useContext(WalletContext);
  if (!ctx) {
    return { address: '', setAddress: () => undefined, clear: () => undefined };
  }
  return ctx;
}
