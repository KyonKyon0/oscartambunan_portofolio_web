'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import {
  NextjsIcon,
  ReactIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  TailwindIcon,
  SupabaseIcon,
  PostgreSQLIcon,
  MySQLIcon,
  NodeIcon,
  PHPIcon,
  PythonIcon,
  GoIcon,
  ProxmoxIcon,
  LinuxIcon,
  UbuntuIcon,
  DebianIcon,
  DockerIcon,
  NextcloudIcon,
  CloudflareIcon,
  NginxIcon,
  AdGuardIcon,
  GitIcon,
  GitHubIcon,
  TanStackIcon,
  FramerMotionIcon,
  KVMIcon,
  BashIcon,
  ApiIcon,
  ZFSIcon,
  AaPanelIcon,
  HTML5Icon,
  CSS3Icon,
} from '@/components/ui/TechIcons';

interface SkillItem {
  name: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

interface CapabilityGroup {
  category: string;
  skills: SkillItem[];
}

const CAPABILITIES_LEFT: CapabilityGroup[] = [
  {
    category: 'FRONTEND',
    skills: [
      { name: 'HTML5', icon: HTML5Icon },
      { name: 'CSS3', icon: CSS3Icon },
      { name: 'JavaScript', icon: JavaScriptIcon },
      { name: 'TypeScript', icon: TypeScriptIcon },
      { name: 'React 19', icon: ReactIcon },
      { name: 'Next.js 16', icon: NextjsIcon },
      { name: 'Tailwind CSS', icon: TailwindIcon },
      { name: 'TanStack Query', icon: TanStackIcon },
      { name: 'Framer Motion', icon: FramerMotionIcon },
    ],
  },
  {
    category: 'DATABASE',
    skills: [
      { name: 'PostgreSQL', icon: PostgreSQLIcon },
      { name: 'Supabase', icon: SupabaseIcon },
      { name: 'MySQL / MariaDB', icon: MySQLIcon },
      { name: 'ZFS Storage', icon: ZFSIcon },
    ],
  },
  {
    category: 'TOOLS & PLATFORM',
    skills: [
      { name: 'Git', icon: GitIcon },
      { name: 'GitHub', icon: GitHubIcon },
      { name: 'Nginx', icon: NginxIcon },
      { name: 'aaPanel LEMP', icon: AaPanelIcon },
    ],
  },
];

const CAPABILITIES_RIGHT: CapabilityGroup[] = [
  {
    category: 'NETWORK',
    skills: [
      { name: 'Proxmox VE', icon: ProxmoxIcon },
      { name: 'Linux System Admin', icon: LinuxIcon },
      { name: 'Ubuntu Server', icon: UbuntuIcon },
      { name: 'Debian Linux', icon: DebianIcon },
      { name: 'Docker', icon: DockerIcon },
      { name: 'KVM / QEMU', icon: KVMIcon },
      { name: 'Cloudflare Tunnels', icon: CloudflareIcon },
      { name: 'AdGuard Home', icon: AdGuardIcon },
      { name: 'Nextcloud', icon: NextcloudIcon },
    ],
  },
  {
    category: 'BACKEND',
    skills: [
      { name: 'Python', icon: PythonIcon },
      { name: 'PHP', icon: PHPIcon },
      { name: 'Node.js', icon: NodeIcon },
      { name: 'Go (Golang)', icon: GoIcon },
      { name: 'RESTful API', icon: ApiIcon },
      { name: 'Bash Scripting', icon: BashIcon },
    ],
  },
];

export default function SkillsSection() {
  return (
    <AnimatedSection
      id="skills"
      className="py-16 sm:py-24 bg-bg-primary relative overflow-hidden font-sans border-t border-white/[0.08]"
    >
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        {/* Section Header: CAPABILITIES */}
        <SectionHeading title="Capabilities" />

        {/* 2-Kolom: Kiri (Frontend, Database, Tools) & Kanan (Network, Backend) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Kolom Kiri (3 Baris): FRONTEND, DATABASE & TOOLS */}
          <div className="space-y-8 sm:space-y-10">
            {CAPABILITIES_LEFT.map((group, idx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 pb-6 sm:pb-8 border-b border-white/[0.06] last:border-b-0"
              >
                {/* Category Title */}
                <div className="w-full sm:w-32 lg:w-36 shrink-0 pt-2">
                  <h3 className="text-xs sm:text-sm font-bold text-white tracking-wider uppercase">
                    {group.category}
                  </h3>
                </div>

                {/* Rectangular Boxes (Only Icons, No Names) */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 flex-1">
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        title={skill.name}
                        aria-label={skill.name}
                        className="h-11 sm:h-12 min-w-[56px] sm:min-w-[66px] px-3.5 rounded-md border border-white/15 bg-white/[0.04] hover:bg-white/[0.09] hover:border-white/35 flex items-center justify-center transition-all duration-200 group cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                      >
                        <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                          <Icon className="w-full h-full object-contain" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Kolom Kanan (2 Baris): NETWORK & BACKEND */}
          <div className="space-y-8 sm:space-y-10">
            {CAPABILITIES_RIGHT.map((group, idx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-6 pb-6 sm:pb-8 border-b border-white/[0.06] last:border-b-0"
              >
                {/* Category Title */}
                <div className="w-full sm:w-32 lg:w-36 shrink-0 pt-2">
                  <h3 className="text-xs sm:text-sm font-bold text-white tracking-wider uppercase">
                    {group.category}
                  </h3>
                </div>

                {/* Rectangular Boxes (Only Icons, No Names) */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 flex-1">
                  {group.skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        title={skill.name}
                        aria-label={skill.name}
                        className="h-11 sm:h-12 min-w-[56px] sm:min-w-[66px] px-3.5 rounded-md border border-white/15 bg-white/[0.04] hover:bg-white/[0.09] hover:border-white/35 flex items-center justify-center transition-all duration-200 group cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                      >
                        <div className="w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                          <Icon className="w-full h-full object-contain" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
