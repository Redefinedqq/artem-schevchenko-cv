'use client';
import { useState } from 'react';
import { COMMERCIAL_PROJECTS } from '@/shared/config';
import { AnimateIn, SectionHeader } from '@/shared/ui';
import { useT } from '@/shared/context';

export function Experience() {
  const exp = useT('experience');
  const [activeProject, setActiveProject] = useState<string>(COMMERCIAL_PROJECTS[0].id);

  return (
    <section
      id="experience"
      style={{
        padding: '120px 32px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        maxWidth: 1240,
        margin: '0 auto',
      }}
    >
      <AnimateIn>
        <SectionHeader
          index="02"
          title={exp.title ?? 'Commercial Experience'}
          subtitle={exp.subtitle ?? 'Key milestones across high-load fintech, edtech, and web3 systems'}
        />
      </AnimateIn>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 28,
        }}
      >
        {COMMERCIAL_PROJECTS.map((proj, idx) => {
          const isExpanded = activeProject === proj.id;

          return (
            <AnimateIn key={proj.id} delay={idx * 80}>
              <div
                className="project-card"
                style={{
                  cursor: 'pointer',
                  borderColor: isExpanded ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.08)',
                  background: isExpanded ? '#0e0e0e' : '#080808',
                }}
                onClick={() => setActiveProject(proj.id)}
              >
                {/* Header row: Title + Period */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: 16,
                    marginBottom: 16,
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8, flexWrap: 'wrap' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono, monospace)',
                          fontSize: 11,
                          letterSpacing: '0.2em',
                          color: 'rgba(255, 255, 255, 0.4)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          lineHeight: 1,
                        }}
                      >
                        0{idx + 1} //
                      </span>
                      <h3
                        style={{
                          fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                          fontWeight: 800,
                          color: '#ffffff',
                          letterSpacing: '-0.03em',
                          margin: 0,
                          lineHeight: 1,
                          display: 'inline-flex',
                          alignItems: 'center',
                        }}
                      >
                        {proj.title}
                      </h3>
                      {idx === 0 && (
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 6,
                            height: 24,
                            padding: '0 10px',
                            background: 'rgba(34, 197, 94, 0.1)',
                            border: '1px solid rgba(34, 197, 94, 0.3)',
                            borderRadius: 4,
                            fontFamily: 'var(--font-mono, monospace)',
                            fontSize: 9,
                            letterSpacing: '0.08em',
                            color: '#4ade80',
                            textTransform: 'uppercase',
                            lineHeight: 1,
                            boxSizing: 'border-box',
                            verticalAlign: 'middle',
                          }}
                        >
                          <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#4ade80', flexShrink: 0 }} />
                          <span style={{ display: 'inline-block', lineHeight: 1, position: 'relative', top: '0.5px' }}>Current Role</span>
                        </span>
                      )}
                    </div>

                    <p
                      style={{
                        fontFamily: 'var(--font-mono, monospace)',
                        fontSize: 12,
                        color: 'rgba(255, 255, 255, 0.65)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {proj.company} • <span style={{ color: '#ffffff' }}>{proj.role}</span>
                    </p>
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono, monospace)',
                      fontSize: 11,
                      letterSpacing: '0.12em',
                      color: 'rgba(255, 255, 255, 0.45)',
                      padding: '6px 14px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: 4,
                    }}
                  >
                    {proj.period}
                  </span>
                </div>

                {/* Tagline */}
                <p
                  style={{
                    color: 'rgba(255, 255, 255, 0.85)',
                    fontSize: 14,
                    lineHeight: 1.6,
                    fontWeight: 400,
                    marginBottom: 16,
                  }}
                >
                  {proj.tagline}
                </p>

                {/* Description */}
                <p
                  style={{
                    color: 'rgba(255, 255, 255, 0.55)',
                    fontSize: 13,
                    lineHeight: 1.8,
                    fontWeight: 300,
                    marginBottom: 24,
                    maxWidth: 960,
                  }}
                >
                  {proj.description}
                </p>

                {/* Metric Badges */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 8,
                    marginBottom: 24,
                  }}
                >
                  {proj.metrics.map((m) => (
                    <span key={m} className="metric-pill">
                      <span style={{ color: 'rgba(255, 255, 255, 0.5)' }}>✓</span>
                      <span>{m}</span>
                    </span>
                  ))}
                </div>

                {/* Detailed Responsibilities & Achievements */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: 28,
                    padding: '24px',
                    background: 'rgba(255, 255, 255, 0.02)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: 6,
                    marginBottom: 24,
                  }}
                >
                  {/* Achievements */}
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--font-mono, monospace)',
                        fontSize: 10,
                        letterSpacing: '0.2em',
                        color: '#ffffff',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        marginBottom: 12,
                      }}
                    >
                      ★ {exp.achievements ?? 'Proven Achievements'}
                    </p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {proj.achievements.map((ach, aIdx) => (
                        <li
                          key={aIdx}
                          style={{
                            display: 'flex',
                            gap: 10,
                            alignItems: 'baseline',
                            fontSize: 12,
                            color: 'rgba(255, 255, 255, 0.75)',
                            lineHeight: 1.65,
                          }}
                        >
                          <span style={{ color: '#ffffff', fontSize: 10, flexShrink: 0 }}>▸</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Responsibilities */}
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--font-mono, monospace)',
                        fontSize: 10,
                        letterSpacing: '0.2em',
                        color: 'rgba(255, 255, 255, 0.45)',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        marginBottom: 12,
                      }}
                    >
                      // {exp.responsibilities ?? 'Key Responsibilities'}
                    </p>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {proj.responsibilities.map((resp, rIdx) => (
                        <li
                          key={rIdx}
                          style={{
                            display: 'flex',
                            gap: 10,
                            alignItems: 'baseline',
                            fontSize: 12,
                            color: 'rgba(255, 255, 255, 0.6)',
                            lineHeight: 1.65,
                          }}
                        >
                          <span style={{ color: 'rgba(255, 255, 255, 0.3)', fontSize: 10, flexShrink: 0 }}>•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {proj.stack.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: 'var(--font-mono, monospace)',
                        fontSize: 10,
                        letterSpacing: '0.04em',
                        padding: '4px 10px',
                        borderRadius: 3,
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: 'rgba(255, 255, 255, 0.7)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          );
        })}
      </div>
    </section>
  );
}
