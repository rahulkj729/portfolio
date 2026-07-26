# Rahul Jagtap — Portfolio

A single-page portfolio site. No build step, no dependencies, no framework. Open `index.html` in a
browser and it works — locally or hosted.

```
portfolio/
├── index.html                        # the entire site (HTML + CSS + JS inline)
├── assets/
│   └── Rahul_Jagtap_Resume.pdf       # linked from the hero + footer
└── README.md
```

## Preview it locally

Just double-click `index.html`. Or, for a proper local server:

```powershell
cd c:\RJ\portfolio
python -m http.server 8000
# open http://localhost:8000
```

## Adding or editing a project

All projects live in one array near the bottom of `index.html`, labelled
`/* PROJECTS — edit / add entries here */`. Add an object to the list and the card, the filter
chips and the case-study modal all update automatically.

```js
{
  title:   "Project name",
  org:     "Company or Personal",
  year:    "2025",
  icon:    "🧠",                                  // any emoji
  tags:    ["Python", "PySpark"],                 // these become the filter chips
  summary: "One or two lines shown on the card.",
  problem: "What was broken / what needed doing.",
  approach:["Bullet per thing you built.", "..."],
  impact:  ["Bullet per measurable outcome.", "..."],
  stack:   ["Python", "Spark SQL", "AWS S3"],     // first 5 show on the card
  links:   [{ label: "GitHub", href: "https://github.com/..." }]   // optional
}
```

Numbers sell. Wherever you can, replace qualitative impact ("reduced run times") with the real
figure ("cut a 45-min job to 8 min", "12M records/night", "cut manual review from 6 hrs/day to 20 min").

Skills work the same way — the `SKILLS` array just above the render code.

## Deploying (free)

**GitHub Pages** — the simplest option:

```powershell
cd c:\RJ\portfolio
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/<username>/<username>.github.io.git
git push -u origin main
```

Naming the repo `<username>.github.io` publishes it at `https://<username>.github.io`.
For any other repo name: **Settings → Pages → Source: main / root**, and it lands at
`https://<username>.github.io/<repo>`.

**Netlify / Vercel** — drag the `portfolio` folder onto the Netlify dashboard, or run `vercel` in it.
Both deploy static folders with no configuration.

**Custom domain** — add a file named `CNAME` containing e.g. `rahuljagtap.dev`, then point an
`A`/`CNAME` DNS record at your host.

## What's in the build

**Motion & atmosphere**
- Three drifting aurora orbs, a masked grid, and an animated film-grain layer behind everything
- Cursor spotlight that trails the pointer (desktop only)
- Gradient scroll-progress bar pinned to the top of the viewport
- Live terminal in the hero that types out a pipeline run, then loops
- Rotating typewriter line under the headline
- Count-up stat numbers that fire when they scroll into view
- Infinite tech marquee that pauses on hover
- Timeline spine that draws itself in as you scroll past it
- 3D tilt + cursor-following glow on project, stat and skill cards
- Magnetic buttons, shine sweep on the primary CTA, staggered card entrances
- Directional reveal-on-scroll (up / left / right / scale)
- Floating back-to-top button

**Structure & polish**
- Dark / light theme, remembers your choice, respects the OS preference on first visit
- Floating nav that condenses on scroll, with a sliding pill indicator and scroll-spy
- Filterable project grid with click-through case-study modals (Esc / click-outside to close)
- Accessible: skip link, focus rings, ARIA labels, focus returned after modal close
- Every animation disabled under `prefers-reduced-motion`; tilt/spotlight/magnet skipped on touch
- All scroll work is rAF-throttled; animations use `transform`/`opacity` only

### Fail-safes (why the page can't go blank)

Reveal-on-scroll works by starting sections at `opacity: 0` and animating them in. If the JS that
does the revealing ever stops, those sections stay invisible. Three guards prevent that:

1. **`html.js` scoping** — the hiding rules only apply once JS has confirmed it is running
   (`document.documentElement.classList.add('js')` in `<head>`). No JS, or JS blocked → everything
   renders visible, just without animation.
2. **Independent `<script>` blocks** — each feature (render, terminal, tilt, modal, theme, nav,
   reveal, copy) is its own `<script>`. A runtime error in one no longer stops the rest from
   executing. Keep this structure when editing.
3. **Reveal backstop** — a rAF-throttled scroll sweep plus timed passes reveal anything the
   `IntersectionObserver` misses, and `.rv` elements fall back to visible if `IntersectionObserver`
   is unavailable.

A `window.onerror` handler writes the message to `<html data-js-error="...">`, so if something ever
does break you can see it in DevTools' element inspector without opening the console.
- SEO: Open Graph + Twitter tags, JSON-LD `Person` schema, inline SVG favicon
- Zero external requests — no CDN, no Google Fonts, works fully offline

### Editing the animated bits

Near the bottom of `index.html`, alongside `PROJECTS` and `SKILLS`:

- `MARQUEE` — the scrolling tech list
- `TYPED`   — the rotating phrases in the hero typewriter
- `TERM`    — the hero terminal script, as `[html, delay_ms]` pairs

The terminal output is intentionally illustrative (stage names, no invented figures) so it never
reads as a fabricated metric. If you add numbers there, use real ones.

## Before you publish

- [ ] Swap resume-derived projects for the real list (with metrics)
- [ ] Add GitHub repo / demo links via the `links` field
- [ ] Add a GitHub URL to the nav and footer if you want one
- [ ] Update `og:url` and add an `og:image` (1200×630) for link previews
- [ ] Re-export `assets/Rahul_Jagtap_Resume.pdf` whenever the résumé changes
