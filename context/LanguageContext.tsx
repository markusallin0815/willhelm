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
