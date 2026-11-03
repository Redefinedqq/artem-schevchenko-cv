import type { Metadata } from 'next';
import type { Locale } from '@/shared/lib';
import { LOCALES, DEFAULT_LOCALE } from '@/shared/lib';
import { I18nProvider } from '@/shared/context';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Artem Schevchenko — Senior Full-Stack Engineer (6+ Yrs Exp)',
  description:
    'Senior Full-Stack Engineer with 6+ years commercial experience. High-throughput web applications, distributed systems, and payment infrastructure (Stripe, TON, Revolut). Modern TypeScript (React, Next.js, Node.js/NestJS).',
  keywords: [
    'Artem Schevchenko',
    'Senior Full-Stack Engineer',
    'Fullstack Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'NestJS',
    'Fastify',
    'Fintech',
    'TON',
    'Web3',
    'Ukraine',
  ],
  authors: [{ name: 'Artem Schevchenko', url: 'https://github.com/Redefinedqq' }],
  openGraph: {
    title: 'Artem Schevchenko — Senior Full-Stack Engineer',
    description:
      'Senior Full-Stack Engineer with 6+ years commercial experience in high-load fintech, edtech, and web3 platforms.',
    url: 'https://redefinedqq.github.io/artem-schevchenko-cv/',
    siteName: 'Artem Schevchenko Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale: rawLocale } = await params;
  const locale: Locale = LOCALES.includes(rawLocale as Locale)
    ? (rawLocale as Locale)
    : DEFAULT_LOCALE;

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning>
        <I18nProvider locale={locale} messages={messages}>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
