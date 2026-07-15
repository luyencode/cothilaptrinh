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

## The two easiest ways to add a post

### Option A — straight from GitHub's website (no setup needed)

1. In the GitHub repo, open `src/content/blog/`.
2. Click **Add file → Create new file**.
3. Name it `ten-bai-viet.md` (see naming rule above).
4. Paste the template below, fill it in, and write your post underneath.
5. Scroll down, write a short commit message (e.g. "Add blog post: ..."),
   and click **Commit changes directly to the `main` branch**.
6. Wait 1-2 minutes — Cloudflare Pages rebuilds the site automatically and
   your post goes live. You can watch progress under **Workers & Pages →
   this project → Deployments** in the Cloudflare dashboard.

### Option B — on your own computer (if you have Node.js + the repo cloned)

1. Create the file at `src/content/blog/ten-bai-viet.md`.
2. Run `npm run dev` and open `http://localhost:4321/blog` to preview.
3. `git add`, `git commit`, `git push` to `main` when you're happy with it.

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

- **Can I edit a post after publishing?** Yes — just edit the same file and
  commit again. The site rebuilds automatically.
- **Can I delete a post?** Delete the file and commit — it disappears from
  the site after the next rebuild.
- **How do I un-publish a post temporarily?** Add `draft: true` to the
  frontmatter and commit. Set it back to `false` (or remove it) to republish.
- **Where do images go?** Put image files under `public/assets/` and
  reference them with a leading slash, e.g. `/assets/my-photo.jpg`.

For anything not covered here, see [FAQs.md](./FAQs.md).
