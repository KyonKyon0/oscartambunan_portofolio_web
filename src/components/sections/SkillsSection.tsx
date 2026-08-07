'use client';

import {
  Code2,
  Database,
  Server,
  Globe,
  Cloud,
  Shield,
  Wrench,
} from 'lucide-react';
import { skillCategories } from '@/data/skills';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2,
  Database,
  Server,
  Globe,
  Cloud,
  Shield,
  Wrench,
};

export default function SkillsSection() {
  return (
    <AnimatedSection id="skills" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills"
          subtitle="Technologies and tools organized by practical use, with project evidence."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const IconComponent = iconMap[category.icon];

            return (
              <GlassCard key={category.category} hover>
                <div className="flex items-center gap-2.5 mb-5">
                  {IconComponent && (
                    <div className="p-2 rounded-lg bg-accent-muted">
                      <IconComponent className="w-4 h-4 text-accent" />
                    </div>
                  )}
                  <h3 className="text-sm font-semibold text-text-primary">
                    {category.category}
                  </h3>
                </div>

                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill.name}>
                      <p className="text-sm text-text-primary font-medium">
                        {skill.name}
                      </p>
                      {skill.relatedProjects.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-1">
                          {skill.relatedProjects.map((project) => (
                            <span
                              key={project}
                              className="text-[11px] text-accent/80 bg-accent/5 px-1.5 py-0.5 rounded"
                            >
                              {project}
                            </span>
                          ))}
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
