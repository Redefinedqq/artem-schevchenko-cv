export type Locale = 'en' | 'ru' | 'uk';

export const LOCALES: Locale[] = ['en', 'ru', 'uk'];
export const DEFAULT_LOCALE: Locale = 'en';

export type Messages = typeof import('../../../messages/en.json');

export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split('/')[1] as Locale;
  return LOCALES.includes(segment) ? segment : DEFAULT_LOCALE;
}
