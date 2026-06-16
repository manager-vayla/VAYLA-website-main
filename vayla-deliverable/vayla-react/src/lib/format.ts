export function fmtUSD(n: number, dp = 0) {
  if (Math.abs(n) >= 1e9) return '$' + (n / 1e9).toFixed(2) + 'B';
  if (Math.abs(n) >= 1e6) return '$' + (n / 1e6).toFixed(2) + 'M';
  if (Math.abs(n) >= 1e3) return '$' + (n / 1e3).toFixed(1) + 'K';
  return '$' + n.toLocaleString(undefined, { maximumFractionDigits: dp });
}
export function fmtN(n: number, dp = 0) {
  if (Math.abs(n) >= 1e6) return (n / 1e6).toFixed(2) + 'M';
  if (Math.abs(n) >= 1e3) return (n / 1e3).toFixed(1) + 'K';
  return n.toLocaleString(undefined, { maximumFractionDigits: dp });
}
export function fmtPct(n: number, dp = 1) { return n.toFixed(dp) + '%'; }
export function fmtAddr(a?: string) {
  if (!a) return '';
  return a.slice(0, 6) + '…' + a.slice(-4);
}
export function timeAgo(unix: number) {
  const s = Math.floor(Date.now() / 1000) - unix;
  if (s < 60) return s + 's';
  if (s < 3600) return Math.floor(s / 60) + 'm';
  if (s < 86400) return Math.floor(s / 3600) + 'h';
  return Math.floor(s / 86400) + 'd';
}
