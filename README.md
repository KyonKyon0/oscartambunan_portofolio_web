# Oscar Tambunan — Portfolio Website

A production-ready personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: Lucide React

## Quick Start

### Prerequisites

- Node.js 20+
- npm 9+

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

## Deployment

### Vercel (Recommended)

1. Push the repository to GitHub
2. Import the repository on [vercel.com](https://vercel.com)
3. Vercel auto-detects Next.js and configures the build
4. Set environment variables in the Vercel dashboard

### Docker

```bash
# Build the image
docker build -t oscar-portfolio .

# Run the container
docker run -p 3000:3000 --env-file .env oscar-portfolio
```

Or with Docker Compose:

```bash
# Copy environment variables
cp .env.example .env

# Build and start
docker compose up -d --build

# Check logs
docker compose logs -f

# Stop
docker compose down
```

### VPS Deployment (Ubuntu + Docker + Nginx)

1. **Install Docker** on your VPS:
   ```bash
   curl -fsSL https://get.docker.com | sh
   sudo usermod -aG docker $USER
   ```

2. **Clone and build**:
   ```bash
   git clone <your-repo-url> /opt/portfolio
   cd /opt/portfolio
   cp .env.example .env
   # Edit .env with your production values
   docker compose up -d --build
   ```

3. **Install Nginx**:
   ```bash
   sudo apt update && sudo apt install -y nginx
   ```

4. **Configure Nginx**:
   ```bash
   sudo cp nginx.conf /etc/nginx/sites-available/portfolio
   sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
   sudo rm /etc/nginx/sites-enabled/default
   sudo nginx -t && sudo systemctl reload nginx
   ```

5. **Set up SSL with Certbot**:
   ```bash
   sudo apt install -y certbot python3-certbot-nginx
   sudo certbot --nginx -d oscartambunan.dev -d www.oscartambunan.dev
   ```

6. **Verify**: Visit `https://oscartambunan.dev`

## Environment Variables

| Variable               | Description              | Default                    |
| ---------------------- | ------------------------ | -------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Production site URL      | `https://oscartambunan.dev`|
| `NEXT_PUBLIC_GA_ID`    | Google Analytics ID      | _(optional)_               |

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── projects/[slug]/    # Project case study pages
│   ├── layout.tsx          # Root layout with SEO
│   ├── page.tsx            # Home page
│   ├── sitemap.ts          # Dynamic sitemap
│   ├── robots.ts           # Robots.txt
│   └── manifest.ts         # Web app manifest
├── components/
│   ├── sections/           # Page sections (Hero, About, etc.)
│   ├── ui/                 # Reusable UI components
│   ├── Navbar.tsx          # Sticky navigation
│   ├── MobileMenu.tsx      # Accessible mobile menu
│   ├── Footer.tsx          # Site footer
│   └── ParticleBackground.tsx # Canvas particles
├── data/                   # Static content data
├── lib/hooks/              # Custom React hooks
└── types/                  # TypeScript interfaces
```

## Customization

### Content

All content is stored in `src/data/`. Edit these files to update:
- `profile.ts` — Name, title, contact info, social links
- `projects.ts` — Project details and case studies
- `experience.ts` — Work experience
- `skills.ts` — Technical skills
- `education.ts` — Education details
- `certifications.ts` — Certifications

### Adding a CV

Place your CV PDF at `public/oscar-tambunan-cv.pdf`.

### Adding a GitHub Profile

In `src/data/profile.ts`, update the `github` field with your GitHub URL. The button will automatically appear.

### Adding Credential URLs

In `src/data/certifications.ts`, fill in the `credentialUrl` field for each certification. The "View Credential" button will automatically appear.

## License

© Oscar Victorious Putra Tambunan. All rights reserved.
