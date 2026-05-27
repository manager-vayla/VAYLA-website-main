import { Link } from 'react-router-dom';
import { fmtN, fmtPct, fmtUSD } from '@/lib/format';
import { VaultAvatar } from '@/components/VaultAvatar';
import { useVaultsData } from '@/hooks/useVaultsData';

export function VaultsArena() {
  const { data: vaults = [] } = useVaultsData();

  return (
    <section className="section" id="vaults">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="section-eyebrow"><span className="num">03</span> The Arena</span>
          <h2 className="section-title">Open vaults, <em>open earnings.</em></h2>
          <p className="section-deck">
            VAYLA Arena surfaces artists and campaigns for fan participation. Use $VAYLA in VAYLA Boost flows, voting, and rewards. Yield multipliers may compound for sustained support.
          </p>
        </div>

        <div className="vault-grid reveal">
          {vaults.map(v => (
            <Link key={v.id} to={`/vault/${v.slug}`} className="vault-card" style={{ textDecoration: 'none' }}>
              <div className="vault-head">
                <VaultAvatar creator={v.creator} color={v.avatarColor} size={44} />
                <div className="vault-id">
                  <strong>{v.creator}</strong>
                  <span>{v.handle} · {v.category}</span>
                </div>
                <span className="vault-status"><span className="dot" /> Live</span>
              </div>

              <p className="vault-tagline">{v.tagline}</p>

              <div className="vault-stats">
                <div>
                  <div className="lbl">TVL</div>
                  <div className="val tabular">{fmtUSD(v.tvl)}</div>
                </div>
                <div>
                  <div className="lbl">APY 90D</div>
                  <div className="val tabular" style={{ color: '#70F3D8' }}>{fmtPct(v.apy90d)}</div>
                </div>
                <div>
                  <div className="lbl">Boost</div>
                  <div className="val tabular">{v.boost.toFixed(2)}×</div>
                </div>
              </div>

              <div className="vault-fill">
                <div className="vault-fill-meta">
                  <span>{fmtN(v.fans)} fans</span>
                  <span>cap {fmtN(v.capacity)}</span>
                </div>
                <div className="vault-fill-bar"><div style={{ width: Math.min(100, v.fans / v.capacity * 100) + '%' }} /></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
