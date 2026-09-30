// Vercel Function: POST /api/quote-request
// Saves a quote request to Supabase. Runs on the server only, so the
// service role key never reaches the browser.
//
// Env vars:
//   VITE_SUPABASE_URL (or SUPABASE_URL)
//   VITE_SUPABASE_PUBLISHABLE_KEY (or SUPABASE_ANON_KEY) - public key, safe to expose
//   SUPABASE_SERVICE_ROLE_KEY - secret/service role key, server-only, NEVER prefix with VITE_
import { createClient } from '@supabase/supabase-js';
import { validateQuoteRequest } from '../src/lib/quoteRequest.js';
import { PRODUCTS } from '../src/data.js';
import { sendQuoteEmails } from './_lib/sendQuoteEmails.js';

const CATALOG = new Map(PRODUCTS.map((product) => [product.id, product.name]));

const MAX_BODY_BYTES = 50_000;

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
    return json(413, { ok: false, error: 'Request is too large.' });
  }

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return json(400, { ok: false, error: 'Invalid JSON.' });
  }

  const result = validateQuoteRequest(body);
  if (result.ok === false) {
    return json(400, { ok: false, error: result.error });
  }
  // Honeypot filled in: pretend it worked, but store nothing.
  if (result.isSpam) {
    return json(200, { ok: true });
  }

  const url = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const anonKey = process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_PUBLISHABLE_KEY;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !anonKey || !serviceRoleKey) {
    // Log only the names of missing vars, never their values.
    const missing = [
      !url && 'VITE_SUPABASE_URL',
      !anonKey && 'VITE_SUPABASE_PUBLISHABLE_KEY',
      !serviceRoleKey && 'SUPABASE_SERVICE_ROLE_KEY',
    ].filter(Boolean);
    console.error(`quote-request: missing env vars: ${missing.join(', ')}`);
    return json(500, { ok: false, error: 'Quote requests are not configured on the server.' });
  }

  const authHeader = request.headers.get('authorization') ?? '';
  const clerkToken = authHeader.startsWith('Bearer ') ? authHeader.slice(7).trim() : '';
  const row = result.data;

  // Use product names from our catalog, not from the browser: they end up in an
  // email sent to an address typed into a public form.
  for (const item of row.items) {
    const catalogName = CATALOG.get(item.productId);
    if (!catalogName) {
      return json(400, { ok: false, error: 'One of the products in your cart is no longer available. Please remove it and try again.' });
    }
    item.name = catalogName;
  }

  // Signed in: insert as the user. Supabase verifies the Clerk session token
  // (third-party auth) and fills user_id from auth.jwt()->>'sub'.
  // Guest: insert with the service role, which bypasses RLS.
  const supabase = clerkToken
    ? createClient(url, anonKey, {
        accessToken: async () => clerkToken,
        auth: { persistSession: false },
      })
    : createClient(url, serviceRoleKey, {
        auth: { persistSession: false, autoRefreshToken: false },
      });
  const table = clerkToken ? 'quote_requests' : 'guest_quote_requests';

  // No .select(): returning the row would need a SELECT policy.
  const { error, status } = await supabase.from(table).insert(row);

  if (error) {
    console.error(`quote-request: insert into ${table} failed`, status, error.code, error.message);
    if (clerkToken && status === 401) {
      return json(401, { ok: false, error: 'Your session has expired. Please sign in again.' });
    }
    return json(502, { ok: false, error: 'Could not save your request. Please try again.' });
  }

  // Awaited: Vercel may stop the function once the response is sent.
  const emailed = await sendQuoteEmails(row, clerkToken ? 'signed-in' : 'guest');
  return json(201, { ok: true, emailed });
}
