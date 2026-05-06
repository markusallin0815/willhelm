'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

function renderContent(content: string, email?: string) {
  const lines = content.split('\n');
  return lines.map((line, i) => {
    const isLast = i === lines.length - 1;
    if (email && line.includes(email)) {
      const parts = line.split(email);
      return (
        <span key={i}>
          {parts[0]}
          <a href={`mailto:${email}`} className="hover:underline">{email}</a>
          {parts[1]}
          {!isLast && <br />}
        </span>
      );
    }
    return <span key={i}>{line}{!isLast && <br />}</span>;
  });
}

export default function Impressum() {
  const { t } = useLanguage();

  return (
    <main style={{ background: '#0F0704', minHeight: '100vh' }} className="px-6 py-16 md:px-16">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-accent-gold text-sm hover:underline mb-10 inline-block">{t.impressum.back}</Link>

        <h1 className="text-bg-white font-black text-4xl mb-10">{t.impressum.title}</h1>

        {t.impressum.sections.map((section, i) => {
          const s = section as { heading: string; content: string; email?: string };
          return (
            <section key={i} className={i < t.impressum.sections.length - 1 ? 'mb-8' : ''}>
              <h2 className="text-accent-gold font-semibold text-sm uppercase tracking-widest mb-3">{s.heading}</h2>
              <p className="text-silver leading-relaxed text-sm">
                {renderContent(s.content, s.email)}
              </p>
            </section>
          );
        })}
      </div>
    </main>
  );
}
