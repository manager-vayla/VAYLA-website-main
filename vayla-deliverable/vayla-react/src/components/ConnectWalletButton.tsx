'use client';

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useWallet } from '@/store/wallet';

type EthereumProvider = {
  request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
  isMetaMask?: boolean;
  isTrust?: boolean;
  isCoinbaseWallet?: boolean;
  isRainbow?: boolean;
  isRabby?: boolean;
  isBraveWallet?: boolean;
};

type ConnectWalletButtonProps = {
  onConnected?: (address: string) => void;
  className?: string;
  label?: string;
  title?: string;
};

const MOBILE_UAS = /android|iphone|ipad|ipod/i;
const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

function isMobile() {
  if (typeof navigator === 'undefined') return false;
  return MOBILE_UAS.test(navigator.userAgent);
}

function getInjectedProvider(): EthereumProvider | undefined {
  if (typeof window === 'undefined') return undefined;
  const eth = (window as Window & { ethereum?: EthereumProvider | { providers?: EthereumProvider[] } }).ethereum;
  if (!eth) return undefined;
  if ('providers' in eth && Array.isArray(eth.providers)) return eth.providers[0];
  return eth as EthereumProvider;
}

const WALLETS: { id: string; name: string; mobile: string; install: string }[] = [
  { id: 'metamask', name: 'MetaMask', mobile: 'https://metamask.app.link/dapp/', install: 'https://metamask.io/download/' },
  { id: 'trust', name: 'Trust Wallet', mobile: 'https://link.trustwallet.com/open_url?url=', install: 'https://trustwallet.com/' },
  { id: 'rainbow', name: 'Rainbow', mobile: 'https://rainbow.me/download?url=', install: 'https://rainbow.me/' },
  { id: 'coinbase', name: 'Coinbase Wallet', mobile: 'https://go.cb-w.com/dapp?cb_url=', install: 'https://www.coinbase.com/wallet/downloads' },
  { id: 'rabby', name: 'Rabby', mobile: 'https://rabby.io/', install: 'https://rabby.io/' },
];

function walletDeepLink(id: string, currentUrl: string): string {
  const entry = WALLETS.find((w) => w.id === id);
  if (!entry) return currentUrl;
  return entry.mobile + encodeURIComponent(currentUrl);
}

export function ConnectWalletButton({ onConnected, className, label = 'Connect wallet', title }: ConnectWalletButtonProps) {
  const { address, setAddress } = useWallet();
  const [status, setStatus] = useState('');
  const [pickerOpen, setPickerOpen] = useState(false);
  const [hasProvider, setHasProvider] = useState<boolean | null>(null);
  const [coords, setCoords] = useState<{ top: number; right: number } | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const mobile = useMemo(() => isMobile(), []);

  useEffect(() => {
    const provider = getInjectedProvider();
    setHasProvider(Boolean(provider));
    if (!provider) return;
    provider.request({ method: 'eth_accounts' })
      .then((result) => {
        const accounts = result as string[];
        if (accounts[0]) {
          setAddress(accounts[0]);
          onConnected?.(accounts[0]);
        }
      })
      .catch(() => undefined);
  }, [onConnected, setAddress]);

  useIsoLayoutEffect(() => {
    if (!pickerOpen) return;
    function update() {
      const rect = buttonRef.current?.getBoundingClientRect();
      if (!rect) return;
      setCoords({ top: rect.bottom + 8, right: window.innerWidth - rect.right });
    }
    update();
    window.addEventListener('resize', update);
    window.addEventListener('scroll', update, true);
    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('scroll', update, true);
    };
  }, [pickerOpen]);

  useEffect(() => {
    if (!pickerOpen) return;
    function onDoc(e: MouseEvent) {
      if (!wrapperRef.current?.contains(e.target as Node)) setPickerOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setPickerOpen(false);
    }
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [pickerOpen]);

  async function connectInjected() {
    const provider = getInjectedProvider();
    if (!provider) {
      setStatus('No browser wallet detected. Choose a wallet below to open this site inside it.');
      setPickerOpen(true);
      return;
    }
    try {
      const result = await provider.request({ method: 'eth_requestAccounts' });
      const accounts = result as string[];
      if (accounts[0]) {
        setAddress(accounts[0]);
        onConnected?.(accounts[0]);
        setStatus('');
        setPickerOpen(false);
      }
    } catch {
      setStatus('Wallet connection was not completed. Try again when you are ready.');
    }
  }

  function openInWallet(id: string) {
    if (typeof window === 'undefined') return;
    const url = window.location.href;
    const target = walletDeepLink(id, url);
    window.location.href = target;
  }

  function handleClick() {
    if (mobile || !hasProvider) {
      setPickerOpen((v) => !v);
      return;
    }
    void connectInjected();
  }

  const buttonClass = className ?? 'btn btn-mint';
  const displayLabel = address
    ? `${address.slice(0, 6)}…${address.slice(-4)}`
    : label;
  const buttonTitle = title ?? (address ? `Connected: ${address}` : label);

  return (
    <div className="relative inline-block" ref={wrapperRef}>
      <button
        ref={buttonRef}
        type="button"
        className={buttonClass}
        onClick={handleClick}
        title={buttonTitle}
        aria-haspopup="dialog"
        aria-expanded={pickerOpen}
      >
        {displayLabel}
      </button>
      {address && (
        <button
          type="button"
          className="ml-2 text-xs text-ink-2 underline-offset-2 hover:underline"
          onClick={() => { setAddress(''); setStatus('Disconnected.'); }}
        >
          Disconnect
        </button>
      )}
      {pickerOpen && coords && typeof document !== 'undefined' && createPortal(
        <div
          role="dialog"
          aria-label="Choose a wallet"
          className="card fixed z-[1000] w-[280px] p-3 text-left shadow-xl"
          style={{ top: coords.top, right: coords.right }}
        >
          <div className="px-2 pb-2 text-[11px] uppercase tracking-widest text-ink-2">
            {mobile ? 'Open this site in your wallet' : 'No wallet detected — pick one to continue'}
          </div>
          <ul className="flex flex-col">
            {WALLETS.map((w) => (
              <li key={w.id}>
                <button
                  type="button"
                  className="w-full rounded-lg px-3 py-2 text-left text-sm hover:bg-white/5"
                  onClick={() => openInWallet(w.id)}
                >
                  <span className="block font-medium">{w.name}</span>
                  <span className="block text-xs text-ink-2">
                    {mobile ? 'Open in app' : hasProvider ? 'Use this wallet' : 'Open in wallet / install'}
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="mt-2 w-full rounded-lg px-3 py-2 text-xs text-ink-2 hover:bg-white/5"
            onClick={() => setPickerOpen(false)}
          >
            Cancel
          </button>
        </div>,
        document.body,
      )}
      {status && !pickerOpen && (
        <p className="mt-3 text-sm text-ink-2" role="status">{status}</p>
      )}
    </div>
  );
}
