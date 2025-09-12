import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '@/styles/globals.css';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Providers } from './providers';
import Script from 'next/script';
import { ScrollToTop } from '@/components/ui/scroll-to-top';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  metadataBase: new URL('https://luxemotion.example'),
  title: {
    default: 'LuxeMotion — Luxury Performance Sportswear',
    template: '%s — LuxeMotion',
  },
  description:
    'LuxeMotion blends high fashion aesthetics with elite performance. Explore premium activewear for men and women: apparel, footwear, and accessories.',
  keywords: [
    'luxury sportswear',
    'activewear',
    'premium clothing',
    'fitness apparel',
    'men',
    'women',
  ],
  openGraph: {
    title: 'LuxeMotion — Luxury Performance Sportswear',
    description:
      'LuxeMotion blends high fashion aesthetics with elite performance. Explore premium activewear for men and women: apparel, footwear, and accessories.',
    type: 'website',
    url: 'https://luxemotion.example',
    siteName: 'LuxeMotion',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'LuxeMotion — Luxury Performance Sportswear',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LuxeMotion — Luxury Performance Sportswear',
    description:
      'LuxeMotion blends high fashion aesthetics with elite performance. Explore premium activewear for men and women: apparel, footwear, and accessories.',
    images: ['/opengraph-image'],
    creator: '@luxemotion',
    site: '@luxemotion',
  },
  alternates: {
    canonical: '/',
  },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/favicon.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#0b0d0f',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-slate-800 focus:px-4 focus:py-2 focus:text-sm"
        >
          Saltar al contenido
        </a>
        <Providers>
          <Navbar />
          <main id="main-content" className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </Providers>
        <Script id="ld-org" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'LuxeMotion',
            url: 'https://luxemotion.example',
            logo: '/favicon.svg',
          })}
        </Script>
        <Script id="ld-website" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'LuxeMotion',
            url: 'https://luxemotion.example',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://luxemotion.example/shop?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          })}
        </Script>
      </body>
    </html>
  );
}
