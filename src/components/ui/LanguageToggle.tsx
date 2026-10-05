'use client';

import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageToggle({ className = '' }: { className?: string }) {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={`Ganti bahasa / Switch language. Mode saat ini: ${
        language === 'id' ? 'Bahasa Indonesia' : 'English'
      }`}
      title={language === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
      className={`${
        className.includes('hidden') ? '' : 'inline-flex '
      }items-center justify-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-full border transition-all duration-200 cursor-pointer select-none shadow-sm min-h-[36px] ${
        language === 'en'
          ? 'bg-blue-500/15 border-blue-500/35 text-white hover:bg-blue-500/25 ring-1 ring-blue-500/30'
          : 'bg-white/[0.04] hover:bg-white/[0.08] border-white/10 hover:border-white/20 text-slate-200 hover:text-white'
      } ${className}`}
    >
      <Globe className="w-3.5 h-3.5 text-accent shrink-0" />
      <span className="flex items-center gap-1.5 text-xs font-sans tracking-wide">
        <span
          className={`transition-colors ${
            language === 'id' ? 'text-white font-bold underline underline-offset-2' : 'text-slate-400'
          }`}
        >
          ID
        </span>
        <span className="text-slate-600">/</span>
        <span
          className={`transition-colors ${
            language === 'en' ? 'text-white font-bold underline underline-offset-2' : 'text-slate-400'
          }`}
        >
          EN
        </span>
      </span>
    </button>
  );
}
