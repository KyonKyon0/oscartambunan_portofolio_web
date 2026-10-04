'use client';

import { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

function getProjectCategory(slug: string): string {
  if (slug === 'labamen-accounting-portal') return 'ACADEMIC PLATFORM';
  if (slug === 'labamen-admin-dashboard') return 'ADMIN DASHBOARD & DATABASE';
  if (slug === 'cloudflare-edge-tunnel-analytics') return 'EDGE INFRA & ANALYTICS';
  if (slug === 'pesonatari-cultural-ticketing') return 'CULTURAL TICKETING & WEB';
  if (slug === 'kerjain-local-service-marketplace') return 'WEB APPLICATION';
  if (slug === 'martha-eco-infrastructure') return 'WEB PLATFORM';
  if (slug === 'odc-storage-datacenter') return 'CLOUD INFRASTRUCTURE';
  if (slug === 'virtualized-server-infrastructure') return 'SYSTEMS LAB';
  if (slug === 'private-cloud-storage') return 'PRIVATE CLOUD';
  return 'PROJECT';
}

function ProjectVisual({ project }: { project: (typeof projects)[0] }) {
  if (project.slug === 'labamen-accounting-portal') {
    return (
      <div className="relative w-full h-full overflow-hidden bg-slate-950">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/projects/labamen-portal.jpg"
          alt="Lab. Akuntansi Menengah Website"
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-30 group-hover:opacity-0 transition-opacity" />
      </div>
    );
  }

  if (project.slug === 'labamen-admin-dashboard') {
    return (
      <div className="relative w-full h-full overflow-hidden bg-slate-950">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/projects/labamen-admin.jpg"
          alt="Labamen Admin Dashboard"
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-30 group-hover:opacity-0 transition-opacity" />
      </div>
    );
  }

  if (project.slug === 'cloudflare-edge-tunnel-analytics') {
    return (
      <div className="relative w-full h-full overflow-hidden bg-slate-950">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/projects/cloudflare-tunnel.jpg"
          alt="Cloudflare Edge Analytics Dashboard"
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-30 group-hover:opacity-0 transition-opacity" />
      </div>
    );
  }

  if (project.slug === 'pesonatari-cultural-ticketing') {
    return (
      <div className="relative w-full h-full overflow-hidden bg-slate-950">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/projects/pesonatari.jpg"
          alt="Pesona Tari Ticketing Website"
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-30 group-hover:opacity-0 transition-opacity" />
      </div>
    );
  }

  if (project.slug === 'kerjain-local-service-marketplace') {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-1.5 bg-gradient-to-br from-slate-900/90 via-[#070e1b] to-emerald-950/30">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logos/kerjain.png"
          alt="Kerjain Logo"
          className="max-h-5 sm:max-h-6 md:max-h-7 w-auto max-w-[80%] object-contain relative z-10 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    );
  }

  if (project.slug === 'martha-eco-infrastructure') {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-1.5 bg-gradient-to-br from-slate-900/90 via-[#070e1b] to-emerald-950/30">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logos/martha.png"
          alt="Mertha Logo"
          className="max-h-5 sm:max-h-6 md:max-h-7 w-auto max-w-[80%] object-contain rounded relative z-10 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    );
  }

  if (project.slug === 'odc-storage-datacenter') {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-1.5 bg-gradient-to-br from-slate-900/90 via-[#070e1b] to-emerald-950/30">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logos/odc.png"
          alt="ODC Storage Logo"
          className="max-h-5 sm:max-h-6 md:max-h-7 w-auto max-w-[80%] object-contain rounded relative z-10 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    );
  }

  if (project.slug === 'virtualized-server-infrastructure') {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-1 bg-gradient-to-br from-slate-900/90 via-[#090e18] to-amber-950/20">
        <div className="flex items-center gap-1.5 relative z-10">
          <div className="w-5 h-5 rounded bg-[#E57000]/15 border border-[#E57000]/30 flex items-center justify-center shadow-sm">
            <svg className="w-3 h-3 text-[#E57000]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M4 4h6l4 8-4 8H4l4-8-4-8zm10 0h6l-4 8 4 8h-6l4-8-4-8z" />
            </svg>
          </div>
          <div className="text-left font-sans">
            <div className="text-[9.5px] font-black tracking-wider text-white leading-none">PROXMOX</div>
            <div className="text-[6.5px] font-mono tracking-widest text-[#E57000] uppercase font-bold mt-0.5">VE</div>
          </div>
        </div>
      </div>
    );
  }

  if (project.slug === 'private-cloud-storage') {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-1 bg-gradient-to-br from-slate-900/90 via-[#070e1b] to-sky-950/20">
        <div className="flex items-center gap-1.5 relative z-10">
          <div className="w-5 h-5 rounded bg-[#0082c9] flex items-center justify-center shadow-sm">
            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.3" />
              <circle cx="7" cy="14" r="2.2" fill="currentColor" fillOpacity="0.3" />
              <circle cx="17" cy="14" r="2.2" fill="currentColor" fillOpacity="0.3" />
            </svg>
          </div>
          <div className="text-left font-sans">
            <div className="text-[9.5px] font-bold tracking-tight text-white leading-none">nextcloud</div>
            <div className="text-[6.5px] font-mono text-sky-400 font-medium mt-0.5">Vault</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center p-1.5 bg-slate-900/80">
      <span className="text-[10px] font-mono text-slate-400 font-semibold">{project.name}</span>
    </div>
  );
}

const ITEMS_PER_PAGE = 4;

export default function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const prevPage = () => {
    setCurrentPage((prev) => {
      const next = Math.max(1, prev - 1);
      if (typeof window !== 'undefined') {
        const section = document.getElementById('projects');
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
      return next;
    });
  };

  const nextPage = () => {
    setCurrentPage((prev) => {
      const next = Math.min(totalPages, prev + 1);
      if (typeof window !== 'undefined') {
        const section = document.getElementById('projects');
        if (section) {
          const top = section.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
      return next;
    });
  };

  return (
    <AnimatedSection id="projects" className="py-12 sm:py-16 bg-bg-primary relative border-t border-white/[0.08]">
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16">
        {/* Editorial Section Header: SELECTED WORKS */}
        <SectionHeading
          title="Selected Works"
          subtitle="Full-stack applications, distributed cloud services, and bare-metal virtualization systems."
        />

        {/* 1-Column Stack: Vertikal ke Bawah (Maksimal 4 per Halaman) */}
        <div className="border-t border-b border-white/[0.08]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col divide-y divide-white/[0.08]"
            >
              {currentProjects.map((project, idx) => {
                const liveLink = project.links.find((l) => l.type === 'live' && l.url);
                const isNoLink = project.slug === 'labamen-admin-dashboard' || (project.links.length === 0 && !liveLink);
                const targetUrl = isNoLink ? null : (liveLink ? liveLink.url : `/projects/${project.slug}`);
                const isExternal = Boolean(targetUrl && targetUrl.startsWith('http'));
                const absoluteIdx = startIndex + idx;
                const indexStr = String(absoluteIdx + 1).padStart(2, '0');
                const category = getProjectCategory(project.slug);

                return (
                  <div
                    key={project.slug}
                    className="group py-3 sm:py-3.5 transition-colors hover:bg-white/[0.02] px-2 sm:px-3 rounded-lg"
                  >
                    <div className="flex flex-row items-center gap-3 sm:gap-4 md:gap-5 w-full min-w-0">
                      {/* Left: Index Number */}
                      <span className="font-mono text-xs font-semibold text-slate-500 shrink-0 w-5 sm:w-6">
                        {indexStr}
                      </span>

                      {/* Left: Thumbnail Visual Container */}
                      {targetUrl ? (
                        <a
                          href={targetUrl}
                          target={isExternal ? '_blank' : undefined}
                          rel={isExternal ? 'noopener noreferrer' : undefined}
                          className="w-20 sm:w-28 md:w-32 lg:w-36 aspect-[16/10] rounded-lg overflow-hidden bg-slate-900/80 border border-white/10 shrink-0 relative flex items-center justify-center group-hover:border-accent/40 transition-all duration-200"
                        >
                          <ProjectVisual project={project} />
                        </a>
                      ) : (
                        <div className="w-20 sm:w-28 md:w-32 lg:w-36 aspect-[16/10] rounded-lg overflow-hidden bg-slate-900/80 border border-white/10 shrink-0 relative flex items-center justify-center">
                          <ProjectVisual project={project} />
                        </div>
                      )}

                      {/* Middle: Content & Details */}
                      <div className="flex-1 min-w-0 space-y-0.5 sm:space-y-1">
                        {/* Category Label */}
                        <div className="text-[9px] sm:text-[10px] font-mono tracking-wider text-slate-400 uppercase font-semibold">
                          {category}
                        </div>

                        {/* Project Title */}
                        <h3 className="text-xs sm:text-sm md:text-base font-semibold text-white tracking-tight group-hover:text-accent transition-colors truncate">
                          {targetUrl ? (
                            <a
                              href={targetUrl}
                              target={isExternal ? '_blank' : undefined}
                              rel={isExternal ? 'noopener noreferrer' : undefined}
                              className="hover:underline"
                            >
                              {project.name.split('(')[0].trim()}
                            </a>
                          ) : (
                            <span>{project.name.split('(')[0].trim()}</span>
                          )}
                        </h3>

                        {/* Purpose Description */}
                        <p className="text-[11px] sm:text-xs text-slate-400 line-clamp-1 leading-normal max-w-3xl">
                          {project.purpose}
                        </p>

                        {/* Monospace Tech Stack Pills */}
                        <div className="hidden sm:flex flex-wrap items-center gap-1 pt-0.5">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="font-mono text-[9px] sm:text-[10px] px-1.5 py-0.2 rounded bg-white/[0.03] border border-white/[0.08] text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="font-mono text-[9px] sm:text-[10px] px-1 py-0.2 rounded text-slate-500">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Right: Direct Action Button */}
                      <div className="shrink-0">
                        {targetUrl ? (
                          <a
                            href={targetUrl}
                            target={isExternal ? '_blank' : undefined}
                            rel={isExternal ? 'noopener noreferrer' : undefined}
                            aria-label={`Kunjungi ${project.name}`}
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/15 bg-white/[0.02] flex items-center justify-center text-slate-300 group-hover:border-accent group-hover:text-accent group-hover:bg-accent/10 transition-all duration-200"
                          >
                            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover:translate-x-0.5" />
                          </a>
                        ) : (
                          <div
                            aria-hidden="true"
                            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-slate-600 select-none"
                          >
                            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimalist Bottom Pagination Bar: [ ← ] 01 / 03 [ → ] */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-5 sm:gap-6 mt-6 sm:mt-8">
            <button
              type="button"
              onClick={prevPage}
              disabled={currentPage === 1}
              aria-label="Previous Projects Page"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-md border border-white/15 hover:border-accent text-slate-300 hover:text-white hover:bg-white/[0.05] transition-all duration-150 flex items-center justify-center cursor-pointer active:scale-95 disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:border-white/15 disabled:hover:text-slate-300 disabled:hover:bg-transparent"
            >
              <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            <div className="font-mono text-xs sm:text-sm tracking-[0.2em] text-slate-400 flex items-center gap-1.5 select-none">
              <span className="text-white font-bold">{String(currentPage).padStart(2, '0')}</span>
              <span className="text-slate-600">/</span>
              <span className="text-slate-400">{String(totalPages).padStart(2, '0')}</span>
            </div>

            <button
              type="button"
              onClick={nextPage}
              disabled={currentPage === totalPages}
              aria-label="Next Projects Page"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-md border border-white/15 hover:border-accent text-slate-300 hover:text-white hover:bg-white/[0.05] transition-all duration-150 flex items-center justify-center cursor-pointer active:scale-95 disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:border-white/15 disabled:hover:text-slate-300 disabled:hover:bg-transparent"
            >
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}

