'use client';

import { useState, useEffect } from 'react';
import { Menu, Download } from 'lucide-react';
import { navigationItems } from '@/data/profile';
import { useActiveSection } from '@/lib/hooks/useActiveSection';
import MobileMenu from './MobileMenu';

const sectionIds = ['home', 'about', 'experience', 'projects', 'skills', 'certifications', 'contact'];

export default function Navbar() {
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
        className={`
          fixed top-0 left-0 right-0 z-30 transition-all duration-300
          ${isScrolled ? 'glass-panel-strong shadow-lg shadow-black/20' : 'bg-transparent'}
        `}
        role="banner"
      >
        <nav
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#home"
            className="text-sm font-semibold text-text-primary hover:text-accent transition-colors"
            aria-label="Go to homepage"
          >
            Oscar<span className="text-accent">.</span>dev
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navigationItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`
                      px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
                      ${
                        isActive
                          ? 'text-accent'
                          : 'text-text-secondary hover:text-text-primary'
                      }
                    `}
                  >
                    {item.label}
                    {isActive && (
                      <span className="block h-0.5 mt-0.5 bg-accent rounded-full" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <a
              href="/oscar-tambunan-cv.pdf"
              download
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-accent border border-accent/30 rounded-lg hover:bg-accent-muted transition-all duration-200 min-h-[44px]"
              aria-label="Download CV"
            >
              <Download className="w-4 h-4" />
              <span className="hidden md:inline">Download CV</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-surface transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Open navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-5 h-5 text-text-secondary" />
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
