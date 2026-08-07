import { Router } from 'express';

export const vaultsRouter = Router();

/**
 * The previous route exposed illustrative creator, TVL, APY and revenue data.
 * Keep the endpoint explicit until a verified Arena catalogue is available.
 */
vaultsRouter.get('/', (_req, res) => {
  res.json([]);
});

vaultsRouter.get('/:slug', (_req, res) => {
  res.status(404).json({ error: 'verified_catalogue_unavailable' });
});
