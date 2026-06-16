import { Router } from 'express';
import { VAULTS, findVault } from '../data';

export const vaultsRouter = Router();

vaultsRouter.get('/', (_req, res) => res.json(VAULTS));
vaultsRouter.get('/:slug', (req, res) => {
  const v = findVault(req.params.slug);
  if (!v) return res.status(404).json({ error: 'not_found' });
  res.json(v);
});
