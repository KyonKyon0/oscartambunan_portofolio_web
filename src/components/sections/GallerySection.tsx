'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, ChevronLeft, ChevronRight, Grid, X } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';

interface GallerySectionProps {
  initialImages?: string[];
}

export default function GallerySection({ initialImages = [] }: GallerySectionProps) {
  const [images, setImages] = useState<string[]>(initialImages);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch latest images so drops update instantly without server rebuild
    fetch('/api/gallery')
      .then((res) => res.json())
      .then((data) => {
        if (data.images) {
          setImages(data.images);
        }
      })
      .catch(console.error);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const getVisibleImages = () => {
    if (images.length === 0) return [];
    
    // Calculate previous, current, and next indices
    const prev = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    const next = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    
    return [prev, currentIndex, next];
  };

  const visibleIndices = getVisibleImages();

  return (
    <AnimatedSection id="gallery" className="py-20 sm:py-28 bg-bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Photography"
          subtitle="Capturing moments through the lens."
        />

        {/* Gear Description */}
        <div className="mb-12 max-w-2xl mx-auto text-center">
          <GlassCard className="inline-flex flex-col items-center p-6 sm:p-8 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
            <Camera className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-xl font-bold text-text-primary mb-2">Canon EOS M50</h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              A versatile mirrorless camera system. Currently shooting with the standard 
              <span className="text-text-primary font-medium"> 15-45mm f/3.5-6.3 IS STM </span> 
              kit lens for everyday captures, and the 
              <span className="text-text-primary font-medium"> EF-S 55-250mm f/4-5.6 IS STM </span> 
              for telephoto reach and compression.
            </p>
          </GlassCard>
        </div>

        {/* 3D Carousel */}
        {images.length > 0 ? (
          <div className="relative h-[400px] sm:h-[500px] w-full flex items-center justify-center perspective-1000">
            <div className="relative w-full max-w-3xl h-full flex items-center justify-center">
              <AnimatePresence initial={false}>
                {images.map((img, i) => {
                  const position = visibleIndices.indexOf(i);
                  if (position === -1) return null; // Not visible

                  const isCenter = position === 1;
                  const isLeft = position === 0;
                  const isRight = position === 2;

                  return (
                    <motion.div
                      key={img}
                      initial={{ 
                        opacity: 0, 
                        scale: 0.8,
                        x: isLeft ? '-50%' : isRight ? '50%' : '0%',
                        zIndex: 0
                      }}
                      animate={{
                        opacity: isCenter ? 1 : 0.5,
                        scale: isCenter ? 1 : 0.8,
                        x: isLeft ? '-60%' : isRight ? '60%' : '0%',
                        zIndex: isCenter ? 10 : 5,
                        rotateY: isLeft ? 15 : isRight ? -15 : 0,
                      }}
                      exit={{ 
                        opacity: 0, 
                        scale: 0.8,
                        zIndex: 0
                      }}
                      transition={{ duration: 0.5, type: 'spring', stiffness: 300, damping: 30 }}
                      className="absolute top-0 w-[280px] sm:w-[400px] md:w-[500px] h-full rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
                      onClick={() => {
                        if (isLeft) prevSlide();
                        if (isRight) nextSlide();
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={`/image_camera/${img}`} 
                        alt={`Gallery ${i}`} 
                        className="w-full h-full object-cover rounded-2xl border border-border-subtle"
                      />
                      {/* Dark overlay for side images */}
                      {!isCenter && (
                        <div className="absolute inset-0 bg-black/40 rounded-2xl" />
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2 sm:px-8 z-20 pointer-events-none">
              <button 
                onClick={prevSlide}
                className="pointer-events-auto p-3 rounded-full bg-bg-secondary/80 text-text-primary backdrop-blur-sm border border-border-subtle hover:bg-bg-tertiary transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={nextSlide}
                className="pointer-events-auto p-3 rounded-full bg-bg-secondary/80 text-text-primary backdrop-blur-sm border border-border-subtle hover:bg-bg-tertiary transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center text-text-tertiary py-20">
            No photos found in the gallery.
          </div>
        )}

        {/* All Photos Button */}
        <div className="mt-12 flex justify-center">
          <Button 
            onClick={() => setIsModalOpen(true)}
            variant="outline"
            icon={Grid}
            size="lg"
          >
            View All Photos
          </Button>
        </div>
      </div>

      {/* All Photos Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-bg-primary/95 backdrop-blur-xl overflow-y-auto"
          >
            <div className="min-h-screen p-4 sm:p-8">
              <div className="flex justify-between items-center mb-8 sticky top-0 bg-bg-primary/90 backdrop-blur py-4 z-10 border-b border-border-subtle">
                <h2 className="text-2xl font-bold text-text-primary">All Photos</h2>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-full hover:bg-bg-secondary transition-colors text-text-secondary hover:text-text-primary"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                {images.map((img, i) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={`grid-${img}`}
                    className="aspect-square rounded-xl overflow-hidden border border-border-subtle bg-bg-secondary"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={`/image_camera/${img}`} 
                      alt={`Gallery ${i}`} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
}
