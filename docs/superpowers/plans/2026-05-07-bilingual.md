# Bilingual DE/EN Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add client-side DE/EN language toggle to all pages of the Playmobil Händel landing page.

**Architecture:** React Context (`LanguageContext`) holds the active language and translation object `t`. All text moves into `lib/i18n.ts`. A fixed `LangToggle` button sits top-right. Language choice persists in `localStorage`.

**Tech Stack:** Next.js 14 App Router, React Context, localStorage, Framer Motion (existing), no new packages.

---

## File Map

| Action | File | Purpose |
|---|---|---|
| Create | `lib/i18n.ts` | All DE+EN strings |
| Create | `context/LanguageContext.tsx` | Provider + `useLanguage()` hook |
| Create | `components/LangToggle.tsx` | Fixed DE·EN button |
| Modify | `app/layout.tsx` | Wrap body in `LanguageProvider`, add `LangToggle` |
| Modify | `components/HeroCanvas.tsx` | Use `useLanguage()` for all text |
| Modify | `components/StatsSection.tsx` | Add `'use client'`, use `useLanguage()` |
| Modify | `components/FeaturesSection.tsx` | Add `'use client'`, use `useLanguage()` |
| Modify | `components/PreOrderCTA.tsx` | Use `useLanguage()` |
| Modify | `components/Footer.tsx` | Add `'use client'`, use `useLanguage()` |
| Modify | `components/CookieBanner.tsx` | Use `useLanguage()` |
| Modify | `app/impressum/page.tsx` | Use `useLanguage()` for full EN Legal Notice |
| Modify | `app/datenschutz/page.tsx` | Use `useLanguage()` for full EN Privacy Policy |

---

## Task 1: Create `lib/i18n.ts`

**Files:**
- Create: `lib/i18n.ts`

- [ ] **Create the translations file**

```ts
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
          desc: 'Exclusively designed in cooperation with the Händel-Haus Halle (Saale). The packaging features the historic birthplace of the composer — a collector\'s piece in itself.',
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
} as const;

export type Translations = typeof translations.de;
```

- [ ] **Commit**
```bash
git add lib/i18n.ts
git commit -m "feat: add DE/EN translations"
```

---

## Task 2: Create `context/LanguageContext.tsx`

**Files:**
- Create: `context/LanguageContext.tsx`

- [ ] **Create the context file**

```tsx
'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Lang, Translations } from '@/lib/i18n';

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'de',
  setLang: () => {},
  t: translations.de,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('de');

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Lang | null;
    if (stored === 'de' || stored === 'en') setLangState(stored);
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem('lang', l);
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
```

- [ ] **Commit**
```bash
git add context/LanguageContext.tsx
git commit -m "feat: add LanguageContext with localStorage persistence"
```

---

## Task 3: Create `components/LangToggle.tsx`

**Files:**
- Create: `components/LangToggle.tsx`

- [ ] **Create the toggle button**

```tsx
'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function LangToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className="fixed top-4 right-4 z-50 flex items-center gap-1 text-xs font-semibold tracking-widest uppercase select-none"
      style={{ letterSpacing: '0.15em' }}
    >
      <button
        onClick={() => setLang('de')}
        style={{ color: lang === 'de' ? '#C8831A' : 'rgba(192,168,130,0.4)' }}
        className="transition-colors hover:opacity-80"
      >
        DE
      </button>
      <span style={{ color: 'rgba(192,168,130,0.25)' }}>·</span>
      <button
        onClick={() => setLang('en')}
        style={{ color: lang === 'en' ? '#C8831A' : 'rgba(192,168,130,0.4)' }}
        className="transition-colors hover:opacity-80"
      >
        EN
      </button>
    </div>
  );
}
```

- [ ] **Commit**
```bash
git add components/LangToggle.tsx
git commit -m "feat: add LangToggle button fixed top-right"
```

---

## Task 4: Modify `app/layout.tsx`

**Files:**
- Modify: `app/layout.tsx`

- [ ] **Wrap body with LanguageProvider, add LangToggle**

Replace the `RootLayout` function and add imports:

```tsx
import type { Metadata } from 'next';
import { Nunito_Sans, Cormorant_Garamond, EB_Garamond } from 'next/font/google';
import CookieBanner from '@/components/CookieBanner';
import LangToggle from '@/components/LangToggle';
import { LanguageProvider } from '@/context/LanguageContext';
import './globals.css';

// ... (keep all font declarations and metadata unchanged) ...

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
```

- [ ] **Commit**
```bash
git add app/layout.tsx
git commit -m "feat: wrap app in LanguageProvider, add LangToggle"
```

---

## Task 5: Modify `components/HeroCanvas.tsx`

**Files:**
- Modify: `components/HeroCanvas.tsx`

- [ ] **Add useLanguage import and replace all hard-coded strings**

Add import after existing imports:
```tsx
import { useLanguage } from '@/context/LanguageContext';
```

Inside `HeroCanvas()` function, add as first line:
```tsx
const { t } = useLanguage();
```

Replace Text 1 block (currently around line 184):
```tsx
{/* Text 1 — centered: intro */}
<motion.div
  className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
  style={{ opacity: text1Opacity, zIndex: 4 }}
>
  <p
    className="mb-4 font-light text-center"
    style={{
      fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
      color: '#C8831A',
      letterSpacing: '0.08em',
      textShadow,
    }}
  >
    <motion.span
      initial={{ y: -120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 60, damping: 16, delay: 0.2 }}
      style={{ display: 'inline-block' }}
    >
      {t.hero.composer}
    </motion.span>
    {' '}
    <motion.span
      initial={{ x: 160, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 60, damping: 16, delay: 0.8 }}
      style={{ display: 'inline-block' }}
    >
      {t.hero.figure}
    </motion.span>
  </p>
  <h1
    className="font-black text-center leading-none"
    style={{
      fontSize: 'clamp(4rem, 13vw, 11rem)',
      color: '#F0E3CA',
      letterSpacing: '-0.02em',
      textShadow,
    }}
  >
    HÄNDEL
  </h1>
  <p
    className="mt-5 text-xs uppercase text-center"
    style={{ color: '#C8831A', letterSpacing: '0.3em', textShadow, fontSize: 'clamp(0.85rem, 1.8vw, 1.3rem)' }}
  >
    {t.hero.edition}
  </p>
</motion.div>
```

Replace Text 2 block:
```tsx
{/* Text 2 — left: detail */}
<motion.div
  className="absolute inset-0 flex items-center pointer-events-none"
  style={{ opacity: text2Opacity, paddingLeft: '8vw', zIndex: 4 }}
>
  <div>
    <div className="mb-3 h-px" style={{ width: '40px', background: '#C8831A' }} />
    <h2
      className="font-black leading-tight"
      style={{
        fontSize: 'clamp(2rem, 6vw, 5.5rem)',
        color: '#F0E3CA',
        letterSpacing: '-0.02em',
        textShadow,
        whiteSpace: 'pre-line',
      }}
    >
      {t.hero.detail_title}
    </h2>
    <p
      className="mt-4 font-light"
      style={{
        fontSize: 'clamp(0.875rem, 1.5vw, 1.1rem)',
        color: '#C0A882',
        maxWidth: '340px',
        lineHeight: 1.75,
        textShadow,
        whiteSpace: 'pre-line',
      }}
    >
      {t.hero.detail_desc}
    </p>
  </div>
</motion.div>
```

Replace Text 3 block:
```tsx
{/* Text 3 — right: CTA */}
<motion.div
  className="absolute inset-0 flex items-center justify-end"
  style={{ opacity: text3Opacity, paddingRight: '8vw', pointerEvents: 'none', zIndex: 4 }}
>
  <div className="text-right" style={{ pointerEvents: 'auto' }}>
    <div className="mb-3 h-px ml-auto" style={{ width: '40px', background: '#C8831A' }} />
    <h2
      className="font-black leading-tight"
      style={{
        fontSize: 'clamp(2rem, 6vw, 5.5rem)',
        color: '#F0E3CA',
        letterSpacing: '-0.02em',
        textShadow,
        whiteSpace: 'pre-line',
      }}
    >
      {t.hero.cta_title}
    </h2>
    <p
      className="mt-4 font-light"
      style={{
        fontSize: 'clamp(0.875rem, 1.5vw, 1.1rem)',
        color: '#C0A882',
        maxWidth: '340px',
        lineHeight: 1.75,
        marginLeft: 'auto',
        textShadow,
        whiteSpace: 'pre-line',
      }}
    >
      {t.hero.cta_desc}
    </p>
    <motion.a
      href="https://www.hallesaale.shop?utm_source=haendel-lp&utm_medium=referral&utm_campaign=playmobil-haendel"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 mt-6 font-semibold px-8 py-4 rounded-2xl text-base tracking-wide"
      style={{ background: '#C8831A', color: '#0F0704' }}
      whileHover={{ scale: 1.04, backgroundColor: '#DFA030' }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 360, damping: 24 }}
    >
      {t.hero.buy_btn}
    </motion.a>
  </div>
</motion.div>
```

Replace scroll indicator text:
```tsx
<p className="text-xs uppercase" style={{ color: '#7A6045', letterSpacing: '0.3em' }}>
  {t.hero.scroll}
</p>
```

- [ ] **Commit**
```bash
git add components/HeroCanvas.tsx
git commit -m "feat: HeroCanvas uses translations"
```

---

## Task 6: Modify `components/StatsSection.tsx`

**Files:**
- Modify: `components/StatsSection.tsx`

- [ ] **Add `'use client'`, import useLanguage, replace strings**

```tsx
'use client';

import { MapPin, ShoppingBag, CurrencyEur } from '@phosphor-icons/react/dist/ssr';
import { useLanguage } from '@/context/LanguageContext';

export default function StatsSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-text-dark py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">

        <div className="border border-accent-gold/20 rounded-2xl p-8 md:p-12 flex flex-col justify-between min-h-[220px] md:min-h-[280px]">
          <ShoppingBag size={36} color="#C8831A" weight="light" aria-hidden />
          <div>
            <p className="text-text-gray text-xs uppercase tracking-[0.2em] mb-2">{t.stats.badge}</p>
            <h2
              className="text-bg-white font-black tracking-tight leading-none"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              {t.stats.headline}
            </h2>
            <p className="text-text-gray mt-3 leading-relaxed max-w-[40ch]" style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)' }}>
              {t.stats.desc}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="border border-accent-gold/20 rounded-2xl p-6 flex flex-col justify-between flex-1 min-h-[120px]">
            <CurrencyEur size={24} color="#C8831A" weight="light" aria-hidden />
            <div>
              <p className="text-text-gray text-xs uppercase tracking-[0.2em] mb-1">{t.stats.price_label}</p>
              <p className="text-bg-white font-bold text-xl tracking-tight">{t.stats.price}</p>
            </div>
          </div>
          <div className="border border-accent-gold/20 rounded-2xl p-6 flex flex-col justify-between flex-1 min-h-[120px]">
            <MapPin size={24} color="#C8831A" weight="light" aria-hidden />
            <div>
              <p className="text-text-gray text-xs uppercase tracking-[0.2em] mb-1">{t.stats.online_label}</p>
              <a href="https://www.hallesaale.shop" target="_blank" rel="noopener noreferrer" className="text-bg-white font-bold text-xl tracking-tight hover:underline">hallesaale.shop</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
```

- [ ] **Commit**
```bash
git add components/StatsSection.tsx
git commit -m "feat: StatsSection uses translations"
```

---

## Task 7: Modify `components/FeaturesSection.tsx`

**Files:**
- Modify: `components/FeaturesSection.tsx`

- [ ] **Add `'use client'`, import useLanguage, replace strings**

```tsx
'use client';

import FeatureReveal from './FeatureReveal';
import { useLanguage } from '@/context/LanguageContext';

const featureAccents = ['#7A4A10', '#C8831A', '#7A4A10'] as const;
const featureImgs = ['/haendel-haus.jpg', '/haendel-haus.jpg', '/haendel-haus.jpg'] as const;

export default function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-bg-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <FeatureReveal>
          <p className="text-text-gray text-xs uppercase tracking-[0.25em] mb-2">{t.features.badge}</p>
          <h2
            className="text-text-dark font-black tracking-tight leading-none mb-16"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', whiteSpace: 'pre-line' }}
          >
            {t.features.headline}
          </h2>
        </FeatureReveal>

        <div className="flex flex-col gap-20">
          {t.features.items.map((feature, i) => (
            <FeatureReveal key={i} delay={0.08}>
              <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${
                  i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div
                  className="rounded-3xl overflow-hidden group"
                  style={{ aspectRatio: '16/9', border: `1px solid ${featureAccents[i]}25` }}
                >
                  <img
                    src={featureImgs[i]}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    style={{ objectPosition: 'center center' }}
                  />
                </div>
                <div>
                  <p
                    style={{ color: featureAccents[i] }}
                    className="text-xs uppercase tracking-[0.25em] font-semibold mb-3"
                  >
                    {feature.tag}
                  </p>
                  <h3
                    className="text-text-dark font-black tracking-tight leading-none mb-4"
                    style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)' }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-text-gray leading-relaxed max-w-[48ch]">{feature.desc}</p>
                </div>
              </div>
            </FeatureReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Commit**
```bash
git add components/FeaturesSection.tsx
git commit -m "feat: FeaturesSection uses translations"
```

---

## Task 8: Modify `components/PreOrderCTA.tsx`

**Files:**
- Modify: `components/PreOrderCTA.tsx`

- [ ] **Import useLanguage, replace all strings**

```tsx
'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

function MagneticButton({ label, href }: { label: string; href: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const tx = useSpring(x, { stiffness: 300, damping: 20 });
  const ty = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ x: tx, y: ty }}
      onMouseMove={handleMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      whileHover={{ scale: 1.04, backgroundColor: '#DFA030' }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-2 bg-accent-gold text-text-dark font-black px-8 py-4 rounded-2xl text-base tracking-wide"
      transition={{ type: 'spring', stiffness: 360, damping: 24 }}
    >
      {label}
    </motion.a>
  );
}

export default function PreOrderCTA() {
  const { t } = useLanguage();

  return (
    <section id="kaufen" className="relative py-24 px-6 md:px-16 overflow-hidden" style={{ background: '#2B1608' }}>
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-20 items-center">
        <div>
          <p className="text-accent-gold text-xs uppercase tracking-[0.25em] font-semibold mb-4">
            {t.cta.badge}
          </p>
          <h2
            className="text-bg-white font-black tracking-tight leading-none mb-4"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', whiteSpace: 'pre-line' }}
          >
            {t.cta.headline}
          </h2>
          <p className="text-silver leading-relaxed max-w-[40ch] mb-8">
            {t.cta.desc}
          </p>
          <MagneticButton
            label={t.cta.btn}
            href="https://www.hallesaale.shop?utm_source=haendel-lp&utm_medium=referral&utm_campaign=playmobil-haendel"
          />
        </div>

        <div className="flex flex-col gap-5 min-w-[280px]">
          <p className="text-silver text-base uppercase tracking-[0.2em] mb-1">{t.cta.where}</p>
          {t.cta.locations.map((loc) => (
            <div key={loc.label} className="flex items-center gap-4">
              <span className="flex-shrink-0 text-lg leading-none" style={{ color: '#C8831A' }}>♫</span>
              {loc.href ? (
                <a href={loc.href} target="_blank" rel="noopener noreferrer" className="text-bg-white text-lg font-semibold hover:underline">{loc.label}</a>
              ) : (
                <span className="text-bg-white text-lg font-semibold">{loc.label}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Commit**
```bash
git add components/PreOrderCTA.tsx
git commit -m "feat: PreOrderCTA uses translations"
```

---

## Task 9: Modify `components/Footer.tsx` and `components/CookieBanner.tsx`

**Files:**
- Modify: `components/Footer.tsx`
- Modify: `components/CookieBanner.tsx`

- [ ] **Update Footer**

```tsx
'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer
      className="border-t border-white/5 py-8 px-6 md:px-16"
      style={{ background: '#0F0704' }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <p className="text-bg-white font-black tracking-tight text-lg">Playmobil Händel</p>
          <p className="text-text-gray text-sm">{t.footer.tagline}</p>
        </div>
        <div className="md:text-right">
          <p className="text-text-gray text-xs">{t.footer.rights}</p>
          <p className="text-text-gray/50 text-xs mt-1">
            {t.footer.available}{' '}
            <a href="https://www.hallesaale.shop?utm_source=haendel-lp&utm_medium=referral&utm_campaign=playmobil-haendel" target="_blank" rel="noopener noreferrer" className="hover:underline">hallesaale.shop</a>.
          </p>
          <div className="flex gap-4 mt-3 justify-end">
            <a href="/impressum" className="text-text-gray/50 text-xs hover:text-text-gray transition-colors">{t.footer.imprint}</a>
            <a href="/datenschutz" className="text-text-gray/50 text-xs hover:text-text-gray transition-colors">{t.footer.privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Update CookieBanner**

```tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (!localStorage.getItem('cookie-consent')) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  }

  function decline() {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 28 }}
          className="fixed bottom-0 left-0 right-0 z-[100] px-6 py-5 md:px-10"
          style={{ background: '#1A0C04', borderTop: '1px solid rgba(200,131,26,0.2)' }}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10">
            <p className="text-silver text-sm leading-relaxed flex-1">
              {t.cookie.text}{' '}
              <Link href="/datenschutz" className="text-accent-gold hover:underline">{t.cookie.privacy_link}</Link>
            </p>
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={decline}
                className="text-text-gray text-sm px-5 py-2 rounded-xl border border-white/10 hover:border-white/25 transition-colors"
              >
                {t.cookie.decline}
              </button>
              <button
                onClick={accept}
                className="text-text-dark font-semibold text-sm px-5 py-2 rounded-xl transition-colors"
                style={{ background: '#C8831A' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#DFA030')}
                onMouseLeave={e => (e.currentTarget.style.background = '#C8831A')}
              >
                {t.cookie.accept}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

- [ ] **Commit**
```bash
git add components/Footer.tsx components/CookieBanner.tsx
git commit -m "feat: Footer and CookieBanner use translations"
```

---

## Task 10: Modify `app/impressum/page.tsx`

**Files:**
- Modify: `app/impressum/page.tsx`

- [ ] **Rewrite as client component using translations**

```tsx
'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Impressum() {
  const { t } = useLanguage();
  const p = t.impressum;

  return (
    <main style={{ background: '#0F0704', minHeight: '100vh' }} className="px-6 py-16 md:px-16">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-accent-gold text-sm hover:underline mb-10 inline-block">{p.back}</Link>
        <h1 className="text-bg-white font-black text-4xl mb-10">{p.title}</h1>

        {p.sections.map((section, i) => (
          <section key={i} className="mb-8">
            <h2 className="text-accent-gold font-semibold text-sm uppercase tracking-widest mb-3">{section.heading}</h2>
            <p className="text-silver leading-relaxed text-sm" style={{ whiteSpace: 'pre-line' }}>
              {section.content.split('info@stadtmarketing-halle.de').length > 1 ? (
                <>
                  {section.content.split('info@stadtmarketing-halle.de')[0]}
                  <a href="mailto:info@stadtmarketing-halle.de" className="hover:underline">info@stadtmarketing-halle.de</a>
                  {section.content.split('info@stadtmarketing-halle.de')[1]}
                </>
              ) : section.content}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
```

Note: Remove the `export const metadata` from this file — client components cannot export metadata. The page title will remain static (acceptable for a legal page).

- [ ] **Commit**
```bash
git add app/impressum/page.tsx
git commit -m "feat: Impressum page uses translations (DE/EN)"
```

---

## Task 11: Modify `app/datenschutz/page.tsx`

**Files:**
- Modify: `app/datenschutz/page.tsx`

- [ ] **Rewrite as client component using translations**

```tsx
'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Datenschutz() {
  const { t } = useLanguage();
  const p = t.datenschutz;

  return (
    <main style={{ background: '#0F0704', minHeight: '100vh' }} className="px-6 py-16 md:px-16">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-accent-gold text-sm hover:underline mb-10 inline-block">{p.back}</Link>
        <h1 className="text-bg-white font-black text-4xl mb-10">{p.title}</h1>

        {p.sections.map((section, i) => (
          <section key={i} className="mb-8">
            <h2 className="text-accent-gold font-semibold text-sm uppercase tracking-widest mb-3">{section.heading}</h2>
            <p className="text-silver leading-relaxed text-sm" style={{ whiteSpace: 'pre-line' }}>
              {section.content.split('info@stadtmarketing-halle.de').length > 1 ? (
                <>
                  {section.content.split('info@stadtmarketing-halle.de')[0]}
                  <a href="mailto:info@stadtmarketing-halle.de" className="hover:underline">info@stadtmarketing-halle.de</a>
                  {section.content.split('info@stadtmarketing-halle.de')[1]}
                </>
              ) : section.content}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
```

Note: Remove the `export const metadata` from this file — client components cannot export metadata.

- [ ] **Commit**
```bash
git add app/datenschutz/page.tsx
git commit -m "feat: Datenschutz page uses translations (DE/EN)"
```

---

## Task 12: Final check + push

- [ ] **Run dev server and verify**
```bash
npm run dev
```
Check:
1. Page loads in German by default
2. Clicking EN switches all text on main page
3. Clicking DE switches back
4. Refresh keeps the chosen language (localStorage)
5. /impressum and /datenschutz switch between "Impressum"/"Legal Notice" and "Datenschutz"/"Privacy Policy"
6. Cookie banner text switches language
7. LangToggle visible and gold on active language
8. No TypeScript errors in terminal

- [ ] **Push to remote**
```bash
git push
```
