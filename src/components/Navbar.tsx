'use client';

import { useState, useEffect } from 'react';
import { Menu, Download } from 'lucide-react';
import { navigationItems } from '@/data/profile';
import { useActiveSection } from '@/lib/hooks/useActiveSection';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from '@/components/ui/LanguageToggle';
import MobileMenu from './MobileMenu';

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

const sectionIds = [
  'home',
  'infrastructure',
  'skills',
  'experience',
  'projects',
  'certifications',
  'gallery',
  'contact',
];

export default function Navbar() {
  const { t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#030712]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-lg shadow-black/20'
            : 'bg-transparent border-b border-transparent'
        }`}
        role="banner"
      >
        <nav
          className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 h-14 sm:h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo: Oscar Tambunan (Clean typography, no dot, no .dev) */}
          <a
            href="#home"
            className="text-sm sm:text-base font-semibold tracking-tight text-white/90 hover:text-white transition-colors"
            aria-label="Oscar Tambunan homepage"
          >
            Oscar Tambunan
          </a>

          {/* Desktop Nav: Floating minimalist pill dock */}
          <ul
            className="hidden lg:flex items-center gap-0.5 p-1 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md shadow-inner"
            role="list"
          >
            {navigationItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 block ${
                      isActive
                        ? 'text-white bg-white/[0.12] shadow-sm'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                    }`}
                  >
                    {navTranslations[item.href] ? t(navTranslations[item.href].id, navTranslations[item.href].en) : item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <LanguageToggle className="hidden lg:inline-flex" />

            <a
              href="/oscar-tambunan-cv.pdf"
              download
              className="hidden lg:inline-flex items-center justify-center gap-2 px-3.5 py-1.5 text-xs font-medium text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-full transition-all duration-200 shadow-sm min-h-[36px]"
              aria-label="Download CV"
              title={t('Unduh CV', 'Download CV')}
            >
              <Download className="w-3.5 h-3.5 text-slate-400" />
              <span>{t('Unduh CV', 'Download CV')}</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/[0.06] text-slate-400 hover:text-white transition-colors min-w-[40px] min-h-[40px] flex items-center justify-center cursor-pointer"
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
}
