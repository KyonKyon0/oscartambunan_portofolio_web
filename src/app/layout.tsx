import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { siteMetadata } from "@/data/profile";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  metadataBase: new URL(siteMetadata.siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: "Oscar Tambunan Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
};

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Oscar Victorious Putra Tambunan",
  jobTitle: "Junior Full-Stack Developer",
  description: siteMetadata.description,
  url: siteMetadata.siteUrl,
  email: "oss.tam1137@gmail.com",
  sameAs: ["https://www.linkedin.com/in/haioscartambunan"],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universitas Gunadarma",
  },
  knowsAbout: [
    "Web Development",
    "PHP",
    "MySQL",
    "Linux Administration",
    "Proxmox VE",
    "Self-Hosted Systems",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} dark`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-bg-primary text-text-primary font-sans antialiased relative selection:bg-accent/30 selection:text-white">
        {/* Subtle Ambient Background Lighting - GPU Accelerated Zero-Jank Gradients */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden transform-gpu will-change-transform" aria-hidden="true">
          {/* Top ambient spotlight glow */}
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.12),transparent_70%)] opacity-80" />
          {/* Subtle warm accent depth */}
          <div className="absolute top-[30%] -right-40 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(14,165,233,0.06),transparent_70%)]" />
          <div className="absolute top-[60%] -left-40 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(99,102,241,0.06),transparent_70%)]" />
          {/* Architectural fine grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
        
        {/* Main Content */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
