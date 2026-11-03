import type { ContactPayload } from '@/entities/contact/model/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

export async function submitContact(payload: ContactPayload): Promise<void> {
  const res = await fetch(`${API_URL}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Failed to submit contact: ${res.status}`);
  }
}
