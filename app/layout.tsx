import type { Metadata } from 'next';
import { Nunito_Sans, Cormorant_Garamond, EB_Garamond } from 'next/font/google';
import CookieBanner from '@/components/CookieBanner';
import LangToggle from '@/components/LangToggle';
import { LanguageProvider } from '@/context/LanguageContext';
import './globals.css';

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
  display: 'swap',
  weight: ['300', '400', '600', '700', '800', '900'],
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-eb-garamond',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
});

const BASE_URL = 'https://www.haendel-playmobil.de';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: 'Playmobil Händel – Sonderedition Halle (Saale)',
  description:
    'Die exklusive Playmobil-Sonderedition Georg Friedrich Händel. Nur 6,99 €. Erhältlich im Händel-Haus Halle (Saale), Tourist-Information und auf hallesaale.shop.',
  keywords: ['Playmobil Händel', 'Georg Friedrich Händel', 'Sonderedition', 'Halle Saale', 'Händel-Haus', 'hallesaale.shop', 'Sammelfigur'],
  authors: [{ name: 'Stadtmarketing Halle (Saale) GmbH' }],
  openGraph: {
    type: 'website',
    url: BASE_URL,
    title: 'Playmobil Händel – Sonderedition Halle (Saale)',
    description: 'Die exklusive Playmobil-Sonderedition Georg Friedrich Händel. Nur 6,99 €. Erhältlich im Händel-Haus und auf hallesaale.shop.',
    images: [{ url: '/haendel-haus.jpg', width: 1280, height: 720, alt: 'Playmobil Händel vor dem Händel-Haus Halle (Saale)' }],
    locale: 'de_DE',
    siteName: 'Playmobil Händel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Playmobil Händel – Sonderedition Halle (Saale)',
    description: 'Die exklusive Playmobil-Sonderedition Georg Friedrich Händel. Nur 6,99 €.',
    images: ['/haendel-haus.jpg'],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className={`${nunitoSans.variable} ${cormorant.variable} ${ebGaramond.variable} font-nunito-sans antialiased overflow-x-hidden`}>
        <LanguageProvider>
          <LangToggle />
          {children}
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
