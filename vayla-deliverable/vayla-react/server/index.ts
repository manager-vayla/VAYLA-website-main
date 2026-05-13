import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { vaultsRouter } from './routes/vaults';
import { aiRouter } from './routes/ai';
import { pricesRouter } from './routes/prices';

const app = express();
app.use(cors());
app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (_req, res) => res.json({ ok: true, ts: Date.now() }));
app.use('/api/vaults', vaultsRouter);
app.use('/api/prices', pricesRouter);
app.use('/api/ai', aiRouter);

const PORT = Number(process.env.PORT || 8787);
app.listen(PORT, () => {
  console.log(`[vayla-api] listening on http://localhost:${PORT}`);
  if (!process.env.ANTHROPIC_API_KEY) {
    console.warn('[vayla-api] ANTHROPIC_API_KEY not set — AI routes will return graceful errors.');
  }
});
