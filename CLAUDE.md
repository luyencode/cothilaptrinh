# CLAUDE.md

This is the source repo for cothilaptrinh.vn — an [Astro](https://astro.build)
static site, deployed by Cloudflare Pages' native GitHub integration (build:
`npm run build` → publishes `dist/`). There is no GitHub Actions CI; the
Cloudflare Pages build itself is the check that runs on every pull request.

## Writing content (blog posts / tutorials)

Follow the existing docs — read them before creating or editing content:

- [docs/HOW-TO-BLOG.md](docs/HOW-TO-BLOG.md) — blog posts
  (`src/content/blog/*.md`): frontmatter schema, file naming, image
  conventions, Markdown style. Match the tone/structure of existing posts
  in that folder.
- [docs/HOW-TO-TUTS.md](docs/HOW-TO-TUTS.md) — tutorial/docs pages
  (`src/content/docs/**/*.md`): `section`/`order`/`sectionOrder` sidebar
  mechanics.
- [docs/FAQs.md](docs/FAQs.md) — how the deploy pipeline works, build
  failure triage, preview deployments, and other day-to-day questions.

## Git workflow — hard rules

- **Never commit or push directly to `main`.** Always create a branch
  (e.g. `content/<slug>` for a single post, `content/<batch-desc>` when
  writing several posts at once, `fix/<desc>` for a bug) and open a
  pull request.
- **Never force-push to `main`.**
- A PR isn't limited to one post — if asked to write multiple blog posts
  in one go, put them all on the same branch/commit(s) and open **one PR**
  covering all of them (list each post in the PR body), not one PR per post.
- Publish sequence: create branch → edit/add files → commit → `git push -u
  origin <branch>` → `gh pr create`.
- Before considering a merge, check the Cloudflare Pages build check on the
  PR (`gh pr checks <PR>` or `gh pr view <PR> --json statusCheckRollup`)
  and report the result (pass/fail, preview URL) back to the user.
- **Only merge when the user explicitly asks for it in that moment** —
  even if the build check is green, do not run `gh pr merge` on your own
  initiative. Once asked, merge with `gh pr merge`.

Full detail and rationale: [docs/HOW-TO-BLOG.md#publishing-with-an-ai-assistant-claude](docs/HOW-TO-BLOG.md#publishing-with-an-ai-assistant-claude)
and [docs/FAQs.md](docs/FAQs.md).
