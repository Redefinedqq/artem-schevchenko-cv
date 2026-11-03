export interface Tech {
  name: string;
  category: TechCategory;
  highlight?: boolean;
}

export type TechCategory =
  | 'Frontend'
  | 'Backend'
  | 'Database & Queues'
  | 'Infra & DevOps'
  | 'Payments & Web3';

export const TECH_CATEGORIES: TechCategory[] = [
  'Frontend',
  'Backend',
  'Database & Queues',
  'Infra & DevOps',
  'Payments & Web3',
];

export const TECHS: Tech[] = [
  // Frontend
  { name: 'TypeScript',     category: 'Frontend', highlight: true },
  { name: 'React',          category: 'Frontend', highlight: true },
  { name: 'Next.js (SSR/SSG)', category: 'Frontend', highlight: true },
  { name: 'Vite',           category: 'Frontend' },
  { name: 'Zustand',        category: 'Frontend' },
  { name: 'Redux Toolkit',  category: 'Frontend' },
  { name: 'Tailwind CSS',   category: 'Frontend' },
  { name: 'SCSS',           category: 'Frontend' },

  // Backend
  { name: 'Node.js',        category: 'Backend', highlight: true },
  { name: 'NestJS',         category: 'Backend', highlight: true },
  { name: 'Fastify',        category: 'Backend', highlight: true },
  { name: 'Express',        category: 'Backend' },
  { name: 'WebSockets',     category: 'Backend' },
  { name: 'GraphQL',        category: 'Backend' },
  { name: 'RESTful APIs',   category: 'Backend' },
  { name: 'Prisma ORM',     category: 'Backend' },
  { name: 'TypeORM',        category: 'Backend' },

  // Database & Queues
  { name: 'PostgreSQL',     category: 'Database & Queues', highlight: true },
  { name: 'Redis',          category: 'Database & Queues', highlight: true },
  { name: 'Kafka',          category: 'Database & Queues', highlight: true },
  { name: 'SQLite',         category: 'Database & Queues' },
  { name: 'MongoDB',        category: 'Database & Queues' },

  // Infra & DevOps
  { name: 'Docker',         category: 'Infra & DevOps', highlight: true },
  { name: 'CI/CD (GitHub Actions)', category: 'Infra & DevOps', highlight: true },
  { name: 'AWS (S3, EC2)',  category: 'Infra & DevOps' },
  { name: 'Hostinger / VPS',category: 'Infra & DevOps' },
  { name: 'Nginx',          category: 'Infra & DevOps' },
  { name: 'Git',            category: 'Infra & DevOps' },
  { name: 'SonarQube',      category: 'Infra & DevOps' },
  { name: 'AI Workflows (Claude, Agents, Harness)', category: 'Infra & DevOps', highlight: true },

  // Payments & Web3
  { name: 'Stripe',         category: 'Payments & Web3', highlight: true },
  { name: 'TON Connect / TonAPI', category: 'Payments & Web3', highlight: true },
  { name: 'Stellar SDK',    category: 'Payments & Web3', highlight: true },
  { name: 'TonPay',         category: 'Payments & Web3' },
  { name: 'Revolut Pay',    category: 'Payments & Web3' },
];
