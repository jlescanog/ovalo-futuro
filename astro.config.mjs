import { defineConfig } from 'astro/config';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';
import vercel from '@astrojs/vercel';

const envFile = new URL('.env', import.meta.url);
if (existsSync(envFile)) process.loadEnvFile(fileURLToPath(envFile));

const staticBuild = process.env.STATIC_BUILD === 'true';
const useVercel = process.env.VERCEL === '1' || process.env.DEPLOY_TARGET === 'vercel';
// Filesystem editing is development-only; production editing requires authenticated GitHub storage.
const enableCMS =
  !staticBuild && (process.env.NODE_ENV !== 'production' || !!process.env.PUBLIC_KEYSTATIC_REPO);

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || undefined,
  output: 'static',
  adapter: staticBuild ? undefined : useVercel ? vercel() : node({ mode: 'standalone' }),
  integrations: [markdoc(), ...(enableCMS ? [react(), keystatic()] : [])],
  devToolbar: { enabled: false },
});
