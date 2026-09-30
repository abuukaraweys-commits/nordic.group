// Server-only: the emails sent for a quote request (team notification and
// customer confirmation). Sending itself is in ./resend.ts.
import type { ValidQuoteRequest } from '../../src/lib/quoteRequest.js';
import { CONTACT_EMAIL, CONTACT_WHATSAPP, emailConfig, sendEmail } from './resend.js';

export interface EmailResult {
  team: boolean;
  customer: boolean;
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
    `Asc ${row.name},`,
    '',
    'Waad ku mahadsantahay codsigaaga. waan helnay, waxaana kuusoo gudbin doonnaa qiimaha iyo waqtiga aad alaabta inaga heleeysid.',
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

// Never throws: the request is already saved, so email problems are only logged.
export async function sendQuoteEmails(
  row: ValidQuoteRequest,
  source: 'signed-in' | 'guest'
): Promise<EmailResult> {
  const config = emailConfig();
  if (!config) return { team: false, customer: false };

  const count = row.items.length;
  const [team, customer] = await Promise.all([
    sendEmail(
      config,
      {
        to: config.teamEmail,
        replyTo: row.email,
        subject: `New quote request – ${row.company} (${count} product${count === 1 ? '' : 's'})`,
        text: teamEmailText(row, source),
      },
      'quote team'
    ),
    sendEmail(
      config,
      {
        to: row.email,
        replyTo: CONTACT_EMAIL,
        subject: 'We received your quote request / Waan helnay codsigaaga – Nordic Group',
        text: customerEmailText(row),
      },
      'quote customer'
    ),
  ]);
  return { team, customer };
}
