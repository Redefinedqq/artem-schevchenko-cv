'use client';
import { META_ITEMS, FACT_ITEMS } from '@/shared/config';
import { AnimateIn, SectionHeader } from '@/shared/ui';
import { useT } from '@/shared/context';

export function About() {
  const about = useT('about');

  return (
    <section
      id="about"
      style={{
        padding: '120px 32px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        maxWidth: 1240,
        margin: '0 auto',
      }}
    >
      <AnimateIn>
        <SectionHeader
          index="01"
          title={about.title ?? 'Profile & Impact'}
          subtitle={about.lead ?? 'Senior Full-Stack Engineer with 6+ years of commercial production experience.'}
        />
      </AnimateIn>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: 64,
          alignItems: 'start',
        }}
      >
        {/* Left Column: Bio & Meta Table */}
        <div>
          <AnimateIn delay={100}>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: 1.9,
                fontSize: 15,
                fontWeight: 300,
                marginBottom: 40,
              }}
            >
              {about.text}
            </p>
          </AnimateIn>

          <AnimateIn delay={160}>
            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              {META_ITEMS.map((item) => (
                <div
                  key={item.key}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '14px 0',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono, monospace)',
                      fontSize: 11,
                      letterSpacing: '0.15em',
                      color: 'rgba(255, 255, 255, 0.4)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {item.key}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono, monospace)',
                      fontSize: 12,
                      color: '#ffffff',
                      fontWeight: 500,
                    }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>

        {/* Right Column: Architectural Competencies Fact Cards */}
        <AnimateIn delay={180} direction="left">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 12,
            }}
          >
            {FACT_ITEMS.map((f, i) => (
              <div
                key={f.label}
                className="stat-box"
                style={{ padding: '24px 28px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono, monospace)',
                      fontSize: 10,
                      color: 'rgba(255, 255, 255, 0.35)',
                    }}
                  >
                    0{i + 1} //
                  </span>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono, monospace)',
                      fontSize: 11,
                      letterSpacing: '0.18em',
                      color: '#ffffff',
                      textTransform: 'uppercase',
                      fontWeight: 700,
                    }}
                  >
                    {f.label}
                  </p>
                </div>
                <p
                  style={{
                    color: 'rgba(255, 255, 255, 0.65)',
                    fontSize: 13,
                    lineHeight: 1.7,
                    fontWeight: 300,
                  }}
                >
                  {f.value}
                </p>
              </div>
            ))}
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
