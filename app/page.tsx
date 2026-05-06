import HeroCanvas from '@/components/HeroCanvas';
import StatsSection from '@/components/StatsSection';
import FeaturesSection from '@/components/FeaturesSection';
import PreOrderCTA from '@/components/PreOrderCTA';
import Footer from '@/components/Footer';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Product',
      name: 'Playmobil Händel – Sonderedition',
      description: 'Exklusive Playmobil-Sonderedition Georg Friedrich Händel. Dreispitz, Perücke, Gehrock mit Goldverzierungen, großer Federkiel, signierte Partitur-Urkunde und weißes Marmor-Podest mit eingravierten goldenen Lettern HAENDEL.',
      image: 'https://www.haendel-playmobil.de/haendel-haus.jpg',
      brand: { '@type': 'Brand', name: 'Playmobil' },
      offers: {
        '@type': 'Offer',
        price: '6.99',
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        seller: { '@type': 'Organization', name: 'Stadtmarketing Halle (Saale) GmbH' },
        url: 'https://www.hallesaale.shop',
      },
    },
    {
      '@type': 'LocalBusiness',
      name: 'Händel-Haus Halle (Saale)',
      description: 'Geburtshaus Georg Friedrich Händels — Museo und Verkaufsstelle der Playmobil-Sonderedition.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Große Nikolaistraße 5',
        addressLocality: 'Halle (Saale)',
        postalCode: '06108',
        addressCountry: 'DE',
      },
      url: 'https://www.haendel-haus.de',
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-text-dark">
        <HeroCanvas />
        <StatsSection />
        <FeaturesSection />
        <PreOrderCTA />
        <Footer />
      </main>
    </>
  );
}
