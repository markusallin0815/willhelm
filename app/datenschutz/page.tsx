import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Datenschutz – Playmobil Händel',
  robots: { index: false },
};

export default function Datenschutz() {
  return (
    <main style={{ background: '#0F0704', minHeight: '100vh' }} className="px-6 py-16 md:px-16">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-accent-gold text-sm hover:underline mb-10 inline-block">← Zurück</Link>

        <h1 className="text-bg-white font-black text-4xl mb-10">Datenschutzerklärung</h1>

        <section className="mb-8">
          <h2 className="text-accent-gold font-semibold text-sm uppercase tracking-widest mb-3">1. Verantwortlicher</h2>
          <p className="text-silver leading-relaxed text-sm">
            Stadtmarketing Halle (Saale) GmbH<br />
            Marktplatz 13, 06108 Halle (Saale)<br />
            E-Mail: <a href="mailto:info@stadtmarketing-halle.de" className="hover:underline">info@stadtmarketing-halle.de</a>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-accent-gold font-semibold text-sm uppercase tracking-widest mb-3">2. Datenerfassung auf dieser Website</h2>
          <p className="text-silver leading-relaxed text-sm mb-4">
            <strong className="text-bg-white">Server-Logfiles:</strong> Der Provider dieser Website erhebt und speichert automatisch Informationen in sogenannten Server-Logfiles, die Ihr Browser automatisch übermittelt. Dies sind: Browsertyp und -version, verwendetes Betriebssystem, Referrer-URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
          </p>
          <p className="text-silver leading-relaxed text-sm">
            Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren und fehlerfreien Betrieb der Website).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-accent-gold font-semibold text-sm uppercase tracking-widest mb-3">3. Schriftarten</h2>
          <p className="text-silver leading-relaxed text-sm">
            Diese Website verwendet Schriftarten von Google Fonts. Die Schriftarten werden beim Erstellen der Website lokal eingebunden und beim Abruf dieser Seite nicht von Google-Servern geladen. Es findet daher keine Übertragung von Daten an Google statt.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-accent-gold font-semibold text-sm uppercase tracking-widest mb-3">4. Cookies</h2>
          <p className="text-silver leading-relaxed text-sm">
            Diese Website verwendet ausschließlich technisch notwendige Cookies zur Speicherung Ihrer Cookie-Einstellungen (localStorage). Es werden keine Tracking- oder Analyse-Cookies eingesetzt. Eine Einwilligung ist für diese Cookies nicht erforderlich (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-accent-gold font-semibold text-sm uppercase tracking-widest mb-3">5. Externe Links</h2>
          <p className="text-silver leading-relaxed text-sm">
            Diese Website enthält Links zu externen Websites (hallesaale.shop, haendel-haus.de, halle-tourismus.de). Beim Aufrufen dieser Links gelten die Datenschutzbestimmungen der jeweiligen Betreiber. Beim Klick auf Links zu hallesaale.shop werden UTM-Parameter zur Auswertung der Kampagnenherkunft übermittelt; dabei werden keine personenbezogenen Daten von uns erhoben.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-accent-gold font-semibold text-sm uppercase tracking-widest mb-3">6. Ihre Rechte</h2>
          <p className="text-silver leading-relaxed text-sm">
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten (Art. 15–22 DSGVO). Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
          </p>
        </section>

        <section>
          <h2 className="text-accent-gold font-semibold text-sm uppercase tracking-widest mb-3">7. Beschwerderecht</h2>
          <p className="text-silver leading-relaxed text-sm">
            Sie haben das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren. Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist der Landesbeauftragte für den Datenschutz des Bundeslandes, in dem unser Unternehmen seinen Sitz hat. Für Sachsen-Anhalt: Landesbeauftragte für den Datenschutz Sachsen-Anhalt, Leiterstraße 9, 39104 Magdeburg.
          </p>
        </section>
      </div>
    </main>
  );
}
