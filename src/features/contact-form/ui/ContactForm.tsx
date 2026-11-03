'use client';
import { useState } from 'react';
import { useT } from '@/shared/context';

export function ContactForm() {
  const t = useT('contact');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() && !message.trim()) return;

    const formattedMessage = [
      `👋 New Inquiry from Portfolio (Artem Schevchenko CV)`,
      `👤 Name: ${name || 'Anonymous'}`,
      `📫 Contact: ${contact || 'Not provided'}`,
      `💬 Message:`,
      message || '(No message content)',
    ].join('\n');

    // Copy to clipboard as backup
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(formattedMessage).catch(() => {});
      setCopied(true);
      setTimeout(() => setCopied(false), 4000);
    }

    // Direct Telegram link to @Artem_schevchenko
    const tgUrl = `https://t.me/Artem_schevchenko?text=${encodeURIComponent(formattedMessage)}`;
    window.open(tgUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <label
          style={{
            display: 'block',
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: 10,
            letterSpacing: '0.15em',
            color: 'rgba(255, 255, 255, 0.45)',
            textTransform: 'uppercase',
            marginBottom: 8,
          }}
        >
          {t.name ?? 'Your Name / Company'}
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. Alexander / TechCorp"
          className="form-input"
          required
        />
      </div>

      <div>
        <label
          style={{
            display: 'block',
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: 10,
            letterSpacing: '0.15em',
            color: 'rgba(255, 255, 255, 0.45)',
            textTransform: 'uppercase',
            marginBottom: 8,
          }}
        >
          {t.email ?? 'Your Telegram or Email'}
        </label>
        <input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          placeholder="@username or email@company.com"
          className="form-input"
          required
        />
      </div>

      <div>
        <label
          style={{
            display: 'block',
            fontFamily: 'var(--font-mono, monospace)',
            fontSize: 10,
            letterSpacing: '0.15em',
            color: 'rgba(255, 255, 255, 0.45)',
            textTransform: 'uppercase',
            marginBottom: 8,
          }}
        >
          {t.message ?? 'Project Brief / Message'}
        </label>
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Describe your goals, requirements, or vacancy..."
          className="form-input"
          style={{ resize: 'vertical' }}
          required
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
        <button
          type="submit"
          className="btn-primary"
          style={{
            width: '100%',
            justifyContent: 'center',
            padding: '14px 24px',
          }}
        >
          <span>✈</span>
          <span>{t.send ?? 'Send via Telegram'}</span>
        </button>

        {copied && (
          <p
            style={{
              fontFamily: 'var(--font-mono, monospace)',
              fontSize: 10,
              color: '#22c55e',
              letterSpacing: '0.1em',
              textAlign: 'center',
            }}
          >
            ✓ Inquiry copied to clipboard & opening Telegram!
          </p>
        )}
      </div>
    </form>
  );
}
