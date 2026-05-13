import { useEffect, useRef, useState } from 'react';
import { api } from '@/lib/api';
import type { ChatMessage } from '@/types';
import { motion, AnimatePresence } from 'framer-motion';

export function AIChat({
  vaultId, title = 'Vault Analyst', placeholder = 'Ask about revenue, risk, fan tiers…',
  starter,
}: {
  vaultId?: string;
  title?: string;
  placeholder?: string;
  starter?: string[];
}) {
  const [msgs, setMsgs] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => { scrollRef.current?.scrollTo({ top: 1e9, behavior: 'smooth' }); }, [msgs, streaming]);

  async function send(text: string) {
    if (!text.trim() || streaming) return;
    const userMsg: ChatMessage = { role: 'user', content: text, ts: Date.now() };
    setMsgs(m => [...m, userMsg, { role: 'assistant', content: '', ts: Date.now() }]);
    setInput('');
    setStreaming(true);

    try {
      const stream = await api.chat({
        vaultId,
        messages: [...msgs, userMsg].map(m => ({ role: m.role as 'user' | 'assistant', content: m.content })),
      });
      const reader = stream.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        // Server emits: data: <text-chunk>\n\n  (SSE-ish)
        const parts = buffer.split('\n\n');
        buffer = parts.pop() || '';
        for (const p of parts) {
          if (!p.startsWith('data: ')) continue;
          const chunk = p.slice(6);
          if (chunk === '[DONE]') continue;
          setMsgs(m => {
            const next = [...m];
            const last = next[next.length - 1];
            if (last.role === 'assistant') last.content += chunk;
            return next;
          });
        }
      }
    } catch (e: any) {
      setMsgs(m => {
        const next = [...m];
        const last = next[next.length - 1];
        if (last.role === 'assistant' && !last.content) {
          last.content = '_AI service unavailable. Add ANTHROPIC_API_KEY in `.env` and restart the API server._';
        }
        return next;
      });
    } finally {
      setStreaming(false);
    }
  }

  return (
    <div className="card flex flex-col h-[560px] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-line-1">
        <div className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-mint-400 animate-pulse" />
          <h3 className="display text-lg">{title}</h3>
        </div>
        <span className="text-[10px] uppercase tracking-widest text-ink-3">Claude · streaming</span>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-5 space-y-4">
        {msgs.length === 0 && (
          <div className="space-y-3">
            <p className="text-ink-2 text-sm">Ask anything. I have live context for this vault: revenue mix, momentum, fan tiers, on-chain history.</p>
            {starter?.length ? (
              <div className="flex flex-wrap gap-2">
                {starter.map(s => (
                  <button key={s} onClick={() => send(s)} className="btn btn-ghost !py-1.5 !px-3 text-xs">{s}</button>
                ))}
              </div>
            ) : null}
          </div>
        )}
        <AnimatePresence initial={false}>
          {msgs.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}
            >
              <div className={
                m.role === 'user'
                  ? 'max-w-[80%] rounded-2xl rounded-tr-sm px-4 py-2.5 bg-mint-400 text-bg-0 font-medium'
                  : 'max-w-[80%] rounded-2xl rounded-tl-sm px-4 py-2.5 glass text-ink-1'
              }>
                <div className="whitespace-pre-wrap leading-relaxed text-sm">{m.content || (streaming && i === msgs.length - 1 ? '…' : '')}</div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <form
        onSubmit={e => { e.preventDefault(); send(input); }}
        className="flex gap-2 p-3 border-t border-line-1"
      >
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder={placeholder}
          disabled={streaming}
          className="flex-1 px-4 py-2.5 rounded-full bg-bg-1 border border-line-1 outline-none focus:border-mint-400/50 text-sm"
        />
        <button type="submit" disabled={streaming || !input.trim()} className="btn btn-mint !px-5 !py-2.5 text-sm disabled:opacity-40">Send</button>
      </form>
    </div>
  );
}
