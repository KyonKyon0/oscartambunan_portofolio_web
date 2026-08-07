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
} from 'lucide-react';
import { profile } from '@/data/profile';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
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
      // Fallback for older browsers
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
    <AnimatedSection id="contact" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Contact"
          subtitle="Interested in working together? Get in touch."
          align="center"
        />

        <div className="max-w-2xl mx-auto">
          <GlassCard padding="lg" className="glass-panel-strong">
            {/* Name */}
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-text-primary mb-1">
                {profile.name}
              </h3>
              <p className="text-sm text-text-secondary">{profile.title}</p>
            </div>

            {/* Contact details */}
            <div className="space-y-4 mb-8">
              {/* Email */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-border-subtle">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <span className="text-sm text-text-primary flex-1 break-all">
                  {profile.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-md hover:bg-surface-hover transition-colors min-w-[32px] min-h-[32px] flex items-center justify-center"
                  aria-label={copied ? 'Email copied' : 'Copy email address'}
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 text-text-tertiary" />
                  )}
                </button>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-border-subtle">
                <ExternalLink className="w-4 h-4 text-accent shrink-0" />
                <a
                  href={profile.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-primary hover:text-accent transition-colors flex-1 truncate"
                >
                  linkedin.com/in/haioscartambunan
                </a>
              </div>

              {/* Phone — masked by default */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-surface border border-border-subtle">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <span className="text-sm text-text-primary flex-1">
                  {showPhone ? profile.phone : '+62 •••• •••• ••••'}
                </span>
                <button
                  onClick={() => setShowPhone(!showPhone)}
                  className="p-1.5 rounded-md hover:bg-surface-hover transition-colors min-w-[32px] min-h-[32px] flex items-center justify-center"
                  aria-label={showPhone ? 'Hide phone number' : 'Show phone number'}
                >
                  {showPhone ? (
                    <EyeOff className="w-3.5 h-3.5 text-text-tertiary" />
                  ) : (
                    <Eye className="w-3.5 h-3.5 text-text-tertiary" />
                  )}
                </button>
              </div>
            </div>

            {/* Action buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                href={`mailto:${profile.email}`}
                variant="primary"
                icon={Mail}
                external
              >
                Send Email
              </Button>
              <Button
                href={profile.linkedIn}
                variant="secondary"
                icon={ExternalLink}
                external
              >
                Open LinkedIn
              </Button>
              {profile.whatsapp && (
                <Button
                  href={profile.whatsapp}
                  variant="outline"
                  icon={MessageCircle}
                  external
                >
                  WhatsApp
                </Button>
              )}
              <Button
                href={profile.cvUrl}
                variant="outline"
                icon={Download}
                external
              >
                Download CV
              </Button>
            </div>
          </GlassCard>
        </div>
      </div>
    </AnimatedSection>
  );
}
