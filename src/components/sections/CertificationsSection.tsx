'use client';

import { Award, ExternalLink } from 'lucide-react';
import { certifications } from '@/data/certifications';
import AnimatedSection from '@/components/ui/AnimatedSection';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';
import Button from '@/components/ui/Button';

export default function CertificationsSection() {
  return (
    <AnimatedSection id="certifications" className="py-20 sm:py-28 bg-bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications"
          subtitle="Completed courses and earned certifications."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert) => (
            <GlassCard key={cert.name} hover padding="md">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-accent-muted shrink-0">
                  <Award className="w-4 h-4 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-text-primary leading-snug mb-1">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-text-secondary mb-1">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-text-tertiary">{cert.date}</p>

                  {/* Credential button — only shown when URL exists */}
                  {cert.credentialUrl && (
                    <div className="mt-3">
                      <Button
                        href={cert.credentialUrl}
                        variant="ghost"
                        size="sm"
                        icon={ExternalLink}
                        external
                      >
                        View Credential
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
