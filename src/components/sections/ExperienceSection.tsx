'use client';

import { Briefcase, TrendingUp } from 'lucide-react';
import { experiences, additionalExperience } from '@/data/experience';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';

export default function ExperienceSection() {
  return (
    <AnimatedSection id="experience" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="Professional roles and organizational involvement."
        />

        {/* Timeline */}
        <div className="relative space-y-8 mb-16">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border-subtle hidden sm:block" />

          {experiences.map((exp) => (
            <div key={`${exp.organization}-${exp.role}`} className="relative flex gap-6">
              {/* Timeline dot */}
              <div className="hidden sm:flex shrink-0 w-10 items-start justify-center pt-1">
                <div className="w-3 h-3 rounded-full bg-accent border-2 border-bg-primary z-10" />
              </div>

              <GlassCard hover className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-base font-semibold text-text-primary">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-text-secondary">{exp.organization}</p>
                  </div>
                  <span className="text-xs font-medium text-text-tertiary bg-surface px-2.5 py-1 rounded-md border border-border-subtle whitespace-nowrap">
                    {exp.year}
                  </span>
                </div>

                {/* Only show responsibilities if not empty */}
                {exp.responsibilities.length > 0 && (
                  <ul className="space-y-1.5 mt-3">
                    {exp.responsibilities.map((resp) => (
                      <li
                        key={resp}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <span className="w-1 h-1 rounded-full bg-text-tertiary mt-2 shrink-0" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Only show description if available */}
                {exp.description && (
                  <p className="text-sm text-text-secondary mt-3">{exp.description}</p>
                )}
              </GlassCard>
            </div>
          ))}
        </div>

        {/* Additional Analytical Experience */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-4 h-4 text-accent" />
            <h3 className="text-lg font-semibold text-text-primary">
              Additional Analytical Experience
            </h3>
          </div>

          <GlassCard>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-text-tertiary" />
                <h4 className="text-base font-medium text-text-primary">
                  {additionalExperience.title}
                </h4>
              </div>
              <span className="text-xs font-medium text-text-tertiary bg-surface px-2.5 py-1 rounded-md border border-border-subtle whitespace-nowrap">
                {additionalExperience.period}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Focus Areas */}
              <div>
                <p className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-3">
                  Focus Areas
                </p>
                <ul className="space-y-2">
                  {additionalExperience.focusAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Evidence Of */}
              <div>
                <p className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-3">
                  Demonstrates
                </p>
                <div className="flex flex-wrap gap-2">
                  {additionalExperience.evidenceOf.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium text-accent bg-accent-muted rounded-md border border-accent/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </AnimatedSection>
  );
}
