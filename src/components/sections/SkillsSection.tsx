'use client';

import { motion } from 'framer-motion';

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
          {skillCategories.map((category, idx) => {
            const IconComponent = iconMap[category.icon];

            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard hover className="h-full border-border-subtle/50 hover:border-accent/30 transition-colors group">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border-subtle/30">
                    {IconComponent && (
                      <div className="p-2.5 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                        <IconComponent className="w-5 h-5 text-accent" />
                      </div>
                    )}
                    <h3 className="text-base font-semibold text-text-primary tracking-wide">
                      {category.category}
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {category.skills.map((skill) => (
                      <li key={skill.name} className="flex flex-col gap-1.5">
                        <div className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                          <p className="text-sm text-text-primary font-medium leading-tight">
                            {skill.name}
                          </p>
                        </div>
                        {skill.relatedProjects.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 ml-3.5">
                            {skill.relatedProjects.map((project) => (
                              <span
                                key={project}
                                className="text-[10px] font-medium tracking-wide text-emerald-400/90 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full"
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
