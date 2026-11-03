'use client';
import { createContext, useContext } from 'react';
import type { Locale, Messages } from '@/shared/lib';

interface I18nContextValue {
  locale: Locale;
  messages: Messages;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({
  locale,
  messages,
  children,
}: {
  locale: Locale;
  messages: Messages;
  children: React.ReactNode;
}) {
  return (
    <I18nContext.Provider value={{ locale, messages }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}

export function useT<K extends keyof Messages>(section: K): Messages[K] {
  const { messages } = useI18n();
  return messages[section];
}

export function useLocale(): Locale {
  const { locale } = useI18n();
  return locale;
}
