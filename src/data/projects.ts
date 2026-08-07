import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'virtualized-server-infrastructure',
    name: 'Virtualized Server Infrastructure',
    purpose:
      'Build a personal virtualization environment as the foundation for independently managed hosting and server services.',
    technologies: ['Proxmox VE', 'Linux', 'Virtual Machines', 'Containers'],
    contributions: [
      'Implemented Proxmox VE for virtual machine and container management',
      'Allocated CPU, RAM, and storage resources',
      'Deployed and managed Linux-based servers',
      'Performed basic configuration and performance tuning',
      'Built the infrastructure foundation for self-hosted services',
    ],
    technicalChallenge: null, // TODO: Add technical challenge details
    status: null, // TODO: Add current project status
    links: [],
    caseStudy: {
      overview:
        'A personal virtualization environment built using Proxmox VE to serve as the backbone for self-hosted services and server management.',
      problem:
        'Needed a flexible, cost-effective infrastructure to host multiple services without relying on third-party cloud providers for every workload.',
      role: 'Infrastructure designer and system administrator. Solely responsible for planning, deploying, and maintaining the virtualization environment.',
      architecture: null, // TODO: Add architecture details or diagram description
      implementation:
        'Installed and configured Proxmox VE on physical hardware. Created and managed virtual machines and containers, allocating compute and storage resources based on workload requirements. Deployed Linux-based servers within the virtualized environment.',
      technicalConsiderations:
        'Resource allocation required balancing CPU, RAM, and storage across multiple VMs and containers. Considered performance tuning and monitoring to ensure stable operation.',
      securityConsiderations: null, // TODO: Add security details
      challenges: null, // TODO: Add specific challenges encountered
      lessonsLearned: null, // TODO: Add lessons learned
      result:
        'Successfully established a working virtualization environment capable of hosting multiple self-hosted services.',
    },
  },
  {
    slug: 'private-cloud-storage',
    name: 'Private Cloud Storage System',
    purpose:
      'Create a private, self-hosted cloud storage system as an alternative to public file-storage services.',
    technologies: [
      'Nextcloud',
      'Linux',
      'Cloudflare Tunnel',
      'Multi-Factor Authentication',
    ],
    contributions: [
      'Installed and managed Nextcloud',
      'Configured secure remote access using Cloudflare Tunnel',
      'Avoided direct public IP exposure',
      'Enabled multi-factor authentication',
      'Managed synchronization and access across devices',
      'Optimized the environment for personal self-hosted use',
    ],
    technicalChallenge: null, // TODO: Add technical challenge details
    status: null, // TODO: Add current project status
    links: [],
    caseStudy: {
      overview:
        'A self-hosted cloud storage solution built with Nextcloud, providing secure file storage and synchronization without relying on third-party cloud services.',
      problem:
        'Wanted a private cloud storage solution that provides full data ownership while maintaining accessibility from multiple devices without exposing infrastructure publicly.',
      role: 'System administrator and deployer. Handled the complete setup from installation to secure access configuration.',
      architecture: null, // TODO: Add architecture details
      implementation:
        'Deployed Nextcloud on a Linux server within the virtualized infrastructure. Configured Cloudflare Tunnel for secure remote access without exposing the server\'s public IP. Set up multi-factor authentication for additional security.',
      technicalConsiderations:
        'Balancing accessibility with security was key. Cloudflare Tunnel provided a way to expose services securely. Multi-factor authentication added an extra protection layer.',
      securityConsiderations:
        'Avoided direct public IP exposure by routing traffic through Cloudflare Tunnel. Implemented multi-factor authentication to protect user accounts.',
      challenges: null, // TODO: Add specific challenges
      lessonsLearned: null, // TODO: Add lessons learned
      result:
        'Achieved a functional private cloud storage system with secure remote access and multi-device synchronization.',
    },
  },
  {
    slug: 'ugclashub',
    name: 'UGClashub',
    purpose:
      'Build and deploy a responsive web platform with user and content management capabilities.',
    technologies: ['PHP', 'MySQL', 'Web Hosting'],
    contributions: [
      'Developed the website using PHP and MySQL',
      'Designed a database schema for user data',
      'Built core content-management and user-interaction features',
      'Created a responsive interface',
      'Deployed the application to live hosting',
    ],
    technicalChallenge: null, // TODO: Add technical challenge details
    status: 'Live',
    links: [
      {
        type: 'live',
        url: 'https://ugclashub.tech',
        label: 'Visit Live Website',
      },
    ],
    caseStudy: {
      overview:
        'A responsive web platform with content management and user interaction capabilities, built with PHP and MySQL and deployed to live hosting.',
      problem:
        'Needed to create a web platform that could manage user data and content while providing a responsive experience across devices.',
      role: 'Full-stack developer. Responsible for front-end design, back-end development, database design, and deployment.',
      architecture: null, // TODO: Add architecture details
      implementation:
        'Built the application using PHP for server-side logic and MySQL for data persistence. Designed database schemas to support user management and content storage. Created responsive front-end layouts.',
      technicalConsiderations:
        'Database schema design needed to accommodate user data and content relationships. Responsive design required testing across multiple screen sizes.',
      securityConsiderations: null, // TODO: Add security details
      challenges: null, // TODO: Add specific challenges
      lessonsLearned: null, // TODO: Add lessons learned
      result:
        'Successfully deployed a live web platform accessible at ugclashub.tech.',
    },
  },
  {
    slug: 'dodostore',
    name: 'DODOStore',
    purpose:
      'Develop an end-to-end online store covering the homepage, shopping workflow, authentication, cart, and payment page.',
    technologies: ['PHP', 'MySQL', 'AJAX'],
    contributions: [
      'Developed an integrated front-end and back-end',
      'Connected the application to MySQL',
      'Implemented an interactive cart using AJAX',
      'Built login and user authentication functionality',
      'Developed the website flow from homepage to payment page',
    ],
    technicalChallenge: null, // TODO: Add technical challenge details
    status: null, // TODO: Add current project status
    links: [],
    caseStudy: {
      overview:
        'An end-to-end online store application featuring product browsing, shopping cart, user authentication, and a payment page flow.',
      problem:
        'Needed to build a complete e-commerce workflow from product listing to payment, demonstrating full-stack development capabilities.',
      role: 'Full-stack developer. Built both the front-end interface and back-end logic, including database integration and AJAX interactions.',
      architecture: null, // TODO: Add architecture details
      implementation:
        'Developed the store using PHP for server-side processing and MySQL for product and user data. Implemented AJAX for the shopping cart to provide a dynamic, page-refresh-free experience. Built authentication for user accounts.',
      technicalConsiderations:
        'AJAX integration required careful handling of asynchronous requests and state management for the cart. Authentication needed secure session handling.',
      securityConsiderations: null, // TODO: Add security details if applicable
      challenges: null, // TODO: Add specific challenges
      lessonsLearned: null, // TODO: Add lessons learned
      result:
        'Completed a functional online store with end-to-end shopping workflow from browsing to payment.',
    },
  },
];
