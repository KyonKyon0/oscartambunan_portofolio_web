'use client';

import { ExternalLink, Code2, BookOpen } from 'lucide-react';
import { projects } from '@/data/projects';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import TechBadge from '@/components/ui/TechBadge';
import Button from '@/components/ui/Button';

export default function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="py-20 sm:py-28 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Projects"
          subtitle="Practical projects demonstrating development and infrastructure skills."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <GlassCard
              key={project.slug}
              hover
              padding="lg"
              className="flex flex-col"
            >
              {/* Project Visual */}
              {project.imageUrl ? (
                <div className="w-full h-40 rounded-lg overflow-hidden mb-6 border border-border-subtle bg-white flex items-center justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.imageUrl} alt={project.name} className="w-full h-full object-cover" />
                </div>
              ) : (
                <div className="w-full h-32 rounded-lg bg-gradient-to-br from-accent/5 to-transparent project-pattern mb-6 flex items-center justify-center border border-border-subtle">
                  <span className="text-xs text-text-tertiary font-mono tracking-wider uppercase">
                    {project.technologies[0]}
                  </span>
                </div>
              )}

              {/* Project name */}
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {project.name}
              </h3>

              {/* Purpose */}
              <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                {project.purpose}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((tech) => (
                  <TechBadge key={tech} name={tech} variant="accent" />
                ))}
              </div>

              {/* Key contributions */}
              <div className="mb-6 flex-1">
                <p className="text-xs font-medium text-text-tertiary uppercase tracking-wider mb-2">
                  Key Contributions
                </p>
                <ul className="space-y-1.5">
                  {project.contributions.slice(0, 3).map((contribution) => (
                    <li
                      key={contribution}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                      {contribution}
                    </li>
                  ))}
                  {project.contributions.length > 3 && (
                    <li className="text-xs text-text-tertiary pl-3">
                      +{project.contributions.length - 3} more
                    </li>
                  )}
                </ul>
              </div>

              {/* Status badge */}
              {project.status && (
                <div className="mb-4">
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 rounded-md border border-emerald-400/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {project.status}
                  </span>
                </div>
              )}

              {/* Action buttons — only shown when valid links exist */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-border-subtle">
                {project.links
                  .filter((link) => link.url)
                  .map((link) => (
                    <Button
                      key={link.type}
                      href={link.url}
                      variant="outline"
                      size="sm"
                      external
                      icon={
                        link.type === 'live'
                          ? ExternalLink
                          : link.type === 'source'
                          ? Code2
                          : BookOpen
                      }
                    >
                      {link.label}
                    </Button>
                  ))}

                <Button
                  href={`/projects/${project.slug}`}
                  variant="ghost"
                  size="sm"
                  icon={BookOpen}
                >
                  Case Study
                </Button>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
