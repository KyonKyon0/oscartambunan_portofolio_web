import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Oscar Tambunan Portfolio',
    short_name: 'Oscar.dev',
    description:
      'Portfolio of Oscar Victorious Putra Tambunan — Junior Full-Stack Developer',
    start_url: '/',
    display: 'standalone',
    background_color: '#050505',
    theme_color: '#4F8CFF',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
