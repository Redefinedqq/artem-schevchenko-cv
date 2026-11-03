export interface CommercialProject {
  id: string;
  title: string;
  company: string;
  period: string;
  role: string;
  tagline: string;
  description: string;
  metrics: string[];
  stack: string[];
  responsibilities: string[];
  achievements: string[];
  link?: string;
}

export const COMMERCIAL_PROJECTS: CommercialProject[] = [
  {
    id: 'xomobile',
    title: 'XoMobile',
    company: 'Q-code (Fintech & Web3 Studio)',
    period: '11/2024 – Present',
    role: 'Full-stack Engineer',
    tagline: 'Global eSIM telecom ecosystem inside Telegram in 150+ countries',
    description: 'High-throughput web service and Telegram Mini App for instant purchasing and automatic eSIM profile activation across 150+ countries without third-party app installations.',
    metrics: [
      '150+ countries coverage',
      '80%+ unit/e2e test coverage',
      'SonarQube CI/CD quality gate',
      'Sub-second payment processing',
    ],
    stack: ['React', 'Vite', 'TypeScript', 'Fastify', 'Prisma', 'PostgreSQL', 'TON Connect', 'Stripe', 'Docker'],
    responsibilities: [
      'Collaborated in a cross-functional agile team (frontend, QA, tech lead, PM) driving rapid sprint releases and architecture reviews.',
      'Developed real-time order dashboard with synchronized tracking and dynamic PDF invoice generation.',
      'Configured GitHub Actions CI/CD to VPS with automated SonarQube static code analysis and linting gates.',
      'Refactored legacy backend codebase, eliminating technical debt and establishing standardized service patterns.',
      'Maintained OpenAPI/Swagger documentation strictly synchronized with the live production API.',
    ],
    achievements: [
      'Accelerated backend response times by 35% and consolidated legacy Prisma schemas into clean modular domain entities.',
      'Architected resilient multi-rail fintech payments: TonAPI, Raw TON wallet address signing, Stripe Checkout, and Revolut.',
      'Elevated test coverage beyond 80%, enabling automated SonarQube quality gates on every pull request.',
    ],
  },
  {
    id: 'severon',
    title: 'Severon',
    company: 'Webpartner',
    period: '11/2022 – 10/2024',
    role: 'Full-stack Engineer',
    tagline: 'Industrial heat pump & smart energy engineering platform',
    description: 'High-efficiency industrial e-commerce and technical configuration platform for sustainable heat pump engineering solutions with dynamic specification tables.',
    metrics: [
      '~50% LCP improvement (1.5s -> 0.7s)',
      'Sub-second page transitions',
      'Cloudflare Edge caching',
      'High-conversion product funnels',
    ],
    stack: ['Next.js (SSR/SSG)', 'TypeScript', 'Tailwind CSS', 'Cloudflare', 'REST API', 'Node.js'],
    responsibilities: [
      'Developed ultra-high performance frontend using Next.js Static Site Generation (SSG) for enterprise catalogs.',
      'Engineered interactive engineering calculators, equipment configuration forms, and technical inquiry modules.',
      'Architected Cloudflare edge distribution pipelines and optimized static asset delivery.',
      'Built fully accessible, responsive UI design system with Tailwind CSS for multi-device industrial catalogs.',
    ],
    achievements: [
      'Cut Largest Contentful Paint (LCP) by ~50% (from 1.5s down to 0.7s), propelling Google Core Web Vitals to the green zone.',
      'Boosted organic search rankings and conversion rates on high-ticket enterprise product pages.',
    ],
  },
  {
    id: 'skillspring',
    title: 'Skillspring',
    company: 'Latvia EdTech Platform',
    period: '09/2021 – 10/2022',
    role: 'Full-stack Engineer',
    tagline: 'Modern marketplace for verified tutors and students in Latvia',
    description: 'Full-cycle education platform connecting verified tutors with students, featuring administrative moderation tools, dynamic booking schedules, and interactive lesson management.',
    metrics: [
      '-55% static asset payload',
      'Instant interactive timetable',
      'Enterprise admin management',
      'Zero-lag schedule synchronization',
    ],
    stack: ['React', 'TypeScript', 'Next.js', 'NestJS', 'TypeORM', 'PostgreSQL', 'WebSockets'],
    responsibilities: [
      'Architected comprehensive administrative portal for platform managers to moderate profiles, track revenue, and monitor tutor activity.',
      'Developed interactive multi-week calendar matrix with real-time lesson reservation, slot switching, and instant creation.',
      'Configured automated asset processing pipeline converting imagery to lightweight WebP formats.',
    ],
    achievements: [
      'Reduced total static payload by ~55% via automated WebP compression pipelines, accelerating page loads on mobile networks.',
      'Engineered high-efficiency scheduling matrix handling complex recurring time slots and booking conflicts.',
    ],
  },
  {
    id: 'stellar-multisig',
    title: 'MTL Stellar Multisig',
    company: 'Crypto & Blockchain Fintech',
    period: '07/2020 – 08/2021',
    role: 'Full-stack Engineer',
    tagline: 'Decentralized multi-signature asset management & wallet custody',
    description: 'Cryptographic multi-party signature coordination suite enabling institutions and teams to securely initiate, verify, and co-sign blockchain transactions on the Stellar network.',
    metrics: [
      'Zero-trust threshold security',
      'Feature-Sliced Design (FSD)',
      'Direct cryptographic signing',
      'Real-time transaction broadcasting',
    ],
    stack: ['React', 'TypeScript', 'Next.js', 'Firebase', 'Stellar SDK', 'WebCrypto API'],
    responsibilities: [
      'Engineered end-to-end multi-signature transaction workflow from initiation to consensus threshold and ledger broadcast.',
      'Architected frontend modular codebase utilizing Feature-Sliced Design (FSD) for scalable enterprise isolation.',
      'Created comprehensive blockchain account inspector visualizing asset balances, signing signers, and threshold weights.',
    ],
    achievements: [
      'Built complete cryptographic multi-party authorization system with Stellar SDK, guaranteeing tamper-proof threshold verification.',
      'Successfully decoupled signing coordination logic into modular, testable units with zero security vulnerabilities.',
    ],
  },
];
