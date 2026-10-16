'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/context/LanguageContext';
import { Heart, ExternalLink } from 'lucide-react';

export default function TrendingNewsSection() {
  const { t } = useLanguage();

  return (
    <AnimatedSection
      id="news"
      className="py-16 sm:py-24 bg-[#060911] relative overflow-hidden border-t border-white/[0.08]"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-48 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <SectionHeading
          title={t('Isu Terkini', 'Trending News')}
          subtitle={t(
            'Sorotan berita aktual mengenai bencana kebakaran hutan dan lahan (Karhutla) serta urgensi konservasi ekosistem di Indonesia.',
            'Spotlight on ongoing forest and land fire (Karhutla) emergencies and the critical importance of ecosystem conservation in Indonesia.'
          )}
        />

        {/* 2-Column Grid Lebar Penuh (Sama Lebar dengan Section di Atasnya, Tidak Menyempit) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch w-full">
          {/* Kolom 1 (Kiri): Sematan Video YouTube (iFrame Semantik) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#070c18]/90 backdrop-blur-md shadow-2xl p-2.5 sm:p-3.5 flex flex-col justify-between h-full space-y-3">
              {/* YouTube Video iFrame Container (Full Bleed Aspect Video) */}
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/80 border border-white/10 shadow-2xl">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/BdJ5oRjGTP8?rel=0&modestbranding=1"
                  title="Dokumentasi Berita Karhutla - Taman Nasional Tanjung Puting"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full border-0"
                />
              </div>

              {/* Footer Meta Video dengan Link Resmi orangutan.or.id */}
              <div className="px-1.5 pt-0.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-slate-400 font-mono">
                <span>{t('Liputan Khusus: Suaka Orangutan Tanjung Puting', 'Field Report: Tanjung Puting Orangutan Sanctuary')}</span>
                <a
                  href="https://www.orangutan.or.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors group/link"
                  title="Kunjungi Situs Resmi Borneo Orangutan Survival (BOS) Foundation"
                >
                  <Heart className="w-3 h-3 text-rose-400 fill-rose-400/30 shrink-0" />
                  <span className="font-semibold underline underline-offset-2">orangutan.or.id</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 group-hover/link:text-emerald-300 shrink-0" />
                </a>
              </div>
            </div>
          </div>

          {/* Kolom 2 (Kanan): Penjelasan Rinci & Kotak Donasi Konservasi BOS Foundation */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="rounded-2xl border border-white/10 bg-[#070c18]/90 backdrop-blur-md shadow-2xl p-5 sm:p-6 md:p-7 flex flex-col justify-between h-full space-y-4">
              <div className="space-y-3">
                {/* Judul Utama Berita */}
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white tracking-tight leading-snug">
                  {t(
                    'Karhutla Kian Mengganas: Kobaran Api Melanda Kawasan Konservasi Orangutan',
                    'Wildfires Rage: Fires Sweep Through Orangutan Conservation Sanctuaries'
                  )}
                </h3>

                {/* Penjelasan Konten Berita */}
                <div className="space-y-2.5 text-xs sm:text-sm text-slate-300/90 leading-relaxed font-sans">
                  <p>
                    {t(
                      'Bencana kebakaran hutan dan lahan (Karhutla) kembali mencapai fase darurat saat api menjalar mendekati kawasan inti Taman Nasional Tanjung Puting, Kalimantan Tengah—salah satu suaka populasi orangutan liar paling vital di muka bumi.',
                      'Forest and land fire emergencies (Karhutla) have reached a critical stage as flames spread close to the core sanctuary of Tanjung Puting National Park in Central Kalimantan—one of the most vital habitats for wild orangutans on earth.'
                    )}
                  </p>
                  <p>
                    {t(
                      'Lahan gambut kering di musim kemarau memicu api bawah tanah yang sulit dipadamkan, menimbulkan kabut asap pekat lintas wilayah serta mengancam keanekaragaman hayati endemik yang tidak dapat tergantikan.',
                      'Dry peatlands during drought seasons create subterranean fires that are notoriously difficult to extinguish, blanketing vast regions with hazardous smoke and pushing endangered endemic species closer to the brink.'
                    )}
                  </p>
                </div>
              </div>

              {/* Kartu Khusus Donasi & Informasi Borneo Orangutan Survival (BOS) Foundation */}
              <div className="p-4 rounded-xl bg-emerald-500/[0.08] border border-emerald-500/25 space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-emerald-300 flex items-center gap-1.5 font-sans">
                    <Heart className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20 shrink-0" />
                    {t('Tempat Donasi & Konservasi Resmi', 'Official Conservation & Donation')}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 font-medium">
                    BOS Foundation
                  </span>
                </div>

                <p className="text-[11px] sm:text-xs text-slate-300/95 leading-relaxed font-sans">
                  {t(
                    'Sejak 1991, Yayasan Penyelamatan Orangutan Borneo (Borneo Orangutan Survival / BOS Foundation) telah bekerja tanpa henti untuk melestarikan orangutan Kalimantan dan habitatnya, bekerja sama dengan masyarakat lokal, pemerintah Indonesia, dan organisasi mitra internasional. Pelajari lebih lanjut tentang nilai-nilai, pencapaian, dan tim kami.',
                    'Since 1991, the Borneo Orangutan Survival (BOS) Foundation has worked tirelessly to conserve the Bornean orangutan and its habitat, in cooperation with local communities, Indonesian authorities, and international partner organisations. Learn more about our values, our achievements, and our team.'
                  )}
                </p>

                <div className="pt-1">
                  <a
                    href="https://www.orangutan.or.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-md hover:shadow-emerald-500/20 group/btn"
                  >
                    <Heart className="w-3.5 h-3.5 fill-current shrink-0" />
                    <span>{t('Donasi & Pelajari di orangutan.or.id', 'Donate & Learn at orangutan.or.id')}</span>
                    <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform shrink-0" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
