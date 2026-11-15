# AMPERE Lab website

Source for <https://ampere-lab.github.io>, the website of the AMPERE Lab (Department of Electrical Engineering, University of Notre Dame). It is a Jekyll site built on the [al-folio](https://github.com/alshedivat/al-folio) theme.

Every push to `main` builds and deploys the site through the **Deploy site** GitHub Action. Changes go live a few minutes later.

## Common updates

- **News:** add a file to `_news/` (copy an existing one). An optional `image:` line in the front matter adds a photo to the post and a thumbnail on the homepage. The newest post also appears as the "Latest" link above the homepage title.
- **Publications:** edit `_data/publications.yml`. A weekly Action also checks OpenAlex and opens a pull request when it finds new papers.
- **People and alumni:** edit `_pages/people.md`. Photos go in `assets/img/people/`.
- **Research:** edit `_pages/research.md`. Slideshow photos go in `assets/img/research-slideshow/`; keep them under about 1600 px wide.
- **Sponsors:** put the logo in `assets/img/sponsors/` and add one line to `_includes/sponsors.liquid`.
- **Lab rooms and address:** `_includes/visit_us.liquid`
- **Join Us pages:** `_pages/join*.md`
- **Homepage:** `_layouts/home.liquid`
- **Colors, fonts, navbar, footer:** `assets/css/main.scss`
- **Lab logo:** all versions (horizontal, stacked, icon, favicon; color, navy, white, reversed) are in `assets/img/logo/`, with usage notes in its README. The site uses `_includes/amp_mark_small.liquid` (navbar, diagram) and `_includes/amp_mark.liquid` (homepage title).

## Running locally

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>.
