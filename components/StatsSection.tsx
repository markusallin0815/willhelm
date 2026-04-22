import { Shield, CalendarBlank, Crown } from '@phosphor-icons/react/dist/ssr';

export default function StatsSection() {
  return (
    <section className="bg-text-dark py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-4">

        {/* Large left feature */}
        <div className="border border-accent-gold/20 rounded-2xl p-8 md:p-12 flex flex-col justify-between min-h-[220px] md:min-h-[280px]">
          <Shield size={36} color="#F5B700" weight="light" aria-hidden />
          <div>
            <p className="text-text-gray text-xs uppercase tracking-[0.2em] mb-2">Edition</p>
            <h2
              className="text-bg-white font-black tracking-tight leading-none"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
            >
              Limitiert.
            </h2>
            <p className="text-text-gray mt-3 text-sm leading-relaxed max-w-[40ch]">
              Nur eine begrenzte Anzahl von Ritter Willhelm wird produziert.
              Wer zu spät kommt, geht leer aus.
            </p>
          </div>
        </div>

        {/* Right column — two stacked tiles */}
        <div className="flex flex-col gap-4">
          <div className="border border-accent-gold/20 rounded-2xl p-6 flex flex-col justify-between flex-1 min-h-[120px]">
            <CalendarBlank size={24} color="#F5B700" weight="light" aria-hidden />
            <div>
              <p className="text-text-gray text-xs uppercase tracking-[0.2em] mb-1">Vorbestellung bis</p>
              <p className="text-bg-white font-bold text-xl tracking-tight">15. Juni 2026</p>
            </div>
          </div>
          <div className="border border-accent-gold/20 rounded-2xl p-6 flex flex-col justify-between flex-1 min-h-[120px]">
            <Crown size={24} color="#F5B700" weight="light" aria-hidden />
            <div>
              <p className="text-text-gray text-xs uppercase tracking-[0.2em] mb-1">Erhältlich</p>
              <p className="text-bg-white font-bold text-xl tracking-tight">Exklusiv nur bei uns</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
