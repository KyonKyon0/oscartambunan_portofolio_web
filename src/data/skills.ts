import { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming',
    icon: 'Code2',
    skills: [
      { name: 'PHP', relatedProjects: ['UGClashub', 'DODOStore'] },
      { name: 'Python', relatedProjects: [] },
      { name: 'Go', relatedProjects: [] },
    ],
  },
  {
    category: 'Database',
    icon: 'Database',
    skills: [
      {
        name: 'MySQL',
        relatedProjects: ['UGClashub', 'DODOStore'],
      },
      { name: 'Basic Queries & CRUD Operations', relatedProjects: [] },
    ],
  },
  {
    category: 'Linux & Infrastructure',
    icon: 'Server',
    skills: [
      {
        name: 'Linux System Administration',
        relatedProjects: [
          'Virtualized Server Infrastructure',
          'Private Cloud Storage System',
        ],
      },
      {
        name: 'Proxmox VE',
        relatedProjects: ['Virtualized Server Infrastructure'],
      },
      {
        name: 'Virtual Machines & Containers',
        relatedProjects: ['Virtualized Server Infrastructure'],
      },
      { name: 'Resource Allocation', relatedProjects: ['Virtualized Server Infrastructure'] },
    ],
  },
  {
    category: 'Web & Server',
    icon: 'Globe',
    skills: [
      { name: 'Nginx', relatedProjects: [] },
      { name: 'aaPanel', relatedProjects: [] },
      { name: 'Web Hosting Deployment', relatedProjects: ['UGClashub'] },
    ],
  },
  {
    category: 'Cloud & Self-Hosted Services',
    icon: 'Cloud',
    skills: [
      {
        name: 'Nextcloud',
        relatedProjects: ['Private Cloud Storage System'],
      },
      {
        name: 'Cloudflare Tunnel',
        relatedProjects: ['Private Cloud Storage System'],
      },
    ],
  },
  {
    category: 'Networking & Security',
    icon: 'Shield',
    skills: [
      { name: 'DNS', relatedProjects: [] },
      { name: 'TCP/IP', relatedProjects: [] },
      {
        name: 'Multi-Factor Authentication',
        relatedProjects: ['Private Cloud Storage System'],
      },
    ],
  },
  {
    category: 'Tools',
    icon: 'Wrench',
    skills: [
      { name: 'Google Docs', relatedProjects: [] },
      { name: 'Google Sheets', relatedProjects: [] },
      { name: 'Google Slides', relatedProjects: [] },
    ],
  },
];
