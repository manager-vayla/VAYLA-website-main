import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import Providers from '@/components/providers/Providers';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VAYLA Protocol',
  description: 'The Protocol for Borderless Fandom',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="bg-black min-h-screen text-white font-sans selection:bg-teal-500/30 selection:text-teal-200">
        <Script
          src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"
          strategy="afterInteractive"
        />
        <Providers>
          {children}
        </Providers>
        <div className="bg-noise" />
      </body>
    </html>
  );
}

