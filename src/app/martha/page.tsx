"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, ExternalLink, FileCode2 } from "lucide-react";

const DefaultAvatar = () => (
  <svg
    className="w-full h-full text-neutral-600 bg-neutral-900"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      clipRule="evenodd"
    />
  </svg>
);

export default function MarthaPage() {
  const creators = [
    {
      name: "OSCAR VICTORIOUS PUTRA TAMBUNAN",
      role: "Full-Stack Developer & Technical Lead",
      description: "Mengembangkan arsitektur aplikasi web dengan Next.js, integrasi database Supabase, dan koordinasi sistem frontend.",
    },
    {
      name: "YOHANES RAKHA NUGROHO",
      role: "Frontend & UI/UX Developer",
      description: "Merancang antarmuka pengguna interaktif, peta merchant lokal, dan pengalaman katalog makanan surplus.",
    },
    {
      name: "BAGUS NUGROHO EKO PRASETYO",
      role: "Backend & Systems Support",
      description: "Mendukung manajemen database PostgreSQL, verifikasi API endpoints, dan konfigurasi environment.",
    }
  ];

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary selection:bg-accent/30 font-sans relative">
      {/* Subtle overlay gradient to keep text readable (Particles handled globally) */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center">
        
        {/* Back Button */}
        <div className="w-full flex justify-start mb-8">
          <a href="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
            <ArrowRight className="w-5 h-5 rotate-180" />
            <span className="font-medium">Kembali</span>
          </a>
        </div>
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6 mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
            Mertha
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            Sistem Eco-Infrastructure generasi berikutnya untuk penyelamatan limbah makanan.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="#" 
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors w-full sm:w-auto justify-center"
            >
              <ExternalLink className="w-4 h-4" />
              Link ke Web
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-white font-medium hover:bg-neutral-800 transition-colors w-full sm:w-auto justify-center"
            >
              <FileCode2 className="w-4 h-4" />
              Readme Architecture
            </a>
          </div>
        </motion.div>

        {/* The Creators (Vertical Stack) */}
        <div className="w-full max-w-3xl space-y-6 mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <h2 className="text-xl font-medium text-neutral-500 uppercase tracking-widest text-center">Tim Pengembang</h2>
          </motion.div>

          {creators.map((creator, index) => (
            <motion.div
              key={creator.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className="group p-6 md:p-8 rounded-2xl bg-neutral-950/80 border border-neutral-900 hover:border-neutral-700 transition-all backdrop-blur-sm flex flex-col md:flex-row gap-6 items-start md:items-center"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-full overflow-hidden border border-neutral-800">
                <DefaultAvatar />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-1 flex items-center gap-2">
                  {creator.name}
                </h3>
                <p className="text-neutral-400 font-medium mb-3 text-sm uppercase tracking-wide">
                  {creator.role}
                </p>
                <p className="text-neutral-500 leading-relaxed text-sm md:text-base">
                  {creator.description}
                </p>
                
                {creator.name.includes("OSCAR") && (
                  <a href="https://oscartambunan.dev" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 mt-4 text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors">
                    <span>Visit Portfolio</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core Technologies & Too Good To Be Waste Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="w-full space-y-20"
        >
          {/* Real Tech Stack */}
          <div className="space-y-8">
            <h2 className="text-xl font-medium text-neutral-500 uppercase tracking-widest text-center flex items-center justify-center gap-2">
              <Code2 className="w-5 h-5" /> Teknologi
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: "Next.js 16", desc: "Framework" },
                { name: "React 19", desc: "UI Library" },
                { name: "Supabase", desc: "Database & Auth" },
                { name: "Google GenAI", desc: "Machine Learning" },
                { name: "Leaflet", desc: "Geo-Mapping" },
                { name: "Zustand", desc: "State Management" },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="p-5 rounded-xl bg-neutral-950/50 border border-neutral-900 hover:bg-neutral-900 transition-colors text-center"
                >
                  <h3 className="font-semibold text-white">{tech.name}</h3>
                  <p className="text-xs text-neutral-500 mt-1">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Too Good To Be Waste (Mertha) Exaggerated Section */}
          <div className="p-8 md:p-12 rounded-3xl bg-neutral-950/80 border border-neutral-900 backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-white text-center">
              Arsitektur Sistem (Too Good To Be Waste)
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="p-6 rounded-2xl bg-black border border-neutral-900">
                <h3 className="text-lg font-semibold text-white mb-2">Sentient GenAI Engine</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Didukung oleh @google/genai, sistem ini menggunakan arsitektur jaringan saraf yang bisa mengenali, mengklasifikasi, dan memprediksi aliran limbah makanan (food waste) dengan akurasi tinggi.
                </p>
              </div>
              
              <div className="p-6 rounded-2xl bg-black border border-neutral-900">
                <h3 className="text-lg font-semibold text-white mb-2">Supabase Quantum Auth</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Basis data relasional real-time yang memproses ribuan transaksi penyelamatan makanan dengan aman secara terdesentralisasi, dilindungi oleh enkripsi server-side tingkat tinggi.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-900">
                <h3 className="text-lg font-semibold text-white mb-2">Planetary Geo-Mapping</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Memanfaatkan integrasi React-Leaflet untuk memetakan koordinat penyelamatan sisa makanan di seluruh permukaan bumi secara real-time dan presisi.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-black border border-neutral-900">
                <h3 className="text-lg font-semibold text-white mb-2">Telepathic Zustand</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Manajemen state menggunakan Zustand yang sangat ringan dan cepat, memastikan interaksi pengguna yang mulus tanpa lag.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
