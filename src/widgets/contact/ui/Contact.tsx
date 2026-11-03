'use client';
import { useState } from 'react';
import { SOCIALS } from '@/shared/config';
import { AnimateIn, SectionHeader } from '@/shared/ui';
import { useT } from '@/shared/context';
import { ContactForm } from '@/features/contact-form';

export function Contact() {
  const contact = useT('contact');
  const footer = useT('footer');
  const [copiedHandle, setCopiedHandle] = useState(false);

  const copyTelegram = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText('@Artem_schevchenko').catch(() => {});
      setCopiedHandle(true);
      setTimeout(() => setCopiedHandle(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="contact"
      style={{
        padding: '120px 32px 64px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        maxWidth: 1240,
        margin: '0 auto',
      }}
    >
      <AnimateIn>
        <SectionHeader
          index="04"
          title={contact.title ?? 'Initiate Contact'}
          subtitle={contact.subtitle ?? 'Looking for a battle-tested Senior Full-Stack Engineer? Send a direct message or connect via Telegram.'}
        />
      </AnimateIn>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 64,
          alignItems: 'start',
          marginBottom: 100,
        }}
      >
        {/* Left Column: Form */}
        <AnimateIn delay={100}>
          <div
            style={{
              padding: '36px',
              background: '#090909',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 8,
            }}
          >
            <h3
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: 8,
              }}
            >
              Direct Project Inquiry
            </h3>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.5)',
                fontSize: 12,
                lineHeight: 1.6,
                marginBottom: 28,
              }}
            >
              Fills and launches your message directly to Telegram. Guaranteed response within 24 hours.
            </p>
            <ContactForm />
          </div>
        </AnimateIn>

        {/* Right Column: Direct Channels */}
        <AnimateIn delay={160} direction="left">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Telegram Focus Card */}
            <div
              style={{
                padding: '32px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.01))',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                borderRadius: 8,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <span style={{ color: '#22c55e', fontSize: 10 }}>●</span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono, monospace)',
                    fontSize: 11,
                    letterSpacing: '0.15em',
                    color: '#ffffff',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                  }}
                >
                  Primary Communication Channel
                </span>
              </div>

              <h4 style={{ fontSize: 22, fontWeight: 800, color: '#ffffff', marginBottom: 6 }}>
                @Artem_schevchenko
              </h4>
              <p style={{ color: 'rgba(255, 255, 255, 0.55)', fontSize: 13, lineHeight: 1.7, marginBottom: 20 }}>
                Instant notifications, active daily for project discussions, architecture reviews, and hiring inquiries.
              </p>

              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a
                  href="https://t.me/Artem_schevchenko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: '10px 20px', fontSize: 10 }}
                >
                  <span>Chat on Telegram ↗</span>
                </a>
                <button
                  type="button"
                  onClick={copyTelegram}
                  className="btn-secondary"
                  style={{ padding: '10px 18px', fontSize: 10 }}
                >
                  {copiedHandle ? '✓ Copied' : 'Copy Username'}
                </button>
              </div>
            </div>

            {/* Other Channels List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item"
                >
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--font-mono, monospace)',
                        fontSize: 10,
                        letterSpacing: '0.18em',
                        color: 'rgba(255, 255, 255, 0.4)',
                        textTransform: 'uppercase',
                        marginBottom: 4,
                      }}
                    >
                      {s.label}
                    </p>
                    <p style={{ color: '#ffffff', fontSize: 13, fontWeight: 500 }}>
                      {s.display ?? s.label}
                    </p>
                  </div>
                  <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: 14 }}>↗</span>
                </a>
              ))}
            </div>
          </div>
        </AnimateIn>
      </div>

      {/* Footer */}
      <div
        style={{
          paddingTop: 32,
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 20,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: 11,
            letterSpacing: '0.12em',
            color: 'rgba(255, 255, 255, 0.4)',
          }}
        >
          {footer.copyright ?? 'Artem Schevchenko © 2026. All rights reserved.'}
        </span>

        <button
          onClick={scrollToTop}
          style={{
            background: 'none',
            border: 'none',
            color: 'rgba(255, 255, 255, 0.4)',
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: 11,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#ffffff'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255, 255, 255, 0.4)'; }}
        >
          <span>Back to Top</span>
          <span>↑</span>
        </button>
      </div>
    </section>
  );
}
