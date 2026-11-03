'use client';
import { useState, useRef, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from '@/shared/context';
import type { Locale } from '@/shared/lib';

const FlagUA = () => (
  <svg width="18" height="13" viewBox="0 0 18 13" fill="none">
    <rect width="18" height="6.5" fill="#005BBB" />
    <rect y="6.5" width="18" height="6.5" fill="#FFD500" />
  </svg>
);

const FlagRU = () => (
  <svg width="18" height="13" viewBox="0 0 18 13" fill="none">
    <rect width="18" height="4.333" fill="white" />
    <rect y="4.333" width="18" height="4.333" fill="#0039A6" />
    <rect y="8.667" width="18" height="4.333" fill="#D52B1E" />
  </svg>
);

const FlagGB = () => (
  <svg width="18" height="13" viewBox="0 0 18 13" fill="none">
    <rect width="18" height="13" fill="#012169" />
    <path d="M0 0L18 13M18 0L0 13" stroke="white" strokeWidth="2.6" />
    <path d="M0 0L18 13M18 0L0 13" stroke="#C8102E" strokeWidth="1.4" />
    <path d="M9 0V13M0 6.5H18" stroke="white" strokeWidth="3.5" />
    <path d="M9 0V13M0 6.5H18" stroke="#C8102E" strokeWidth="2" />
  </svg>
);

const OPTIONS = [
  { code: 'en' as Locale, label: 'English',    Flag: FlagGB },
  { code: 'ru' as Locale, label: 'Русский',    Flag: FlagRU },
  { code: 'uk' as Locale, label: 'Українська', Flag: FlagUA },
];

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = OPTIONS.find((o) => o.code === locale) ?? OPTIONS[0];

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, []);

  const go = (next: Locale) => {
    setOpen(false);
    if (next === locale) return;

    if (pathname && pathname.includes('/' + locale)) {
      router.push(pathname.replace('/' + locale, '/' + next));
    } else {
      router.push('/' + next + '/');
    }
  };

  return (
    <div ref={ref} style={{ position: 'relative', userSelect: 'none' }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: open ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.02)',
          border: `1px solid ${open ? 'rgba(255, 255, 255, 0.28)' : 'rgba(255, 255, 255, 0.12)'}`,
          borderRadius: 4,
          cursor: 'pointer',
          padding: '6px 12px',
          transition: 'all 0.2s',
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', borderRadius: 2, overflow: 'hidden' }}>
          <current.Flag />
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: 11,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#ffffff',
            fontWeight: 600,
          }}
        >
          {current.code}
        </span>
        <span
          style={{
            color: 'rgba(255, 255, 255, 0.4)',
            fontSize: 8,
            display: 'inline-block',
            transition: 'transform 0.2s',
            transform: open ? 'rotate(180deg)' : 'none',
          }}
        >
          ▼
        </span>
      </button>

      <div
        style={{
          position: 'absolute',
          top: 'calc(100% + 8px)',
          right: 0,
          background: '#0d0d0d',
          border: '1px solid rgba(255, 255, 255, 0.14)',
          borderRadius: 6,
          overflow: 'hidden',
          minWidth: 150,
          boxShadow: '0 16px 40px rgba(0, 0, 0, 0.8)',
          zIndex: 100,
          pointerEvents: open ? 'all' : 'none',
          opacity: open ? 1 : 0,
          transform: open ? 'translateY(0)' : 'translateY(-6px)',
          transition: 'opacity 0.18s, transform 0.18s',
        }}
      >
        {OPTIONS.map((opt, i) => (
          <button
            key={opt.code}
            type="button"
            onClick={() => go(opt.code)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              padding: '10px 14px',
              background: opt.code === locale ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
              border: 'none',
              borderTop: i === 0 ? 'none' : '1px solid rgba(255, 255, 255, 0.06)',
              cursor: 'pointer',
              transition: 'background 0.15s',
              textAlign: 'left',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'rgba(255, 255, 255, 0.09)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background =
                opt.code === locale ? 'rgba(255, 255, 255, 0.08)' : 'transparent';
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', borderRadius: 2, overflow: 'hidden' }}>
              <opt.Flag />
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono, monospace)',
                fontSize: 11,
                letterSpacing: '0.08em',
                color: opt.code === locale ? '#ffffff' : 'rgba(255, 255, 255, 0.55)',
                fontWeight: opt.code === locale ? 700 : 400,
              }}
            >
              {opt.label}
            </span>
            {opt.code === locale && (
              <span style={{ marginLeft: 'auto', color: '#ffffff', fontSize: 11 }}>✓</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
