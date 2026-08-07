import type { Metadata } from 'next';
import Script from 'next/script';
import Providers from '../components/providers/Providers';
import { jsonLdGraph, OG_IMAGE, SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from '../lib/seo';
import '../../vayla-deliverable/vayla-react/src/styles/globals.css';
import '../../vayla-deliverable/vayla-react/src/styles/original.css';
import '../../vayla-deliverable/vayla-react/src/styles/react-fixes.css';
import '../../vayla-deliverable/vayla-react/src/styles/nav-menu.css';
import '../../vayla-deliverable/vayla-react/src/styles/production-audit.css';
import '../../vayla-deliverable/vayla-react/src/styles/token-page.css';
import '../../vayla-deliverable/vayla-react/src/styles/whitepaper.css';
import '../../vayla-deliverable/vayla-react/src/styles/calculator.css';
import '../../vayla-deliverable/vayla-react/src/components/sections/vaults-arena.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    'VAYLA',
    'VAYLA token',
    '$VAYLA',
    'VAYLA Boost',
    'Web3 music',
    'music fandom',
    'On-chain V Chart',
    'Create & Earn',
    'on-chain participation',
    'music IP',
    'BNB Smart Chain',
  ],
  authors: [{ name: 'VAYLA' }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'VAYLA',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: 'en_US',
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: 'VAYLA — Web3 music fandom platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vaylamanager',
    creator: '@vaylamanager',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  other: {
    'telegram:channel': '@Vayla_Vaylian',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="theme-color" content="#050706" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#0E1A16" media="(prefers-color-scheme: light)" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Instrument+Serif:ital@0;1&family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />

        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-ER53NBTHGD" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ER53NBTHGD');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vy05n9qryk");
          `}
        </Script>
      </head>
      <body suppressHydrationWarning>
        <Script
          src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
          strategy="afterInteractive"
        />
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
