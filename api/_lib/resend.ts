// Server-only helpers for sending email through Resend's REST API.
// Files starting with "_" under api/ are not exposed as endpoints by Vercel.
//
// Env vars (server-only, never prefix with VITE_):
//   RESEND_API_KEY    - Resend API key with sending access
//   QUOTE_EMAIL_FROM  - sender, e.g. "Nordic Group <quotes@info.nordicgr.com>"
//   QUOTE_TEAM_EMAIL  - where new requests and messages go (default info@nordicgr.com)

const RESEND_URL = process.env.RESEND_API_URL || 'https://api.resend.com/emails';

export const CONTACT_EMAIL = 'info@nordicgr.com';
export const CONTACT_WHATSAPP = '+252 61 745 3777';

export interface EmailConfig {
  apiKey: string;
  from: string;
  teamEmail: string;
}

// Returns null (and logs) when sending is not configured.
export function emailConfig(): EmailConfig | null {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.QUOTE_EMAIL_FROM;
  if (!apiKey || !from) {
    console.error('email: RESEND_API_KEY or QUOTE_EMAIL_FROM not set, no emails sent');
    return null;
  }
  return { apiKey, from, teamEmail: process.env.QUOTE_TEAM_EMAIL || CONTACT_EMAIL };
}

// Subjects must be a single short line.
export function oneLine(value: string, max = 120): string {
  return value.replace(/[\r\n]+/g, ' ').trim().slice(0, max);
}

export interface EmailMessage {
  to: string;
  replyTo: string;
  subject: string;
  text: string;
}

// Never throws: returns false and logs the reason (never the API key).
export async function sendEmail(config: EmailConfig, message: EmailMessage, label: string): Promise<boolean> {
  try {
    const res = await fetch(RESEND_URL, {
      method: 'POST',
      headers: { Authorization: `Bearer ${config.apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: config.from,
        to: [message.to],
        reply_to: message.replyTo,
        subject: oneLine(message.subject),
        text: message.text,
      }),
      signal: AbortSignal.timeout(5000),
    });
    if (res.ok) return true;
    const body = (await res.json().catch(() => null)) as { message?: string } | null;
    console.error(`email: ${label} email failed`, res.status, body?.message ?? '');
    return false;
  } catch (err) {
    console.error(`email: ${label} email failed`, err instanceof Error ? err.message : String(err));
    return false;
  }
}
