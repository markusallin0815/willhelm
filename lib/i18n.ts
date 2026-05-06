export type Lang = 'de' | 'en';

export const translations = {
  de: {
    hero: {
      composer: 'Der Komponist.',
      figure: 'Die Figur.',
      edition: 'Playmobil-Sonderedition · Halle (Saale)',
      detail_title: 'Barocke\nDetailtreue.',
      detail_desc: 'Dreispitz, Perücke, Gehrock.\nFederkiel, Partitur und Podest —\nalles originalgetreu nachgebildet.',
      cta_title: 'Exklusiv.\nNur 6,99 €.',
      cta_desc: 'Im Händel-Haus, Tourist-Information\nund bei Händlern in der Innenstadt.\nOnline auf hallesaale.shop.',
      buy_btn: 'Jetzt kaufen →',
      scroll: 'Scroll',
    },
    stats: {
      badge: 'Sonderedition',
      headline: 'Jetzt erhältlich.',
      desc: 'Die Playmobil-Sonderedition Händel — exklusiv entwickelt für das Händel-Haus Halle (Saale). Solange der Vorrat reicht.',
      price_label: 'Preis',
      price: 'Nur 6,99 €',
      online_label: 'Online',
    },
    features: {
      badge: 'Ausstattung',
      headline: 'Jedes Detail\nträgt Geschichte.',
      items: [
        {
          tag: 'Die Figur',
          title: 'Georg Friedrich Händel',
          desc: 'Vor dem Händel-Haus in Halle (Saale) — dem Geburtshaus des großen Komponisten. Die Playmobil-Figur in barockem Kostüm: Dreispitz, Perücke, Gehrock mit Goldverzierungen.',
        },
        {
          tag: 'Zubehör',
          title: 'Federkiel & Podest',
          desc: 'Mit großem Federkiel, signierter Partitur-Urkunde und weißem Marmor-Podest mit eingravierten goldenen Lettern — HAENDEL. Jedes Detail originalgetreu nachgebildet.',
        },
        {
          tag: 'Verpackung',
          title: 'Sonderedition Händel-Haus',
          desc: 'Exklusiv gestaltet in Kooperation mit dem Händel-Haus Halle (Saale). Die Verpackung zeigt das historische Geburtshaus des Komponisten — ein Sammlerstück für sich.',
        },
      ],
    },
    cta: {
      badge: 'Erhältlich ab sofort',
      headline: 'Playmobil Händel\nfür nur 6,99 €.',
      desc: 'Sichere dir die exklusive Sonderedition — solange der Vorrat reicht. Das perfekte Mitbringsel aus Halle (Saale).',
      btn: 'Auf hallesaale.shop kaufen →',
      where: 'Wo erhältlich',
      locations: [
        { label: 'Händel-Haus Halle (Saale)', href: 'https://www.haendel-haus.de' },
        { label: 'Tourist-Information Halle (Saale)', href: 'https://www.halle-tourismus.de' },
        { label: 'hallesaale.shop', href: 'https://www.hallesaale.shop?utm_source=haendel-lp&utm_medium=referral&utm_campaign=playmobil-haendel' },
        { label: 'Ausgewählte Geschäfte in der Innenstadt von Halle (Saale)', href: null },
      ],
    },
    footer: {
      tagline: 'Sonderedition · Stadtmarketing Halle (Saale) GmbH',
      rights: '© 2026 Stadtmarketing Halle (Saale) GmbH. Alle Rechte vorbehalten.',
      available: 'Erhältlich im Händel-Haus und auf',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
    },
    cookie: {
      text: 'Diese Website verwendet ausschließlich technisch notwendige Cookies.',
      privacy_link: 'Datenschutzerklärung',
      accept: 'Akzeptieren',
      decline: 'Ablehnen',
    },
    impressum: {
      title: 'Impressum',
      back: '← Zurück',
      sections: [
        {
          heading: 'Angaben gemäß § 5 TMG',
          content: 'Stadtmarketing Halle (Saale) GmbH\nMarktplatz 13\n06108 Halle (Saale)',
        },
        {
          heading: 'Vertreten durch',
          content: 'Geschäftsführung der Stadtmarketing Halle (Saale) GmbH',
        },
        {
          heading: 'Kontakt',
          content: 'Telefon: +49 (0) 345 / 122 99 84\nE-Mail: info@stadtmarketing-halle.de',
          email: 'info@stadtmarketing-halle.de',
        },
        {
          heading: 'Registereintrag',
          content: 'Eintragung im Handelsregister.\nRegistergericht: Amtsgericht Halle (Saale)\nRegisternummer: HRB 16277',
        },
        {
          heading: 'Umsatzsteuer-ID',
          content: 'Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:\nDE [bitte eintragen]',
        },
        {
          heading: 'Verantwortlich für den Inhalt (§ 55 Abs. 2 RStV)',
          content: 'Stadtmarketing Halle (Saale) GmbH\nMarktplatz 13\n06108 Halle (Saale)',
        },
        {
          heading: 'Haftung für Inhalte',
          content: 'Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.',
        },
        {
          heading: 'Haftung für Links',
          content: 'Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.',
        },
      ],
    },
    datenschutz: {
      title: 'Datenschutzerklärung',
      back: '← Zurück',
      sections: [
        {
          heading: '1. Verantwortlicher',
          content: 'Stadtmarketing Halle (Saale) GmbH\nMarktplatz 13, 06108 Halle (Saale)\nE-Mail: info@stadtmarketing-halle.de',
          email: 'info@stadtmarketing-halle.de',
        },
        {
          heading: '2. Datenerfassung auf dieser Website',
          content: 'Server-Logfiles: Der Provider dieser Website erhebt und speichert automatisch Informationen in sogenannten Server-Logfiles, die Ihr Browser automatisch übermittelt. Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.',
        },
        {
          heading: '3. Schriftarten',
          content: 'Diese Website verwendet Schriftarten von Google Fonts. Die Schriftarten werden beim Erstellen der Website lokal eingebunden und beim Abruf dieser Seite nicht von Google-Servern geladen. Es findet daher keine Übertragung von Daten an Google statt.',
        },
        {
          heading: '4. Cookies',
          content: 'Diese Website verwendet ausschließlich technisch notwendige Cookies zur Speicherung Ihrer Cookie-Einstellungen (localStorage). Es werden keine Tracking- oder Analyse-Cookies eingesetzt.',
        },
        {
          heading: '5. Externe Links',
          content: 'Diese Website enthält Links zu externen Websites (hallesaale.shop, haendel-haus.de, halle-tourismus.de). Beim Aufrufen dieser Links gelten die Datenschutzbestimmungen der jeweiligen Betreiber.',
        },
        {
          heading: '6. Ihre Rechte',
          content: 'Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten (Art. 15–22 DSGVO).',
        },
        {
          heading: '7. Beschwerderecht',
          content: 'Sie haben das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren. Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist der Landesbeauftragte für den Datenschutz des Bundeslandes, in dem unser Unternehmen seinen Sitz hat. Für Sachsen-Anhalt: Landesbeauftragte für den Datenschutz Sachsen-Anhalt, Leiterstraße 9, 39104 Magdeburg.',
        },
      ],
    },
  },
  en: {
    hero: {
      composer: 'The Composer.',
      figure: 'The Figure.',
      edition: 'Playmobil Special Edition · Halle (Saale)',
      detail_title: 'Baroque\nAttention to Detail.',
      detail_desc: 'Tricorn hat, wig, frock coat.\nQuill pen, score & pedestal —\nevery detail faithfully recreated.',
      cta_title: 'Exclusive.\nOnly €6.99.',
      cta_desc: 'At the Händel-Haus, Tourist Information\nand at retailers in the city centre.\nOnline at hallesaale.shop.',
      buy_btn: 'Buy now →',
      scroll: 'Scroll',
    },
    stats: {
      badge: 'Special Edition',
      headline: 'Available now.',
      desc: 'The Playmobil Händel special edition — exclusively developed for the Händel-Haus Halle (Saale). While stocks last.',
      price_label: 'Price',
      price: 'Only €6.99',
      online_label: 'Online',
    },
    features: {
      badge: 'Details',
      headline: 'Every detail\ncarries history.',
      items: [
        {
          tag: 'The Figure',
          title: 'Georg Friedrich Handel',
          desc: 'In front of the Händel-Haus in Halle (Saale) — the birthplace of the great composer. The Playmobil figure in baroque costume: tricorn hat, wig, frock coat with gold embroidery.',
        },
        {
          tag: 'Accessories',
          title: 'Quill Pen & Pedestal',
          desc: 'Complete with a large quill pen, signed score certificate and white marble pedestal engraved with golden letters — HAENDEL. Every detail faithfully recreated.',
        },
        {
          tag: 'Packaging',
          title: 'Händel-Haus Special Edition',
          desc: "Exclusively designed in cooperation with the Händel-Haus Halle (Saale). The packaging features the historic birthplace of the composer — a collector's piece in itself.",
        },
      ],
    },
    cta: {
      badge: 'Available now',
      headline: 'Playmobil Händel\nfor only €6.99.',
      desc: 'Get the exclusive special edition — while stocks last. The perfect souvenir from Halle (Saale).',
      btn: 'Buy on hallesaale.shop →',
      where: 'Where to buy',
      locations: [
        { label: 'Händel-Haus Halle (Saale)', href: 'https://www.haendel-haus.de' },
        { label: 'Tourist Information Halle (Saale)', href: 'https://www.halle-tourismus.de' },
        { label: 'hallesaale.shop', href: 'https://www.hallesaale.shop?utm_source=haendel-lp&utm_medium=referral&utm_campaign=playmobil-haendel' },
        { label: 'Selected shops in Halle (Saale) city centre', href: null },
      ],
    },
    footer: {
      tagline: 'Special Edition · Stadtmarketing Halle (Saale) GmbH',
      rights: '© 2026 Stadtmarketing Halle (Saale) GmbH. All rights reserved.',
      available: 'Available at the Händel-Haus and on',
      imprint: 'Legal Notice',
      privacy: 'Privacy Policy',
    },
    cookie: {
      text: 'This website uses only technically necessary cookies.',
      privacy_link: 'Privacy Policy',
      accept: 'Accept',
      decline: 'Decline',
    },
    impressum: {
      title: 'Legal Notice',
      back: '← Back',
      sections: [
        {
          heading: 'Information according to § 5 TMG (German Telemedia Act)',
          content: 'Stadtmarketing Halle (Saale) GmbH\nMarktplatz 13\n06108 Halle (Saale), Germany',
        },
        {
          heading: 'Represented by',
          content: 'Managing Director of Stadtmarketing Halle (Saale) GmbH',
        },
        {
          heading: 'Contact',
          content: 'Phone: +49 (0) 345 / 122 99 84\nEmail: info@stadtmarketing-halle.de',
          email: 'info@stadtmarketing-halle.de',
        },
        {
          heading: 'Register entry',
          content: 'Entry in the commercial register.\nRegister court: Amtsgericht Halle (Saale)\nRegister number: HRB 16277',
        },
        {
          heading: 'VAT ID',
          content: 'VAT identification number according to § 27a UStG:\nDE [please add]',
        },
        {
          heading: 'Responsible for content (§ 55 para. 2 RStV)',
          content: 'Stadtmarketing Halle (Saale) GmbH\nMarktplatz 13\n06108 Halle (Saale), Germany',
        },
        {
          heading: 'Liability for content',
          content: 'As a service provider, we are responsible for our own content on these pages in accordance with § 7 para. 1 TMG and general law. According to §§ 8 to 10 TMG, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.',
        },
        {
          heading: 'Liability for links',
          content: 'Our offer contains links to external third-party websites over whose content we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the linked pages is always responsible for their content.',
        },
      ],
    },
    datenschutz: {
      title: 'Privacy Policy',
      back: '← Back',
      sections: [
        {
          heading: '1. Controller',
          content: 'Stadtmarketing Halle (Saale) GmbH\nMarktplatz 13, 06108 Halle (Saale), Germany\nEmail: info@stadtmarketing-halle.de',
          email: 'info@stadtmarketing-halle.de',
        },
        {
          heading: '2. Data collection on this website',
          content: 'Server log files: The provider of this website automatically collects and stores information in server log files that your browser transmits automatically. This data cannot be assigned to specific persons. This data is not merged with other data sources. The legal basis is Art. 6 para. 1 lit. f GDPR (legitimate interest in the secure and error-free operation of the website).',
        },
        {
          heading: '3. Fonts',
          content: 'This website uses fonts from Google Fonts. The fonts are bundled locally when the website is built and are not loaded from Google servers when you visit this page. Therefore, no data is transmitted to Google.',
        },
        {
          heading: '4. Cookies',
          content: 'This website uses only technically necessary cookies to store your cookie settings (localStorage). No tracking or analytics cookies are used.',
        },
        {
          heading: '5. External links',
          content: 'This website contains links to external websites (hallesaale.shop, haendel-haus.de, halle-tourismus.de). When following these links, the privacy policies of the respective operators apply.',
        },
        {
          heading: '6. Your rights',
          content: 'You have the right at any time to free information about your stored personal data, its origin and recipients, and the purpose of the data processing, as well as the right to correction or deletion of this data (Art. 15–22 GDPR).',
        },
        {
          heading: '7. Right to lodge a complaint',
          content: 'You have the right to lodge a complaint with the competent supervisory authority. The competent supervisory authority for data protection matters is the data protection officer of the federal state in which our company is headquartered. For Saxony-Anhalt: Landesbeauftragte für den Datenschutz Sachsen-Anhalt, Leiterstraße 9, 39104 Magdeburg, Germany.',
        },
      ],
    },
  },
};

export type Translations = typeof translations.de;
