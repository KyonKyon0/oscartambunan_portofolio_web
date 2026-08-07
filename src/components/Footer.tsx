import { profile } from '@/data/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-bg-secondary" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-text-tertiary">
            © {currentYear} {profile.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a
              href={profile.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-tertiary hover:text-text-primary transition-colors"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-text-tertiary hover:text-text-primary transition-colors"
              aria-label="Send email"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
