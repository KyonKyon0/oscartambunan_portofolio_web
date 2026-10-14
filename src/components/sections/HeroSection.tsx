'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '@/data/profile';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';
import { useLanguage } from '@/context/LanguageContext';

const DASHBOARD_ICONS_CDN = 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons';

const SOCIAL_LINKS = [
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

export default function HeroSection() {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  // Rotate between Technical Role and Batak Life Philosophy every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % 2);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const videoRef = useRef<HTMLVideoElement>(null);

  // Jump to second 31 for dramatic Lake Toba aerial footage and ensure autoplay
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 31;
      video.play().catch(() => {});
    }
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = prefersReducedMotion
    ? undefined
    : {
      hidden: { opacity: 0, y: 15 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
    };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex flex-col justify-between pt-20 pb-6 sm:pt-24 sm:pb-8 overflow-hidden"
    >
      {/* Background Video (Native HTML5 Video: 100% Zero Buttons, Zero Delay, Muted Autoplay, Seamless Loop) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Fallback Image while video is loading */}
        <Image
          src="/images/wallpapers/wallpaper-bendera-indonesia.webp"
          alt="Hero Background Wallpaper"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
          quality={85}
        />

        {/* Full-bleed Native HTML5 Video Element (No YouTube Player, No Buttons Ever) */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover pointer-events-none select-none scale-105"
          preload="auto"
          aria-hidden="true"
        >
          <source src="/videos/lake-toba.mp4" type="video/mp4" />
        </video>

        {/* Ambient Dark Overlays to ensure 100% text legibility */}
        {/* Layer 1: Dark tint for high text contrast */}
        <div className="absolute inset-0 z-[1] bg-[#030712]/65 pointer-events-none" />

        {/* Layer 2: Subtle radial vignette to focus center content */}
        <div className="absolute inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,transparent_20%,#030712_100%)] opacity-85 pointer-events-none" />

        {/* Layer 3: Left gradient on desktop for headline readability */}
        <div className="hidden lg:block absolute inset-0 z-[3] bg-gradient-to-r from-[#030712]/90 via-[#030712]/50 to-transparent w-3/5 pointer-events-none" />

        {/* Layer 4: Top edge blend with navbar */}
        <div className="absolute top-0 left-0 right-0 h-28 z-[4] bg-gradient-to-b from-[#030712] via-[#030712]/70 to-transparent pointer-events-none" />

        {/* Layer 5: Bottom edge blend to next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 z-[5] bg-gradient-to-t from-[#030712] via-[#030712]/90 to-transparent pointer-events-none" />
      </div>

      {/* Hero Container */}
      <div className="relative z-10 w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex-1 flex items-center">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full py-4 sm:py-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Narrative & CTAs (7 cols) - Muncul Kedua di HP (order-2) */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Headline - Refined, Balanced Font Scale dengan Drop Shadow Alami */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
            >
              {t('Halo, Saya', "Hi, I'm")}{' '}
              <span className="gradient-accent-text block sm:inline">
                Oscar Tambunan
              </span>
            </motion.h1>

            {/* Subtitle & Role with Smooth Rotating Animation (Responsif penuh di HP tanpa kepotong) */}
            <div className="min-h-[3rem] sm:min-h-[2rem] flex items-center justify-center lg:justify-start mb-3">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, y: 8, filter: 'blur(3px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -8, filter: 'blur(3px)' }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="text-base sm:text-lg font-medium text-white max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)] leading-snug"
                >
                  {roleIndex === 0 ? (
                    <>
                      Junior Full-Stack Developer{' '}
                      <span className="font-normal text-white">
                        &amp; Linux Systems Engineer
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="font-medium text-white">
                        Hamoraon
                      </span>{' '}
                      <span className="text-white font-normal">-</span>{' '}
                      <span className="font-medium text-white">
                        Hagabeon
                      </span>{' '}
                      <span className="text-white font-normal">-</span>{' '}
                      <span className="font-medium text-white">
                        Hasangapon
                      </span>
                    </>
                  )}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Narrative Description - To The Point */}
            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-sm text-slate-300 sm:text-slate-400 max-w-xl mb-6 leading-relaxed text-pretty drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
            >
              {t(
                'Mahasiswa Teknik Informatika di ',
                'Informatics Engineering student at '
              )}
              <span className="text-white font-medium">Universitas Gunadarma</span>.
              {t(
                ' Mengembangkan aplikasi full-stack terukur dan infrastruktur bare-metal self-hosted dari Proxmox VE hingga Cloudflare tunnels.',
                ' Building scalable full-stack applications and self-hosted bare-metal infrastructure from Proxmox VE to Cloudflare tunnels.'
              )}
            </motion.p>


            {/* Social Links with Dashboard Icons (Same as Skills) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 text-xs text-slate-300"
            >
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="inline-flex items-center gap-2 p-2.5 sm:px-3.5 sm:py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 hover:border-white/20 transition-all duration-200 group shadow-sm cursor-pointer backdrop-blur-sm"
                  aria-label={item.name}
                  title={item.name}
                >
                  <div className="w-4 h-4 sm:w-4.5 sm:h-4.5 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110 relative">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={18}
                      height={18}
                      className="w-full h-full object-contain"
                      unoptimized
                    />
                  </div>
                  <span className="hidden sm:inline font-medium text-slate-300 group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Oscar Portrait Card (5 cols) - Muncul Pertama di HP (order-1) */}
          <motion.div
            variants={itemVariants}
            className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group w-full max-w-[220px] sm:max-w-[280px] lg:max-w-[340px]">
              {/* Subtle dynamic ambient glow */}
              <div
                className="absolute -inset-2 bg-gradient-to-tr from-blue-600/20 via-indigo-500/15 to-emerald-500/10 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                aria-hidden="true"
              />

              {/* Portrait Frame Container */}
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-slate-800/80 via-slate-900/90 to-[#080a10] p-2 shadow-2xl backdrop-blur-md">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800 to-slate-950 flex items-center justify-center">
                  {/* Profile Photo */}
                  <Image
                    src="/images/profile/oscar-portrait.jpg"
                    alt="Oscar Victorious Putra Tambunan"
                    width={340}
                    height={425}
                    priority
                    className="relative z-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
