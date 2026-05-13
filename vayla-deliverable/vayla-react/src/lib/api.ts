import type { Vault } from '@/types';

const BASE =
  (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_API_BASE) ||
  (typeof import.meta !== 'undefined' && (import.meta as { env?: { VITE_API_BASE?: string } }).env?.VITE_API_BASE) ||
  '/api';

async function j<T>(url: string, init?: RequestInit): Promise<T> {
  const r = await fetch(BASE + url, { headers: { 'Content-Type': 'application/json' }, ...init });
  if (!r.ok) throw new Error(`API ${r.status}: ${url}`);
  return r.json() as Promise<T>;
}

export const api = {
  vaults: () => j<Vault[]>('/vaults'),
  vault: (slug: string) => j<Vault>('/vaults/' + slug),
  prices: () => j<{ vayla: number; eth: number; btc: number; ts: number }>('/prices'),
  recommend: (taste: { genres: string[]; risk: number; horizon: number; address?: string }) =>
    j<{ vaultId: string; reason: string; score: number }[]>('/ai/recommend', {
      method: 'POST', body: JSON.stringify(taste),
    }),
  // streaming chat, returns a ReadableStream of text deltas
  chat: async (params: {
    vaultId?: string;
    messages: { role: 'user' | 'assistant'; content: string }[];
  }) => {
    const r = await fetch(BASE + '/ai/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params),
    });
    if (!r.ok || !r.body) throw new Error('chat failed: ' + r.status);
    return r.body;
  },
  pulse: (vaultIds: string[]) =>
    j<{ vaultId: string; headline: string; bullets: string[]; sentiment: number }[]>('/ai/pulse', {
      method: 'POST', body: JSON.stringify({ vaultIds }),
    }),
};
