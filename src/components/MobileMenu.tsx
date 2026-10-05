'use client';

import { useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';
import { navigationItems } from '@/data/profile';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from '@/components/ui/LanguageToggle';

const navTranslations: Record<string, { id: string; en: string }> = {
  '#home': { id: 'Beranda', en: 'Home' },
  '#infrastructure': { id: 'Infrastruktur', en: 'Infrastructure' },
  '#skills': { id: 'Kemampuan', en: 'Capabilities' },
  '#experience': { id: 'Pengalaman', en: 'Experience' },
  '#projects': { id: 'Karya Pilihan', en: 'Selected Works' },
  '#certifications': { id: 'Sertifikasi', en: 'Certifications' },
  '#gallery': { id: 'Galeri', en: 'Gallery' },
  '#contact': { id: 'Kontak', en: 'Contact' },
};

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

export default function MobileMenu({ isOpen, onClose, activeSection }: MobileMenuProps) {
  const { t } = useLanguage();
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus trap
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll(
          'button, a[href], [tabindex]:not([tabindex="-1"])'
        );
        const firstFocusable = focusableElements[0] as HTMLElement;
        const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
          }
        } else {
          if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
          }
        }
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop (Lightweight, GPU-friendly without heavy backdrop-filter recalculation) */}
          <motion.div
            className="fixed inset-0 bg-black/70 z-[60]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Menu Panel (Hardware-accelerated slide-in with solid background for buttery 60/120fps) */}
          <motion.div
            ref={menuRef}
            className="fixed inset-y-0 right-0 w-full max-w-[300px] sm:max-w-sm bg-[#090d16] border-l border-white/10 shadow-2xl z-[70] flex flex-col will-change-transform"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-white/[0.08]">
              <span className="text-sm font-semibold text-white tracking-tight">Oscar Tambunan</span>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close navigation menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 px-3 sm:px-4 py-5 overflow-y-auto">
              <ul className="space-y-1">
                {navigationItems.map((item) => {
                  const sectionId = item.href.replace('#', '');
                  const isActive = activeSection === sectionId;

                  return (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        onClick={onClose}
                        className={`
                          block px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors duration-150
                          flex items-center
                          ${isActive
                            ? 'text-white bg-white/[0.10] shadow-sm'
                            : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                          }
                        `}
                      >
                        {navTranslations[item.href]
                          ? t(navTranslations[item.href].id, navTranslations[item.href].en)
                          : item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>

              {/* ID / EN Button Tepat Di Bawah Kontak — Ukuran font & padding selaras dengan menu */}
              <div className="mt-4 pt-3.5 border-t border-white/[0.08] px-3.5 flex items-center justify-between">
                <span className="text-sm font-medium text-slate-300">
                  {t('Language', 'Bahasa')}
                </span>
                <LanguageToggle className="shrink-0" />
              </div>
            </nav>

            {/* Footer — Unduh CV di Paling Bawah Drawer Burger */}
            <div className="p-4 sm:p-5 border-t border-white/[0.08]">
              <a
                href="/oscar-tambunan-cv.pdf"
                download
                className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white rounded-full font-medium text-xs transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>{t('Unduh CV', 'Download CV')}</span>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
