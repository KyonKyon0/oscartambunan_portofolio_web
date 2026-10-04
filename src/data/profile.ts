import { Profile, NavigationItem } from '@/types';

export const profile: Profile = {
  name: 'Oscar Victorious Putra Tambunan',
  title: 'Junior Full-Stack Developer',
  specialization: 'Web Development, Linux Infrastructure, and Self-Hosted Systems',
  bio: 'Informatics Engineering student building practical web applications and reliable self-hosted infrastructure using PHP, MySQL, Linux, virtualization, and cloud-based deployment tools.',
  location: 'Indonesia',
  email: 'oss.tam1137@gmail.com',
  phone: '+62 812-2299-4801',
  linkedIn: 'https://www.linkedin.com/in/haioscartambunan',
  github: null, // TODO: Add GitHub URL when available
  whatsapp: 'https://wa.me/6281222994801',
  instagram: 'https://instagram.com/haioscartambunan',
  cvUrl: '/oscar-tambunan-cv.pdf', // TODO: Replace with actual CV file
  socialLinks: [
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/haioscartambunan',
      label: 'LinkedIn Profile',
      icon: 'Linkedin',
    },
    {
      platform: 'GitHub',
      url: null, // TODO: Add GitHub URL when available
      label: 'GitHub Profile',
      icon: 'Github',
    },
    {
      platform: 'Email',
      url: 'mailto:oss.tam1137@gmail.com',
      label: 'Send Email',
      icon: 'Mail',
    },
  ],
};

export const navigationItems: NavigationItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Infrastructure', href: '#infrastructure' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const siteMetadata = {
  title: 'Oscar Victorious Putra Tambunan | Junior Full-Stack Developer',
  description:
    'Portfolio of Oscar Victorious Putra Tambunan, an Informatics Engineering student focused on web development, Linux infrastructure, virtualization, and self-hosted systems.',
  siteUrl: 'https://oscartambunan.dev', // TODO: Replace with actual production URL
  ogImage: '/og-image.png', // TODO: Replace with actual OG image
};
