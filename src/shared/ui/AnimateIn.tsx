'use client';
import { useEffect, useRef, useState } from 'react';

type Direction = 'up' | 'left' | 'fade';

interface AnimateInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
  style?: React.CSSProperties;
}

const INITIAL_STYLES: Record<Direction, React.CSSProperties> = {
  up:   { opacity: 0, transform: 'translateY(24px)' },
  left: { opacity: 0, transform: 'translateX(-18px)' },
  fade: { opacity: 0 },
};

const FINAL_STYLE: React.CSSProperties = { opacity: 1, transform: 'none' };

export function AnimateIn({
  children,
  delay = 0,
  direction = 'up',
  className,
  style,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: '50px' }
    );

    observer.observe(el);

    // Fallback timer so content is never permanently hidden
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1200 + delay);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: [
          `opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
          `transform 0.75s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        ].join(', '),
        willChange: 'opacity, transform',
        ...(visible ? FINAL_STYLE : INITIAL_STYLES[direction]),
        ...style,
      }}
    >
      {children}
    </div>
  );
}
