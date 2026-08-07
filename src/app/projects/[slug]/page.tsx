import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Code2 } from 'lucide-react';
import { projects } from '@/data/projects';
import TechBadge from '@/components/ui/TechBadge';
import Button from '@/components/ui/Button';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.name} | Oscar Tambunan`,
    description: project.purpose,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const cs = project.caseStudy;

  const sections = [
    { title: 'Overview', content: cs.overview },
    { title: 'Problem & Objective', content: cs.problem },
    { title: 'My Role', content: cs.role },
    { title: 'Architecture & Workflow', content: cs.architecture },
    { title: 'Implementation', content: cs.implementation },
    { title: 'Technical Considerations', content: cs.technicalConsiderations },
    { title: 'Security Considerations', content: cs.securityConsiderations },
    { title: 'Challenges', content: cs.challenges },
    { title: 'Lessons Learned', content: cs.lessonsLearned },
    { title: 'Result', content: cs.result },
  ].filter((section) => section.content !== null);

  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Header */}
      <div className="border-b border-border-subtle bg-bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Back link */}
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-3">
            {project.name}
          </h1>

          <p className="text-base text-text-secondary mb-6 max-w-2xl">
            {project.purpose}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} variant="accent" />
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3">
            {project.links
              .filter((link) => link.url)
              .map((link) => (
                <Button
                  key={link.type}
                  href={link.url}
                  variant={link.type === 'live' ? 'primary' : 'outline'}
                  size="sm"
                  external
                  icon={link.type === 'live' ? ExternalLink : Code2}
                >
                  {link.label}
                </Button>
              ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Contributions */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold text-text-primary mb-4">
            Verified Contributions
          </h2>
          <ul className="space-y-2">
            {project.contributions.map((contribution) => (
              <li
                key={contribution}
                className="flex items-start gap-3 text-sm text-text-secondary"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                {contribution}
              </li>
            ))}
          </ul>
        </section>

        {/* Case study sections */}
        <div className="space-y-10">
          {sections.map((section, index) => (
            <section key={section.title}>
              <div className="flex items-baseline gap-3 mb-3">
                <span className="text-xs font-mono text-text-tertiary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="text-lg font-semibold text-text-primary">
                  {section.title}
                </h2>
              </div>
              <div className="pl-8">
                <p className="text-sm text-text-secondary leading-relaxed">
                  {section.content}
                </p>
              </div>
            </section>
          ))}
        </div>

        {/* Back */}
        <div className="mt-16 pt-8 border-t border-border-subtle">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all projects
          </Link>
        </div>
      </div>
    </main>
  );
}
