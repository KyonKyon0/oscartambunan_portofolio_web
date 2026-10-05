'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Maximize2,
  X,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/context/LanguageContext';

interface GallerySectionProps {
  initialImages?: string[];
}

const DEFAULT_IMAGES = [
  'kota-tua-gambir.jpg',
  'smoking-man.jpg',
  'ui-x-ug.jpg',
  'capung.jpg',
  'komodo.jpg',
];

function getPhotoTitle(filename: string): string {
  const lower = filename.toLowerCase();
  if (lower.includes('kota') || lower.includes('gambir')) return 'Kota Tua Gambir';
  if (lower.includes('smoking') || lower.includes('man')) return 'Smoking Man in Shadow';
  if (lower.includes('ui') && lower.includes('ug')) return 'UI x UG Campus Perspective';
  if (lower.includes('capung')) return 'Capung (Dragonfly Macro)';
  if (lower.includes('komodo')) return 'Komodo Dragon Wildlife Study';
  return filename.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
}

export default function GallerySection({ initialImages }: GallerySectionProps) {
  const { t } = useLanguage();
  const [images, setImages] = useState<string[]>(
    initialImages && initialImages.length > 0 ? initialImages : DEFAULT_IMAGES
  );
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/gallery')
      .then((res) => res.json())
      .then((data) => {
        if (data.images && data.images.length > 0) {
          setImages(data.images);
        }
      })
      .catch(console.error);
  }, []);

  const total = images.length || 1;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation (Left / Right Arrow)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxImage) return;
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxImage, total]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX - touchEndX;
    if (deltaX > 45) {
      nextSlide();
    } else if (deltaX < -45) {
      prevSlide();
    }
    setTouchStartX(null);
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <AnimatedSection
      id="gallery"
      className="py-16 sm:py-24 bg-bg-primary relative overflow-hidden font-sans border-t border-white/[0.08]"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <SectionHeading
          title={t('Fotografi & Sudut Pandang Visual', 'Photography & Creative Eye')}
          subtitle={t(
            'Koleksi bidikan fotografi jalanan, arsitektur, dan komposisi visual melalui lensa kamera.',
            'Everyday moments, architecture, and textures captured through physical glass.'
          )}
        />
      </div>

      {/* Full-Width 3D Slider Container — Sama Persis dengan Certifications */}
      <div
        className="w-full relative overflow-hidden py-4 select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full max-w-[620px] mx-auto h-[460px] sm:h-[520px] flex items-center justify-center">
          {images.map((image, index) => {
            // Calculate shortest relative circular distance
            let diff = index - currentIndex;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const isCenter = diff === 0;
            const isLeft = diff === -1;
            const isRight = diff === 1;
            const isVisible = Math.abs(diff) <= 1;

            let xOffset = '0%';
            let scale = 1;
            let opacity = 1;
            let zIndex = 30;

            if (isCenter) {
              xOffset = '0%';
              scale = 1;
              opacity = 1;
              zIndex = 10;
            } else if (isRight) {
              xOffset = '82%';
              scale = 0.92;
              opacity = 0.45;
              zIndex = 5;
            } else if (isLeft) {
              xOffset = '-82%';
              scale = 0.92;
              opacity = 0.45;
              zIndex = 5;
            } else if (diff > 1) {
              xOffset = '160%';
              scale = 0.82;
              opacity = 0;
              zIndex = 0;
            } else {
              xOffset = '-160%';
              scale = 0.82;
              opacity = 0;
              zIndex = 0;
            }

            const title = getPhotoTitle(image);

            return (
              <motion.div
                key={image}
                animate={{
                  x: xOffset,
                  scale,
                  opacity,
                  zIndex,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 28,
                  mass: 0.8,
                }}
                onClick={() => {
                  if (isLeft) prevSlide();
                  if (isRight) nextSlide();
                  if (isCenter) setLightboxImage(image);
                }}
                className={`absolute top-0 w-[90vw] max-w-[360px] sm:max-w-[540px] md:max-w-[600px] h-full ${
                  isCenter
                    ? 'cursor-pointer'
                    : isVisible
                    ? 'cursor-pointer hover:opacity-75 transition-opacity'
                    : 'pointer-events-none'
                }`}
              >
                {/* Minimalist Card — Sama Persis dengan Certifications */}
                <div
                  className={`w-full h-full rounded-2xl border transition-all duration-300 p-3.5 sm:p-4 flex flex-col justify-between overflow-hidden relative ${
                    isCenter
                      ? 'bg-[#080d19] border-white/20 shadow-2xl shadow-black/80 hover:border-accent/40'
                      : 'bg-[#080d19]/90 border-white/10 shadow-lg'
                  }`}
                >
                  {/* Photo Frame */}
                  <div className="w-full flex-1 rounded-xl overflow-hidden bg-[#030712] border border-white/10 relative flex items-center justify-center mb-3 group/img shadow-inner">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/images/photography/${image}`}
                      alt={title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-[1.03]"
                    />

                    {isCenter && (
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-xs font-sans text-white backdrop-blur-[2px]">
                        <Maximize2 className="w-4 h-4 text-accent" />
                        <span>{t('Perbesar Tampilan', 'Zoom View')}</span>
                      </div>
                    )}
                  </div>

                  {/* HANYA TAMPILKAN JUDUL SAJA (Sisanya tidak usah) */}
                  <div className="px-1 py-1">
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight leading-snug line-clamp-1">
                      {title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Minimalist Bottom Navigation Bar: [ ← ] 01 / 05 [ → ] */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 mt-8 sm:mt-10">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Photo"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg border border-white/20 hover:border-accent text-slate-300 hover:text-white hover:bg-white/[0.06] transition-all duration-200 flex items-center justify-center cursor-pointer active:scale-95 shadow-lg group"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-x-0.5" />
          </button>

          <div className="font-sans tabular-nums text-sm sm:text-base tracking-[0.15em] text-slate-300 flex items-center gap-2 select-none">
            <span className="text-white font-bold">{String(currentIndex + 1).padStart(2, '0')}</span>
            <span className="text-slate-600">/</span>
            <span className="text-slate-400">{String(total).padStart(2, '0')}</span>
          </div>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Photo"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg border border-white/20 hover:border-accent text-slate-300 hover:text-white hover:bg-white/[0.06] transition-all duration-200 flex items-center justify-center cursor-pointer active:scale-95 shadow-lg group"
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal: Tampilan Layar Penuh Bebas Distraksi */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md"
            onClick={() => setLightboxImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#080d19] border border-white/15 p-4 sm:p-6 shadow-2xl relative overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between gap-4 pb-3 mb-3 border-b border-white/10 shrink-0">
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug truncate">
                  {getPhotoTitle(lightboxImage)}
                </h3>

                <button
                  type="button"
                  onClick={() => setLightboxImage(null)}
                  aria-label="Tutup"
                  className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 min-h-[260px] sm:min-h-[460px] bg-[#030712] rounded-xl overflow-hidden border border-white/10 flex items-center justify-center p-2 sm:p-4 shadow-inner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/photography/${lightboxImage}`}
                  alt={getPhotoTitle(lightboxImage)}
                  className="w-full h-full object-contain max-h-[70vh]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
}
