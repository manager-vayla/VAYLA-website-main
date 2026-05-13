import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Vault } from '@/types';
import { fmtN, fmtPct, fmtUSD } from '@/lib/format';
import { VaultAvatar } from './VaultAvatar';

export function VaultCard({ v, index = 0 }: { v: Vault; index?: number }) {
  const fillPct = (v.fans / v.capacity) * 100;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
    >
      <Link
        to={`/vault/${v.slug}`}
        className="card glass-hover p-5 block group relative overflow-hidden"
      >
        <div
          aria-hidden
          className="absolute -top-12 -right-12 size-44 rounded-full opacity-20 group-hover:opacity-40 transition"
          style={{ background: `radial-gradient(circle, ${v.avatarColor}, transparent 70%)`, filter: 'blur(30px)' }}
        />
        <div className="flex items-start justify-between relative">
          <div className="flex items-center gap-3">
            <VaultAvatar creator={v.creator} color={v.avatarColor} size={44} liveDot />
            <div>
              <div className="font-semibold text-ink-0">{v.creator}</div>
              <div className="text-xs text-ink-3 uppercase tracking-widest">{v.category}</div>
            </div>
          </div>
          <span className="pill !py-1 !px-2.5 text-[10px]">
            <span className="size-1.5 rounded-full bg-mint-400" /> Live
          </span>
        </div>

        <p className="text-sm text-ink-2 mt-4 leading-relaxed">{v.tagline}</p>

        <div className="grid grid-cols-3 gap-3 mt-5">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-ink-3">TVL</div>
            <div className="display tabular text-lg text-ink-0">{fmtUSD(v.tvl)}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-ink-3">APY 90D</div>
            <div className="display tabular text-lg text-mint-400">{fmtPct(v.apy90d)}</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-ink-3">Boost</div>
            <div className="display tabular text-lg text-ink-0">{v.boost.toFixed(2)}×</div>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex justify-between text-[10px] uppercase tracking-widest text-ink-3 mb-1.5">
            <span>{fmtN(v.fans)} fans</span>
            <span>cap {fmtN(v.capacity)}</span>
          </div>
          <div className="h-1.5 rounded-full bg-line-1 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-mint-300 to-mint-600"
              style={{ width: Math.min(100, fillPct) + '%' }}
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
