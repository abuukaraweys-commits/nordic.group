import type { ContactMessagePayload } from './contactMessage';

export type ContactSubmitResult =
  | { ok: true; confirmation: boolean }
  | { ok: false; error: string };

// Sends a Contact page message to api/contact-message.ts.
export async function submitContactMessage(payload: ContactMessagePayload): Promise<ContactSubmitResult> {
  try {
    const res = await fetch('/api/contact-message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = (await res.json().catch(() => null)) as
      | { ok?: boolean; error?: string; confirmation?: boolean }
      | null;
    if (res.ok && data?.ok) return { ok: true, confirmation: !!data.confirmation };
    return { ok: false, error: data?.error || `Could not send your message (error ${res.status}).` };
  } catch {
    return { ok: false, error: 'Network error. Check your connection and try again.' };
  }
}
