// ============================================================
// Portfolio Data Types
// ============================================================

export interface SocialLink {
  platform: string;
  url: string | null;
  label: string;
  icon: string; // Lucide icon name
}

export interface Profile {
  name: string;
  title: string;
  specialization: string;
  bio: string;
  location: string;
  email: string;
  phone?: string | null;
  linkedIn: string;
  github: string | null;
  whatsapp?: string | null;
  instagram?: string | null;
  cvUrl: string;
  socialLinks: SocialLink[];
}

export interface ProjectLink {
  type: 'live' | 'source' | 'case-study';
  url: string;
  label: string;
}

export interface ProjectCaseStudy {
  overview: string | null;
  problem: string | null;
  role: string | null;
  architecture: string | null;
  implementation: string | null;
  technicalConsiderations: string | null;
  securityConsiderations: string | null;
  challenges: string | null;
  lessonsLearned: string | null;
  result: string | null;
}

export interface Project {
  slug: string;
  name: string;
  purpose: string;
  imageUrl?: string;
  technologies: string[];
  contributions: string[];
  technicalChallenge: string | null;
  status: string | null;
  links: ProjectLink[];
  caseStudy: ProjectCaseStudy;
}

export interface Experience {
  organization: string;
  role: string;
  year: string;
  type: 'primary' | 'additional';
  responsibilities: string[];
  tools: string[];
  contributions: string[];
  results: string[];
  description: string | null;
}

export interface AdditionalExperience {
  title: string;
  period: string;
  focusAreas: string[];
  evidenceOf: string[];
  description: string | null;
}

export interface Skill {
  name: string;
  relatedProjects: string[]; // Project names
}

export interface SkillCategory {
  category: string;
  icon: string; // Lucide icon name
  skills: Skill[];
}

export interface Education {
  institution: string;
  degree: string;
  yearRange: string;
  gpa: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl: string | null;
  certificateFile?: string | null;
  thumbnail?: string | null;
  category?: string;
  description?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}
