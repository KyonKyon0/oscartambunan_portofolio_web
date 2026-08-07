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
      className={`mb-12 ${alignClass}`}
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-text-secondary text-base max-w-2xl">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-px bg-gradient-to-r from-accent/50 to-transparent ${
          align === 'center' ? 'mx-auto max-w-32' : 'max-w-16'
        }`}
      />
    </motion.div>
  );
}
