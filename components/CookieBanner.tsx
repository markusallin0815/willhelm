'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

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
              Diese Website verwendet ausschließlich technisch notwendige Cookies.{' '}
              <Link href="/datenschutz" className="text-accent-gold hover:underline">Datenschutzerklärung</Link>
            </p>
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={decline}
                className="text-text-gray text-sm px-5 py-2 rounded-xl border border-white/10 hover:border-white/25 transition-colors"
              >
                Ablehnen
              </button>
              <button
                onClick={accept}
                className="text-text-dark font-semibold text-sm px-5 py-2 rounded-xl transition-colors"
                style={{ background: '#C8831A' }}
                onMouseEnter={e => (e.currentTarget.style.background = '#DFA030')}
                onMouseLeave={e => (e.currentTarget.style.background = '#C8831A')}
              >
                Akzeptieren
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
