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
2. That push triggers **Cloudflare Pages**, which is connected directly to
   this GitHub repo. Cloudflare pulls the new commit, runs `npm run build`,
   and publishes the `dist/` output.
3. The whole process takes roughly 1-2 minutes. You can watch it (and see
   the build log if something goes wrong) in the Cloudflare dashboard,
   under **Workers & Pages → this project → Deployments**.

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

## How do I set up the custom domain later?

Unlike some static hosts, Cloudflare Pages always serves a project from its
own root (either `<project>.pages.dev` or whatever custom domain you attach)
— there's no `/repo-name/` sub-path to worry about, so this part just works
regardless of when you add the domain.

1. In the Cloudflare dashboard, go to **Workers & Pages → this project →
   Custom domains → Set up a custom domain**, and enter your domain.
2. Since DNS for the domain is already on Cloudflare, this is usually a
   one-click confirmation — Cloudflare adds the right DNS record and
   provisions HTTPS automatically.
3. (Optional, for accurate SEO/sitemap URLs) In the project's **Settings →
   Environment variables**, add `SITE_URL` set to your domain, e.g.
   `https://cothilaptrinh.vn`, then trigger a redeploy. Without this, the
   site still works correctly, but sitemap/canonical links may still point
   at the `*.pages.dev` address until you add it.

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

In the Cloudflare dashboard, go to **Workers & Pages → this project →
Deployments**, open the failed deployment, and read the build log. The most
common causes when editing Markdown content are:

- A frontmatter field with a typo or wrong type (e.g. `date` not in
  `YYYY-MM-DD` format, or a missing quote around text with special
  characters).
- Forgetting the closing `---` after the frontmatter block.

If the error isn't obviously about your content, ask a developer for help
— paste the error message from the deployment log.

## Who do I ask if something here doesn't cover my question?

Ask whoever set up this repository, or open a GitHub Issue on the project
describing what you're trying to do.
