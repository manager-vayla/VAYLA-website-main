import { VAULTS } from '@/data/vaults';
import DeliverableApp from '../../components/DeliverableApp';
import type { Metadata } from 'next';
import { ROUTE_SEO, SITE_URL, OG_IMAGE } from '@/lib/seo';

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

const LEGAL_ROUTES = ['terms', 'privacy', 'cookies', 'risk', 'disclaimer', 'refunds'];

export function generateStaticParams() {
  return [
    ...STATIC_ROUTES.map((slug) => ({ slug })),
    ...VAULTS.map((vault) => ({ slug: ['vault', vault.slug] })),
    ...LEGAL_ROUTES.map((slug) => ({ slug: ['legal', slug] })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const resolved = await params;
  const path = '/' + (resolved.slug || []).join('/');
  const seo = ROUTE_SEO[path] || {
    title: 'VAYLA — Official platform information',
    description: 'Official VAYLA platform information and public source links.',
    index: false,
  };
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: path || '/' },
    robots: seo.index === false ? { index: false, follow: true } : undefined,
    openGraph: {
      type: 'website',
      url: SITE_URL + (path || '/'),
      title: seo.title,
      description: seo.description,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'VAYLA Arena official platform information' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [OG_IMAGE],
    },
  };
}

export default function Page() {
  return <DeliverableApp />;
}
