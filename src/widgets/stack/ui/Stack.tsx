'use client';
import { useState } from 'react';
import { TECHS, TECH_CATEGORIES, TechCategory } from '@/shared/config';
import { AnimateIn, SectionHeader } from '@/shared/ui';
import { useT } from '@/shared/context';

export function Stack() {
  const stack = useT('stack');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredTechs =
    activeCategory === 'all'
      ? TECHS
      : TECHS.filter((t) => t.category === activeCategory);

  return (
    <section
      id="stack"
      style={{
        padding: '120px 32px',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        maxWidth: 1240,
        margin: '0 auto',
      }}
    >
      <AnimateIn>
        <SectionHeader
          index="03"
          title={stack.title ?? 'Technical Arsenal'}
          subtitle={stack.subtitle ?? 'Technologies, frameworks, and tools battle-tested in commercial production'}
        />
      </AnimateIn>

      {/* Filter Tabs */}
      <AnimateIn delay={100}>
        <div
          style={{
            display: 'flex',
            gap: 8,
            flexWrap: 'wrap',
            marginBottom: 44,
          }}
        >
          <button
            onClick={() => setActiveCategory('all')}
            className="tech-tag"
            style={{
              cursor: 'pointer',
              background: activeCategory === 'all' ? '#ffffff' : 'rgba(255, 255, 255, 0.03)',
              color: activeCategory === 'all' ? '#000000' : 'rgba(255, 255, 255, 0.7)',
              borderColor: activeCategory === 'all' ? '#ffffff' : 'rgba(255, 255, 255, 0.12)',
              fontWeight: activeCategory === 'all' ? 700 : 500,
            }}
          >
            {stack.all ?? 'All Technologies'} ({TECHS.length})
          </button>

          {TECH_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="tech-tag"
              style={{
                cursor: 'pointer',
                background: activeCategory === cat ? '#ffffff' : 'rgba(255, 255, 255, 0.03)',
                color: activeCategory === cat ? '#000000' : 'rgba(255, 255, 255, 0.7)',
                borderColor: activeCategory === cat ? '#ffffff' : 'rgba(255, 255, 255, 0.12)',
                fontWeight: activeCategory === cat ? 700 : 500,
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </AnimateIn>

      {/* Stack categorized display */}
      {activeCategory === 'all' ? (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {TECH_CATEGORIES.map((cat, i) => (
            <AnimateIn key={cat} delay={i * 60}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'clamp(140px, 18vw, 220px) 1fr',
                  gap: 32,
                  padding: '28px 0',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  alignItems: 'center',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono, monospace)',
                      fontSize: 10,
                      color: 'rgba(255, 255, 255, 0.3)',
                    }}
                  >
                    0{i + 1}
                  </span>
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
                    {cat}
                  </span>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {TECHS.filter((t) => t.category === cat).map((tech) => (
                    <span
                      key={tech.name}
                      className={`tech-tag ${tech.highlight ? 'highlight' : ''}`}
                    >
                      {tech.highlight && (
                        <span style={{ color: '#22c55e', marginRight: 6, fontSize: 8 }}>●</span>
                      )}
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateIn>
          ))}
          <div style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }} />
        </div>
      ) : (
        <AnimateIn delay={120}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 10,
              padding: '36px 0',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            {filteredTechs.map((tech) => (
              <span
                key={tech.name}
                className={`tech-tag ${tech.highlight ? 'highlight' : ''}`}
                style={{ padding: '10px 18px', fontSize: 12 }}
              >
                {tech.highlight && (
                  <span style={{ color: '#22c55e', marginRight: 6, fontSize: 8 }}>●</span>
                )}
                {tech.name}
              </span>
            ))}
          </div>
        </AnimateIn>
      )}
    </section>
  );
}
