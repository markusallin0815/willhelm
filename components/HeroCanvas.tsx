'use client';

import { useEffect, useRef, useState } from 'react';
import { useTransform, useMotionValue, motion, useMotionValueEvent } from 'framer-motion';

const TOTAL_FRAMES = 192;
const FRAME_PATH = (i: number) => `/frames/frame-${String(i).padStart(3, '0')}.jpg`;
const FRAME_W = 1280;
const FRAME_H = 720;

function interpolate(p: number, inputs: number[], outputs: number[]): number {
  if (p <= inputs[0]) return outputs[0];
  if (p >= inputs[inputs.length - 1]) return outputs[outputs.length - 1];
  for (let i = 0; i < inputs.length - 1; i++) {
    if (p >= inputs[i] && p <= inputs[i + 1]) {
      const t = (p - inputs[i]) / (inputs[i + 1] - inputs[i]);
      return outputs[i] + t * (outputs[i + 1] - outputs[i]);
    }
  }
  return outputs[outputs.length - 1];
}

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const frameIndexRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const progress = useMotionValue(0);

  // Raw scroll listener — avoids Framer Motion useScroll bugs with sticky children
  useEffect(() => {
    function onScroll() {
      const container = containerRef.current;
      if (!container) return;
      const end = container.offsetHeight - window.innerHeight;
      const p = Math.min(1, Math.max(0, window.scrollY / end));
      progress.set(p);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [progress]);

  const frameIndex = useTransform(progress, [0, 1], [0, TOTAL_FRAMES - 1]);

  // Text 1: centered, visible at start, fades out ~30%
  const text1Opacity = useTransform(progress,
    (p) => interpolate(p, [0, 0.08, 0.26, 0.34], [1, 1, 0.6, 0]));

  // Text 2: left-aligned, fades in ~36%, out ~64%
  const text2Opacity = useTransform(progress,
    (p) => interpolate(p, [0.36, 0.44, 0.56, 0.64], [0, 1, 1, 0]));

  // Text 3: right-aligned, fades in ~66%, stays visible
  const text3Opacity = useTransform(progress,
    (p) => interpolate(p, [0.66, 0.76, 1.0], [0, 1, 1]));

  // Preload all frames
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i + 1);
      const idx = i;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          imagesRef.current = images;
          setLoaded(true);
          drawFrame(0, images);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          imagesRef.current = images;
          setLoaded(true);
        }
      };
      images[idx] = img;
    }
  }, []);

  function drawFrame(index: number, images?: HTMLImageElement[]) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const imgs = images || imagesRef.current;
    const img = imgs[Math.round(index)];
    if (!img || !img.complete) return;

    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#0F172A';
    ctx.fillRect(0, 0, width, height);

    // Object-cover: scale to fill viewport, crop excess
    const scaleW = width / FRAME_W;
    const scaleH = height / FRAME_H;
    const scale = Math.max(scaleW, scaleH);
    const drawW = Math.floor(FRAME_W * scale);
    const drawH = Math.floor(FRAME_H * scale);
    const drawX = Math.floor((width - drawW) / 2);
    const drawY = Math.floor((height - drawH) / 2);

    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }

  // Resize canvas to window
  useEffect(() => {
    function resize() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (loaded) drawFrame(frameIndexRef.current);
    }
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [loaded]);

  // RAF-based frame drawing
  useMotionValueEvent(frameIndex, 'change', (latest) => {
    const idx = Math.round(Math.max(0, Math.min(TOTAL_FRAMES - 1, latest)));
    frameIndexRef.current = idx;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => drawFrame(idx));
  });

  const textShadow = '0 2px 12px rgba(0,0,0,0.85), 0 4px 40px rgba(0,0,0,0.5)';

  return (
    <div ref={containerRef} className="relative" style={{ height: '600vh' }}>
      {/* Gold loading bar */}
      {!loaded && (
        <div className="fixed top-0 left-0 right-0 z-50 h-[3px]" style={{ background: '#0F172A' }}>
          <div className="h-full bg-accent-gold" style={{ width: '30%' }} />
        </div>
      )}

      {/* Sticky canvas section */}
      <div
        className="sticky top-0 overflow-hidden"
        style={{ height: '100dvh', background: '#0F172A' }}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ display: 'block' }}
        />

        {/* Dark scrim — ensures text contrast on any frame */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'rgba(0,0,0,0.38)', zIndex: 1 }}
        />

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 w-full pointer-events-none"
          style={{ height: '340px', background: 'linear-gradient(to bottom, transparent 0%, rgba(15,23,42,0.6) 50%, #0F172A 100%)', zIndex: 2 }}
        />

        {/* Text 1 — centered: intro */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
          style={{ opacity: text1Opacity, zIndex: 3 }}
        >
          <p
            className="mb-4 font-light text-center"
            style={{
              fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
              color: '#F5B700',
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
              Der Helm.
            </motion.span>
            {' '}
            <motion.span
              initial={{ x: 160, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 60, damping: 16, delay: 0.8 }}
              style={{ display: 'inline-block' }}
            >
              Der Held.
            </motion.span>
          </p>
          <h1
            className="font-black text-center leading-none"
            style={{
              fontSize: 'clamp(4rem, 13vw, 11rem)',
              color: '#FAFAF8',
              letterSpacing: '-0.02em',
              textShadow,
            }}
          >
            Ritter<br />Willhelm
          </h1>
          <p
            className="mt-5 text-xs uppercase text-center"
            style={{ color: '#F5B700', letterSpacing: '0.3em', textShadow, fontSize: 'clamp(0.85rem, 1.8vw, 1.3rem)' }}
          >
            Stadtmarketing Halle (Saale) präsentiert
          </p>
        </motion.div>

        {/* Text 2 — left: detail */}
        <motion.div
          className="absolute inset-0 flex items-center pointer-events-none"
          style={{ opacity: text2Opacity, paddingLeft: '8vw', zIndex: 3 }}
        >
          <div>
            <div className="mb-3 h-px" style={{ width: '40px', background: '#F5B700' }} />
            <h2
              className="font-black leading-tight"
              style={{
                fontSize: 'clamp(2rem, 6vw, 5.5rem)',
                color: '#FAFAF8',
                letterSpacing: '-0.02em',
                textShadow,
              }}
            >
              Mittelalterliche<br />Präzision.
            </h2>
            <p
              className="mt-4 font-light"
              style={{
                fontSize: 'clamp(0.875rem, 1.5vw, 1.1rem)',
                color: '#D9DEE8',
                maxWidth: '340px',
                lineHeight: 1.75,
                textShadow,
              }}
            >
              Jedes Detail handgefertigt.<br />
              Helm, Rüstung, Schwert und Schild —<br />
              alles einzeln abnehmbar.
            </p>
          </div>
        </motion.div>

        {/* Text 3 — right: CTA */}
        <motion.div
          className="absolute inset-0 flex items-center justify-end"
          style={{ opacity: text3Opacity, paddingRight: '8vw', pointerEvents: 'none', zIndex: 3 }}
        >
          <div className="text-right" style={{ pointerEvents: 'auto' }}>
            <div className="mb-3 h-px ml-auto" style={{ width: '40px', background: '#F5B700' }} />
            <h2
              className="font-black leading-tight"
              style={{
                fontSize: 'clamp(2rem, 6vw, 5.5rem)',
                color: '#FAFAF8',
                letterSpacing: '-0.02em',
                textShadow,
              }}
            >
              Limitiert.<br />Unwiederbringlich.
            </h2>
            <p
              className="mt-4 font-light"
              style={{
                fontSize: 'clamp(0.875rem, 1.5vw, 1.1rem)',
                color: '#D9DEE8',
                maxWidth: '340px',
                lineHeight: 1.75,
                marginLeft: 'auto',
                textShadow,
              }}
            >
              Vorbestellung bis 15. Juni 2026.<br />
              Danach: kein zweites Mal.
            </p>
            <motion.a
              href="#vorbestellen"
              className="inline-flex items-center gap-2 mt-6 font-semibold px-6 py-3 rounded-full text-sm tracking-wide"
              style={{ background: '#F5B700', color: '#0F172A' }}
              whileHover={{ scale: 1.04, backgroundColor: '#FFD54A' }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 360, damping: 24 }}
            >
              Jetzt vorbestellen →
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll indicator — fades with text 1 */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
          style={{ opacity: text1Opacity, zIndex: 3 }}
        >
          <p className="text-xs uppercase" style={{ color: '#64748B', letterSpacing: '0.3em' }}>
            Scroll
          </p>
          <div className="w-px h-8 relative overflow-hidden" style={{ background: '#1E293B' }}>
            <div
              className="absolute top-0 left-0 w-full"
              style={{
                background: 'linear-gradient(to bottom, transparent, #F5B700, transparent)',
                height: '50%',
                animation: 'scrollPulse 1.5s ease-in-out infinite',
              }}
            />
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scrollPulse {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </div>
  );
}
