'use client';

import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/context/LanguageContext';


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
          {/* Kolom 1 (Kiri): Sematan Video YouTube (iFrame Semantik Bersih Tanpa Header Badge) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-[#070c18]/90 backdrop-blur-md shadow-2xl p-2 sm:p-3 flex flex-col justify-center h-full">
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
            </div>
          </div>

          {/* Kolom 2 (Kanan): Penjelasan Rinci & Urgensi Lingkungan (Tanpa Kutipan Tambahan) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="rounded-2xl border border-white/10 bg-[#070c18]/90 backdrop-blur-md shadow-2xl p-5 sm:p-7 lg:p-8 flex flex-col justify-center h-full space-y-4">
              {/* Judul Utama Berita */}
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white tracking-tight leading-snug">
                {t(
                  'Karhutla Kian Mengganas: Kobaran Api Melanda Kawasan Konservasi Orangutan',
                  'Wildfires Rage: Fires Sweep Through Orangutan Conservation Sanctuaries'
                )}
              </h3>

              {/* Penjelasan Konten Berita */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-300/90 leading-relaxed font-sans">
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
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
