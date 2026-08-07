import { Router } from 'express';

export const pricesRouter = Router();

/**
 * Market data must come from an authenticated, timestamped provider adapter.
 * Until that adapter is configured, return explicit nulls instead of mocked
 * prices. Consumers should render these values as unavailable.
 */
pricesRouter.get('/', (_req, res) => {
  res.json({
    vayla: null,
    eth: null,
    btc: null,
    ts: Date.now(),
    status: 'unavailable',
  });
});
