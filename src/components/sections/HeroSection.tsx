'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Mail,
  Download,
} from 'lucide-react';
import { profile } from '@/data/profile';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';
import Button from '@/components/ui/Button';

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

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
            {/* Headline - Refined, Balanced Font Scale */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-2 leading-tight"
            >
              Hi, I&apos;m{' '}
              <span className="gradient-accent-text block sm:inline">
                Oscar Tambunan
              </span>
            </motion.h1>

            {/* Subtitle & Role */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg font-medium text-slate-200 mb-3 max-w-xl"
            >
              Junior Full-Stack Developer{' '}
              <span className="text-slate-400 font-normal">
                &amp; Linux Systems Engineer
              </span>
            </motion.p>

            {/* Narrative Description - To The Point */}
            <motion.p
              variants={itemVariants}
              className="text-xs sm:text-sm text-slate-400 max-w-xl mb-6 leading-relaxed text-pretty"
            >
              Informatics Engineering student at{' '}
              <span className="text-white font-medium">Universitas Gunadarma</span>.
              Building scalable full-stack applications and self-hosted bare-metal infrastructure from Proxmox VE to Cloudflare tunnels.
            </motion.p>

            {/* Action Buttons: Only Download CV */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start mb-6"
            >
              <Button
                href="/oscar-tambunan-cv.pdf"
                variant="primary"
                icon={Download}
                size="md"
                external
              >
                Download CV
              </Button>
            </motion.div>

            {/* Social Links with Logo Icons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 text-xs text-slate-300"
            >
              <a
                href={profile.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-200 group shadow-sm"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-4 h-4 text-[#0A66C2] fill-current group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.66 1.66 0 1 0-.01 3.32 1.66 1.66 0 0 0 .01-3.32Z" />
                </svg>
                <span className="font-medium text-slate-300 group-hover:text-white transition-colors">LinkedIn</span>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-200 group shadow-sm"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-sky-400 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-slate-300 group-hover:text-white transition-colors">Email</span>
              </a>

              <a
                href={profile.whatsapp || 'https://wa.me/6281222994801'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-200 group shadow-sm"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-4 h-4 text-[#25D366] fill-current group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.29 3.78.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29Z" />
                </svg>
                <span className="font-medium text-slate-300 group-hover:text-white transition-colors">WhatsApp</span>
              </a>

              <a
                href={profile.instagram || 'https://instagram.com/haioscartambunan'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-200 group shadow-sm"
                aria-label="Instagram"
              >
                <svg
                  className="w-4 h-4 text-[#E1306C] fill-none stroke-current stroke-2 group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="font-medium text-slate-300 group-hover:text-white transition-colors">Instagram</span>
              </a>
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
                    src="/image/profile_foto.jpg"
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
