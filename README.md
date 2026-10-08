# rentianyi.github.io

Personal academic website of Tianyi Ren, served by GitHub Pages at <https://rentianyi.github.io/index.html>.
It is plain HTML and one stylesheet. There is no build step, so any edit you commit goes live a minute or two later.

| File | What it is |
|---|---|
| `index.html` | Home page (profile, research summary, selected publications, news) |
| `research.html`, `publications.html`, `teaching.html` | The other pages |
| `CV_tianyi.pdf` | The CV that the "CV" links open |
| `assets/css/site.css` | All styling (you should not need to touch it) |
| `assets/img/` | Headshot, favicon, social-preview image, research figures; `bg/` holds the brain-imaging artworks used as decorative backgrounds of the black bands (see *Change a background image* below). `headshot-original.webp` is the uncropped photo the headshots were made from (no page uses it) |
| `404.html` | "Page not found" page |
| `publication.html`, `Projects.html` | Old addresses that forward to the new pages. Keep them |

## How to edit a file on GitHub

1. Open the file on github.com and click the pencil icon (**Edit this file**).
2. Use **Ctrl/Cmd + F** to find the comment named below (for example `NEWS:`).
3. Make the change, then click **Commit changes…**, then **Commit changes** again.

Look for the short HTML comments in capital letters, like `<!-- NEWS: … -->`. They mark the places you will usually edit.

## Add a news item

In `index.html`, find `<!-- NEWS:`. Copy one whole line that starts with `<li class="news__item">` and paste it
**at the top** of the list (newest first). Then change the date and the text:

```html
<li class="news__item"><time class="news__date" datetime="2026-11">Nov 2026</time><p class="news__text">Your news here, with <strong>bold</strong> for the key phrase.</p></li>
```

`datetime` is the machine-readable date: `2026`, `2026-11` or `2026-11-15`.

## Add a publication

In `publications.html`, find the comment for the right group (for example `CONFERENCE & WORKSHOP PAPERS:` or `JOURNAL ARTICLES:`).
Copy a whole block from `<li class="pub"` to its closing `</li>` and paste it in date order (newest first). Then edit:

- `id="…"`: give the new paper its own id, e.g. `ren2027topic`. Never keep the copied one: `research.html` links to
  papers by these ids, and two papers with the same id send those links to the wrong paper
- `pub__venue`: short venue and year, e.g. `MIDL 2027` (for a workshop or challenge, say so: `MICCAI 2027 Workshop`)
- `pub__title`: the paper title
- `pub__authors`: keep your name wrapped as `<span class="me">Ren, T.</span>` so it is highlighted
- `pub__where`: the full venue name
- the link chip: change `href="…"`, the visible word (`arXiv`, `OpenReview`, `DOI`…), and the hidden words after it
  (`<span class="visually-hidden">: Short title</span>`, read aloud by screen readers)
- remove the whole `<ul class="pub__links" …>…</ul>` if there is no link and no badge

Badges you can use in the links row: `badge--award` (the ISLES'24 award only), `badge--oral` (Oral), `badge--review` (Under review),
`badge--wp` (Working paper).

Then update the paper counts. They appear in three places, and all three must agree:

1. the group's heading in `publications.html` (`pub-group__count`, just above the list);
2. the introduction at the top of `publications.html` (search `COUNTS:`);
3. the "At a glance" list on the home page, `index.html` (search `COUNTS:`).

To feature a paper on the home page, copy the same block into the list after `<!-- SELECTED PUBLICATIONS:` in `index.html`
(keep about five there).

## Replace the CV

Upload the new PDF with **exactly** the name `CV_tianyi.pdf` (**Add file → Upload files**, in the top folder).
GitHub replaces the old one, and every CV link keeps working. Then change "Last updated" in the footer if you like.
It is in every page (`index.html`, `research.html`, `publications.html`, `teaching.html`, `404.html`): search each one for
`LAST UPDATED` and change all five the same way.

## Change the headshot

Make a square photo and save two WebP copies: `headshot.webp` (396 × 396 pixels) and `headshot-256.webp` (256 × 256).
Upload both to `assets/img/` with those exact names to replace the old ones. If you describe the new photo differently,
update the `alt="…"` text after `<!-- HEADSHOT:` in `index.html`.

## Change a background image

The black bands show two artworks from `assets/img/bg/` (tractography on the home page, DTI slice on the other pages). Each file is named
once, at the top of `assets/css/site.css`: search for `--art-tract` or `--art-dti` and change the file name inside `url("…")`. Use a WebP on
pure black at least as large as the old one (768 × 927 or 446 × 488 pixels), and for the tractography also point `--art-tract-384` at a
384-pixel-wide copy.

The layout is fitted to where the brain sits inside each file, so the new picture should have **the same proportions and framing**
(same width-to-height ratio, the brain in the same place with the same black margin around it). If it does not, also update the
numbers just below the file names in `site.css`: `--art-dti-ratio` (the DTI file's width / height) and the three `--art-tract-ink-*`
values (the left edge, top edge and width of the brain in the tractography file, each divided by the file's width).

## Good to know

- Keep the header and footer identical on every page. The only difference is which menu item has `aria-current="page"`.
- Figures live in `assets/img/research/`. Every image needs an `alt="…"` description. Each figure on a page is wrapped in
  `<a class="plate__link" href="…">` pointing at its own file, so phone readers can open it full size; keep that when you swap a figure.
  The small home-page thumbnails (`thumb-*.webp`) are crops of the research figures.
- `site.css` begins with a list of every style ("component") and its class names.
