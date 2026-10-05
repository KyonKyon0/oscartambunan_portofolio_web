'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

// Base CDN for Dashboard Icons SVGs (via MCP: dashboard-icons)
const CDN = 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg';

interface SkillItem {
  name: string;
  icon: string; // CDN path or full URL
}

interface CapabilityGroup {
  category: string;
  skills: SkillItem[];
}

const CAPABILITIES_LEFT: CapabilityGroup[] = [
  {
    category: 'FRONTEND',
    skills: [
      { name: 'HTML5',          icon: `${CDN}/html.svg` },
      { name: 'CSS3',           icon: `${CDN}/css.svg` },
      { name: 'JavaScript',     icon: `${CDN}/javascript.svg` },
      { name: 'TypeScript',     icon: `${CDN}/typescript.svg` },
      { name: 'React 19',       icon: `${CDN}/reactjs.svg` },
      { name: 'Next.js 16',     icon: `${CDN}/nextjs.svg` },
      { name: 'Tailwind CSS',   icon: `${CDN}/tailwind.svg` },
      { name: 'Framer Motion',  icon: `${CDN}/framer.svg` },
    ],
  },
  {
    category: 'DATABASE',
    skills: [
      { name: 'PostgreSQL',      icon: `${CDN}/postgresql.svg` },
      { name: 'Supabase',        icon: `${CDN}/supabase.svg` },
      { name: 'MySQL / MariaDB', icon: `${CDN}/mysql.svg` },
      { name: 'MariaDB',         icon: `${CDN}/mariadb.svg` },
    ],
  },
  {
    category: 'TOOLS & PLATFORM',
    skills: [
      { name: 'Git',          icon: `${CDN}/git.svg` },
      { name: 'GitHub',       icon: `${CDN}/github.svg` },
      { name: 'Nginx',        icon: `${CDN}/nginx.svg` },
      { name: 'aaPanel LEMP', icon: `${CDN}/aapanel.svg` },
    ],
  },
];

const CAPABILITIES_RIGHT: CapabilityGroup[] = [
  {
    category: 'NETWORK',
    skills: [
      { name: 'Proxmox VE',         icon: `${CDN}/proxmox.svg` },
      { name: 'Linux System Admin',  icon: `${CDN}/linux.svg` },
      { name: 'Ubuntu Server',       icon: `${CDN}/ubuntu-linux.svg` },
      { name: 'Debian Linux',        icon: `${CDN}/debian-linux.svg` },
      { name: 'Docker',              icon: `${CDN}/docker.svg` },
      { name: 'KVM / QEMU',          icon: `${CDN}/qemu.svg` },
      { name: 'Cloudflare Tunnels',  icon: `${CDN}/cloudflared.svg` },
      { name: 'AdGuard Home',        icon: `${CDN}/adguard-home.svg` },
      { name: 'Nextcloud',           icon: `${CDN}/nextcloud.svg` },
    ],
  },
  {
    category: 'BACKEND',
    skills: [
      { name: 'Python',        icon: `${CDN}/python.svg` },
      { name: 'PHP',           icon: `${CDN}/php.svg` },
      { name: 'Node.js',       icon: `${CDN}/nodejs.svg` },
      { name: 'Go (Golang)',   icon: `${CDN}/golang.svg` },
      { name: 'Bash / Shell',  icon: `${CDN}/shell.svg` },
    ],
  },
];

function SkillIcon({ name, icon }: SkillItem) {
  return (
    <div
      title={name}
      aria-label={name}
      className="h-11 sm:h-12 min-w-[56px] sm:min-w-[66px] px-3.5 rounded-md border border-white/15 bg-white/[0.04] hover:bg-white/[0.09] hover:border-white/35 flex items-center justify-center transition-all duration-200 group cursor-pointer shadow-sm hover:scale-105 active:scale-95"
    >
      <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center transition-transform duration-200 group-hover:scale-110 relative">
        <Image
          src={icon}
          alt={name}
          width={24}
          height={24}
          className="w-full h-full object-contain"
          unoptimized
        />
      </div>
    </div>
  );
}

function CapabilityRow({ group, delay }: { group: CapabilityGroup; delay: number }) {
  return (
    <motion.div
      key={group.category}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay }}
      className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 pb-6 sm:pb-8 border-b border-white/[0.06] last:border-b-0"
    >
      {/* Category Title */}
      <div className="w-full sm:w-32 lg:w-36 shrink-0 pt-2">
        <h3 className="text-xs sm:text-sm font-bold text-white tracking-wider uppercase">
          {group.category}
        </h3>
      </div>

      {/* Icon Grid */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 flex-1">
        {group.skills.map((skill) => (
          <SkillIcon key={skill.name} {...skill} />
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <AnimatedSection
      id="skills"
      className="py-16 sm:py-24 bg-bg-primary relative overflow-hidden font-sans border-t border-white/[0.08]"
    >
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <SectionHeading title="Capabilities" />

        {/* 2-Column: Left (Frontend, Database, Tools) & Right (Network, Backend) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Left column */}
          <div className="space-y-8 sm:space-y-10">
            {CAPABILITIES_LEFT.map((group, idx) => (
              <CapabilityRow key={group.category} group={group} delay={idx * 0.08} />
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-8 sm:space-y-10">
            {CAPABILITIES_RIGHT.map((group, idx) => (
              <CapabilityRow key={group.category} group={group} delay={idx * 0.08} />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
