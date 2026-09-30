// Server-only: sends the quote request emails through Resend.
// Files starting with "_" under api/ are not exposed as endpoints by Vercel.
//
// Env vars (server-only, never prefix with VITE_):
//   RESEND_API_KEY    - Resend API key with sending access
//   QUOTE_EMAIL_FROM  - sender, e.g. "Nordic Group <quotes@info.nordicgr.com>"
//   QUOTE_TEAM_EMAIL  - where new requests go (default info@nordicgr.com)
import type { ValidQuoteRequest } from '../../src/lib/quoteRequest.js';

const RESEND_URL = process.env.RESEND_API_URL || 'https://api.resend.com/emails';
const CONTACT_EMAIL = 'info@nordicgr.com';
const CONTACT_WHATSAPP = '+252 61 745 3777';

export interface EmailResult {
  team: boolean;
  customer: boolean;
}

// Subjects must be a single short line.
function oneLine(value: string, max = 120): string {
  return value.replace(/[\r\n]+/g, ' ').trim().slice(0, max);
}

function itemLines(row: ValidQuoteRequest): string {
  return row.items.map((item) => `• ${item.name} × ${item.quantity}`).join('\n');
}

function teamEmailText(row: ValidQuoteRequest, source: 'signed-in' | 'guest'): string {
  return [
    'New quote request from the website.',
    '',
    `Name:    ${row.name}`,
    `Clinic:  ${row.company}`,
    `Phone:   ${row.phone}`,
    `Email:   ${row.email}`,
    `Account: ${source === 'signed-in' ? 'Signed-in user' : 'Guest'}`,
    `Time:    ${new Date().toUTCString()}`,
    '',
    'Products:',
    itemLines(row),
    '',
    'Notes:',
    row.notes || '(none)',
    '',
    'Reply to this email to answer the customer directly.',
  ].join('\n');
}

// Only fixed text, the customer's name and catalog product names: this email goes
// to an address typed into a public form, so it must not carry free-form text.
function customerEmailText(row: ValidQuoteRequest): string {
  const items = itemLines(row);
  return [
    `Hello ${row.name},`,
    '',
    'Thank you for your quote request. We have received it and will reply with prices, availability and delivery details.',
    '',
    'Your request:',
    items,
    '',
    'Questions? Reply to this email or contact us:',
    `WhatsApp: ${CONTACT_WHATSAPP}`,
    `Email: ${CONTACT_EMAIL}`,
    '',
    'Nordic Group',
    '',
    '----------------------------------------',
    '',
    `Salaan ${row.name},`,
    '',
    'Waad ku mahadsan tahay codsigaaga. Waan helnay, waxaana kaaga soo jawaabaynaa qiimaha, helitaanka, iyo gaarsiinta.',
    '',
    'Codsigaaga:',
    items,
    '',
    "Su'aalo? Ka jawaab iimaylkan ama nala soo xiriir:",
    `WhatsApp: ${CONTACT_WHATSAPP}`,
    `Iimayl: ${CONTACT_EMAIL}`,
    '',
    'Nordic Group',
  ].join('\n');
}

async function send(apiKey: string, payload: Record<string, unknown>, label: string): Promise<boolean> {
  try {
    const res = await fetch(RESEND_URL, {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(5000),
    });
    if (res.ok) return true;
    const body = (await res.json().catch(() => null)) as { message?: string } | null;
    console.error(`quote-email: ${label} email failed`, res.status, body?.message ?? '');
    return false;
  } catch (err) {
    console.error(`quote-email: ${label} email failed`, err instanceof Error ? err.message : String(err));
    return false;
  }
}

// Never throws: the request is already saved, so email problems are only logged.
export async function sendQuoteEmails(
  row: ValidQuoteRequest,
  source: 'signed-in' | 'guest'
): Promise<EmailResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.QUOTE_EMAIL_FROM;
  const teamEmail = process.env.QUOTE_TEAM_EMAIL || CONTACT_EMAIL;
  if (!apiKey || !from) {
    console.error('quote-email: RESEND_API_KEY or QUOTE_EMAIL_FROM not set, no emails sent');
    return { team: false, customer: false };
  }

  const count = row.items.length;
  const [team, customer] = await Promise.all([
    send(
      apiKey,
      {
        from,
        to: [teamEmail],
        reply_to: row.email,
        subject: oneLine(`New quote request – ${row.company} (${count} product${count === 1 ? '' : 's'})`),
        text: teamEmailText(row, source),
      },
      'team'
    ),
    send(
      apiKey,
      {
        from,
        to: [row.email],
        reply_to: CONTACT_EMAIL,
        subject: 'We received your quote request / Waan helnay codsigaaga – Nordic Group',
        text: customerEmailText(row),
      },
      'customer'
    ),
  ]);
  return { team, customer };
}
