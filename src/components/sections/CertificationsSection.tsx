'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  ExternalLink,
  Building2,
  Maximize2,
  X,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import { certifications } from '@/data/certifications';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/context/LanguageContext';
import { Certification } from '@/types';

const CERT_IDS = [
  '#LF-LFS162',
  '#IBM-SQL8X',
  '#GCP-ALISON',
  '#IESE-FINANCE',
  '#INFEST-BP26',
  '#INFEST-ICIK',
  '#BEM-PKKMB25',
];

export default function CertificationsSection() {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [lightboxCert, setLightboxCert] = useState<Certification | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const total = certifications.length;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation (Left / Right Arrow)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxCert) return;
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxCert, total]);

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

  return (
    <AnimatedSection id="certifications" className="py-16 sm:py-24 bg-bg-secondary relative overflow-hidden font-sans border-t border-white/[0.08]">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.06),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Editorial Section Header */}
        <SectionHeading
          title={t('Sertifikasi & Penghargaan', 'Certifications & Honors')}
          subtitle={t(
            'Kredensial teknis terakreditasi, kursus rekayasa cloud & DevOps, dan penghargaan universitas.',
            'Accredited technical credentials, cloud & DevOps engineering coursework, and university honors.'
          )}
        />
      </div>

      {/* Full-Width Slider Container (Kanan Kiri Full Screen Sesuai Referensi) */}
      <div
        className="w-full relative overflow-hidden py-4 select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full max-w-[620px] mx-auto h-[530px] sm:h-[580px] flex items-center justify-center">
          {certifications.map((cert, index) => {
            // Calculate shortest relative circular distance
            let diff = index - currentIndex;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const isCenter = diff === 0;
            const isLeft = diff === -1;
            const isRight = diff === 1;
            const isVisible = Math.abs(diff) <= 1;

            // Compute offset: active in center, neighbors peek seamlessly from left/right edges
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

            const docUrl = (cert.certificateFile || cert.credentialUrl) ?? undefined;
            const certId = CERT_IDS[index] || `#0${index + 1}`;

            return (
              <motion.div
                key={cert.name}
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
                  if (isCenter) setLightboxCert(cert);
                }}
                className={`absolute top-0 w-[90vw] max-w-[360px] sm:max-w-[540px] md:max-w-[600px] h-full ${
                  isCenter
                    ? 'cursor-pointer'
                    : isVisible
                    ? 'cursor-pointer hover:opacity-75 transition-opacity'
                    : 'pointer-events-none'
                }`}
              >
                {/* Minimalist Card (ATM Dicoding Reference Style in Dark Palette) */}
                <div
                  className={`w-full h-full rounded-2xl border transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between overflow-hidden relative ${
                    isCenter
                      ? 'bg-[#080d19] border-white/20 shadow-2xl shadow-black/80 hover:border-accent/40'
                      : 'bg-[#080d19]/90 border-white/10 shadow-lg'
                  }`}
                >
                  {/* Certificate Image Frame */}
                  <div className="w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#030712] border border-white/10 relative flex items-center justify-center p-3 mb-3.5 group/img shadow-inner">
                    {cert.thumbnail ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={cert.thumbnail}
                        alt={cert.name}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover/img:scale-[1.03]"
                      />
                    ) : (
                      <Award className="w-12 h-12 text-sky-400" />
                    )}

                    {isCenter && (
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-xs font-sans text-white backdrop-blur-[2px]">
                        <Maximize2 className="w-4 h-4 text-sky-400" />
                        <span>{t('Perbesar Tampilan', 'Zoom View')}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Information Body */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      {/* Issuer / Category */}
                      <div className="text-[11px] font-sans font-semibold text-sky-400 uppercase tracking-widest truncate mb-1">
                        {cert.issuer}
                      </div>

                      {/* Title */}
                      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white tracking-tight leading-snug line-clamp-2">
                        {cert.name}
                      </h3>

                      {/* Period / Date */}
                      <p className="text-xs font-sans text-slate-400 mt-1">
                        {cert.date}
                      </p>

                      {/* Concise Description */}
                      {cert.description && (
                        <p className="text-xs text-slate-400 leading-relaxed mt-2 line-clamp-2">
                          {cert.description}
                        </p>
                      )}
                    </div>

                    {/* Bottom Action Bar: BUKA DOKUMEN / DETAIL / #ID */}
                    <div className="pt-3.5 mt-3 border-t border-white/10 flex items-center justify-between text-xs font-sans">
                      <div className="flex items-center gap-3.5 sm:gap-4">
                        {docUrl ? (
                          <a
                            href={docUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-slate-200 hover:text-accent font-semibold transition-colors group/link"
                          >
                            <span>{t('BUKA DOKUMEN', 'OPEN DOCUMENT')}</span>
                            <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover/link:text-accent transition-colors" />
                          </a>
                        ) : (
                          <span className="text-slate-500">{t('RESMI', 'OFFICIAL')}</span>
                        )}

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setLightboxCert(cert);
                          }}
                          className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
                        >
                          <span>{t('DETAIL', 'DETAILS')}</span>
                          <Maximize2 className="w-3 h-3 text-sky-400" />
                        </button>
                      </div>

                      {/* Industrial Hash/Serial ID */}
                      <span className="text-slate-500 font-sans text-[10px] sm:text-[11px] tracking-wider shrink-0">
                        {certId}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Minimalist Bottom Navigation Bar: [ ← ] 01 / 07 [ → ] */}
        <div className="flex items-center justify-center gap-6 sm:gap-8 mt-8 sm:mt-10">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Certificate"
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
            aria-label="Next Certificate"
            className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg border border-white/20 hover:border-accent text-slate-300 hover:text-white hover:bg-white/[0.06] transition-all duration-200 flex items-center justify-center cursor-pointer active:scale-95 shadow-lg group"
          >
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal: Tampilan Layar Penuh Bebas Distraksi */}
      <AnimatePresence>
        {lightboxCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md"
            onClick={() => setLightboxCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#080d19] border border-white/15 p-4 sm:p-6 shadow-2xl relative overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 pb-3 mb-3 border-b border-white/10 shrink-0">
                <div className="min-w-0">
                  <span className="text-[10px] font-sans font-semibold text-sky-400 uppercase tracking-wider">
                    {lightboxCert.category} &bull; {lightboxCert.date}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-snug mt-0.5">
                    {lightboxCert.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{lightboxCert.issuer}</span>
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setLightboxCert(null)}
                  aria-label="Tutup"
                  className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body: Certificate Image */}
              <div className="flex-1 min-h-[240px] sm:min-h-[400px] bg-[#030712] rounded-xl overflow-hidden border border-white/10 flex items-center justify-center p-2 sm:p-4 shadow-inner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={lightboxCert.thumbnail || lightboxCert.certificateFile || ''}
                  alt={lightboxCert.name}
                  className="w-full h-full object-contain max-h-[60vh]"
                />
              </div>

              {/* Modal Footer */}
              <div className="pt-3 mt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 shrink-0">
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 max-w-xl">
                  {lightboxCert.description}
                </p>

                {((lightboxCert.certificateFile || lightboxCert.credentialUrl) ?? undefined) && (
                  <a
                    href={(lightboxCert.certificateFile || lightboxCert.credentialUrl) ?? '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-accent text-bg-primary font-semibold text-xs hover:bg-accent/90 transition-colors shrink-0 shadow-md"
                  >
                    <span>{t('Buka Dokumen Asli', 'Open Original Document')}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
}
