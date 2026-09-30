// Shared by the browser (to build the payload) and by api/quote-request.ts (to validate it).
// Keep this file free of browser-only and Node-only APIs.

export interface QuoteItem {
  productId: string;
  name: string;
  quantity: number;
}

export interface QuoteRequestPayload {
  name: string;
  company: string;
  phone: string;
  email: string;
  notes?: string;
  items: QuoteItem[];
  // Honeypot: hidden from people, bots tend to fill it in. Must be empty.
  website?: string;
}

export interface ValidQuoteRequest {
  name: string;
  company: string;
  phone: string;
  email: string;
  notes: string | null;
  items: QuoteItem[];
}

export type ValidationResult =
  | { ok: true; data: ValidQuoteRequest; isSpam: boolean }
  | { ok: false; error: string };

export const QUOTE_LIMITS = {
  maxItems: 100,
  maxQuantity: 10000,
  maxNotes: 2000,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string): boolean {
  const email = value.trim();
  return email.length <= 254 && EMAIL_RE.test(email);
}

const PHONE_RE = /^[+\d\s()-]{6,30}$/;

export function isValidPhone(value: string): boolean {
  const phone = value.trim();
  return PHONE_RE.test(phone) && phone.replace(/\D/g, '').length >= 6;
}

function text(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

export function validateQuoteRequest(input: unknown): ValidationResult {
  if (!input || typeof input !== 'object') {
    return { ok: false, error: 'Invalid request.' };
  }
  const body = input as Record<string, unknown>;

  const isSpam = text(body.website) !== '';

  const name = text(body.name);
  if (name.length < 2 || name.length > 100) {
    return { ok: false, error: 'Please enter your full name.' };
  }

  const company = text(body.company);
  if (company.length < 2 || company.length > 150) {
    return { ok: false, error: 'Please enter your clinic name.' };
  }

  const phone = text(body.phone);
  if (!isValidPhone(phone)) {
    return { ok: false, error: 'Please enter a valid phone number.' };
  }

  const email = text(body.email);
  if (!isValidEmail(email)) {
    return { ok: false, error: 'Please enter a valid email address.' };
  }

  const notes = text(body.notes);
  if (notes.length > QUOTE_LIMITS.maxNotes) {
    return { ok: false, error: `Notes must be under ${QUOTE_LIMITS.maxNotes} characters.` };
  }

  if (!Array.isArray(body.items) || body.items.length === 0) {
    return { ok: false, error: 'Your cart is empty.' };
  }
  if (body.items.length > QUOTE_LIMITS.maxItems) {
    return { ok: false, error: `A quote can contain at most ${QUOTE_LIMITS.maxItems} products.` };
  }

  // Merge duplicate products so each productId appears once.
  const merged = new Map<string, QuoteItem>();
  for (const raw of body.items) {
    const item = (raw ?? {}) as Record<string, unknown>;
    const productId = text(item.productId);
    const itemName = text(item.name);
    const quantity = item.quantity;
    if (!productId || productId.length > 100 || !itemName || itemName.length > 300) {
      return { ok: false, error: 'One of the products in your cart is invalid.' };
    }
    if (typeof quantity !== 'number' || !Number.isInteger(quantity) || quantity < 1 || quantity > QUOTE_LIMITS.maxQuantity) {
      return { ok: false, error: `Quantities must be whole numbers between 1 and ${QUOTE_LIMITS.maxQuantity}.` };
    }
    const existing = merged.get(productId);
    if (existing) {
      existing.quantity = Math.min(existing.quantity + quantity, QUOTE_LIMITS.maxQuantity);
    } else {
      merged.set(productId, { productId, name: itemName, quantity });
    }
  }

  return {
    ok: true,
    isSpam,
    data: {
      name,
      company,
      phone,
      email,
      notes: notes || null,
      items: [...merged.values()],
    },
  };
}
