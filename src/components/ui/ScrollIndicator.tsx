'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';

export default function ScrollIndicator() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
      <span className="text-xs text-text-tertiary tracking-widest uppercase">
        Scroll
      </span>
      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : { y: [0, 6, 0] }
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <ChevronDown className="w-4 h-4 text-text-tertiary" />
      </motion.div>
    </div>
  );
}
