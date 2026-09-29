import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv, type Plugin} from 'vite';

// Dev only: serve api/quote-request.ts at /api/quote-request, the way Vercel does
// in production, so `npm run dev` works without the Vercel CLI.
function devApi(): Plugin {
  return {
    name: 'dev-api',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/api/quote-request', async (req, res) => {
        try {
          const chunks: Buffer[] = [];
          for await (const chunk of req) chunks.push(chunk as Buffer);
          const headers = new Headers();
          for (const [key, value] of Object.entries(req.headers)) {
            if (typeof value === 'string') headers.set(key, value);
          }
          const request = new Request(`http://localhost${req.originalUrl ?? '/api/quote-request'}`, {
            method: req.method,
            headers,
            body: req.method === 'GET' || req.method === 'HEAD' ? undefined : Buffer.concat(chunks),
          });
          const mod = await server.ssrLoadModule('/api/quote-request.ts');
          const response: Response =
            req.method === 'POST' ? await mod.POST(request) : new Response('Method Not Allowed', {status: 405});
          res.statusCode = response.status;
          response.headers.forEach((value, key) => res.setHeader(key, value));
          res.end(Buffer.from(await response.arrayBuffer()));
        } catch (err) {
          server.config.logger.error(String(err));
          res.statusCode = 500;
          res.end(JSON.stringify({ok: false, error: 'Dev API error.'}));
        }
      });
    },
  };
}

export default defineConfig(({mode}) => {
  // Make the Supabase vars from .env.local available to the dev API. The secret
  // SUPABASE_SERVICE_ROLE_KEY is not VITE_-prefixed, so it is never bundled into browser code.
  const env = loadEnv(mode, process.cwd(), ['SUPABASE_', 'VITE_SUPABASE_']);
  for (const [key, value] of Object.entries(env)) {
    process.env[key] ??= value;
  }

  return {
    base: './',
    plugins: [react(), tailwindcss(), devApi()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
