// Vercel Function: POST /api/contact-message
// Emails a Contact page message to the team and a confirmation to the sender.
// Nothing is stored in the database.
import { validateContactMessage } from '../src/lib/contactMessage.js';
import { emailConfig } from './_lib/resend.js';
import { sendContactEmails } from './_lib/sendContactEmails.js';

const MAX_BODY_BYTES = 20_000;

function json(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });
}

export async function POST(request: Request): Promise<Response> {
  if (!(request.headers.get('content-type') ?? '').includes('application/json')) {
    return json(415, { ok: false, error: 'Expected JSON.' });
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return json(413, { ok: false, error: 'Message is too large.' });
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return json(400, { ok: false, error: 'Invalid JSON.' });
  }

  const result = validateContactMessage(body);
  if (result.ok === false) {
    return json(400, { ok: false, error: result.error });
  }
  // Honeypot filled in: pretend it worked, but send nothing.
  if (result.isSpam) {
    return json(200, { ok: true, confirmation: true });
  }

  const config = emailConfig();
  if (!config) {
    return json(500, { ok: false, error: "Messages can't be sent right now. Please contact us on WhatsApp." });
  }

  const sent = await sendContactEmails(config, result.data);
  if (!sent.team) {
    return json(502, { ok: false, error: 'Could not send your message. Please try again or contact us on WhatsApp.' });
  }
  return json(200, { ok: true, confirmation: sent.customer });
}
