'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';

// Base CDN for Dashboard Icons (via MCP: dashboard-icons)
// Use /svg for SVG variants, /png for PNG-only icons (e.g. aapanel)
const CDN = 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons';

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
      // html-light & css-light: default SVG has colored background, light variant is transparent
      { name: 'HTML5',         icon: `${CDN}/svg/html.svg` },
      { name: 'CSS3',          icon: `${CDN}/svg/css.svg` },
      { name: 'JavaScript',    icon: `${CDN}/svg/javascript.svg` },
      { name: 'TypeScript',    icon: `${CDN}/svg/typescript.svg` },
      { name: 'React 19',      icon: `${CDN}/svg/reactjs.svg` },
      // nextjs default is white (invisible on dark) → use nextjs-light (dark text on transparent)
      { name: 'Next.js 16',    icon: `${CDN}/svg/nextjs-light.svg` },
      { name: 'Tailwind CSS',  icon: `${CDN}/svg/tailwind.svg` },
      { name: 'Framer Motion', icon: `${CDN}/svg/framer.svg` },
    ],
  },
  {
    category: 'DATABASE',
    skills: [
      { name: 'PostgreSQL',      icon: `${CDN}/svg/postgresql.svg` },
      { name: 'Supabase',        icon: `${CDN}/svg/supabase.svg` },
      { name: 'MySQL',           icon: `${CDN}/svg/mysql.svg` },
      { name: 'MariaDB',         icon: `${CDN}/svg/mariadb.svg` },
    ],
  },
  {
    category: 'TOOLS & PLATFORM',
    skills: [
      { name: 'Git',          icon: `${CDN}/svg/git.svg` },
      // github default SVG is black → use light variant (white/light colored) for dark bg
      { name: 'GitHub',       icon: `${CDN}/svg/github-light.svg` },
      { name: 'Nginx',        icon: `${CDN}/svg/nginx.svg` },
      // aapanel base format is PNG (no SVG light variant available)
      { name: 'aaPanel LEMP', icon: `${CDN}/png/aapanel.png` },
    ],
  },
];

const CAPABILITIES_RIGHT: CapabilityGroup[] = [
  {
    category: 'NETWORK',
    skills: [
      { name: 'Proxmox VE',        icon: `${CDN}/svg/proxmox.svg` },
      { name: 'Linux System Admin', icon: `${CDN}/svg/linux.svg` },
      { name: 'Ubuntu Server',      icon: `${CDN}/svg/ubuntu-linux.svg` },
      { name: 'Debian Linux',       icon: `${CDN}/svg/debian-linux.svg` },
      { name: 'Docker',             icon: `${CDN}/svg/docker.svg` },
      // qemu default is a light/white icon → use dark variant for dark bg
      { name: 'KVM / QEMU',         icon: `${CDN}/svg/qemu-dark.svg` },
      { name: 'Cloudflare Tunnels', icon: `${CDN}/svg/cloudflared.svg` },
      { name: 'AdGuard Home',       icon: `${CDN}/svg/adguard-home.svg` },
      { name: 'Nextcloud',          icon: `${CDN}/svg/nextcloud.svg` },
    ],
  },
  {
    category: 'BACKEND',
    skills: [
      { name: 'Python',       icon: `${CDN}/svg/python.svg` },
      { name: 'PHP',          icon: `${CDN}/svg/php.svg` },
      { name: 'Node.js',      icon: `${CDN}/svg/nodejs.svg` },
      // golang default is white → use dark variant for dark bg
      { name: 'Go (Golang)',  icon: `${CDN}/svg/golang-dark.svg` },
      // shell default is black text → use light variant (white) for dark bg
      { name: 'Bash / Shell', icon: `${CDN}/svg/shell-light.svg` },
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
