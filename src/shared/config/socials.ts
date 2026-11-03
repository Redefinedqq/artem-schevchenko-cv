export interface Social {
  label: string;
  href: string;
  display?: string;
  icon?: string;
}

export const SOCIALS: Social[] = [
  { label: 'telegram', href: 'https://t.me/Artem_schevchenko', display: '@Artem_schevchenko' },
  { label: 'github',   href: 'https://github.com/Redefinedqq', display: 'Redefinedqq' },
  { label: 'email',    href: 'mailto:firstjoker988@gmail.com', display: 'firstjoker988@gmail.com' },
  { label: 'phone',    href: 'tel:+380634663546',              display: '+380 63 466 35 46' },
];

export const CV_DOWNLOAD_URL = '/artem-schevchenko-cv/Artem_Schevchenko_CV.pdf';
