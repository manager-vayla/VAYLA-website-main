import clsx from 'clsx';

export function Stat({
  label, value, delta, accent = 'mint', size = 'md',
}: {
  label: string; value: React.ReactNode; delta?: React.ReactNode;
  accent?: 'mint' | 'neutral'; size?: 'sm' | 'md' | 'lg';
}) {
  return (
    <div className="card glass-hover px-5 py-4 flex flex-col gap-1">
      <div className="text-[11px] uppercase tracking-widest text-ink-3">{label}</div>
      <div className={clsx(
        'display tabular',
        size === 'sm' && 'text-xl',
        size === 'md' && 'text-2xl',
        size === 'lg' && 'text-3xl',
        'text-ink-0',
      )}>
        {value}
      </div>
      {delta != null && (
        <div className={clsx('text-xs tabular', accent === 'mint' ? 'text-mint-400' : 'text-ink-3')}>
          {delta}
        </div>
      )}
    </div>
  );
}
