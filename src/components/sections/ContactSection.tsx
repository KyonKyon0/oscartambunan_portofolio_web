'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  ArrowUpRight,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { profile } from '@/data/profile';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Gagal mengirim pesan.');
      }

      setSubmitStatus({
        type: 'success',
        message: t(
          'Pesan Anda berhasil dikirim langsung ke email Oscar Tambunan! Terima kasih telah menghubungi.',
          'Your message has been sent directly to Oscar Tambunan! Thank you for reaching out.'
        ),
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : t(
              'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.',
              'An error occurred while sending the message. Please try again.'
            );
      setSubmitStatus({
        type: 'error',
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatedSection
      id="contact"
      className="py-16 sm:py-24 bg-[#080a10] relative overflow-hidden border-t border-white/[0.08]"
    >
      {/* Background Wallpaper: wallpaper-section2 */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <Image
          src="/images/wallpapers/wallpaper-section2.webp"
          alt="Contact Section Wallpaper"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-65 sm:opacity-75"
          unoptimized
        />
        {/* Layer 1: Ambient deep dark overlay to ensure readability */}
        <div className="absolute inset-0 bg-[#080a10]/60" />

        {/* Layer 2: Subtle radial vignette to focus attention towards the content */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,#080a10_100%)] opacity-85" />

        {/* Layer 3: Top edge seamless transition with Gallery section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#080a10] via-[#080a10]/70 to-transparent" />

        {/* Layer 4: Bottom edge seamless transition with Footer */}
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#070a12] via-[#070a12]/85 to-transparent" />
      </div>

      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <SectionHeading
          title={t('Hubungi Saya', 'Get In Touch')}
          subtitle={t(
            'Terbuka untuk posisi full-stack engineering, kolaborasi infrastruktur, dan diskusi teknis.',
            'Open for full-stack engineering roles, infrastructure collaborations, and technical discussions.'
          )}
        />

        {/* Dual Layout: Form di Kiri & Profil / Kanal di Kanan (Tinggi Sama Sempurna di Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch max-w-6xl mx-auto">
          {/* Kolom 1: Formulir Kontak Interaktif */}
          <div className="lg:col-span-7 w-full flex flex-col h-full">
            <div className="p-5 sm:p-7 md:p-8 rounded-2xl bg-[#070c18]/85 border border-white/10 backdrop-blur-md shadow-2xl flex flex-col justify-between h-full">
              {/* Header Form */}
              <div className="mb-4 sm:mb-5">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {t('Kirim Pesan Langsung', 'Send a Direct Message')}
                </h3>
              </div>

              {/* Status Alert */}
              {submitStatus.type === 'success' && (
                <div className="mb-4 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs sm:text-sm flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{submitStatus.message}</span>
                </div>
              )}

              {submitStatus.type === 'error' && (
                <div className="mb-4 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-xs sm:text-sm flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{submitStatus.message}</span>
                </div>
              )}

              {/* Semantik HTML Form (Flex-1 agar merentang pas dengan kolom kanan) */}
              <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between space-y-3.5 sm:space-y-4">
                <div className="space-y-3 sm:space-y-3.5 flex-1 flex flex-col">
                  {/* Nama & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-[11px] font-sans font-semibold uppercase text-slate-400 tracking-wider mb-1.5"
                      >
                        {t('Nama Lengkap', 'Full Name')}{' '}
                        <span className="text-accent">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder={t('Contoh: Budi Santoso', 'e.g. John Doe')}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.06] focus:bg-white/[0.08] border border-white/10 focus:border-accent/60 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-[11px] font-sans font-semibold uppercase text-slate-400 tracking-wider mb-1.5"
                      >
                        {t('Alamat Email', 'Email Address')}{' '}
                        <span className="text-accent">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="email@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.06] focus:bg-white/[0.08] border border-white/10 focus:border-accent/60 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subjek Pesan */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-[11px] font-sans font-semibold uppercase text-slate-400 tracking-wider mb-1.5"
                    >
                      {t('Subjek / Topik', 'Subject / Topic')}
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder={t(
                        'Tawaran Kerja / Diskusi Proyek / Pertanyaan',
                        'Job Offer / Project Discussion / Inquiry'
                      )}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.06] focus:bg-white/[0.08] border border-white/10 focus:border-accent/60 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Isi Pesan (Stretches smoothly to match height) */}
                  <div className="flex-1 flex flex-col">
                    <label
                      htmlFor="contact-message"
                      className="block text-[11px] font-sans font-semibold uppercase text-slate-400 tracking-wider mb-1.5"
                    >
                      {t('Isi Pesan', 'Message')}{' '}
                      <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder={t(
                        'Tuliskan pesan Anda secara rinci di sini...',
                        'Write your detailed message here...'
                      )}
                      className="w-full flex-1 min-h-[120px] sm:min-h-[140px] px-3.5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.06] focus:bg-white/[0.08] border border-white/10 focus:border-accent/60 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none transition-colors resize-none"
                    />
                  </div>
                </div>

                {/* Tombol Submit Form di Bagian Bawah */}
                <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between gap-3 shrink-0">
                  <span className="text-[11px] text-slate-500 font-sans">
                    {t('* Wajib diisi', '* Required fields')}
                  </span>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-xl bg-accent text-slate-950 font-bold hover:bg-accent/90 transition-all cursor-pointer disabled:opacity-50 text-xs sm:text-sm shadow-md hover:shadow-accent/20"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                        <span>{t('Mengirim...', 'Sending...')}</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-slate-950" />
                        <span>{t('Kirim Pesan', 'Send Message')}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Kolom 2: Saluran Kontak Langsung (Hanya LinkedIn & Instagram) */}
          <div className="lg:col-span-5 w-full flex flex-col justify-center space-y-4">
            {/* LinkedIn Row */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#070c18]/85 hover:bg-[#070c18] border border-white/10 backdrop-blur-md transition-colors group/link shadow-xl">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/linkedin.svg"
                      alt="LinkedIn"
                      width={18}
                      height={18}
                      className="w-4 h-4 object-contain"
                      unoptimized
                    />
                  </div>
                  <span className="text-xs font-sans uppercase text-slate-300 tracking-wider font-semibold">
                    {t('Profil LinkedIn', 'LinkedIn Profile')}
                  </span>
                </div>
                <a
                  href={profile.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-md bg-white/[0.06] hover:bg-white/[0.12] text-xs font-sans text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 shrink-0"
                  aria-label="Visit LinkedIn profile"
                >
                  <span>{t('Terhubung', 'Connect')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover/link:text-accent transition-colors" />
                </a>
              </div>
              <a
                href={profile.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-sans text-white hover:text-accent transition-colors pl-10.5 block font-medium truncate"
              >
                linkedin.com/in/haioscartambunan
              </a>
            </div>

            {/* Instagram Row */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#070c18]/85 hover:bg-[#070c18] border border-white/10 backdrop-blur-md transition-colors group/link shadow-xl">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center shrink-0">
                    <Image
                      src="https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/instagram.svg"
                      alt="Instagram"
                      width={18}
                      height={18}
                      className="w-4 h-4 object-contain"
                      unoptimized
                    />
                  </div>
                  <span className="text-xs font-sans uppercase text-slate-300 tracking-wider font-semibold">
                    {t('Profil Instagram', 'Instagram Profile')}
                  </span>
                </div>
                <a
                  href={profile.instagram || 'https://instagram.com/oss_tam'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-md bg-white/[0.06] hover:bg-white/[0.12] text-xs font-sans text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 shrink-0"
                  aria-label="Visit Instagram profile"
                >
                  <span>{t('Kunjungi', 'Visit')}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover/link:text-pink-400 transition-colors" />
                </a>
              </div>
              <a
                href={profile.instagram || 'https://instagram.com/oss_tam'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-sans text-white hover:text-pink-400 transition-colors pl-10.5 block font-medium truncate"
              >
                instagram.com/oss_tam
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
