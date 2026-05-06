'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';

function MagneticButton() {
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
      href="https://www.hallesaale.shop?utm_source=haendel-lp&utm_medium=referral&utm_campaign=playmobil-haendel"
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
      Auf hallesaale.shop kaufen →
    </motion.a>
  );
}

const locations = [
  { label: 'Händel-Haus Halle (Saale)', href: 'https://www.haendel-haus.de' },
  { label: 'Tourist-Information Halle (Saale)', href: 'https://www.halle-tourismus.de' },
  { label: 'hallesaale.shop', href: 'https://www.hallesaale.shop?utm_source=haendel-lp&utm_medium=referral&utm_campaign=playmobil-haendel' },
  { label: 'Ausgewählte Geschäfte in der Innenstadt von Halle (Saale)', href: null },
];

export default function PreOrderCTA() {
  return (
    <section id="kaufen" className="relative py-24 px-6 md:px-16 overflow-hidden" style={{ background: '#2B1608' }}>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-20 items-center">
        <div>
          <p className="text-accent-gold text-xs uppercase tracking-[0.25em] font-semibold mb-4">
            Erhältlich ab sofort
          </p>
          <h2
            className="text-bg-white font-black tracking-tight leading-none mb-4"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            Playmobil Händel<br />für nur 6,99 €.
          </h2>
          <p className="text-silver leading-relaxed max-w-[40ch] mb-8">
            Sichere dir die exklusive Sonderedition — solange der Vorrat reicht.
            Das perfekte Mitbringsel aus Halle (Saale).
          </p>
          <MagneticButton />
        </div>

        <div className="flex flex-col gap-5 min-w-[280px]">
          <p className="text-silver text-base uppercase tracking-[0.2em] mb-1">Wo erhältlich</p>
          {locations.map((loc) => (
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
