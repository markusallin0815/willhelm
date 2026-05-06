'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function LangToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className="fixed top-4 right-4 z-50 flex items-center gap-2 text-sm font-semibold tracking-widest uppercase select-none"
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
