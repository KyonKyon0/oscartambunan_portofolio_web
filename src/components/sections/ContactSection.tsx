'use client';

import { useState } from 'react';
import {
  Mail,
  ExternalLink,
  Download,
  Copy,
  Check,
  MessageCircle,
  Phone,
  Eye,
  EyeOff,
  ArrowUpRight,
} from 'lucide-react';
import { profile } from '@/data/profile';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = profile.email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatedSection
      id="contact"
      className="py-16 sm:py-24 bg-bg-secondary relative overflow-hidden border-t border-white/[0.08]"
    >
      {/* Ambient background light leaks - GPU Accelerated */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.05),transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10">
        <SectionHeading
          title="Get In Touch"
          subtitle="Open for full-stack engineering roles, infrastructure collaborations, and technical discussions."
        />

        {/* Open Direct Layout — Tanpa Pembungkus Card (Clean, Seamless & Editorial) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-start max-w-6xl mx-auto">
          {/* Photo Showcase Panel: Top on Mobile, Right Column on Desktop */}
          <div className="lg:col-span-5 order-first lg:order-last flex flex-col w-full">
            <div className="relative w-full aspect-[4/5] sm:aspect-[4/5] lg:aspect-auto lg:h-full min-h-[320px] lg:min-h-[500px] rounded-2xl overflow-hidden border border-white/10 bg-slate-900/60 shadow-2xl group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/profile/carmen-portrait.jpg"
                alt="Carmen"
                className="w-full h-full object-cover object-[center_18%] brightness-95 contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

              {/* Information & Channels Column: Bottom on Mobile, Left Column on Desktop */}
              <div className="lg:col-span-7 lg:order-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                    Let&apos;s build something fast, clean, and reliable.
                  </h3>

                  {/* Quote Block — Nyoman Ayu Carmenita 2026 */}
                  <div className="mt-4 mb-7 border-l-2 border-accent/60 pl-4 py-0.5">
                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic">
                      &ldquo;Tidak ada yang memperhatikan rasa sakitmu, tapi semua orang memperhatikan kesalahanmu.&rdquo;
                    </p>
                    <p className="text-xs font-mono text-slate-400 mt-2 font-medium">
                      — Nyoman Ayu Carmenita 2026
                    </p>
                  </div>

                  {/* Direct Contact Channels — 2-Line Architecture for Zero Horizontal Truncation */}
                  <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                    {/* Email Row */}
                    <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] transition-colors">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                            <Mail className="w-3.5 h-3.5 text-sky-400" />
                          </div>
                          <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider font-semibold">
                            Email Address
                          </span>
                        </div>
                        <button
                          onClick={handleCopyEmail}
                          className="px-2.5 py-1 rounded-md bg-white/[0.06] hover:bg-white/[0.12] text-[11px] font-mono text-slate-300 transition-colors flex items-center gap-1 shrink-0"
                          aria-label={copied ? 'Email copied' : 'Copy email address'}
                        >
                          {copied ? (
                            <>
                              <Check className="w-3 h-3 text-emerald-400" />
                              <span className="text-emerald-400 font-semibold">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3 text-slate-400" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-xs sm:text-sm font-mono text-white hover:text-accent transition-colors pl-9 block font-medium break-all sm:break-normal"
                      >
                        {profile.email}
                      </a>
                    </div>

                    {/* LinkedIn Row */}
                    <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] transition-colors group/link">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                            <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                          </div>
                          <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider font-semibold">
                            LinkedIn Profile
                          </span>
                        </div>
                        <a
                          href={profile.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded-md bg-white/[0.06] hover:bg-white/[0.12] text-[11px] font-mono text-slate-300 hover:text-white transition-colors flex items-center gap-1 shrink-0"
                          aria-label="Visit LinkedIn profile"
                        >
                          <span>Connect</span>
                          <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover/link:text-accent transition-colors" />
                        </a>
                      </div>
                      <a
                        href={profile.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-mono text-white hover:text-accent transition-colors pl-9 block font-medium truncate"
                      >
                        linkedin.com/in/haioscartambunan
                      </a>
                    </div>

                    {/* WhatsApp & Phone Row */}
                    <div className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] transition-colors">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                            <Phone className="w-3.5 h-3.5 text-emerald-400" />
                          </div>
                          <span className="text-[10px] font-mono uppercase text-slate-400 tracking-wider font-semibold">
                            WhatsApp &amp; Phone
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            onClick={() => setShowPhone(!showPhone)}
                            className="px-2 py-1 rounded-md bg-white/[0.06] hover:bg-white/[0.12] text-[11px] font-mono text-slate-300 transition-colors flex items-center gap-1"
                            aria-label={showPhone ? 'Hide phone number' : 'Show phone number'}
                          >
                            {showPhone ? <EyeOff className="w-3 h-3 text-slate-400" /> : <Eye className="w-3 h-3 text-slate-400" />}
                            <span>{showPhone ? 'Hide' : 'Reveal'}</span>
                          </button>
                          {profile.whatsapp && (
                            <a
                              href={profile.whatsapp}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2.5 py-1 rounded-md bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-[11px] font-mono text-emerald-300 transition-colors flex items-center gap-1"
                              aria-label="Direct message on WhatsApp"
                            >
                              <MessageCircle className="w-3 h-3 text-emerald-400" />
                              <span>Chat</span>
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="text-xs sm:text-sm font-mono text-white pl-9 font-medium tracking-wide">
                        {showPhone ? profile.phone : '+62 •••• •••• ••••'}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Primary Action Buttons Bar */}
                <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                  <Button
                    href={`mailto:${profile.email}`}
                    variant="primary"
                    icon={Mail}
                    size="md"
                    external
                    className="flex-1 justify-center text-xs font-semibold"
                  >
                    Send Direct Email
                  </Button>
                  <Button
                    href={profile.cvUrl}
                    variant="secondary"
                    icon={Download}
                    size="md"
                    external
                    className="flex-1 justify-center text-xs font-semibold"
                  >
                    Download CV (PDF)
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
  );
}
