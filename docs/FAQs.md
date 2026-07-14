# FAQs

General questions about how this site works, day to day. If you're here to
write a blog post or tutorial, start with
[HOW-TO-BLOG.md](./HOW-TO-BLOG.md) or [HOW-TO-TUTS.md](./HOW-TO-TUTS.md)
instead — come back here for everything else.

## What is this site built with?

[Astro](https://astro.build), a "static site generator" — it turns the
Markdown files and page templates in this repo into plain HTML/CSS/JS files
ahead of time, which is why it's fast and cheap to host (no server or
database needed). You don't need to understand Astro to write blog posts or
tutorials; that's exactly what the two how-to guides are for.

## How does a change actually get published?

1. A change is committed and pushed to the `main` branch (either directly
   through GitHub's web editor, or via `git push` from a local clone).
2. That push triggers a GitHub Actions workflow
   (`.github/workflows/deploy.yml`), visible under the repo's **Actions**
   tab.
3. The workflow installs dependencies, runs `npm run build`, and publishes
   the result to GitHub Pages.
4. The whole process takes roughly 1-2 minutes. If the Actions tab shows a
   green checkmark, it's live.

## Can I preview a change before it goes live to everyone?

Yes, two ways:

- **Locally** (needs [Node.js](https://nodejs.org) installed and the repo
  cloned): run `npm install` once, then `npm run dev`, and open
  `http://localhost:4321`. Changes to files show up instantly in the
  browser.
- **On GitHub**: when creating/editing a Markdown file in GitHub's web
  editor, use the **Preview** tab to check formatting before committing.
  This doesn't preview the full site design, just the Markdown rendering.

There's no automatic "staging" preview link for full pages before merging —
if that becomes important later, ask a developer about adding GitHub's pull
request preview deployments.

## Important: what to name the GitHub repo before the custom domain is ready

Every link and image on this site is written as a root path (e.g.
`/khoa-hoc`, `/assets/logo.png`), the same way the original static site
worked. That only resolves correctly if the site is served from the root of
a domain — **not** from a `/repo-name/` sub-path.

GitHub Pages serves a repo at the root, with no sub-path, in exactly two
cases:

1. The repo is named **`<your-github-username>.github.io`** (a "user/org
   site"), or
2. The repo has a custom domain configured (see the next question).

**If you deploy to a repo with any other name and haven't set up a custom
domain yet, the navigation, images, and styling will be broken** — every
internal link would need a `/repo-name` prefix that isn't there. So: either
name the repository `<username>.github.io`, or set up `public/CNAME` (below)
before or immediately after your first deploy.

If this constraint ever needs to change (e.g. you need an arbitrary repo
name without a custom domain), that requires a developer to update how
internal links are generated — it's a deliberate simplification, not an
oversight.

## How do I set up the custom domain (CNAME) later?

To move the site from the default GitHub Pages address onto your own
domain (e.g. `cothilaptrinh.vn`):

1. At your domain registrar, create the DNS records GitHub Pages requires —
   see [GitHub's official custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
   for the exact records (an `A`/`ALIAS` record for a root domain, or a
   `CNAME` record for a subdomain like `www`).
2. In this repo, create a file named exactly `public/CNAME` (no file
   extension) containing just your domain, e.g.:
   ```
   cothilaptrinh.vn
   ```
3. Commit and push. The build automatically detects this file and points
   the sitemap/SEO tags at your domain — no other file needs to change.
4. In the repo's **Settings → Pages**, set your custom domain in the
   "Custom domain" field and wait for GitHub to verify DNS, then enable
   "Enforce HTTPS".

If you remove `public/CNAME` later, the next build reverts to treating the
default `github.io` address as the site's domain for SEO purposes.

## I made a mistake — how do I undo it?

Find the commit that introduced the mistake in the repo's history (the
**Commits** or **History** view on GitHub), open it, and click **Revert**.
That creates a new commit that undoes the change and redeploys
automatically. If you're comfortable with git locally, `git revert <hash>`
does the same thing.

## Where does the contact form ("Liên hệ") data go?

Submissions are sent to a Google Sheet via a Google Apps Script Web App.
Setup instructions and the script itself are in `google-sheet-form/` at the
project root — see `HUONG_DAN_KET_NOI_FORM.md` there. The endpoint URL is
configured via the `PUBLIC_CONTACT_ENDPOINT` environment variable (see
`.env.example`); if unset, it falls back to whatever URL is hardcoded in
`src/pages/lien-he.astro`.

## Can I edit a page that isn't a blog post or tutorial (e.g. a course page)?

Those pages (homepage, course pages, "Về Cô Thi", etc.) are `.astro` files
under `src/pages/` — they mix HTML and code, not plain Markdown, so they're
more technical to edit safely. If you need to change text on one of those
pages and aren't comfortable editing code, it's best to ask a developer, or
open a GitHub Issue describing the change needed.

## The build failed — what do I do?

Open the repo's **Actions** tab, click the failed run, and open the "Build
site" step to read the error. The most common causes when editing Markdown
content are:

- A frontmatter field with a typo or wrong type (e.g. `date` not in
  `YYYY-MM-DD` format, or a missing quote around text with special
  characters).
- Forgetting the closing `---` after the frontmatter block.

If the error isn't obviously about your content, ask a developer for help
— paste the error message from the Actions log.

## Who do I ask if something here doesn't cover my question?

Ask whoever set up this repository, or open a GitHub Issue on the project
describing what you're trying to do.
