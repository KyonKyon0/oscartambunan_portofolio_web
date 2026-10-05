'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (idText: string, enText: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('id');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('portfolio_lang') as Language | null;
      if (saved === 'id' || saved === 'en') {
        setLanguageState(saved);
        document.documentElement.lang = saved;
      } else {
        document.documentElement.lang = 'id';
      }
    } catch {
      // Fallback if localStorage is inaccessible
      document.documentElement.lang = 'id';
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('portfolio_lang', lang);
    } catch {
      // Ignore
    }
    document.documentElement.lang = lang;
  };

  const toggleLanguage = () => {
    const next = language === 'id' ? 'en' : 'id';
    setLanguage(next);
  };

  const t = (idText: string, enText: string): string => {
    return language === 'en' ? enText : idText;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
