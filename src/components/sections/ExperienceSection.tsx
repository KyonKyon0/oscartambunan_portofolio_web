'use client';

import { Briefcase, TrendingUp } from 'lucide-react';
import { experiences, additionalExperience } from '@/data/experience';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';

function calculateDuration(period: string) {
  try {
    const [startStr, endStr] = period.split('—').map(s => s.trim());
    if (!startStr) return '';
    
    // Simple month mapping
    const monthsMap: Record<string, number> = {
      january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
      july: 6, august: 7, september: 8, october: 9, november: 10, december: 11
    };

    const parseDateStr = (dateStr: string) => {
      if (dateStr.toLowerCase() === 'present') return new Date();
      const parts = dateStr.split(' ');
      if (parts.length === 2) {
        const m = monthsMap[parts[0].toLowerCase()];
        const y = parseInt(parts[1], 10);
        if (m !== undefined && !isNaN(y)) return new Date(y, m, 1);
      }
      return new Date(dateStr);
    };

    const startDate = parseDateStr(startStr);
    const endDate = parseDateStr(endStr || startStr);
    
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) return '';

    let months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += endDate.getMonth();
    months += 1; // Include starting month

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    if (years === 0) {
      return `${remainingMonths} mo${remainingMonths !== 1 ? 's' : ''}`;
    } else if (remainingMonths === 0) {
      return `${years} yr${years !== 1 ? 's' : ''}`;
    }
    return `${years} yr${years !== 1 ? 's' : ''} ${remainingMonths} mo${remainingMonths !== 1 ? 's' : ''}`;
  } catch (e) {
    return '';
  }
}

export default function ExperienceSection() {
  return (
    <AnimatedSection id="experience" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="Professional roles and organizational involvement."
        />

        {/* Timeline */}
        <div className="space-y-16 mb-16">
          {(() => {
            // Group experiences by organization
            const groups: typeof experiences[] = [];
            let currentGroup: typeof experiences = [];
            
            experiences.forEach((exp, idx) => {
              if (idx === 0) {
                currentGroup.push(exp);
              } else if (experiences[idx - 1].organization === exp.organization) {
                currentGroup.push(exp);
              } else {
                groups.push(currentGroup);
                currentGroup = [exp];
              }
            });
            if (currentGroup.length > 0) groups.push(currentGroup);

            return groups.map((group, groupIdx) => (
              <div key={`group-${groupIdx}`} className="relative space-y-8">
                {/* Vertical line per organization group */}
                {group.length > 1 && (
                  <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border-subtle hidden sm:block" />
                )}

                {group.map((exp, expIdx) => {
                  const duration = calculateDuration(exp.year);
                  // For the first item in a group, the dot is solid. For subsequent, it's hollow.
                  const isPrimary = expIdx === 0;

                  return (
                    <div key={`${exp.organization}-${exp.role}-${expIdx}`} className="relative flex gap-6">
                      {/* Timeline dot */}
                      <div className="hidden sm:flex shrink-0 w-10 items-start justify-center pt-1">
                        <div className={`w-3 h-3 rounded-full ${isPrimary ? 'bg-accent' : 'bg-border-subtle'} border-2 border-bg-primary z-10`} />
                      </div>

                      <GlassCard hover className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                          <div>
                            <h3 className="text-base font-semibold text-text-primary">
                              {exp.role}
                            </h3>
                            <p className="text-sm text-text-secondary">{exp.organization}</p>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <span className="text-xs font-medium text-text-tertiary bg-surface px-2.5 py-1 rounded-md border border-border-subtle whitespace-nowrap">
                              {exp.year}
                            </span>
                            {duration && (
                              <span className="text-xs font-medium text-emerald-400/80">
                                {duration}
                              </span>
                            )}
                          </div>
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
                  );
                })}
              </div>
            ));
          })()}
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
