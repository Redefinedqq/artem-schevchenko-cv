export interface NavItem {
  labelKey: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { labelKey: 'about',      href: '#about'      },
  { labelKey: 'experience', href: '#experience' },
  { labelKey: 'stack',      href: '#stack'      },
  { labelKey: 'contact',    href: '#contact'    },
];
