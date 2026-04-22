'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const TARGET_DATE = new Date('2026-06-15T00:00:00');

function getTimeLeft() {
  const diff = TARGET_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, '0');
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span
        className="font-black text-accent-gold font-mono tabular-nums leading-none"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
      >
        {pad(value)}
      </span>
      <span className="text-silver text-xs uppercase tracking-[0.2em]">{label}</span>
    </div>
  );
}

function MagneticButton() {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const tx = useSpring(x, { stiffness: 300, damping: 20 });
  const ty = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href="#"
      style={{ x: tx, y: ty }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-2 bg-accent-gold text-text-dark font-black px-8 py-4 rounded-full text-base tracking-wide hover:bg-accent-gold-hover transition-colors"
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      Ritter Willhelm vorbestellen →
    </motion.a>
  );
}

export default function PreOrderCTA() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="vorbestellen" className="py-24 px-6 md:px-16" style={{ background: '#1E4ED8' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-20 items-center">
        <div>
          <p className="text-accent-gold text-xs uppercase tracking-[0.25em] font-semibold mb-4">
            Limitierte Vorbestellung
          </p>
          <h2
            className="text-bg-white font-black tracking-tight leading-none mb-4"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            Ritter Willhelm<br />wartet auf dich.
          </h2>
          <p className="text-silver leading-relaxed max-w-[40ch] mb-8">
            Sichere dir jetzt dein Exemplar der limitierten Edition.
            Nach dem 15. Juni 2026 ist kein Vorbestellen mehr möglich.
          </p>
          <MagneticButton />
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-silver text-xs uppercase tracking-[0.2em]">Vorbestellung endet in</p>
          <div className="flex gap-6 md:gap-8">
            <CountdownUnit value={time.days} label="Tage" />
            <CountdownUnit value={time.hours} label="Std." />
            <CountdownUnit value={time.minutes} label="Min." />
            <CountdownUnit value={time.seconds} label="Sek." />
          </div>
          <p className="text-silver/60 text-xs">Verfügbar ab 15. Juni 2026</p>
        </div>
      </div>
    </section>
  );
}
