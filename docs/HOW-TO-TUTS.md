# How to write a tutorial / documentation page

This guide covers the **Tài liệu** (tutorials/docs) section of the site —
the pages with a sidebar on the left, grouped into sections, with
"Trước / Tiếp" (previous/next) buttons at the bottom, similar to GitBook or
Docusaurus docs.

> This `docs/` folder (where this file lives) is internal team documentation
> — it is **not** published on the website. The tutorials you're about to
> learn to write live in a different folder, `src/content/docs/`, and *are*
> published at `/docs/...` on the live site. Don't mix the two up.

## Where tutorial pages live

```
src/content/docs/<any-folder-name>/ten-bai.md
```

The folder name (e.g. `scratch`, `python`) is just for your own organization
on disk — it does **not** control where a tutorial appears in the sidebar.
The sidebar grouping comes entirely from the `section` field described
below. You can put every tutorial in one folder if you prefer; it'll still
group correctly by `section`.

The file path becomes the URL, e.g. `src/content/docs/python/cai-dat.md`
becomes `https://<your-domain>/docs/python/cai-dat/`.

## The template

```markdown
---
title: "Tên bài hướng dẫn"
description: "Mô tả ngắn (tùy chọn, dùng cho SEO)."
section: "Nhập môn Python"
sectionOrder: 2
order: 1
---

Nội dung bài hướng dẫn viết bằng Markdown ở đây.
```

Field-by-field:

| Field | Required? | What it does |
|---|---|---|
| `title` | Yes | Page heading, sidebar label, browser tab title. |
| `description` | No | Used for SEO / link previews. |
| `section` | Yes | The sidebar group this page appears under. **Must be spelled identically** on every page that belongs to the same group (e.g. always exactly `"Nhập môn Python"`, not sometimes `"Python"`). |
| `sectionOrder` | No (default `0`) | Controls which section appears first/second/etc. in the sidebar. Lower numbers appear higher up. All pages in the same section should use the same `sectionOrder`. |
| `order` | No (default `0`) | Controls the order of pages *within* a section. Lower numbers appear first. |

## How the sidebar and Trước/Tiếp buttons work

You never build the sidebar or the previous/next links by hand — they're
generated automatically from every file's frontmatter:

- **Sidebar grouping**: every tutorial with the same `section` text is
  grouped under one heading, sorted by `sectionOrder`. Inside a group,
  pages are sorted by `order`.
- **Trước / Tiếp (prev/next)**: the site lines up *every* tutorial across
  *all* sections (sorted by `sectionOrder` then `order`) into one long
  sequence, and each page's prev/next buttons point to its neighbors in
  that sequence. This means the last page of one section's "Tiếp" button
  can correctly lead into the first page of the next section.

### Example: adding a 3rd tutorial to an existing section

If these two tutorials already exist:

```yaml
# src/content/docs/scratch/lam-quen-giao-dien.md
section: "Bắt đầu với Scratch"
sectionOrder: 1
order: 1
```

```yaml
# src/content/docs/scratch/chuong-trinh-dau-tien.md
section: "Bắt đầu với Scratch"
sectionOrder: 1
order: 2
```

...a new third tutorial in the same section just needs the same `section`
text, the same `sectionOrder` (`1`), and the next `order` (`3`):

```yaml
# src/content/docs/scratch/khoi-lenh-lap.md
title: "Dùng khối lệnh lặp"
section: "Bắt đầu với Scratch"
sectionOrder: 1
order: 3
---
```

It will automatically appear third in the "Bắt đầu với Scratch" sidebar
group, with its "Trước" button pointing at `chuong-trinh-dau-tien.md`.

### Example: adding a brand-new section

Just pick a `sectionOrder` that doesn't collide with an existing one (e.g.
the highest current `sectionOrder` + 1), and give every page in the new
section that same `section` text and `sectionOrder`:

```yaml
section: "Nâng cao: Cấu trúc dữ liệu"
sectionOrder: 3
order: 1
```

A new sidebar group titled "Nâng cao: Cấu trúc dữ liệu" appears automatically
— nothing else needs to change.

## Publishing a tutorial

Same two options as blog posts (see
[HOW-TO-BLOG.md](./HOW-TO-BLOG.md#the-two-easiest-ways-to-add-a-post) for
details):

- **Option A**: create the file directly on GitHub's website, commit to
  `main`, wait ~1-2 minutes for it to go live.
- **Option B**: create it locally, preview with `npm run dev` at
  `http://localhost:4321/docs`, then `git push`.

## Markdown basics

Tutorials use the same Markdown formatting as blog posts — see the
[cheat sheet in HOW-TO-BLOG.md](./HOW-TO-BLOG.md#markdown-cheat-sheet) if
you need a refresher on headings, bold/italic, lists, links, images, and
code blocks.

## FAQ specific to tutorials

- **Two tutorials aren't grouping together in the sidebar even though I
  meant them to be in the same section** — the `section` text almost
  certainly doesn't match exactly (check for a typo, extra space, or
  different capitalization).
- **Can I reorder an entire section?** Yes — change its `sectionOrder`
  number on every page in that section.
- **Do I need to update other pages when I add a new one?** No — the
  sidebar and prev/next links are fully automatic.

For anything not covered here, see [FAQs.md](./FAQs.md).
