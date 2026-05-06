# Bilingual DE/EN — Design Spec
Date: 2026-05-07

## Goal
Add English as a second language to all pages of the Playmobil Händel landing page. Language is toggled client-side via a fixed button (no URL change).

## Approach
React Context + localStorage. No external i18n library.

## New Files

### `lib/i18n.ts`
Single source of truth for all translated strings. Structure:
```ts
export const translations = {
  de: { hero: { ... }, stats: { ... }, features: { ... }, cta: { ... }, footer: { ... }, impressum: { ... }, datenschutz: { ... } },
  en: { hero: { ... }, stats: { ... }, features: { ... }, cta: { ... }, footer: { ... }, impressum: { ... }, datenschutz: { ... } },
}
export type Lang = 'de' | 'en'
```

### `context/LanguageContext.tsx`
- `LanguageProvider` — wraps the app, reads/writes `localStorage('lang')`
- `useLanguage()` hook — returns `{ lang, setLang, t }` where `t` is the current language's translation object

### `components/LangToggle.tsx`
- Fixed position, top-right (`fixed top-4 right-4 z-50`)
- Renders `DE · EN`, active language in `#C8831A` (accent gold), inactive dimmed
- Calls `setLang()` on click

## Modified Files

### `app/layout.tsx`
- Wrap `<body>` content in `<LanguageProvider>`
- Add `<LangToggle />` inside provider

### All page components → `'use client'`
Components that render translated text need `useLanguage()`:
- `HeroCanvas.tsx` — already client, add `useLanguage()`
- `StatsSection.tsx` — add `'use client'`
- `FeaturesSection.tsx` — add `'use client'`
- `PreOrderCTA.tsx` — already client
- `Footer.tsx` — add `'use client'`
- `app/impressum/page.tsx` — add `'use client'`
- `app/datenschutz/page.tsx` — add `'use client'`

## Translation Scope

### Main Page
| Key | DE | EN |
|---|---|---|
| hero.subtitle | Der Komponist. Die Figur. | The Composer. The Figure. |
| hero.title | HÄNDEL | HÄNDEL |
| hero.edition | Playmobil-Sonderedition · Halle (Saale) | Playmobil Special Edition · Halle (Saale) |
| hero.detail_title | Barocke Detailtreue. | Baroque Attention to Detail. |
| hero.detail_desc | Dreispitz, Perücke, Gehrock... | Tricorn hat, wig, frock coat... |
| hero.cta_title | Exklusiv. Nur 6,99 €. | Exclusive. Only €6.99. |
| hero.cta_desc | Im Händel-Haus, Tourist-Info... | At the Händel-Haus, Tourist Info... |
| hero.buy_btn | Jetzt kaufen → | Buy now → |
| hero.scroll | Scroll | Scroll |
| stats.badge | Sonderedition | Special Edition |
| stats.headline | Jetzt erhältlich. | Available now. |
| stats.desc | Die Playmobil-Sonderedition... | The Playmobil special edition... |
| stats.price_label | Preis | Price |
| stats.price | Nur 6,99 € | Only €6.99 |
| stats.location_label | Erhältlich in | Available in |
| stats.location | Halle (Saale) | Halle (Saale) |
| features.badge | Ausstattung | Details |
| features.headline | Jedes Detail trägt Geschichte. | Every detail carries history. |
| features[0].tag | Die Figur | The Figure |
| features[0].title | Georg Friedrich Händel | Georg Friedrich Handel |
| features[0].desc | Vor dem Händel-Haus... | In front of the Händel-Haus... |
| features[1].tag | Zubehör | Accessories |
| features[1].title | Federkiel & Podest | Quill & Pedestal |
| features[1].desc | Mit großem Federkiel... | With a large quill pen... |
| features[2].tag | Verpackung | Packaging |
| features[2].title | Sonderedition Händel-Haus | Händel-Haus Special Edition |
| features[2].desc | Exklusiv gestaltet... | Exclusively designed... |
| cta.badge | Erhältlich ab sofort | Available now |
| cta.headline | Playmobil Händel für nur 6,99 €. | Playmobil Händel for only €6.99. |
| cta.desc | Sichere dir die exklusive... | Get the exclusive special edition... |
| cta.btn | Auf hallesaale.shop kaufen → | Buy on hallesaale.shop → |
| cta.where | Wo erhältlich | Where to buy |
| cta.locations[*] | (location names) | (location names) |
| footer.tagline | Sonderedition · Stadtmarketing... | Special Edition · Stadtmarketing... |
| footer.rights | © 2026 ... Alle Rechte vorbehalten. | © 2026 ... All rights reserved. |
| footer.available | Erhältlich im Händel-Haus... | Available at the Händel-Haus... |
| footer.imprint | Impressum | Legal Notice |
| footer.privacy | Datenschutz | Privacy Policy |
| cookie.text | Diese Website verwendet... | This website uses... |
| cookie.accept | Akzeptieren | Accept |
| cookie.decline | Ablehnen | Decline |

### Impressum (Legal Notice in EN)
Full EN translation of the Impressum page with heading "Legal Notice".

### Datenschutz (Privacy Policy in EN)
Full EN translation of the Datenschutz page with heading "Privacy Policy".

## Metadata
Page `<title>` and `<description>` stay German (server-rendered metadata, language toggle is client-only). This is acceptable for SEO since DE is the primary market.

## Constraints
- No extra npm packages
- No URL changes
- Language persists in localStorage key `'lang'`
- Default language: `'de'`
