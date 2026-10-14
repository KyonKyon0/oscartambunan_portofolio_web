'use client';

import Image from 'next/image';
import { profile } from '@/data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#070a12] relative z-20 font-sans overflow-hidden" role="contentinfo">
      {/* Background Wallpaper: wallpaper-batak.avif */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <Image
          src="/images/wallpapers/wallpaper-batak.avif"
          alt="Batak Cultural Wallpaper"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-45 sm:opacity-55"
          unoptimized
        />
        {/* Layer 1: Dark tint for text legibility */}
        <div className="absolute inset-0 bg-[#070a12]/75" />

        {/* Layer 2: Subtle radial vignette to focus attention towards the center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#070a12_100%)] opacity-85" />

        {/* Layer 3: Top edge seamless transition with Contact section */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#070a12] via-[#070a12]/70 to-transparent" />
      </div>

      {/* Compact Content: ODC Server di kiri, Porsea & Copyright tepat di tengah */}
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 py-3.5 sm:py-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-2.5 sm:gap-4">
          {/* Kolom 1 (Kiri): Logo ODC + Teks Server */}
          <div className="flex items-center justify-center sm:justify-start gap-2.5 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logos/odc.avif"
              alt="ODC Server Logo"
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain shrink-0"
            />
            <span className="text-xs sm:text-sm font-semibold text-white tracking-tight">
              Server
            </span>
          </div>

          {/* Kolom 2 (Tengah): Tulisan Porsea & Di Bawahnya Copyright Oscar */}
          <div className="flex flex-col items-center justify-center gap-0.5 text-center select-none">
            {/* Logo Rumah Batak + Porsea (Optical Center Aligned) */}
            <div className="flex items-center justify-center gap-2">
              <div className="w-5.5 h-5.5 sm:w-6 sm:h-6 relative shrink-0 flex items-center justify-center -translate-y-1 sm:-translate-y-1.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/logos/rumah-batak.avif"
                  alt="Rumah Batak"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-signature text-2xl sm:text-3xl font-medium text-white select-none leading-none tracking-wide">
                Porsea
              </span>
            </div>

            {/* Tepat Di Bawah Tulisan Porsea: Copyright Oscar */}
            <div className="text-[11px] sm:text-xs text-slate-400 font-sans tracking-tight">
              © {currentYear} {profile.name}
            </div>
          </div>

          {/* Kolom 3 (Kanan): Spacer penyeimbang di desktop agar tengah benar-benar presisi */}
          <div className="hidden sm:block" aria-hidden="true" />
        </div>
      </div>
    </footer>
  );
}
