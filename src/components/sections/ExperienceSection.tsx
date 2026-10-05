'use client';

import { ExternalLink } from 'lucide-react';
import { education } from '@/data/education';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/context/LanguageContext';

export default function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <AnimatedSection id="experience" className="py-16 sm:py-24 bg-bg-secondary relative overflow-hidden border-t border-white/[0.08]">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <SectionHeading
          title={t('Pendidikan & Pengalaman', 'Education & Experience')}
          subtitle={t(
            'Riwayat pendidikan akademik & rekam jejak peran profesional.',
            'Academic education history & track record of professional roles.'
          )}
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
                src="/images/logos/gunadarma.png"
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
                {t('Sarjana Teknik Informatika', education.degree)}{' '}
                <span className="text-slate-400 font-normal">
                  {t('· Sarjana Strata 1 (S1)', '· Undergraduate Degree (S1 Teknik Informatika)')}
                </span>
              </div>

              {/* Level 5: Dates, Location & Mode */}
              <p className="text-xs text-slate-400 font-sans mt-1">
                {education.yearRange} <span className="text-slate-500">·</span> Depok, West Java, Indonesia <span className="text-slate-500">·</span> {t('Di Lokasi', 'On-site')}
              </p>

              {/* Level 6: Content & Academic Competencies (Kalimat Singkat & To The Point) */}
              <p className="mt-2.5 text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                {t(
                  'Fokus pada Rekayasa Perangkat Lunak, Basis Data Relasional, dan Jaringan Komputer dengan implementasi langsung pada aplikasi web produksi dan server bare-metal mandiri.',
                  'Focusing on Software Engineering, Relational Databases, and Computer Networks with hands-on implementation in production web applications and self-hosted bare-metal servers.'
                )}
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
                src="/images/logos/labamen.png"
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
                IT Staff &amp; Support <span className="text-slate-400 font-normal">· {t('Paruh Waktu', 'Part-time')}</span>
              </div>

              {/* Level 5: Dates & Location */}
              <p className="text-xs text-slate-400 font-sans mt-1">
                {t('Jun 2026 – Sekarang', 'Jun 2026 – Present')} <span className="text-slate-500">·</span> {t('5 bln', '5 mos')} <span className="text-slate-500">·</span> Depok, West Java, Indonesia <span className="text-slate-500">·</span> {t('Di Lokasi', 'On-site')}
              </p>

              {/* Level 6: Responsibilities (Kalimat Singkat & To The Point) */}
              <p className="mt-2.5 text-xs sm:text-sm text-slate-300/90 leading-relaxed">
                {t(
                  'Bertanggung jawab atas pemeliharaan rutin PC laboratorium, instalasi software praktikum (Office & Zahir Accounting), serta pengelolaan portal web dan database operasional.',
                  'Responsible for routine maintenance of laboratory PCs, practical software installations (Office & Zahir Accounting), and managing the web portal and operational databases.'
                )}
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
                src="/images/logos/kspm.png"
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
                {t('Organisasi Mahasiswa', 'Student Organization')} <span className="text-slate-400 font-normal">· Depok, West Java, Indonesia</span>
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
                    <span className="text-[10px] font-sans text-accent bg-accent/10 px-2 py-0.5 rounded-full border border-accent/20 font-medium">
                      {t('Dipromosikan', 'Promoted')}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 font-sans mt-1">
                    {t('Jun 2026 – Sekarang', 'Jun 2026 – Present')} <span className="text-slate-500">·</span> {t('5 bln', '5 mos')} <span className="text-slate-500">·</span> Depok, West Java <span className="text-slate-500">·</span> {t('Di Lokasi', 'On-site')}
                  </p>

                  <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-300/90 leading-relaxed list-disc list-outside pl-4 sm:pl-5">
                    <li>{t('Pengelolaan kas treasury organisasi, pengawasan arus kas (cash flow), dan alokasi anggaran operasional kegiatan.', 'Managing organization treasury funds, monitoring cash flow, and allocating event operational budgets.')}</li>
                    <li>{t('Edukasi analisis portofolio ekuitas, diversifikasi aset, dan manajemen risiko bagi anggota divisi.', 'Educating division members on equity portfolio analysis, asset diversification, and risk management.')}</li>
                  </ul>
                </div>

                {/* Role 2: Member */}
                <div className="relative">
                  {/* Timeline Node Dot */}
                  <span className="absolute -left-6 sm:-left-7 top-1.5 w-2.5 h-2.5 rounded-full bg-slate-500 ring-4 ring-bg-secondary" />

                  <h4 className="text-xs sm:text-sm font-semibold text-slate-200">
                    {t('Anggota Divisi', 'Member')}
                  </h4>

                  <p className="text-xs text-slate-400 font-sans mt-1">
                    {t('Mei 2026 – Jun 2026', 'May 2026 – Jun 2026')} <span className="text-slate-500">·</span> {t('2 bln', '2 mos')} <span className="text-slate-500">·</span> Depok, West Java <span className="text-slate-500">·</span> {t('Di Lokasi', 'On-site')}
                  </p>

                  <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-300/90 leading-relaxed list-disc list-outside pl-4 sm:pl-5">
                    <li>{t('Mempelajari fondasi analisis fundamental valuasi ekuitas (PBV, PER) serta metodologi evaluasi rasio keuangan.', 'Studied foundations of fundamental equity valuation (PBV, PER) and financial ratio evaluation methodologies.')}</li>
                    <li>{t('Riset berkala kondisi pasar makroekonomi dan analisis tren sebelum meraih promosi ke posisi Kepala Divisi.', 'Conducted periodic research on macroeconomic conditions and trend analysis before being promoted to Head of Asset Management.')}</li>
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
