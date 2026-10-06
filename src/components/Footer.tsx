'use client';

import Image from 'next/image';
import { profile } from '@/data/profile';
import { useLanguage } from '@/context/LanguageContext';

const DASHBOARD_ICONS_CDN = 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons';

const FOOTER_SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: profile.linkedIn,
    icon: `${DASHBOARD_ICONS_CDN}/svg/linkedin.svg`,
  },
  {
    name: 'Email',
    href: `mailto:${profile.email}`,
    icon: `${DASHBOARD_ICONS_CDN}/svg/gmail.svg`,
  },
  {
    name: 'Instagram',
    href: profile.instagram || 'https://instagram.com/oss_tam',
    icon: `${DASHBOARD_ICONS_CDN}/svg/instagram.svg`,
  },
];

const FLAG_ICON_CDN = 'https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/id.svg';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#070a12] relative z-20 font-sans" role="contentinfo">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-7 sm:py-8">
        {/* Top Section: Kiri (Logo ODC + Sosmed) & Kanan (Copyright Oscar - Dinaikkan) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 pb-6 border-b border-white/[0.06]">
          {/* Sisi Kiri: Logo ODC + Icon Media Sosial */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-start gap-4 sm:gap-6">
            {/* Logo ODC + Tulisan "Hosted By ODC Server" (Langsung Logo) */}
            <div className="flex items-center gap-2.5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logos/odc.png"
                alt="ODC Server Logo"
                className="w-6 h-6 sm:w-7 sm:h-7 object-contain shrink-0"
              />
              <span className="text-xs sm:text-sm font-semibold text-white tracking-tight">
                Hosted By ODC Server
              </span>
            </div>

            {/* Divider pemisah vertikal di desktop */}
            <div className="hidden sm:block w-px h-5 bg-white/10" />

            {/* Icon Only Buttons (LinkedIn, Email, Instagram) — Rata ke Kiri */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {FOOTER_SOCIAL_LINKS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  aria-label={item.name}
                  title={item.name}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-white/25 flex items-center justify-center transition-all duration-200 group cursor-pointer shadow-sm active:scale-95"
                >
                  <div className="w-4 h-4 sm:w-4.5 sm:h-4.5 flex items-center justify-center transition-transform duration-200 group-hover:scale-110 relative">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={18}
                      height={18}
                      className="w-full h-full object-contain"
                      unoptimized
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Sisi Kanan: Copyright Oscar (Dinaikkan ke atas garis) */}
          <div className="text-xs text-slate-500 font-sans tracking-tight">
            © {currentYear} {profile.name}
          </div>
        </div>

        {/* Bottom Section: Sendiri di Bawah Garis — Font sama seperti teks Oscar */}
        <div className="pt-6 flex items-center justify-center gap-2 text-center text-xs text-slate-500 font-sans tracking-tight select-none">
          <div className="w-4.5 h-3 sm:w-5 sm:h-3.5 rounded-[2px] overflow-hidden shadow-sm border border-white/20 shrink-0 relative flex items-center justify-center">
            <Image
              src={FLAG_ICON_CDN}
              alt="Bendera Indonesia"
              width={20}
              height={15}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
          <span>
            {t('Saya Indonesia dan Saya Bangga', 'Proudly Indonesian')}
          </span>
        </div>
      </div>
    </footer>
  );
}
