import type { Metadata } from 'next';
import Script from 'next/script';
import { Plus_Jakarta_Sans, Inter, Space_Grotesk } from 'next/font/google';
import Providers from '@/components/providers/Providers';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import DynamicBackground from '@/components/atoms/DynamicBackground';
import '@/styles/globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vayla Technology INC',
  description: 'The Protocol for Borderless Fandom',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
        
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
      <body
        className="bg-midnight min-h-screen text-white font-sans selection:bg-primary selection:text-midnight"
        suppressHydrationWarning
      >
        <DynamicBackground />
        <Script
          src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
          strategy="afterInteractive"
        />
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
        <div className="bg-noise" />
      </body>
    </html>
  );
}

