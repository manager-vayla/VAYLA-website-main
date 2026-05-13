import { useEffect, useState } from 'react';
import { useAccount, useDisconnect } from 'wagmi';
import { ConnectKitButton } from 'connectkit';
import { useApp } from '@/store/useApp';
import { useVaultsData } from '@/hooks/useVaultsData';
import { fmtAddr, fmtN, fmtUSD } from '@/lib/format';
import { Link } from 'react-router-dom';
import { VaultAvatar } from '@/components/VaultAvatar';

export function LiveDashInline() {
  // Address-based connectedness, same as Dashboard / Creators / VaultDetail.
  const { address, chain } = useAccount();
  const isConnected = !!address;
  const { disconnect } = useDisconnect();
  const { positions, vaylaBalance } = useApp();
  const { data: vaults = [] } = useVaultsData();

  const totalPos = positions.reduce((s, p) => s + p.staked * 0.41, 0);
  const totalApy = positions.length
    ? positions.reduce((s, p) => {
        const v = vaults.find(x => x.id === p.vaultId);
        return s + (v?.apy || 0) * p.staked;
      }, 0) / positions.reduce((s, p) => s + p.staked, 0)
    : 0;
  const ratePerSec = (totalPos * (totalApy / 100)) / (365 * 24 * 60 * 60);

  const [earned, setEarned] = useState(0);
  useEffect(() => {
    if (!isConnected) return;
    setEarned(0);
    const t = setInterval(() => setEarned(e => e + ratePerSec), 1000);
    return () => clearInterval(t);
  }, [isConnected, ratePerSec]);

  return (
    <section className="section" id="dashboard">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="section-eyebrow"><span className="num">02</span> Live Dashboard</span>
          <h2 className="section-title">Your Vault. <em>Live.</em></h2>
          <p className="section-deck">
            Connect a wallet to open the live dashboard. Track positions, earnings and protocol flow in real time. State persists across sessions.
          </p>
        </div>

        <div className="dash reveal">
          {!isConnected ? (
            <div className="dash-locked">
              <div className="lock-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#70F3D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3>Connect a wallet to <em>unlock the dashboard.</em></h3>
              <p>VAYLA reads your on-chain history to surface the Vaults that match your taste. No KYC. No email. Read-only by default.</p>
              <ConnectKitButton.Custom>
                {({ show }) => (
                  <button className="btn btn-mint" onClick={show}>
                    Connect Wallet
                    <svg className="arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </button>
                )}
              </ConnectKitButton.Custom>
            </div>
          ) : (
            <div className="dash-live">
              <div className="dash-head">
                <div className="dash-id">
                  <span className="pfp" data-init={(address || '?').slice(2, 3).toUpperCase()} />
                  <div className="info">
                    <strong>{fmtAddr(address)}</strong>
                    <span>{chain?.name || 'BNB Smart Chain'}</span>
                  </div>
                </div>
                <button className="dash-disconnect" onClick={() => disconnect()}>Disconnect</button>
              </div>

              <div className="dash-stats">
                <div className="dash-stat">
                  <div className="lbl">Wallet</div>
                  <div className="val tabular">{fmtN(vaylaBalance)} <em>VAYLA</em></div>
                  <div className="delta">$VAYLA <span>{(vaylaBalance * 0.41).toFixed(2)}</span></div>
                  <svg className="spark" viewBox="0 0 100 36" preserveAspectRatio="none">
                    <polyline points="0,28 10,24 20,26 30,18 40,22 50,14 60,18 70,10 80,14 90,8 100,12" fill="none" stroke="#70F3D8" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="dash-stat">
                  <div className="lbl">Total Position</div>
                  <div className="val tabular">{fmtUSD(totalPos)}</div>
                  <div className="delta">{positions.length} {positions.length === 1 ? 'vault' : 'vaults'}</div>
                  <svg className="spark" viewBox="0 0 100 36" preserveAspectRatio="none">
                    <polyline points="0,30 10,28 20,24 30,22 40,18 50,16 60,12 70,14 80,8 90,10 100,4" fill="none" stroke="#9B7BFF" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="dash-stat">
                  <div className="lbl">Earned (Live)</div>
                  <div className="val tabular">${earned.toFixed(4)}</div>
                  <div className="delta">+<span>{ratePerSec.toFixed(6)}</span>/sec</div>
                  <svg className="spark" viewBox="0 0 100 36" preserveAspectRatio="none">
                    <polyline points="0,32 12,28 24,30 36,22 48,24 60,16 72,18 84,10 100,8" fill="none" stroke="#F2C661" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="dash-stat">
                  <div className="lbl">APY (Avg)</div>
                  <div className="val tabular">{totalApy.toFixed(1)}<em>%</em></div>
                  <div className="delta">across positions</div>
                  <svg className="spark" viewBox="0 0 100 36" preserveAspectRatio="none">
                    <polyline points="0,18 10,20 20,16 30,18 40,12 50,14 60,10 70,12 80,6 100,8" fill="none" stroke="#B7E5FF" strokeWidth="1.5" />
                  </svg>
                </div>
              </div>

              <div className="dash-body">
                <div>
                  <h4 style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: 14 }}>Your Vault Positions</h4>
                  <div className="dash-vaults">
                    {positions.length === 0 ? (
                      <div style={{ padding: '32px', textAlign: 'center', opacity: 0.6 }}>
                        No positions yet. <Link to="/vaults" style={{ color: '#70F3D8' }}>Browse vaults →</Link>
                      </div>
                    ) : positions.map(p => {
                      const v = vaults.find(x => x.id === p.vaultId);
                      if (!v) return null;
                      return (
                        <Link key={p.vaultId} to={`/vault/${v.slug}`} style={{ display: 'flex', gap: 12, padding: '14px 16px', borderRadius: 12, border: '1px solid var(--line)', textDecoration: 'none', color: 'inherit', alignItems: 'center', marginBottom: 8 }}>
                          <VaultAvatar creator={v.creator} color={v.avatarColor} size={40} />
                          <div style={{ flex: 1 }}>
                            <strong>{v.creator}</strong>
                            <div style={{ fontSize: 12, opacity: 0.6 }}>{fmtN(p.staked)} VAYLA · {v.apy.toFixed(1)}% APY</div>
                          </div>
                          <span style={{ color: '#70F3D8', fontVariantNumeric: 'tabular-nums' }}>{fmtUSD(p.staked * 0.41)}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="dash-side">
                  <h4>Protocol Activity</h4>
                  <div className="dash-feed">
                    {[
                      { who: '0x9b3a…fa12', what: 'opened a position in', vault: 'NOOR', amt: '+$2,400' },
                      { who: '0xfe28…aa70', what: 'earned', vault: 'KOVA', amt: '+$18.40' },
                      { who: '0x0042…b1cc', what: 'compounded', vault: 'LUMEN', amt: '+0.8%' },
                      { who: '0x4af1…2200', what: 'opened a position in', vault: 'RIN ASUKA', amt: '+$890' },
                      { who: '0x88ee…ce10', what: 'exited', vault: 'VEX FC', amt: '−$1,200' },
                    ].map((e, i) => (
                      <div key={i} style={{ padding: '8px 0', borderBottom: '1px solid var(--line-1)', fontSize: 12, lineHeight: 1.6 }}>
                        <span style={{ fontFamily: 'var(--mono)', opacity: 0.6 }}>{e.who}</span> {e.what} <strong>{e.vault}</strong>
                        <div style={{ fontSize: 11, color: e.amt.startsWith('−') ? '#FF6B6B' : '#70F3D8' }}>{e.amt}</div>
                      </div>
                    ))}
                  </div>
                  <Link to="/vaults" className="dash-cta">
                    Open a New Vault
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
