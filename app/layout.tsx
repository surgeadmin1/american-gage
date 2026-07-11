import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyQuote from '@/components/StickyQuote';
import JsonLd from '@/components/JsonLd';
import { localBusinessSchema } from '@/lib/schema';
import { site } from '@/lib/site';

const display = localFont({
  src: './fonts/space-grotesk-latin-wght-normal.woff2',
  variable: '--font-display',
  weight: '300 700',
  display: 'swap',
});

const body = localFont({
  src: './fonts/archivo-latin-wght-normal.woff2',
  variable: '--font-body',
  weight: '100 900',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'American Gage | A2LA ISO 17025 Accredited Calibration Lab — Placentia, CA',
    template: '%s | American Gage',
  },
  description:
    'A2LA ISO/IEC 17025:2017 accredited calibration laboratory in Placentia, California. Serving aerospace, medical device, biotech, and defense manufacturers since 1968. Free SoCal pickup & delivery.',
  openGraph: {
    type: 'website',
    siteName: 'American Gage',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <JsonLd data={localBusinessSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyQuote />
      </body>
    </html>
  );
}
