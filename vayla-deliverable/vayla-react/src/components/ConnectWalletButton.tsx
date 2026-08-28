'use client';

import { useEffect, useState } from 'react';

type EthereumProvider = {
  request: (args: { method: string }) => Promise<string[]>;
};

type ConnectWalletButtonProps = {
  onConnected?: (address: string) => void;
};

function getProvider() {
  return (window as Window & { ethereum?: EthereumProvider }).ethereum;
}

export function ConnectWalletButton({ onConnected }: ConnectWalletButtonProps) {
  const [status, setStatus] = useState('');

  useEffect(() => {
    const provider = getProvider();
    if (!provider) return;

    provider.request({ method: 'eth_accounts' })
      .then(([address]) => {
        if (address) onConnected?.(address);
      })
      .catch(() => undefined);
  }, [onConnected]);

  async function connect() {
    const provider = getProvider();
    if (!provider) {
      setStatus('Install a compatible wallet extension, then try again.');
      return;
    }

    try {
      const [address] = await provider.request({ method: 'eth_requestAccounts' });
      if (address) onConnected?.(address);
    } catch {
      setStatus('Wallet connection was not completed. Try again when you are ready.');
    }
  }

  return (
    <>
      <button type="button" className="btn btn-mint" onClick={connect}>Connect wallet</button>
      {status && <p className="mt-4 text-sm text-ink-2" role="status">{status}</p>}
    </>
  );
}
