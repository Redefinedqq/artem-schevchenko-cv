export interface MetaItem {
  key: string;
  value: string;
}

export interface FactItem {
  label: string;
  value: string;
}

export const META_ITEMS: MetaItem[] = [
  { key: 'Experience', value: '6+ years commercial' },
  { key: 'Role',       value: 'Senior Full-Stack Engineer' },
  { key: 'Location',   value: 'Ukraine (Remote / Hybrid)' },
  { key: 'English',    value: 'B2+ Professional' },
  { key: 'Languages',  value: 'English, Ukrainian, Russian' },
];

export const FACT_ITEMS: FactItem[] = [
  { label: 'Fintech & Web3',      value: 'TON, Stellar SDK, Stripe, TonAPI, Revolut, Smart Contracts' },
  { label: 'Frontend Mastery',    value: 'React, Next.js (SSR/SSG), TypeScript, Zustand, Redux Toolkit, Tailwind' },
  { label: 'High-Load Backend',   value: 'Node.js, NestJS, Fastify, Express, WebSockets, Kafka, GraphQL, REST APIs' },
  { label: 'Databases & Cloud',   value: 'PostgreSQL, Redis, MongoDB, Prisma, Docker, AWS (S3, EC2), Cloudflare' },
];
