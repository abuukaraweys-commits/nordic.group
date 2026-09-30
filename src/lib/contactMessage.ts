// Shared by the Contact page (to build the payload) and by api/contact-message.ts
// (to validate it). Keep this file free of browser-only and Node-only APIs.
import { isValidEmail, isValidPhone } from './quoteRequest.js';

export interface ContactMessagePayload {
  name: string;
  email: string;
  phone?: string;
  message: string;
  // Honeypot: hidden from people, bots tend to fill it in. Must be empty.
  website?: string;
}

export interface ValidContactMessage {
  name: string;
  email: string;
  phone: string | null;
  message: string;
}

export type ContactValidationResult =
  | { ok: true; data: ValidContactMessage; isSpam: boolean }
  | { ok: false; error: string };

export const MAX_CONTACT_MESSAGE = 2000;

function text(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

export function validateContactMessage(input: unknown): ContactValidationResult {
  if (!input || typeof input !== 'object') {
    return { ok: false, error: 'Invalid request.' };
  }
  const body = input as Record<string, unknown>;

  const isSpam = text(body.website) !== '';

  const name = text(body.name);
  if (name.length < 2 || name.length > 100) {
    return { ok: false, error: 'Please enter your name.' };
  }

  const email = text(body.email);
  if (!isValidEmail(email)) {
    return { ok: false, error: 'Please enter a valid email address.' };
  }

  const phone = text(body.phone);
  if (phone && !isValidPhone(phone)) {
    return { ok: false, error: 'Please enter a valid phone number.' };
  }

  const message = text(body.message);
  if (!message) {
    return { ok: false, error: 'Please write a message.' };
  }
  if (message.length > MAX_CONTACT_MESSAGE) {
    return { ok: false, error: `Your message must be under ${MAX_CONTACT_MESSAGE} characters.` };
  }

  return { ok: true, isSpam, data: { name, email, phone: phone || null, message } };
}
