import { VAULTS } from '@/data/vaults';
import DeliverableApp from '../../components/DeliverableApp';

export const dynamicParams = false;

const STATIC_ROUTES = [
  [],
  ['vaults'],
  ['arena'],
  ['dashboard'],
  ['ai'],
  ['marketplace'],
  ['chart'],
  ['whitepaper'],
  ['doc'],
  ['creator'],
  ['onboarding'],
  ['start'],
  ['legal'],
  ['token'],
  ['tokenutility'],
  ['calculator'],
  ['brutal-math'],
];

const LEGAL_ROUTES = ['terms', 'privacy', 'cookies', 'risk', 'disclaimer'];

export function generateStaticParams() {
  return [
    ...STATIC_ROUTES.map((slug) => ({ slug })),
    ...VAULTS.map((vault) => ({ slug: ['vault', vault.slug] })),
    ...LEGAL_ROUTES.map((slug) => ({ slug: ['legal', slug] })),
  ];
}

export default function Page() {
  return <DeliverableApp />;
}
