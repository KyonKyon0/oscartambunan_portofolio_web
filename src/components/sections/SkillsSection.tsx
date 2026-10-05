'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/context/LanguageContext';

// Base CDN for Dashboard Icons (via MCP: dashboard-icons)
const CDN = 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons';

interface SkillItem {
  name: string;
  role: string;
  desc: string;
  icon: string;
}

interface CapabilityGroup {
  category: string;
  skills: SkillItem[];
}

const CAPABILITIES_LEFT: CapabilityGroup[] = [
  {
    category: 'FRONTEND',
    skills: [
      {
        name: 'HTML5',
        role: 'Markup & Struktur Semantik',
        desc: 'Membangun arsitektur dokumen web modern yang semantik, aksesibel, dan teroptimasi SEO.',
        icon: `${CDN}/svg/html.svg`,
      },
      {
        name: 'CSS3',
        role: 'Styling & Desain Responsif',
        desc: 'Mengatur tata letak antarmuka responsif Flexbox/Grid, efek visual modern, dan transisi.',
        icon: `${CDN}/svg/css.svg`,
      },
      {
        name: 'JavaScript',
        role: 'Logika & Interaktivitas Web',
        desc: 'Menangani logika interaktif sisi klien, manipulasi DOM dinamis, dan asynchronous API.',
        icon: `${CDN}/svg/javascript.svg`,
      },
      {
        name: 'TypeScript',
        role: 'Static Typing Enterprise',
        desc: 'Mencegah bug saat runtime dan mempermudah skalabilitas kode dengan sistem pengetikan ketat.',
        icon: `${CDN}/svg/typescript.svg`,
      },
      {
        name: 'React 19',
        role: 'Komponen Antarmuka Reaktif',
        desc: 'Membangun UI modular dengan rendering performa tinggi, hooks, dan state management efisien.',
        icon: `${CDN}/svg/reactjs.svg`,
      },
      {
        name: 'Next.js 16',
        role: 'Full-Stack React Framework',
        desc: 'Framework produksi dengan App Router, Server Components, SSR/SSG, dan routing terintegrasi.',
        icon: `${CDN}/svg/nextjs-light.svg`,
      },
      {
        name: 'Tailwind CSS',
        role: 'Utility-First Styling',
        desc: 'Mempercepat perancangan desain antarmuka bersih dan konsisten berbasis design token.',
        icon: `${CDN}/svg/tailwind.svg`,
      },
      {
        name: 'Framer Motion',
        role: 'Animation Engine',
        desc: 'Menciptakan animasi interaktif deklaratif, transisi halaman, dan micro-interaction yang mulus.',
        icon: `${CDN}/svg/framer.svg`,
      },
    ],
  },
  {
    category: 'DATABASE',
    skills: [
      {
        name: 'PostgreSQL',
        role: 'Relational Database (ACID)',
        desc: 'Database relasional enterprise open-source untuk kueri kompleks dan integritas data tinggi.',
        icon: `${CDN}/svg/postgresql.svg`,
      },
      {
        name: 'Supabase',
        role: 'Backend-as-a-Service',
        desc: 'Platform BaaS berbasis PostgreSQL dengan autentikasi instan, API real-time, dan storage aman.',
        icon: `${CDN}/svg/supabase.svg`,
      },
      {
        name: 'MySQL',
        role: 'Relational Database Management',
        desc: 'Database relasional terpercaya untuk pengelolaan data terstruktur pada aplikasi produksi.',
        icon: `${CDN}/svg/mysql.svg`,
      },
      {
        name: 'MariaDB',
        role: 'High-Performance RDBMS',
        desc: 'Sistem manajemen basis data relasional cepat dan tangguh, kompatibel penuh dengan MySQL.',
        icon: `${CDN}/svg/mariadb.svg`,
      },
    ],
  },
  {
    category: 'TOOLS & PLATFORM',
    skills: [
      {
        name: 'Git',
        role: 'Version Control System',
        desc: 'Melacak riwayat perubahan kode, branching aman, dan kolaborasi tim terdistribusi.',
        icon: `${CDN}/svg/git.svg`,
      },
      {
        name: 'GitHub',
        role: 'DevOps & Repositori Terpusat',
        desc: 'Platform hosting repositori Git, kolaborasi kode tim, issue tracking, dan automasi CI/CD.',
        icon: `${CDN}/svg/github-light.svg`,
      },
      {
        name: 'Nginx',
        role: 'Web Server & Reverse Proxy',
        desc: 'Menangani reverse proxy, load balancing, kompresi aset statis, dan terminasi SSL/TLS.',
        icon: `${CDN}/svg/nginx.svg`,
      },
      {
        name: 'aaPanel LEMP',
        role: 'Server Management Panel',
        desc: 'Panel kontrol Linux untuk mengelola stack Nginx, PHP, MySQL, database, dan servis PM2.',
        icon: `${CDN}/png/aapanel.png`,
      },
    ],
  },
];

const CAPABILITIES_RIGHT: CapabilityGroup[] = [
  {
    category: 'NETWORK',
    skills: [
      {
        name: 'Proxmox VE',
        role: 'Hypervisor Virtualisasi Bare-Metal',
        desc: 'Platform virtualisasi bare-metal untuk orkestrasi mesin virtual KVM dan kontainer LXC terisolasi.',
        icon: `${CDN}/svg/proxmox.svg`,
      },
      {
        name: 'Linux System Admin',
        role: 'Administrasi Server Linux',
        desc: 'Pemeliharaan kernel OS Linux, manajemen izin hak akses, servis daemon, dan automasi sistem.',
        icon: `${CDN}/svg/linux.svg`,
      },
      {
        name: 'Ubuntu Server',
        role: 'Distribusi Linux Produksi',
        desc: 'OS server andalan untuk lingkungan deployment aplikasi produksi yang stabil dan aman.',
        icon: `${CDN}/svg/ubuntu-linux.svg`,
      },
      {
        name: 'Debian Linux',
        role: 'Sistem Operasi Rock-Solid',
        desc: 'Distribusi Linux dengan stabilitas maksimal untuk infrastruktur server krusial mandiri.',
        icon: `${CDN}/svg/debian-linux.svg`,
      },
      {
        name: 'Docker',
        role: 'Kontainerisasi Aplikasi',
        desc: 'Mengemas aplikasi dan dependensinya ke dalam kontainer ringan yang konsisten di mana saja.',
        icon: `${CDN}/svg/docker.svg`,
      },
      {
        name: 'KVM / QEMU',
        role: 'Hardware Virtualization',
        desc: 'Teknologi virtualisasi tingkat kernel untuk menjalankan virtual machine mandiri di server.',
        icon: `${CDN}/svg/qemu-dark.svg`,
      },
      {
        name: 'Cloudflare Tunnels',
        role: 'Zero-Trust Secure Networking',
        desc: 'Koneksi tunnel terenkripsi untuk mempublikasikan layanan lokal tanpa membuka port router.',
        icon: `${CDN}/svg/cloudflared.svg`,
      },
      {
        name: 'AdGuard Home',
        role: 'Network-Wide DNS Filter',
        desc: 'DNS server lokal untuk pemblokiran iklan, pelacak malware, dan pengawasan jaringan.',
        icon: `${CDN}/svg/adguard-home.svg`,
      },
      {
        name: 'Nextcloud',
        role: 'Private Cloud Storage',
        desc: 'Solusi cloud pribadi mandiri untuk sinkronisasi file, backup data, dan kolaborasi terproteksi.',
        icon: `${CDN}/svg/nextcloud.svg`,
      },
    ],
  },
  {
    category: 'BACKEND',
    skills: [
      {
        name: 'Python',
        role: 'Scripting & Automasi Backend',
        desc: 'Bahasa pemrograman untuk automasi server, scripting infrastruktur, dan pemrosesan data.',
        icon: `${CDN}/svg/python.svg`,
      },
      {
        name: 'PHP',
        role: 'Server-Side Programming',
        desc: 'Pemrosesan logika bisnis server, autentikasi sesi, dan manajemen database relasional.',
        icon: `${CDN}/svg/php.svg`,
      },
      {
        name: 'Node.js',
        role: 'JavaScript Runtime Engine',
        desc: 'Runtime asynchronous non-blocking untuk API backend cepat dan tooling web modern.',
        icon: `${CDN}/svg/nodejs.svg`,
      },
      {
        name: 'Go (Golang)',
        role: 'High-Concurrency Backend',
        desc: 'Bahasa kompilasi efisien dan cepat untuk microservices dan pemrosesan paralel tinggi.',
        icon: `${CDN}/svg/golang-dark.svg`,
      },
      {
        name: 'Bash / Shell',
        role: 'Shell Automation Script',
        desc: 'Automasi perintah baris perintah Linux untuk jadwal backup rutin dan provisioning server.',
        icon: `${CDN}/svg/shell-light.svg`,
      },
    ],
  },
];

function SkillIconButton({
  skill,
  isSelected,
  onClick,
}: {
  skill: SkillItem;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`${skill.name} - Klik untuk penjelasan fungsi`}
      aria-expanded={isSelected}
      title={`${skill.name} (Klik untuk info)`}
      className={`h-11 sm:h-12 min-w-[56px] sm:min-w-[66px] px-3.5 rounded-md border flex items-center justify-center transition-all duration-200 group cursor-pointer shadow-sm active:scale-95 ${
        isSelected
          ? 'border-accent bg-accent/20 ring-2 ring-accent/40 scale-105 shadow-[0_0_15px_rgba(59,130,246,0.35)]'
          : 'border-white/15 bg-white/[0.04] hover:bg-white/[0.09] hover:border-white/35 hover:scale-105'
      }`}
    >
      <div
        className={`w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center transition-transform duration-200 relative ${
          isSelected ? 'scale-110' : 'group-hover:scale-110'
        }`}
      >
        <Image
          src={skill.icon}
          alt={skill.name}
          width={24}
          height={24}
          className="w-full h-full object-contain"
          unoptimized
        />
      </div>
    </button>
  );
}

function CapabilityRow({
  group,
  delay,
  selectedSkill,
  onSelectSkill,
}: {
  group: CapabilityGroup;
  delay: number;
  selectedSkill: SkillItem | null;
  onSelectSkill: (skill: SkillItem | null) => void;
}) {
  const isRowActive = group.skills.some((s) => s.name === selectedSkill?.name);

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

      {/* Right Column: Icon Grid + Animated Dropdown Card */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          {group.skills.map((skill) => {
            const isSelected = selectedSkill?.name === skill.name;
            return (
              <SkillIconButton
                key={skill.name}
                skill={skill}
                isSelected={isSelected}
                onClick={() => onSelectSkill(isSelected ? null : skill)}
              />
            );
          })}
        </div>

        {/* Animated Dropdown Description Card */}
        <AnimatePresence mode="wait">
          {isRowActive && selectedSkill && (
            <motion.div
              key={selectedSkill.name}
              initial={{ opacity: 0, height: 0, y: -6 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -6 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="overflow-hidden mt-3"
            >
              <div className="rounded-xl border border-white/20 bg-black p-3.5 sm:p-4 shadow-2xl relative">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 p-1.5 flex items-center justify-center shrink-0 shadow-sm">
                      <Image
                        src={selectedSkill.icon}
                        alt={selectedSkill.name}
                        width={22}
                        height={22}
                        className="w-full h-full object-contain"
                        unoptimized
                      />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-snug">
                        {selectedSkill.name}
                      </h4>
                      <span className="text-[10px] font-sans font-medium text-slate-200">
                        {selectedSkill.role}
                      </span>
                    </div>
                  </div>

                  {/* Tombol X (Close) */}
                  <button
                    type="button"
                    onClick={() => onSelectSkill(null)}
                    aria-label="Tutup penjelasan"
                    className="w-6 h-6 rounded-md bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
                  >
                    <X className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>

                {/* Penjelasan Singkat Fungsi - Tulisan Putih Bersih */}
                <p className="text-xs sm:text-sm text-white leading-relaxed mt-2.5 pt-2.5 border-t border-white/15">
                  {selectedSkill.desc}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  const { t } = useLanguage();
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  return (
    <AnimatedSection
      id="skills"
      className="py-16 sm:py-24 bg-bg-primary relative overflow-hidden font-sans border-t border-white/[0.08]"
    >
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <SectionHeading
          title={t('Kemampuan & Keahlian', 'Capabilities')}
          subtitle={t(
            'Teknologi modern, framework web, basis data, dan arsitektur sistem komputasi.',
            'Modern technologies, web frameworks, databases, and computing systems architecture.'
          )}
        />

        {/* 2-Column: Left (Frontend, Database, Tools) & Right (Network, Backend) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          {/* Left column */}
          <div className="space-y-8 sm:space-y-10">
            {CAPABILITIES_LEFT.map((group, idx) => (
              <CapabilityRow
                key={group.category}
                group={group}
                delay={idx * 0.08}
                selectedSkill={selectedSkill}
                onSelectSkill={setSelectedSkill}
              />
            ))}
          </div>

          {/* Right column */}
          <div className="space-y-8 sm:space-y-10">
            {CAPABILITIES_RIGHT.map((group, idx) => (
              <CapabilityRow
                key={group.category}
                group={group}
                delay={idx * 0.08}
                selectedSkill={selectedSkill}
                onSelectSkill={setSelectedSkill}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
