'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface FeatureRevealProps {
  children: React.ReactNode;
  delay?: number;
}

export default function FeatureReveal({ children, delay = 0 }: FeatureRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ type: 'spring', stiffness: 80, damping: 18, delay }}
    >
      {children}
    </motion.div>
  );
}
