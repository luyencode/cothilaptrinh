// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: set this to the real production domain before deploying.
// It drives sitemap URLs and canonical/OpenGraph absolute links.
const SITE = 'https://cothilaptrinh.vn';

export default defineConfig({
  site: SITE,
  // Clean, extensionless URLs: /khoa-hoc-scratch (default 'directory' format).
  integrations: [sitemap()],
});
