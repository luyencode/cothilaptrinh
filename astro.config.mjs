// @ts-check
import { existsSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Fallback used for local dev/build (no CI env available), and once a
// custom domain is set up. Update if the placeholder domain changes.
const LOCAL_FALLBACK_SITE = 'https://cothilaptrinh.vn';

// This site's links/asset paths are written as root-relative (e.g. "/khoa-hoc",
// "/assets/...") throughout every page and Markdown post. On GitHub Pages that
// requires `base` to stay "/" - see docs/FAQs.md ("How do I set up the custom
// domain (CNAME) later?") for what that means before a custom domain is ready
// (either name the repo "<username>.github.io", or add public/CNAME right
// away). Cloudflare Pages always serves from its own root regardless of
// project name, so this constraint doesn't apply there.
function resolveSite() {
  const cnamePath = new URL('./public/CNAME', import.meta.url);
  if (existsSync(cnamePath)) {
    const domain = readFileSync(cnamePath, 'utf-8').trim();
    if (domain) return `https://${domain}`;
  }

  const repository = process.env.GITHUB_REPOSITORY; // "owner/repo", set by GitHub Actions
  if (repository) {
    const [owner] = repository.split('/');
    return `https://${owner}.github.io`;
  }

  const cfPagesURL = process.env.CF_PAGES_URL; // set by Cloudflare Pages, already a full URL
  if (cfPagesURL) return cfPagesURL;

  return LOCAL_FALLBACK_SITE;
}

export default defineConfig({
  site: resolveSite(),
  // Clean, extensionless URLs: /khoa-hoc-scratch (default 'directory' format).
  integrations: [sitemap()],
});
