'use client';

import { GraduationCap, Target } from 'lucide-react';
import { education } from '@/data/education';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';

const focusAreas = [
  'Improving full-stack development skills',
  'Building reliable self-hosted services',
  'Learning modern deployment practices',
  'Strengthening Linux and cloud infrastructure knowledge',
];

export default function AboutSection() {
  return (
    <AnimatedSection
      id="about"
      className="py-20 sm:py-28 bg-bg-secondary"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About"
          subtitle="Background, education, and current focus areas."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Professional Summary */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-text-secondary leading-relaxed">
              Oscar Victorious Putra Tambunan is an Informatics Engineering student at{' '}
              <span className="text-text-primary font-medium">{education.institution}</span> with a
              GPA of{' '}
              <span className="text-accent font-semibold">{education.gpa}</span>.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Combining web development skills with infrastructure knowledge, Oscar has hands-on
              experience with PHP, Python, Go, MySQL, Linux administration, Proxmox VE,
              virtual machines and containers, Nginx, Nextcloud, Cloudflare Tunnel,
              web hosting deployment, and basic DNS and TCP/IP networking.
            </p>
            <p className="text-text-secondary leading-relaxed">
              This blend of software development and systems administration provides a practical
              foundation for building and deploying web applications on self-managed infrastructure.
            </p>

            {/* Education badge */}
            <div className="flex items-start gap-3 pt-2">
              <div className="p-2 rounded-lg bg-accent-muted">
                <GraduationCap className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm font-medium text-text-primary">{education.degree}</p>
                <p className="text-sm text-text-secondary">{education.institution}</p>
                <p className="text-xs text-text-tertiary mt-0.5">
                  {education.yearRange} · GPA: {education.gpa}
                </p>
              </div>
            </div>
          </div>

          {/* Currently Focused On */}
          <GlassCard className="h-fit">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-4 h-4 text-accent" />
              <h3 className="text-sm font-semibold text-text-primary">
                Currently Focused On
              </h3>
            </div>
            <ul className="space-y-3">
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-start gap-2 text-sm text-text-secondary"
                >
                  <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                  {area}
                </li>
              ))}
            </ul>
          </GlassCard>
        </div>
      </div>
    </AnimatedSection>
  );
}
