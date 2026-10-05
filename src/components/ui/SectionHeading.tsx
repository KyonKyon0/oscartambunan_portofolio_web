'use client';

import { motion } from 'framer-motion';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  const prefersReducedMotion = useReducedMotion();

  const alignClass = align === 'center' ? 'text-center' : 'text-left';

  return (
    <motion.div
      className={`mb-8 sm:mb-12 pb-4 border-b border-white/10 ${alignClass}`}
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed max-w-3xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
