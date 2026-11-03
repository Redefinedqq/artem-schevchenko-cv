'use client';
import { useEffect, useState, useRef } from 'react';
import { SOCIALS, CV_DOWNLOAD_URL } from '@/shared/config';
import { useT } from '@/shared/context';

export function Hero() {
  const hero = useT('hero');
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const fadeUp = (delay: number): React.CSSProperties => ({
    transition: `opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0)' : 'translateY(24px)',
    willChange: 'opacity, transform',
  });

  const fadeIn = (delay: number): React.CSSProperties => ({
    transition: `opacity 0.7s ease ${delay}ms`,
    opacity: mounted ? 1 : 0,
    willChange: 'opacity',
  });

  return (
    <section
      ref={containerRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '140px 32px 80px',
        maxWidth: 1240,
        margin: '0 auto',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* JolyBell-style dynamic spotlight following cursor */}
      <div
        style={{
          position: 'absolute',
          left: mousePos.x,
          top: mousePos.y,
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.04) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          transition: 'width 0.3s, height 0.3s',
        }}
      />

      {/* Hero Badge */}
      <div style={fadeIn(80)}>
        <div className="hero-badge">
          <span style={{ color: '#22c55e', fontSize: 8 }}>●</span>
          <span>{hero.badge ?? 'Senior Full-Stack Engineer • 6+ Years Experience'}</span>
        </div>
      </div>

      {/* Main Massive Headline */}
      <h1
        style={{
          fontSize: 'clamp(4rem, 11vw, 9.5rem)',
          fontWeight: 900,
          lineHeight: 0.92,
          letterSpacing: '-0.05em',
          marginBottom: 36,
        }}
      >
        <span
          style={{
            color: '#ffffff',
            display: 'block',
            position: 'relative',
            left: 1,
            ...fadeUp(140),
          }}
        >
          {hero.titleFirst ?? 'Artem'}
        </span>
        <span
          style={{
            color: 'rgba(255, 255, 255, 0.32)',
            display: 'block',
            ...fadeUp(240),
          }}
        >
          {hero.titleLast ?? 'Schevchenko'}
        </span>
      </h1>

      {/* Hairline Divider */}
      <div
        style={{
          height: 1,
          background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.02) 80%, transparent 100%)',
          marginBottom: 44,
          maxWidth: 640,
          ...fadeIn(360),
        }}
      />

      {/* Description & CTAs */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 40,
          alignItems: 'start',
          marginBottom: 64,
        }}
      >
        <div style={{ maxWidth: 580, ...fadeUp(400) }}>
          <p
            style={{
              fontFamily: 'var(--font-mono, monospace)',
              fontSize: 10,
              letterSpacing: '0.2em',
              color: 'rgba(255, 255, 255, 0.4)',
              textTransform: 'uppercase',
              marginBottom: 14,
            }}
          >
            // {hero.stackTitle ?? 'Core Tech Stack'}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {[
              'React',
              'Next.js',
              'TypeScript',
              'Node.js',
              'NestJS',
              'Fastify',
              'PostgreSQL',
              'Redis',
              'Kafka',
              'Docker',
              'Stripe',
              'Web3',
            ].map((tech) => (
              <span
                key={tech}
                className="tech-tag highlight"
                style={{
                  padding: '7px 13px',
                  fontSize: 12,
                  background: 'rgba(255, 255, 255, 0.03)',
                  borderColor: 'rgba(255, 255, 255, 0.14)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            alignItems: 'flex-start',
            ...fadeUp(460),
          }}
        >
          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="#contact" className="btn-primary">
              <span>{hero.ctaContact ?? 'Discuss Project / Hire'}</span>
              <span>→</span>
            </a>
            <a
              href={CV_DOWNLOAD_URL}
              download="Artem_Schevchenko_CV.pdf"
              className="btn-secondary"
            >
              <span>↓</span>
              <span>{hero.ctaCv ?? 'Get CV (PDF)'}</span>
            </a>
          </div>

          {/* Social Links Row */}
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                {s.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* 4 Pillars Stats Grid (JolyBell-grade) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 16,
          ...fadeUp(520),
        }}
      >
        <div className="stat-box">
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 26, fontWeight: 800, color: '#ffffff', marginBottom: 4 }}>
            6+ Years
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
            {hero.statExp ?? 'Commercial Experience'}
          </p>
        </div>

        <div className="stat-box">
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 26, fontWeight: 800, color: '#ffffff', marginBottom: 4 }}>
            150+
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
            {hero.statScale ?? 'Countries Global Scale'}
          </p>
        </div>

        <div className="stat-box">
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 26, fontWeight: 800, color: '#ffffff', marginBottom: 4 }}>
            Fintech
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
            {hero.statWeb3 ?? 'TON, Stripe, Revolut'}
          </p>
        </div>

        <div className="stat-box">
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 26, fontWeight: 800, color: '#ffffff', marginBottom: 4 }}>
            ~50%
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>
            {hero.statSpeed ?? 'LCP Speed Improvement'}
          </p>
        </div>
      </div>
    </section>
  );
}
