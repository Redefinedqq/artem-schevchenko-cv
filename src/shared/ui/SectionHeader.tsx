interface SectionHeaderProps {
  index: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ index, title, subtitle }: SectionHeaderProps) {
  return (
    <div style={{ marginBottom: 64 }}>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 12 }}>
        <span
          style={{
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: 11,
            color: 'rgba(255, 255, 255, 0.35)',
            letterSpacing: '0.2em',
          }}
        >
          // {index}
        </span>
        <div style={{ width: 32, height: 1, background: 'rgba(255, 255, 255, 0.12)' }} />
      </div>
      <h2
        style={{
          fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
          fontWeight: 800,
          color: '#ffffff',
          letterSpacing: '-0.035em',
          lineHeight: 1.08,
          marginBottom: subtitle ? 12 : 0,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            color: 'rgba(255, 255, 255, 0.55)',
            fontSize: 'clamp(13px, 1.2vw, 15px)',
            maxWidth: 620,
            lineHeight: 1.7,
            fontWeight: 300,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
