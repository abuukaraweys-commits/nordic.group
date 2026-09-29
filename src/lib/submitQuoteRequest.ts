import type { QuoteRequestPayload } from './quoteRequest';

export type SubmitResult = { ok: true } | { ok: false; error: string };

// Sends a quote request to api/quote-request.ts. When the user is signed in,
// their Clerk session token goes along so the server saves it under their account.
export async function submitQuoteRequest(
  payload: QuoteRequestPayload,
  getToken: () => Promise<string | null>,
  isSignedIn: boolean
): Promise<SubmitResult> {
  try {
    const headers: Record<string, string> = { 'Content-Type': 'application/json' };
    if (isSignedIn) {
      const token = await getToken();
      if (token) headers.Authorization = `Bearer ${token}`;
    }

    const res = await fetch('/api/quote-request', {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
      keepalive: true,
    });

    const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
    if (res.ok && data?.ok) return { ok: true };
    return { ok: false, error: data?.error || `Could not save your request (error ${res.status}).` };
  } catch {
    return { ok: false, error: 'Network error. Check your connection and try again.' };
  }
}
