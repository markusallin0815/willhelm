import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum – Playmobil Händel',
  robots: { index: false },
};

export default function Impressum() {
  return (
    <main style={{ background: '#0F0704', minHeight: '100vh' }} className="px-6 py-16 md:px-16">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-accent-gold text-sm hover:underline mb-10 inline-block">← Zurück</Link>

        <h1 className="text-bg-white font-black text-4xl mb-10">Impressum</h1>

        <section className="mb-8">
          <h2 className="text-accent-gold font-semibold text-sm uppercase tracking-widest mb-3">Angaben gemäß § 5 TMG</h2>
          <p className="text-silver leading-relaxed">
            Stadtmarketing Halle (Saale) GmbH<br />
            Marktplatz 13<br />
            06108 Halle (Saale)
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-accent-gold font-semibold text-sm uppercase tracking-widest mb-3">Vertreten durch</h2>
          <p className="text-silver leading-relaxed">Geschäftsführung der Stadtmarketing Halle (Saale) GmbH</p>
        </section>

        <section className="mb-8">
          <h2 className="text-accent-gold font-semibold text-sm uppercase tracking-widest mb-3">Kontakt</h2>
          <p className="text-silver leading-relaxed">
            Telefon: +49 (0) 345 / 122 99 84<br />
            E-Mail: <a href="mailto:info@stadtmarketing-halle.de" className="hover:underline">info@stadtmarketing-halle.de</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-accent-gold font-semibold text-sm uppercase tracking-widest mb-3">Registereintrag</h2>
          <p className="text-silver leading-relaxed">
            Eintragung im Handelsregister.<br />
            Registergericht: Amtsgericht Halle (Saale)<br />
            Registernummer: HRB 16277
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-accent-gold font-semibold text-sm uppercase tracking-widest mb-3">Umsatzsteuer-ID</h2>
          <p className="text-silver leading-relaxed">
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
            DE [bitte eintragen]
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-accent-gold font-semibold text-sm uppercase tracking-widest mb-3">Verantwortlich für den Inhalt (§ 55 Abs. 2 RStV)</h2>
          <p className="text-silver leading-relaxed">
            Stadtmarketing Halle (Saale) GmbH<br />
            Marktplatz 13<br />
            06108 Halle (Saale)
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-accent-gold font-semibold text-sm uppercase tracking-widest mb-3">Haftung für Inhalte</h2>
          <p className="text-silver leading-relaxed text-sm">
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </section>

        <section>
          <h2 className="text-accent-gold font-semibold text-sm uppercase tracking-widest mb-3">Haftung für Links</h2>
          <p className="text-silver leading-relaxed text-sm">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
          </p>
        </section>
      </div>
    </main>
  );
}
