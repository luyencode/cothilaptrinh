// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Fallback used for local dev/build, and before a custom domain is attached
// in Cloudflare Pages. Update if the placeholder domain changes.
const LOCAL_FALLBACK_SITE = 'https://cothilaptrinh.vn';

// Resolves the `site` used for canonical URLs, OpenGraph tags, and the
// sitemap - in priority order:
//   1. SITE_URL env var - set this in the Cloudflare Pages project's
//      environment variables once your custom domain is live.
//   2. CF_PAGES_URL - set automatically by Cloudflare Pages to the
//      deployment's own *.pages.dev URL.
//   3. The placeholder domain above, for local dev/build.
function resolveSite() {
  if (process.env.SITE_URL) return process.env.SITE_URL;
  if (process.env.CF_PAGES_URL) return process.env.CF_PAGES_URL;
  return LOCAL_FALLBACK_SITE;
}

export default defineConfig({
  site: resolveSite(),
  // Clean, extensionless URLs: /khoa-hoc-scratch (default 'directory' format).
  integrations: [sitemap()],
});
