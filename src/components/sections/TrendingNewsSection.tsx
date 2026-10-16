'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/context/LanguageContext';
import { Flame, AlertTriangle, ShieldCheck, ExternalLink } from 'lucide-react';

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
          title={t('Isu Terkini & Kepedulian Lingkungan', 'Trending News & Environmental Focus')}
          subtitle={t(
            'Sorotan berita aktual mengenai bencana kebakaran hutan dan lahan (Karhutla) serta urgensi konservasi ekosistem di Indonesia.',
            'Spotlight on ongoing forest and land fire (Karhutla) emergencies and the critical importance of ecosystem conservation in Indonesia.'
          )}
        />

        {/* 2-Column Grid: Video iFrame di Kiri & Penjelasan Rinci di Kanan */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 xl:gap-12 items-stretch max-w-6xl mx-auto">
          {/* Kolom 1 (Kiri): Sematan Video YouTube (iFrame Semantik) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#070c18]/90 backdrop-blur-md shadow-2xl p-3.5 sm:p-4.5 flex flex-col justify-between h-full space-y-3.5">
              {/* Badge Header Video */}
              <div className="flex items-center justify-between gap-2 px-1">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/25">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping shrink-0" />
                    {t('SEDANG TREN · LIPUTAN KHUSUS', 'TRENDING · SPECIAL REPORT')}
                  </span>
                </div>
                <a
                  href="https://www.youtube.com/watch?v=BdJ5oRjGTP8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-mono text-slate-400 hover:text-white transition-colors flex items-center gap-1 group/yt"
                  title="Tonton di YouTube"
                >
                  <span>YouTube</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover/yt:text-accent transition-colors" />
                </a>
              </div>

              {/* YouTube Video iFrame Container */}
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

              {/* Footer Meta Video */}
              <div className="px-1 pt-0.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1.5 text-rose-300/90 font-sans text-xs">
                  <Flame className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                  Official iNews: Karhutla Makin Mengganas
                </span>
                <span className="text-[10px] text-slate-500">
                  {t('Taman Nasional Tanjung Puting', 'Tanjung Puting National Park')}
                </span>
              </div>
            </div>
          </div>

          {/* Kolom 2 (Kanan): Penjelasan Rinci & Urgensi Lingkungan */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="rounded-2xl border border-white/10 bg-[#070c18]/90 backdrop-blur-md shadow-2xl p-5 sm:p-6 md:p-7 flex flex-col justify-between h-full space-y-4">
              <div className="space-y-3.5">
                {/* Status Kategori */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  <AlertTriangle className="w-3 h-3 text-amber-400 shrink-0" />
                  {t('Darurat Ekologis Indonesia', 'Ecological Emergency')}
                </div>

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
                  <p>
                    {t(
                      'Isu ini mengingatkan kita akan pentingnya pencegahan dini, penegakan hukum pembukaan lahan, serta pemanfaatan teknologi pemantauan satelit dan sensor lingkungan demi mencegah kerusakan biosfer lebih jauh.',
                      'This crisis underscores the urgent need for early mitigation, strict land-clearing enforcement, and leveraging modern satellite monitoring and IoT sensor technologies to safeguard our biosphere.'
                    )}
                  </p>
                </div>
              </div>

              {/* Kutipan Reflektif */}
              <div className="mt-2 p-3.5 rounded-xl bg-amber-500/[0.08] border border-amber-500/20">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-[11px] sm:text-xs text-amber-200/90 italic leading-relaxed">
                    &ldquo;{t(
                      'Hutan adalah benteng pertahanan ekosistem dan penyerap karbon bumi. Menjaga kelestarian alam bukan sekadar pilihan, melainkan tanggung jawab kita demi masa depan.',
                      'Forests are the earth’s natural climate shields and carbon sinks. Protecting nature is not a luxury, but our fundamental responsibility to the future.'
                    )}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
