# How to write a blog post

This guide is for anyone adding a blog post to the site who hasn't used a
static site generator or Markdown before. No coding knowledge needed beyond
editing a text file.

> Note: this `docs/` folder is internal team documentation (not published on
> the website). The **published** tutorial pages live in a different folder,
> `src/content/docs/` — see [HOW-TO-TUTS.md](./HOW-TO-TUTS.md) for those.

## Where blog posts live

Every blog post is one file here:

```
src/content/blog/ten-bai-viet.md
```

The file name becomes part of the post's URL, so use lowercase letters,
numbers, and hyphens only (no spaces, no Vietnamese diacritics). For example
`5-cach-lam-quen-lap-trinh.md` becomes:

```
https://<your-domain>/blog/5-cach-lam-quen-lap-trinh/
```

## Publishing a post

Every change goes through a **feature branch + pull request** — nobody
(human or AI) commits or pushes directly to `main`, and nobody force-pushes
to `main`. This keeps a Cloudflare Pages build check on every change before
it ever reaches the live site.

A PR isn't limited to one post — if you have several posts ready at once
(e.g. a batch written in one sitting), it's fine to add/edit all of them on
the same branch and ship them in a single pull request. Use a single-post
branch name (`content/ten-bai-viet`) when it's just one post, or a
descriptive batch name (e.g. `content/blog-batch-2026-08` or
`content/3-bai-viet-moi`) when it's several.

### Option A — straight from GitHub's website (no setup needed)

1. In the GitHub repo, open `src/content/blog/`.
2. Click **Add file → Create new file**.
3. Name it `ten-bai-viet.md` (see naming rule above).
4. Paste the template below, fill it in, and write your post underneath.
5. Scroll down, write a short commit message (e.g. "Add blog post: ..."),
   and choose **Create a new branch for this commit and start a pull
   request** (not "Commit directly to the `main` branch").
6. Click **Propose changes**. If you have more posts to add to the same PR,
   switch to that new branch (top-left branch selector) and repeat steps
   1-5, choosing "Commit directly to the `<branch-name>` branch" this time
   (you're no longer on `main`, so this just adds to the same PR).
7. When all posts are added, click **Create pull request**.
8. Wait for the Cloudflare Pages check on the PR to go green (1-2 minutes —
   it also gives you a preview URL to check your post(s) before they're
   live), then merge the PR. Merging triggers the production rebuild; the
   post(s) go live shortly after. You can watch progress under **Workers &
   Pages → this project → Deployments** in the Cloudflare dashboard.

### Option B — on your own computer (if you have Node.js + the repo cloned)

1. Create a branch: `git checkout -b content/ten-bai-viet` (or a batch name
   if you're adding several posts at once).
2. Create the file(s) at `src/content/blog/ten-bai-viet.md` — one file per
   post, add as many as you like on this branch.
3. Run `npm run dev` and open `http://localhost:4321/blog` to preview.
4. `git add`, `git commit`, then `git push -u origin content/ten-bai-viet`.
5. Open a pull request (GitHub will show a "Compare & pull request" button
   after the push, or run `gh pr create`).
6. Wait for the Cloudflare Pages check to pass, then merge the PR.

### Publishing with an AI assistant (Claude)

If Claude is drafting and publishing one or more posts on your behalf, it
follows the same rule — a branch and a PR, never a direct commit to
`main`. Multiple posts in one request become multiple files on the same
branch and one PR, not one PR per post:

1. `git checkout -b content/ten-bai-viet` (or a batch-style name if writing
   several posts in this request).
2. Add/edit the post file(s), then `git add`, `git commit` (one commit per
   post is fine, or one commit for the whole batch — either is OK).
3. `git push -u origin content/ten-bai-viet`
4. `gh pr create --title "..." --body "..."` — list every post included in
   the PR body.
5. Check the Cloudflare Pages build status on the PR — e.g. `gh pr checks
   <PR>` or `gh pr view <PR> --json statusCheckRollup` — and report the
   result (pass/fail, preview URL) back to you.
6. Claude does **not** run `gh pr merge` on its own. It only merges when
   you explicitly ask it to in that moment, even if the check is green.

This applies whether Claude is adding one new post, several new posts,
editing an existing one, or fixing something across multiple files —
always a branch, always a PR, never a direct push or force-push to `main`.

## The template

Copy this to the top of every new post, exactly as-is (the `---` lines
matter):

```markdown
---
title: "Tiêu đề bài viết"
description: "Mô tả ngắn 1-2 câu, hiện trong danh sách blog và khi chia sẻ lên Facebook/Zalo."
date: 2026-03-10
tags: ["Tag 1", "Tag 2"]
---

Nội dung bài viết viết bằng Markdown ở đây.
```

Field-by-field:

| Field | Required? | What it does |
|---|---|---|
| `title` | Yes | Shown as the big heading and in the browser tab. |
| `description` | Yes | Shown under the title, in the blog list, and used for SEO / link previews. Keep it 1-2 sentences. |
| `date` | Yes | Format `YYYY-MM-DD`. Controls sort order on the blog page (newest first). |
| `tags` | No | Small labels shown on the post. Leave as `[]` for none. |
| `cover` | No | Path to a cover image for social-media link previews, e.g. `/assets/album/album-1.jpg`. Skip it if you don't have one. |
| `draft` | No | Set to `true` to hide the post from the site while you're still writing it. Remove it (or set `false`) when ready to publish. |

**Nothing else on the page needs to change** — the header, footer, and page
styling are shared automatically. You only ever write the frontmatter above
and the post content below it.

## Markdown cheat sheet

Markdown is just plain text with a few symbols that become formatting:

| You type | You get |
|---|---|
| `# Heading 1` | Large heading (use `##` for a smaller one, `###` smaller still) |
| `**bold text**` | **bold text** |
| `*italic text*` | *italic text* |
| `[link text](https://example.com)` | a clickable link |
| `[Xem khóa học](/khoa-hoc-python)` | a link to another page on this site |
| `- item one`<br>`- item two` | a bullet list |
| `1. step one`<br>`2. step two` | a numbered list |
| `> a quoted line` | a highlighted quote block |
| `` `inline code` `` | `inline code` styling |
| `![alt text](/assets/anh.jpg)` | an image |
| blank line between paragraphs | starts a new paragraph |

A full example:

```markdown
---
title: "5 cách giúp con làm quen với lập trình"
description: "Vài gợi ý đơn giản cho phụ huynh."
date: 2026-03-10
tags: ["Phụ huynh"]
---

Đoạn mở đầu giới thiệu bài viết.

## Mục 1

Nội dung mục 1, có thể **in đậm** hoặc *in nghiêng*.

- Gợi ý 1
- Gợi ý 2

> Mẹo nhỏ: đây là một khối trích dẫn.

Xem thêm khóa học [Scratch cho thiếu nhi](/khoa-hoc-scratch).
```

## FAQ specific to blogging

- **Can I edit a post after publishing?** Yes — same process: branch, edit
  the file, commit, open a PR, merge once the check passes. The site
  rebuilds automatically after the merge.
- **Can I delete a post?** Same process — delete the file on a branch, PR,
  merge — it disappears from the site after the next rebuild.
- **How do I un-publish a post temporarily?** Add `draft: true` to the
  frontmatter and commit. Set it back to `false` (or remove it) to republish.
- **Where do images go?** Put image files under `public/assets/` and
  reference them with a leading slash, e.g. `/assets/my-photo.jpg`.

For anything not covered here, see [FAQs.md](./FAQs.md).
