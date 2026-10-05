'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Server,
  PieChart,
  ArrowUpRight,
  ArrowLeft,
  X,
} from 'lucide-react';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/context/LanguageContext';

type CardId = 'hardware-systems' | 'asset';

interface SpecRow {
  label: string;
  value: string;
}

interface SpecSection {
  title: string;
  rows: SpecRow[];
}

interface CardHighlight {
  label?: string;
  value: string;
  sub?: string;
}

interface CardData {
  id: CardId;
  title: string;
  summary: string;
  wallpaper: string;
  icon: typeof Server;
  highlights: CardHighlight[];
  sheetTitle: string;
  sheetSubtitle: string;
  sections: SpecSection[];
}

const CARDS: CardData[] = [
  {
    id: 'hardware-systems',
    title: 'Hardware & Systems Infrastructure',
    summary: '8 Cores Dedicated CPU • Proxmox VE • FTTH 150 Mbps',
    wallpaper: '/images/wallpapers/odc-hardware.jpg',
    icon: Server,
    highlights: [
      { value: '8 Cores CPU' },
      { value: '16 GB RAM' },
      { value: 'Proxmox VE' },
      { value: '150 Mbps FTTH' },
    ],
    sheetTitle: 'Hardware & Systems Infrastructure',
    sheetSubtitle: 'Spesifikasi teknis komputasi fisik host mandiri, virtualisasi Proxmox VE, layanan cloud mandiri, dan jaringan serat optik FTTH',
    sections: [
      // 1. Processor & Performa
      {
        title: 'Spesifikasi Prosesor & Performa',
        rows: [
          {
            label: 'Jumlah Inti Komputasi (Cores / Threads)',
            value: '8 Cores / 8 Threads Dedicated',
          },
          {
            label: 'Kecepatan Bus',
            value: '8 GT/s',
          },
          {
            label: 'TDP (Thermal Design Power)',
            value: '35 W',
          },
          {
            label: 'Arsitektur Instruksi',
            value: 'x86_64 (64-bit Architecture)',
          },
          {
            label: 'Sistem Operasi Host',
            value: 'Ubuntu 22.04 LTS Server (Linux 5.15+ Headless)',
          },
        ],
      },
      // 2. Memory & Storage
      {
        title: 'Spesifikasi Memori & Penyimpanan',
        rows: [
          {
            label: 'Kapasitas Memori Utama (RAM)',
            value: '16 GB',
          },
          {
            label: 'Tipe & Kecepatan Memori',
            value: 'DDR4 2400 MHz (1.2V / 1.5V)',
          },
          {
            label: 'Konfigurasi Saluran Memori',
            value: 'Dual-Channel (2x 8 GB DIMM)',
          },
          {
            label: 'Total Kapasitas Penyimpanan',
            value: '3 TB (Hybrid Multi-Tier Storage)',
          },
          {
            label: 'Penyimpanan Primer (OS Boot Drive)',
            value: '128 GB SSD High-Speed NVMe/SATA',
          },
          {
            label: 'Penyimpanan Sekunder (Data Mass Storage)',
            value: '2 TB HDD 7200 RPM',
          },
          {
            label: 'Penyimpanan Tambahan (Expansion)',
            value: '1 TB High-Density Storage',
          },
        ],
      },
      // 3. Graphics & Output
      {
        title: 'Grafis Prosesor & Antarmuka Layar',
        rows: [
          {
            label: 'Dukungan DirectX*',
            value: '12',
          },
          {
            label: 'Dukungan OpenGL*',
            value: '4.5',
          },
          {
            label: 'Dukungan Vulkan*',
            value: 'Ya',
          },
          {
            label: 'Antarmuka Output Tampilan',
            value: 'HDMI & DisplayPort Dual 4K @ 60Hz',
          },
        ],
      },
      // 4. Hardware Virtualization & Instruction Extensions
      {
        title: 'Teknologi Canggih & Virtualisasi Hardware',
        rows: [
          {
            label: 'Memori Intel® Optane™ Didukung',
            value: 'Tidak',
          },
          {
            label: 'Intel® Turbo Boost Technology',
            value: 'Tidak',
          },
          {
            label: 'Intel® Hyper-Threading Technology',
            value: 'Ya',
          },
          {
            label: 'Intel® TSX-NI',
            value: 'Tidak',
          },
          {
            label: 'Intel® 64',
            value: 'Ya',
          },
          {
            label: 'Set Instruksi',
            value: '64-bit',
          },
          {
            label: 'Ekstensi Set Instruksi',
            value: 'Intel® SSE4.1, Intel® SSE4.2, Intel® AVX2',
          },
          {
            label: 'Keadaan Diam (Idle States)',
            value: 'Ya',
          },
          {
            label: 'Enhanced Intel SpeedStep® Technology',
            value: 'Ya',
          },
          {
            label: 'Intel® Virtualization Technology (VT-x)',
            value: 'Ya',
          },
          {
            label: 'Intel® Virtualization Technology for Directed I/O (VT-d)',
            value: 'Ya',
          },
          {
            label: 'Intel® VT-x dengan Extended Page Tables (EPT)',
            value: 'Ya',
          },
        ],
      },
      // 5. Virtualization Hypervisor Base
      {
        title: 'Platform Virtualisasi (Hypervisor Base)',
        rows: [
          {
            label: 'Platform Hypervisor',
            value: 'Proxmox VE (Type-1 Bare-Metal Hypervisor)',
          },
          {
            label: 'Mesin Virtualisasi',
            value: 'KVM Virtual Machines & Isolated LXC Containers',
          },
          {
            label: 'Sistem Operasi Dasar Host',
            value: 'Debian Linux 64-bit Enterprise Kernel',
          },
          {
            label: 'Alokasi Sumber Daya Fisik',
            value: '8 Cores Dedicated CPU, 16 GB DDR4 RAM, 3 TB Storage Array',
          },
          {
            label: 'Konsumsi Daya Operasional',
            value: '35W TDP (Efisiensi Tinggi Operasional 24/7)',
          },
        ],
      },
      // 6. Self-Hosted Applications & Services Stack
      {
        title: 'Layanan & Aplikasi Mandiri (Self-Hosted Stack)',
        rows: [
          {
            label: 'Server & Web Manager',
            value: 'aaPanel (LEMP Stack, Nginx Web Server, PHP, MySQL, Reverse Proxy)',
          },
          {
            label: 'Konektivitas Masuk Eksternal',
            value: 'Cloudflare Tunnel (cloudflared daemon - Bypass CGNAT tanpa port publik)',
          },
          {
            label: 'Private Cloud Storage',
            value: 'Nextcloud (Sinkronisasi berkas & penyimpanan privat mandiri di atas storage 3TB)',
          },
          {
            label: 'Penyaring DNS Lokal',
            value: 'AdGuard Home DNS (Pemblokiran iklan & pelacak jaringan lokal)',
          },
          {
            label: 'Upstream DNS Fallback',
            value: 'Cloudflare 1.1.1.1 & Google 8.8.8.8 (Resolusi Tercepat Otomatis)',
          },
        ],
      },
      // 7. Network FTTH & Bandwidth
      {
        title: 'Spesifikasi Sambungan & Bandwidth FTTH',
        rows: [
          {
            label: 'Penyedia Layanan Internet (ISP)',
            value: 'PT Ekamas Mora Republik Tbk',
          },
          {
            label: 'Tipe Infrastruktur Jaringan',
            value: 'FTTH GPON (Fiber To The Home Direct Optical Link)',
          },
          {
            label: 'Kecepatan Bandwidth',
            value: '150 Mbps Simetris (Download & Upload)',
          },
          {
            label: 'Latensi Rata-Rata Gateway',
            value: '~1 ms (Local Fiber Gateway Depok)',
          },
          {
            label: 'Packet Loss',
            value: '0.00% (High Integrity Carrier Optical Link)',
          },
        ],
      },
      // 8. Routing, DNS & Keamanan Jaringan
      {
        title: 'Routing, DNS & Keamanan Jaringan',
        rows: [
          {
            label: 'DNS Primer Jaringan',
            value: 'AdGuard Home DNS (Pemblokir iklan & tracker jaringan lokal)',
          },
          {
            label: 'Upstream DNS Resolver',
            value: 'Cloudflare 1.1.1.1 / Google 8.8.8.8 (Auto-Switching Tercepat)',
          },
          {
            label: 'Antarmuka Jaringan Fisik LAN',
            value: 'Full Gigabit Ethernet (1000BASE-T Cat6e RJ45)',
          },
          {
            label: 'Tipe Pengalamatan IP Publik',
            value: 'IPv4 Carrier-Grade NAT (CGNAT) Protected',
          },
          {
            label: 'Port Terbuka Masuk (Inbound)',
            value: '0 Ports Open (Keamanan tanpa port forwarding)',
          },
          {
            label: 'Akses Masuk Jarak Jauh',
            value: 'Cloudflare Encrypted Tunnel (Mem-bypass CGNAT secara aman)',
          },
        ],
      },
    ],
  },
  {
    id: 'asset',
    title: 'Asset Management',
    summary: 'Portofolio Multi-Aset',
    wallpaper: '/images/wallpapers/asset-management.jpg',
    icon: PieChart,
    highlights: [
      { value: 'Danamas 46.6%' },
      { value: 'Deposito 20.3%' },
      { value: 'Saham 18.6%' },
      { value: 'Valas 14.5%' },
    ],
    sheetTitle: 'Asset Management & Treasury Specifications',
    sheetSubtitle: 'Distribusi alokasi modal portofolio multi-aset & tata kelola risiko',
    sections: [
      {
        title: 'Distribusi Alokasi Portofolio',
        rows: [
          {
            label: 'Reksa Dana Pendapatan Tetap',
            value: 'PT Sinarmas Asset Management - Danamas Stabil',
          },
          {
            label: 'Deposito Perbankan Berjangka',
            value: 'PT Krom Bank Indonesia Tbk 7.5% p.a.',
          },
          {
            label: 'Obligasi Korporasi',
            value: 'PT Indah Kiat Pulp & Paper Tbk - INKP Kupon 6.5%',
          },
          {
            label: 'Obligasi Negara Ritel',
            value: 'Pemerintah Republik Indonesia - ORI-29T6',
          },
          {
            label: 'Saham Domestik IDX',
            value: 'Portofolio Saham Fundamental Terpilih IDX',
          },
          {
            label: 'Indeks Saham Global AS',
            value: 'BlackRock iShares Core S&P 500 ETF - IVV',
          },
          {
            label: 'Cadangan Kas Valuta Asing',
            value: 'Likuiditas Kas Multi-Currency SGD & MYR',
          },
        ],
      },
      {
        title: 'Metodologi & Tata Kelola Modal',
        rows: [
          {
            label: 'Tujuan Alokasi Modal',
            value: 'Capital Preservation & Sustainable Growth',
          },
          {
            label: 'Profil Risiko Portofolio',
            value: 'Konservatif - Moderat Berimbang - 70.4% Pendapatan Tetap & Kas',
          },
          {
            label: 'Frekuensi Peninjauan & Rebalancing',
            value: 'Kuartalan - Evaluasi Makro Berkala',
          },
          {
            label: 'Kerangka Analisis Ekuitas',
            value: 'Valuasi Fundamental Terarah',
          },
        ],
      },
    ],
  },
];

const ASSET_ALLOCATIONS = [
  { label: 'PT Sinarmas Asset Management - Danamas Stabil', percent: 46.6, color: '#38bdf8' },
  { label: 'Deposito Krom Bank 7.5%', percent: 20.3, color: '#6366f1' },
  { label: 'Saham Domestik IDX', percent: 12.7, color: '#f59e0b' },
  { label: 'Cadangan Kas Valas SGD & MYR', percent: 11.0, color: '#10b981' },
  { label: 'BlackRock S&P 500 ETF IVV', percent: 5.9, color: '#a855f7' },
  { label: 'Obligasi INKP Kupon 6.5%', percent: 2.9, color: '#f43f5e' },
  { label: 'Obligasi Negara ORI-29T6', percent: 0.6, color: '#ec4899' },
];

const assetPieGradient = (() => {
  let currentAngle = 0;
  const gradientStops = ASSET_ALLOCATIONS.map((item) => {
    const startAngle = currentAngle;
    const endAngle = currentAngle + (item.percent / 100) * 360;
    currentAngle = endAngle;
    return `${item.color} ${startAngle.toFixed(2)}deg ${endAngle.toFixed(2)}deg`;
  });
  return `conic-gradient(${gradientStops.join(', ')})`;
})();

export default function AboutSection() {
  const { t } = useLanguage();
  const [selectedId, setSelectedId] = useState<CardId | null>(null);

  const selectedCard = CARDS.find((c) => c.id === selectedId) || null;

  // Smooth scroll into view when a card is clicked, and support Escape key to close
  useEffect(() => {
    if (!selectedId) return;

    const section = document.getElementById('infrastructure');
    if (section) {
      const navbarOffset = 70;
      const secTop = section.getBoundingClientRect().top + window.scrollY - navbarOffset;
      window.scrollTo({ top: Math.max(0, secTop), behavior: 'smooth' });
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedId(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedId]);

  // Helper render for card: works seamlessly for both the 2-column grid and the focused detail view
  const renderCard = (card: CardData, isSingleView = false) => {
    const Icon = card.icon;

    return (
      <div
        key={card.id}
        onClick={() => setSelectedId(card.id)}
        className={`rounded-xl sm:rounded-2xl border bg-[#070c18] overflow-hidden shadow-2xl flex flex-col justify-between relative group transition-all duration-300 p-3 sm:p-5 cursor-pointer ${
          isSingleView
            ? 'border-white/40 shadow-2xl shadow-black/60 ring-1 ring-white/20 min-h-[170px] sm:min-h-[200px]'
            : 'border-white/15 hover:border-white/40 hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-1.5 min-h-[180px] sm:min-h-[220px]'
        }`}
      >
        {/* Full Background Wallpaper */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={card.wallpaper}
          alt={card.title}
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 pointer-events-none"
        />
        {/* Dark Gradient Overlay for optimal contrast and readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/95 via-[#050b14]/85 to-[#050b14]/65 pointer-events-none" />

        {/* Top Header: Arrow in top right */}
        <div className="relative z-10 flex items-center justify-end">
          <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black/80 border border-white/20 flex items-center justify-center text-slate-300 group-hover:text-white group-hover:border-white/40 transition-colors">
            <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
        </div>

        {/* Center: Icon & Title ditaruh di tengah */}
        <div className="relative z-10 my-auto py-2 sm:py-4 flex flex-col items-center justify-center text-center">
          <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-black/80 border border-white/20 flex items-center justify-center text-slate-200 shadow-xl group-hover:border-white/40 group-hover:scale-105 transition-all mb-2 sm:mb-3">
            <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-sky-400 group-hover:text-sky-300 transition-colors" />
          </div>

          <h4 className="text-sm sm:text-base lg:text-lg font-bold text-white tracking-tight drop-shadow-md group-hover:text-slate-200 transition-colors text-center px-2 leading-snug">
            {card.title}
          </h4>
        </div>

        {/* Bottom Click Affordance */}
        <div className="relative z-10 pt-1.5 sm:pt-2.5 border-t border-white/10 flex items-center justify-between text-[8.5px] sm:text-[11px] font-sans text-slate-400 group-hover:text-white transition-colors">
          <span>{isSingleView ? 'Aktif' : 'Spesifikasi'}</span>
          <span>↗</span>
        </div>
      </div>
    );
  };

  return (
    <AnimatedSection
      id="infrastructure"
      className="py-14 sm:py-20 bg-[#080a10] relative overflow-hidden border-t border-white/[0.08]"
    >
      {/* Anchor for backward compatibility with #about */}
      <span id="about" className="sr-only" aria-hidden="true" />

      {/* Background Wallpaper: wallpaper_section2 */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <Image
          src="/images/wallpapers/wallpaper_section2.webp"
          alt="Infrastruktur & Manajemen Aset Wallpaper"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-70 sm:opacity-80"
          quality={95}
        />
        {/* Layer 1: Tint peredup halus merata untuk memastikan keterbacaan teks & kontras kartu */}
        <div className="absolute inset-0 bg-[#080a10]/60" />

        {/* Layer 2: Vignette radial halus untuk kedalaman visual */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,#080a10_100%)] opacity-85" />

        {/* Layer 3: Gradien atas menyatu mulus ke HeroSection */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#080a10] via-[#080a10]/70 to-transparent" />

        {/* Layer 4: Gradien bawah menyatu mulus ke SkillsSection */}
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#080a10] via-[#080a10]/80 to-transparent" />
      </div>

      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <SectionHeading
          title={t('Infrastruktur & Manajemen Aset', 'Infrastructure & Asset Management')}
          subtitle={t(
            'Fondasi sistem komputasi on-premise dan transparansi alokasi portofolio multi-aset.',
            'Foundations of on-premise computing systems and transparent multi-asset portfolio allocation.'
          )}
        />

        {/* ========================================================================= */}
        {/* KONDISI 1: JIKA TIDAK ADA YANG TERPILIH -> TAMPILKAN 2 KARTU SIMETRIS     */}
        {/* HASIL MERGER: (1) Hardware & Systems Infrastructure & (2) Asset Management */}
        {/* ========================================================================= */}
        {!selectedCard && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
            {CARDS.map((card) => renderCard(card, false))}
          </div>
        )}

        {/* ========================================================================= */}
        {/* KONDISI 2: JIKA ADA YANG DIPILIH -> TAMPILKAN CARD DI KIRI & SHEET DI KANAN */}
        {/* ========================================================================= */}
        {selectedCard && (
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start w-full">

            {/* SISI KIRI: HANYA MENAMPILKAN CARD YANG DIPILIH */}
            <div className="w-full lg:w-[380px] xl:w-[420px] shrink-0 lg:sticky lg:top-20 lg:max-h-[calc(100vh-100px)] lg:overflow-y-auto custom-scrollbar pr-0 lg:pr-2">
              {/* Tombol Kembali ke Semua Kartu */}
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                className="inline-flex items-center gap-2 text-xs font-sans text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 px-3.5 py-1.5 rounded-lg transition-colors mb-3 cursor-pointer group shadow-sm"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>{t('Kembali ke Semua Kartu', 'Back to All Cards')}</span>
              </button>

              {/* Render HANYA kartu yang dipilih dengan wallpaper dan ikon */}
              {renderCard(selectedCard, true)}

              {/* JIKA KARTU ASSET: ALLOCATED CHART BULAT DI KIRI DI BAWAH CARD */}
              {selectedCard.id === 'asset' && (
                <div className="mt-4 rounded-2xl border border-white/15 bg-[#070c18] p-4 sm:p-5 shadow-2xl relative overflow-hidden backdrop-blur-md">
                  {/* Header Chart */}
                  <div className="flex items-center gap-2 pb-2.5 mb-2.5 border-b border-white/10">
                    <PieChart className="w-4 h-4 text-sky-400" />
                    <span className="text-sm font-bold text-white tracking-tight">
                      Portfolio Allocation Chart
                    </span>
                  </div>

                  {/* Circular Allocation Pie Chart */}
                  <div className="flex justify-center items-center py-2">
                    <div
                      className="w-32 h-32 sm:w-36 sm:h-36 rounded-full shadow-2xl border border-white/20 transition-transform duration-500 hover:scale-105"
                      style={{ background: assetPieGradient }}
                    />
                  </div>

                  {/* Legend Items */}
                  <div className="mt-2.5 pt-2.5 border-t border-white/10 space-y-1.5">
                    {ASSET_ALLOCATIONS.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between text-xs py-1 px-1.5 rounded-lg hover:bg-white/[0.04] transition-colors"
                      >
                        <div className="flex items-center gap-2 min-w-0 pr-2">
                          <span
                            className="w-2.5 h-2.5 rounded-full shrink-0 shadow-sm"
                            style={{ backgroundColor: item.color }}
                          />
                          <span className="text-slate-300 text-[11px] sm:text-xs truncate font-medium">
                            {item.label}
                          </span>
                        </div>
                        <span className="font-sans font-bold text-white text-[11px] sm:text-xs shrink-0">
                          {item.percent}%
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* SISI KANAN: SHEET SPESIFIKASI SCROLLABLE */}
            <div className="flex-1 min-w-0 w-full bg-[#070c18]/90 border border-white/15 rounded-2xl p-5 sm:p-7 backdrop-blur-md shadow-2xl">
              {/* Header Sheet */}
              <div className="pb-4 border-b border-white/10 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                    {selectedCard.sheetTitle}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    {selectedCard.sheetSubtitle}
                  </p>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedId(null)}
                  className="w-9 h-9 rounded-xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                  aria-label="Tutup Lembar Spesifikasi"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* SHEET BODY: SCROLLABLE CONTAINER DENGAN SELURUH DATA LENGKAP */}
              <div className="max-h-none lg:max-h-[calc(100vh-200px)] overflow-visible lg:overflow-y-auto overscroll-none lg:overscroll-contain pr-0 lg:pr-4 mt-4 space-y-7 custom-scrollbar touch-pan-y">
                {selectedCard.sections.map((section, sIdx) => (
                  <div key={sIdx}>
                    {/* Section Title */}
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2.5">
                      {section.title}
                    </h3>

                    {/* Table Rows dengan Garis Pemisah Tipis */}
                    <div className="border-t border-white/[0.08]">
                      {section.rows.map((row, rIdx) => (
                        <div
                          key={rIdx}
                          className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-white/[0.08] hover:bg-white/[0.02] transition-colors"
                        >
                          {/* Sisi Kiri: Parameter */}
                          <span className="text-xs sm:text-sm font-semibold text-slate-200">
                            {row.label}
                          </span>

                          {/* Sisi Kanan: Nilai */}
                          <div className="sm:text-right shrink-0">
                            <span className="text-xs sm:text-sm font-sans text-slate-300 font-medium">
                              {row.value}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </AnimatedSection>
  );
}
