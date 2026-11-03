'use client';
import { useState, useEffect } from 'react';
import { NAV_ITEMS, CV_DOWNLOAD_URL } from '@/shared/config';
import { useT } from '@/shared/context';
import { LocaleSwitcher } from '@/features/locale-switcher';

export function Navbar() {
  const nav = useT('nav');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const labels: Record<string, string> = {
    about: nav.about ?? 'About',
    experience: nav.experience ?? 'Experience',
    stack: nav.stack ?? 'Stack',
    contact: nav.contact ?? 'Contact',
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'padding 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.4s, border-color 0.4s',
        padding: scrolled ? '14px 0' : '24px 0',
        background: scrolled ? 'rgba(6, 6, 6, 0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'rgba(255, 255, 255, 0.08)' : 'transparent'}`,
      }}
    >
      <div
        style={{
          maxWidth: 1240,
          margin: '0 auto',
          padding: '0 32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Left: Brand Logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <a href="#" className="nav-logo">
            <span style={{ fontWeight: 800, fontSize: 13, letterSpacing: '0.18em' }}>
              REDEFINED
            </span>
          </a>
        </div>

        {/* Right: Navigation Links, CV Download & Switcher */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {labels[item.labelKey]}
              </a>
            ))}
          </div>

          <div
            style={{
              width: 1,
              height: 16,
              background: 'rgba(255, 255, 255, 0.12)',
            }}
          />

          <a
            href={CV_DOWNLOAD_URL}
            download="Artem_Schevchenko_CV.pdf"
            className="btn-secondary"
            style={{
              padding: '8px 16px',
              fontSize: 10,
              letterSpacing: '0.12em',
              borderRadius: 4,
            }}
          >
            <span>↓</span>
            <span>{nav.cvDownload ?? 'CV (PDF)'}</span>
          </a>

          <LocaleSwitcher />
        </div>
      </div>
    </nav>
  );
}
