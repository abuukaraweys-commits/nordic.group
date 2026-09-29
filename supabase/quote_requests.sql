-- Nordic Group: quote request tables
-- Paste this whole file into Supabase Dashboard -> SQL Editor -> New query, then Run.
-- Safe to run more than once.
--
-- quote_requests        - requests from users signed in with Clerk
-- guest_quote_requests  - requests from guests (not signed in)
--
-- The website never talks to these tables from the browser. The server function
-- api/quote-request.ts inserts rows:
--   * signed-in users: with the user's Clerk session token (role "authenticated")
--   * guests: with the secret / service role key, which bypasses RLS

-- ---------------------------------------------------------------------------
-- 1. Signed-in users
-- ---------------------------------------------------------------------------
create table if not exists public.quote_requests (
  id         uuid primary key default gen_random_uuid(),
  -- Clerk user id (e.g. "user_2abc..."), taken from the verified token.
  user_id    text not null default (auth.jwt() ->> 'sub'),
  name       text not null check (char_length(name) between 2 and 100),
  company    text not null check (char_length(company) between 2 and 150),
  phone      text not null check (char_length(phone) between 6 and 30),
  email      text check (email is null or char_length(email) <= 254),
  -- [{ "productId": "...", "name": "...", "quantity": 2 }]
  items      jsonb not null check (
               jsonb_typeof(items) = 'array'
               and jsonb_array_length(items) between 1 and 100
             ),
  notes      text check (notes is null or char_length(notes) <= 2000),
  status     text not null default 'new'
               check (status in ('new', 'reviewed', 'quoted', 'closed')),
  created_at timestamptz not null default now()
);

create index if not exists quote_requests_user_id_idx
  on public.quote_requests (user_id);
create index if not exists quote_requests_created_at_idx
  on public.quote_requests (created_at desc);

alter table public.quote_requests enable row level security;

-- Signed-in users may create requests, only under their own Clerk user id.
drop policy if exists "Users can create their own quote requests" on public.quote_requests;
create policy "Users can create their own quote requests"
  on public.quote_requests
  for insert
  to authenticated
  with check ((select auth.jwt() ->> 'sub') = user_id);

-- Guests (anon) get no access at all.
revoke all on public.quote_requests from anon;

-- ---------------------------------------------------------------------------
-- 2. Guests
-- ---------------------------------------------------------------------------
create table if not exists public.guest_quote_requests (
  id         uuid primary key default gen_random_uuid(),
  name       text not null check (char_length(name) between 2 and 100),
  company    text not null check (char_length(company) between 2 and 150),
  phone      text not null check (char_length(phone) between 6 and 30),
  email      text check (email is null or char_length(email) <= 254),
  items      jsonb not null check (
               jsonb_typeof(items) = 'array'
               and jsonb_array_length(items) between 1 and 100
             ),
  notes      text check (notes is null or char_length(notes) <= 2000),
  status     text not null default 'new'
               check (status in ('new', 'reviewed', 'quoted', 'closed')),
  created_at timestamptz not null default now()
);

create index if not exists guest_quote_requests_created_at_idx
  on public.guest_quote_requests (created_at desc);

-- RLS on with NO policies: nobody using the public key can read or write.
-- Only the server (secret / service role key) can insert.
alter table public.guest_quote_requests enable row level security;

revoke all on public.guest_quote_requests from anon, authenticated;
