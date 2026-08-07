'use client';

import { motion } from 'framer-motion';
import { MapPin, ExternalLink, Mail, ArrowDown, Download } from 'lucide-react';
import { profile } from '@/data/profile';
import { useReducedMotion } from '@/lib/hooks/useReducedMotion';
import Button from '@/components/ui/Button';
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import ParticleBackground from '@/components/ParticleBackground';

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = prefersReducedMotion
    ? undefined
    : {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
      };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleBackground />

      {/* Subtle gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg-primary pointer-events-none"
        aria-hidden="true"
      />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Location badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-text-secondary border border-border-subtle bg-surface">
            <MapPin className="w-3 h-3" />
            {profile.location}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text-primary mb-4"
        >
          {profile.name}
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl font-medium text-accent mb-3"
        >
          {profile.title}
        </motion.p>

        {/* Specialization */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base text-text-secondary mb-6"
        >
          {profile.specialization}
        </motion.p>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base text-text-tertiary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {profile.bio}
        </motion.p>

        {/* Primary Actions */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
        >
          <Button
            href="#projects"
            variant="primary"
            icon={ArrowDown}
            size="lg"
          >
            View Projects
          </Button>
          <Button
            href="/oscar-tambunan-cv.pdf"
            variant="secondary"
            icon={Download}
            size="lg"
            external
          >
            Download CV
          </Button>
        </motion.div>

        {/* Secondary Actions */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-3"
        >
          <Button
            href={profile.linkedIn}
            variant="ghost"
            icon={ExternalLink}
            size="sm"
            external
          >
            LinkedIn
          </Button>
          <Button
            href={`mailto:${profile.email}`}
            variant="ghost"
            icon={Mail}
            size="sm"
            external
          >
            Email
          </Button>
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}
