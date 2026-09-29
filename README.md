<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/69312d27-6e1b-4d1d-b4f9-80c5a9821f16

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Copy `.env.example` to `.env.local` and fill in the Clerk and Supabase values
3. Run the app:
   `npm run dev`

## Quote requests

Quote requests are saved to Supabase by the server function in `api/quote-request.ts`
(served by Vercel in production, and by the Vite dev server locally).
Signed-in users are saved to `quote_requests`, guests to `guest_quote_requests`.
Set `SUPABASE_URL`, `SUPABASE_ANON_KEY` and `SUPABASE_SERVICE_ROLE_KEY` in Vercel
(Production and Preview) as well as in `.env.local`.
