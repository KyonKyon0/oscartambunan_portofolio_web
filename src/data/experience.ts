import { Experience, AdditionalExperience } from '@/types';

export const experiences: Experience[] = [
  {
    organization: 'Laboratorium Akuntansi Menengah, Universitas Gunadarma',
    role: 'IT Programmer',
    year: '2026',
    type: 'primary',
    responsibilities: [], // TODO: Add responsibilities when available
    tools: [], // TODO: Add tools used when available
    contributions: [], // TODO: Add contributions when available
    results: [], // TODO: Add results when available
    description: null, // TODO: Add description when available
  },
  {
    organization: 'Kelompok Studi Pasar Modal, Universitas Gunadarma',
    role: 'Analyst',
    year: '2026',
    type: 'primary',
    responsibilities: [], // TODO: Add responsibilities when available
    tools: [], // TODO: Add tools used when available
    contributions: [], // TODO: Add contributions when available
    results: [], // TODO: Add results when available
    description: null, // TODO: Add description when available
  },
];

export const additionalExperience: AdditionalExperience = {
  title: 'Investment Portfolio Management',
  period: 'August 2023 — Present',
  focusAreas: [
    'Evaluating equities, Indonesian government bonds, corporate bonds, and mutual funds',
    'Performing fundamental and macroeconomic analysis',
    'Applying asset allocation and diversification',
    'Evaluating portfolio risk and performance',
    'Monitoring market conditions',
  ],
  evidenceOf: [
    'Analytical thinking',
    'Data-driven decision-making',
    'Risk awareness',
    'Continuous monitoring',
  ],
  description: null,
};
