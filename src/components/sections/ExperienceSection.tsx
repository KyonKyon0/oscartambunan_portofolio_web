'use client';

import { ExternalLink } from 'lucide-react';
import { education } from '@/data/education';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

export default function ExperienceSection() {
  return (
    <AnimatedSection id="experience" className="py-16 sm:py-24 bg-bg-secondary relative overflow-hidden border-t border-white/[0.08]">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <SectionHeading
          title="Education &amp; Experience"
          subtitle="Riwayat pendidikan akademik &amp; rekam jejak peran profesional."
        />

        {/* LinkedIn-Style Flow — Standardized Typography Hierarchy Across All Entries */}
        <div className="w-full divide-y divide-white/[0.08]">
          {/* ========================================================================= */}
          {/* Entry 1: Universitas Gunadarma (Education)                                */}
          {/* ========================================================================= */}
          <div className="pb-6 sm:pb-8 flex items-start gap-3.5 sm:gap-5">
            {/* University Logo */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-slate-900 border border-white/10 p-1.5 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/image/Gunadarma logo.png"
                alt="Universitas Gunadarma Logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Content Body */}
            <div className="flex-1 min-w-0">
              {/* Level 3: Organization / Institution Title */}
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {education.institution}
              </h3>

              {/* Level 4: Degree / Program */}
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-0.5">
                {education.degree}{' '}
                <span className="text-slate-400 font-normal">· Undergraduate Degree (S1 Teknik Informatika)</span>
              </div>

              {/* Level 5: Dates, Location & Mode */}
              <p className="text-xs text-slate-400 font-mono mt-1">
                {education.yearRange} <span className="text-slate-500">·</span> Depok, West Java, Indonesia <span className="text-slate-500">·</span> On-site
              </p>

              {/* Level 6: Content & Academic Competencies (Kalimat Singkat & To The Point) */}
              <p className="mt-2.5 text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                Fokus pada Rekayasa Perangkat Lunak, Basis Data Relasional, dan Jaringan Komputer dengan implementasi langsung pada aplikasi web produksi dan server bare-metal mandiri.
              </p>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* Entry 2: Laboratorium Akuntansi Menengah                                  */}
          {/* ========================================================================= */}
          <div className="py-6 sm:py-8 flex items-start gap-3.5 sm:gap-5">
            {/* Organization Logo */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-slate-900 border border-white/10 p-1.5 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/image/Labamen Logo.png"
                alt="Laboratorium Akuntansi Menengah Logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Content Body */}
            <div className="flex-1 min-w-0">
              {/* Level 3: Organization Title with Website Link (Identical font size & weight) */}
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                <a
                  href="https://www.ak-menengah.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent hover:underline inline-flex items-center gap-1.5 transition-colors group/link text-white font-bold"
                >
                  <span>Lab. Akuntansi Menengah, Universitas Gunadarma</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover/link:text-accent transition-colors shrink-0" />
                </a>
              </h3>

              {/* Level 4: Role & Employment Type */}
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-0.5">
                IT Staff &amp; Support <span className="text-slate-400 font-normal">· Part-time</span>
              </div>

              {/* Level 5: Dates & Location */}
              <p className="text-xs text-slate-400 font-mono mt-1">
                Jun 2026 – Present <span className="text-slate-500">·</span> 5 mos <span className="text-slate-500">·</span> Depok, West Java, Indonesia <span className="text-slate-500">·</span> On-site
              </p>

              {/* Level 6: Responsibilities (Kalimat Singkat & To The Point) */}
              <p className="mt-2.5 text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                Bertanggung jawab atas pemeliharaan rutin PC laboratorium, instalasi software praktikum (Office &amp; Zahir Accounting), serta pengelolaan portal web dan database operasional.
              </p>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* Entry 3: Kelompok Studi Pasar Modal (KSPM) - Career Progression           */}
          {/* ========================================================================= */}
          <div className="pt-6 sm:pt-8 flex items-start gap-3.5 sm:gap-5">
            {/* Organization Logo */}
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-slate-900 border border-white/10 p-1.5 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/image/KSPM Logo.png"
                alt="KSPM Logo"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Content Body */}
            <div className="flex-1 min-w-0">
              {/* Level 3: Org Name (Identical font size & weight) */}
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Kelompok Studi Pasar Modal (KSPM), Universitas Gunadarma
              </h3>

              {/* Level 4: Organization Scope / Subtitle */}
              <div className="text-xs sm:text-sm font-semibold text-slate-200 mt-0.5">
                Student Organization <span className="text-slate-400 font-normal">· Depok, West Java, Indonesia</span>
              </div>

              {/* Career Progression Timeline (LinkedIn nested line & dots) */}
              <div className="relative pl-6 sm:pl-7 mt-4 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-3 before:w-[2px] before:bg-white/15">
                {/* Role 1: Head of Asset Management */}
                <div className="relative">
                  {/* Timeline Node Dot */}
                  <span className="absolute -left-6 sm:-left-7 top-1.5 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-bg-secondary" />

                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-200">
                      Head of Asset Management
                    </h4>
                    <span className="text-[10px] font-mono text-accent bg-accent/10 px-2 py-0.5 rounded-full border border-accent/20 font-medium">
                      Promoted
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 font-mono mt-1">
                    Jun 2026 – Present <span className="text-slate-500">·</span> 5 mos <span className="text-slate-500">·</span> Depok, West Java <span className="text-slate-500">·</span> On-site
                  </p>

                  <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-300/90 leading-relaxed list-disc list-outside pl-4 sm:pl-5">
                    <li>Pengelolaan kas treasury organisasi, pengawasan arus kas (cash flow), dan alokasi anggaran operasional kegiatan.</li>
                    <li>Edukasi analisis portofolio ekuitas, diversifikasi aset, dan manajemen risiko bagi anggota divisi.</li>
                  </ul>
                </div>

                {/* Role 2: Member */}
                <div className="relative">
                  {/* Timeline Node Dot */}
                  <span className="absolute -left-6 sm:-left-7 top-1.5 w-2.5 h-2.5 rounded-full bg-slate-500 ring-4 ring-bg-secondary" />

                  <h4 className="text-xs sm:text-sm font-semibold text-slate-200">
                    Member
                  </h4>

                  <p className="text-xs text-slate-400 font-mono mt-1">
                    May 2026 – Jun 2026 <span className="text-slate-500">·</span> 2 mos <span className="text-slate-500">·</span> Depok, West Java <span className="text-slate-500">·</span> On-site
                  </p>

                  <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-300/90 leading-relaxed list-disc list-outside pl-4 sm:pl-5">
                    <li>Mempelajari fondasi analisis fundamental valuasi ekuitas (PBV, PER) serta metodologi evaluasi rasio keuangan.</li>
                    <li>Riset berkala kondisi pasar makroekonomi dan analisis tren sebelum meraih promosi ke posisi Kepala Divisi.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
