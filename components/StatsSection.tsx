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
