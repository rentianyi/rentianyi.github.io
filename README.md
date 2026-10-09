# rentianyi.github.io

Personal academic website of Tianyi Ren, served by GitHub Pages at <https://rentianyi.github.io/index.html>.
It is plain HTML and one stylesheet. There is no build step, so any edit you commit goes live a minute or two later.

| File | What it is |
|---|---|
| `index.html` | Home page (photo, short bio, links, news, research thumbnails) |
| `research.html`, `publications.html`, `teaching.html` | The other pages |
| `CV_tianyi.pdf` | The CV that the "CV" links open |
| `assets/css/site.css` | All styling (you should not need to touch it) |
| `assets/img/` | Photo (`headshot-portrait.webp`), favicon, social-preview image, research figures; `bg/` holds the brain-imaging artworks used as decorative backgrounds of the black bands (see *Change a background image* below). `headshot-original.webp` is the uncropped photo the portrait was made from (no page uses it; keep it for re-cropping) |
| `404.html` | "Page not found" page |
| `publication.html`, `Projects.html` | Old addresses that forward to the new pages. Keep them |

## How to edit a file on GitHub

1. Open the file on github.com and click the pencil icon (**Edit this file**).
2. Use **Ctrl/Cmd + F** to find the comment named below (for example `NEWS:`).
3. Make the change, then click **Commit changes…**, then **Commit changes** again.

Look for the short HTML comments in capital letters, like `<!-- NEWS: … -->`. They mark the places you will usually edit.

## Add a news item

In `index.html`, find `<!-- NEWS:`. Copy one whole line that starts with `<li><time` and paste it **at the top** of the list
(newest first). Keep each item to one short line, and keep at most five: delete the last line when you add one.

```html
<li><time datetime="2026-11">Nov 2026</time><span>Your news, with <strong>bold</strong> for the key phrase.</span></li>
```

`datetime` is the machine-readable date: `2026`, `2026-11` or `2026-11-15`.

## Add a publication

In `publications.html`, copy a whole paper block from `<li class="paper"` to its closing `</li>` and paste it in date order
(newest first). Then edit:

```html
<li class="paper" id="ren2027topic">
  <h3 class="paper__title">Paper title</h3>
  <p class="paper__authors"><span class="me">Ren, T.</span>, Coauthor, A., Kurt, M.</p>
  <p class="paper__venue">MIDL 2027 <span aria-hidden="true">·</span> <strong>Oral</strong></p>
  <ul class="links links--sm" role="list"><li><a href="https://arxiv.org/abs/…">arXiv</a></li><li><a href="…">Code</a></li></ul>
</li>
```

- `id="…"`: give the new paper its own id. Never keep the copied one: other pages link to papers by these ids
  (for example `publications.html#ren2024isles`), and two papers with the same id send those links to the wrong paper.
- keep your name wrapped as `<span class="me">Ren, T.</span>` so it is in bold.
- the links row: one `<li><a href="…">Word</a></li>` per link; the " · " between them is added automatically.
- a " · " typed in text is written `<span aria-hidden="true">·</span>` so screen readers skip it.
  Remove the whole `<ul class="links …">…</ul>` if there is no link.
- to show a small figure beside the paper, add `has-thumb` to the class (`class="paper has-thumb"`), put
  `<img class="thumb" src="assets/img/research/….webp" width="…" height="…" alt="…">` first, and wrap the rest in a `<div>`.

## Replace the CV

Upload the new PDF with **exactly** the name `CV_tianyi.pdf` (**Add file → Upload files**, in the top folder).
GitHub replaces the old one, and every CV link keeps working. Then change "Last updated" in the footer if you like.
It is in every page (`index.html`, `research.html`, `publications.html`, `teaching.html`, `404.html`): search each one for
`LAST UPDATED` and change all five the same way.

## Change the photo

Save a portrait photo as WebP, **460 × 680 pixels** (width × height), with the face in the upper third, and upload it to
`assets/img/` with the name `headshot-portrait.webp` to replace the old one. The rounded corners are added by the stylesheet.
If the new photo looks different, update its `alt="…"` text after `<!-- PHOTO:` in `index.html`.

## Change a background image

The black bands show two artworks from `assets/img/bg/`: the tractography beside the home-page intro (a strip above it on phones and tablets, below 1152 pixels wide), and the DTI | structural slice at the right of the other pages' title band. Each file is named
once, at the top of `assets/css/site.css`: search for `--art-tract` or `--art-dti` and change the file name inside `url("…")`. Use a WebP on
pure black at least as large as the old one (768 × 927 or 446 × 488 pixels), and for the tractography also point `--art-tract-384` at a
384-pixel-wide copy.

The layout is fitted to where the brain sits inside each file, so the new picture should have **the same proportions and framing**
(same width-to-height ratio, the brain in the same place with the same black margin around it). If it does not, also update the
numbers just below the file names in `site.css`: `--art-dti-ratio` (the DTI file's width / height) and the three `--art-tract-ink-*`
values (the left edge, top edge and width of the brain in the tractography file, each divided by the file's width).

## Good to know

- Keep the header and footer identical on every page. The only difference is which menu item has `aria-current="page"`.
- Keep the text short: one-line list items and short phrases rather than paragraphs.
- Figures live in `assets/img/research/`. Every image needs an `alt="…"` description. A figure with a caption is
  `<figure class="figure"><img …><figcaption>Short caption.</figcaption></figure>`.
  The small home-page thumbnails (`thumb-*.webp`) are crops of figures from the papers; each alt text names its source.
- `site.css` begins with a list of every style ("component") and its class names, with a short HTML example above each one.
