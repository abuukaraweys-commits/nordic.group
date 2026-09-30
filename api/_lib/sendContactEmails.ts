// Server-only: the emails sent for a Contact page message. Nothing is stored,
// so the team email is the only copy: the confirmation is sent only after it succeeded.
import type { ValidContactMessage } from '../../src/lib/contactMessage.js';
import { CONTACT_EMAIL, CONTACT_WHATSAPP, type EmailConfig, sendEmail } from './resend.js';

function teamEmailText(msg: ValidContactMessage): string {
  return [
    'New message from the website contact form.',
    '',
    `Name:  ${msg.name}`,
    `Email: ${msg.email}`,
    `Phone: ${msg.phone || '(not given)'}`,
    `Time:  ${new Date().toUTCString()}`,
    '',
    'Message:',
    msg.message,
    '',
    'Reply to this email to answer the customer directly.',
  ].join('\n');
}

// Only fixed text and the customer's name: this email goes to an address typed
// into a public form, so it does not repeat their message.
function customerEmailText(msg: ValidContactMessage): string {
  return [
    `Hello ${msg.name},`,
    '',
    'Thank you for contacting Nordic Group. We have received your message and will contact you shortly.',
    '',
    'Questions? Reply to this email or contact us:',
    `WhatsApp: ${CONTACT_WHATSAPP}`,
    `Email: ${CONTACT_EMAIL}`,
    '',
    'Nordic Group',
    '',
    '----------------------------------------',
    '',
    `Salaan ${msg.name},`,
    '',
    'Waad ku mahadsan tahay inaad la soo xiriirtay Nordic Group. Waan helnay fariintaada, waxaana kula soo xiriiri doonnaa dhawaan.',
    '',
    "Su'aalo? Ka jawaab iimaylkan ama nala soo xiriir:",
    `WhatsApp: ${CONTACT_WHATSAPP}`,
    `Iimayl: ${CONTACT_EMAIL}`,
    '',
    'Nordic Group',
  ].join('\n');
}

export async function sendContactEmails(
  config: EmailConfig,
  msg: ValidContactMessage
): Promise<{ team: boolean; customer: boolean }> {
  const team = await sendEmail(
    config,
    {
      to: config.teamEmail,
      replyTo: msg.email,
      subject: `New contact message – ${msg.name}`,
      text: teamEmailText(msg),
    },
    'contact team'
  );
  if (!team) return { team: false, customer: false };

  const customer = await sendEmail(
    config,
    {
      to: msg.email,
      replyTo: CONTACT_EMAIL,
      subject: 'We received your message / Waan helnay fariintaada – Nordic Group',
      text: customerEmailText(msg),
    },
    'contact customer'
  );
  return { team, customer };
}
