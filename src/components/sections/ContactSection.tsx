'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Mail,
  Download,
  Copy,
  Check,
  ArrowUpRight,
} from 'lucide-react';
import { profile } from '@/data/profile';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = profile.email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatedSection
      id="contact"
      className="py-16 sm:py-24 bg-[#080a10] relative overflow-hidden border-t border-white/[0.08]"
    >
      {/* Background Wallpaper: wallpaper-section2 */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <Image
          src="/images/wallpapers/wallpaper-section2.webp"
          alt="Contact Section Wallpaper"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-65 sm:opacity-75"
          unoptimized
        />
        {/* Layer 1: Ambient deep dark overlay to ensure readability */}
        <div className="absolute inset-0 bg-[#080a10]/60" />

        {/* Layer 2: Subtle radial vignette to focus attention towards the content */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,#080a10_100%)] opacity-85" />

        {/* Layer 3: Top edge seamless transition with Gallery section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#080a10] via-[#080a10]/70 to-transparent" />

        {/* Layer 4: Bottom edge seamless transition with Footer */}
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#070a12] via-[#070a12]/85 to-transparent" />
      </div>

      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <SectionHeading
          title={t('Hubungi Saya', 'Get In Touch')}
          subtitle={t(
            'Terbuka untuk posisi full-stack engineering, kolaborasi infrastruktur, dan diskusi teknis.',
            'Open for full-stack engineering roles, infrastructure collaborations, and technical discussions.'
          )}
        />

        {/* Open Direct Layout — Simetris Sesuai Standar Bab Lain */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch max-w-5xl mx-auto">
          {/* Photo Showcase Panel: Kiri di Desktop, Atas di Mobile (Simetris Penuh dengan Form di Kanan) */}
          <div className="lg:col-span-5 order-first flex flex-col items-center lg:items-stretch w-full h-full">
            <div className="relative w-full max-w-[320px] lg:max-w-none h-full min-h-[340px] lg:min-h-0 aspect-[4/5] lg:aspect-auto rounded-2xl overflow-hidden border border-white/10 bg-slate-900/60 shadow-2xl group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/profile/carmen-potrait.avif"
                alt="Carmen"
                className="w-full h-full object-cover object-[center_18%] brightness-95 contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Form & Channels Column: Kanan di Desktop (Form di Kanan) */}
          <div className="lg:col-span-7 order-last flex flex-col justify-between h-full">
            <div>
              {/* Level 2: Title Sesuai Standar Bab Lain */}
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {t('Mari bangun sistem yang cepat, bersih, dan handal.', "Let's build something fast, clean, and reliable.")}
              </h3>

              {/* Quote Block — Sesuai Standar Level 5 Bab Lain */}
              <div className="mt-3 mb-5 sm:mb-6 border-l-2 border-accent/60 pl-3.5 sm:pl-4 py-0.5">
                <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed italic">
                  &ldquo;Tidak ada yang memperhatikan rasa sakitmu, tapi semua orang memperhatikan kesalahanmu.&rdquo;
                </p>
                <p className="text-xs font-sans text-slate-400 mt-1 font-medium">
                  — Nyoman Ayu Carmenita 2026
                </p>
              </div>

                  {/* Direct Contact Channels — 2-Line Architecture for Zero Horizontal Truncation */}
                  <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                    {/* Email Row */}
                    <div className="p-3 sm:p-3.5 rounded-xl bg-[#070c18]/80 hover:bg-[#070c18] border border-white/10 backdrop-blur-md transition-colors">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                            <Image
                              src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/gmail.svg"
                              alt="Gmail"
                              width={15}
                              height={15}
                              className="w-3.5 h-3.5 object-contain"
                              unoptimized
                            />
                          </div>
                          <span className="text-[10px] font-sans uppercase text-slate-400 tracking-wider font-semibold">
                            {t('Alamat Email', 'Email Address')}
                          </span>
                        </div>
                        <button
                          onClick={handleCopyEmail}
                          className="px-2.5 py-1 rounded-md bg-white/[0.06] hover:bg-white/[0.12] text-[11px] font-sans text-slate-300 transition-colors flex items-center gap-1 shrink-0"
                          aria-label={copied ? 'Email copied' : 'Copy email address'}
                        >
                          {copied ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span className="text-emerald-400 font-semibold">{t('Tersalin!', 'Copied!')}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3 text-slate-400" />
                              <span>{t('Salin', 'Copy')}</span>
                            </>
                          )}
                        </button>
                      </div>
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-xs sm:text-sm font-sans text-white hover:text-accent transition-colors pl-9 block font-medium break-all sm:break-normal"
                      >
                        {profile.email}
                      </a>
                    </div>

                    {/* LinkedIn Row */}
                    <div className="p-3 sm:p-3.5 rounded-xl bg-[#070c18]/80 hover:bg-[#070c18] border border-white/10 backdrop-blur-md transition-colors group/link">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                            <Image
                              src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/linkedin.svg"
                              alt="LinkedIn"
                              width={15}
                              height={15}
                              className="w-3.5 h-3.5 object-contain"
                              unoptimized
                            />
                          </div>
                          <span className="text-[10px] font-sans uppercase text-slate-400 tracking-wider font-semibold">
                            {t('Profil LinkedIn', 'LinkedIn Profile')}
                          </span>
                        </div>
                        <a
                          href={profile.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded-md bg-white/[0.06] hover:bg-white/[0.12] text-[11px] font-sans text-slate-300 hover:text-white transition-colors flex items-center gap-1 shrink-0"
                          aria-label="Visit LinkedIn profile"
                        >
                          <span>{t('Terhubung', 'Connect')}</span>
                          <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover/link:text-accent transition-colors" />
                        </a>
                      </div>
                      <a
                        href={profile.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-sans text-white hover:text-accent transition-colors pl-9 block font-medium truncate"
                      >
                        linkedin.com/in/haioscartambunan
                      </a>
                    </div>

                    {/* Instagram Row */}
                    <div className="p-3 sm:p-3.5 rounded-xl bg-[#070c18]/80 hover:bg-[#070c18] border border-white/10 backdrop-blur-md transition-colors group/link">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0">
                            <Image
                              src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/instagram.svg"
                              alt="Instagram"
                              width={15}
                              height={15}
                              className="w-3.5 h-3.5 object-contain"
                              unoptimized
                            />
                          </div>
                          <span className="text-[10px] font-sans uppercase text-slate-400 tracking-wider font-semibold">
                            {t('Profil Instagram', 'Instagram Profile')}
                          </span>
                        </div>
                        <a
                          href={profile.instagram || 'https://instagram.com/oss_tam'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded-md bg-white/[0.06] hover:bg-white/[0.12] text-[11px] font-sans text-slate-300 hover:text-white transition-colors flex items-center gap-1 shrink-0"
                          aria-label="Visit Instagram profile"
                        >
                          <span>{t('Kunjungi', 'Visit')}</span>
                          <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover/link:text-pink-400 transition-colors" />
                        </a>
                      </div>
                      <a
                        href={profile.instagram || 'https://instagram.com/oss_tam'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-sans text-white hover:text-pink-400 transition-colors pl-9 block font-medium truncate"
                      >
                        instagram.com/oss_tam
                      </a>
                    </div>
                  </div>
                </div>

                {/* Primary Action Buttons Bar */}
                <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                  <Button
                    href={`mailto:${profile.email}`}
                    variant="primary"
                    icon={Mail}
                    size="md"
                    external
                    className="flex-1 justify-center text-xs font-semibold"
                  >
                    {t('Kirim Email Langsung', 'Send Direct Email')}
                  </Button>
                  <Button
                    href={profile.cvUrl}
                    variant="secondary"
                    icon={Download}
                    size="md"
                    external
                    className="flex-1 justify-center text-xs font-semibold"
                  >
                    {t('Unduh CV (PDF)', 'Download CV (PDF)')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
  );
}
