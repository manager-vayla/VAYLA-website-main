import { useDisconnect } from 'wagmi';
import { ConnectKitButton } from 'connectkit';
import { fmtAddr } from '@/lib/format';

export function ConnectButton({ compact = false }: { compact?: boolean }) {
  const { disconnect } = useDisconnect();

  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, address, ensName, chain }) => (
        <button
          onClick={() => (isConnected ? disconnect() : show?.())}
          className={
            'connect-pill ' + (compact ? 'px-3 py-2 text-xs ' : '') +
            (isConnected ? 'btn btn-ghost is-conn' : 'btn btn-mint')
          }
        >
          {isConnected ? (
            <>
              {/* Idle state, sets the button's natural width */}
              <span className="connect-pill__idle inline-flex items-center gap-2">
                <span className="size-2 rounded-full bg-mint-400 shadow-[0_0_10px_rgba(112,243,216,0.8)]" />
                <span className="tabular">{ensName || fmtAddr(address)}</span>
                {chain && <span className="text-ink-3 text-[11px]">· {chain.name}</span>}
              </span>
              {/* Hover state, absolutely overlaid so width doesn't change */}
              <span className="connect-pill__hover inline-flex items-center gap-2">
                <span className="size-2 rounded-full bg-hot shadow-[0_0_10px_rgba(255,107,107,0.8)]" />
                <span>Disconnect</span>
              </span>
            </>
          ) : (
            <>Connect Wallet
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              </svg>
            </>
          )}
        </button>
      )}
    </ConnectKitButton.Custom>
  );
}
