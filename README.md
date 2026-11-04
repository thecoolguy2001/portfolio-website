# Demonte Walker — Portfolio

A hand-built personal portfolio for **Demonte Walker** — designer and developer working across web, iOS / watchOS, and hardware. The site is a full case-study archive of selected work, written and built from scratch with vanilla HTML, CSS, and JavaScript. No frameworks, no build step, no third-party UI libraries.

> **Live site:** https://thecoolguy2001.github.io/Portfolio/

---

## Overview

The portfolio is a single-page index that links into twenty in-depth project case studies. Each case study is a self-contained page with its own narrative feed — discovery, problem framing, personas, wireframes, design decisions, iterations, and outcomes — designed to read as a real product write-up rather than a tile in a grid.

The repo is also a deliberate showcase of what can be built without a framework: every animation, transition, modal, scroll observer, and hover preview is hand-written.

## Highlights

- **Twenty case studies** spanning web, mobile, watchOS, AR, hardware, and editorial work — each a standalone page with wireframes, persona research, design-decision cards, and dated feed entries.
- **Custom design system** — 50+ CSS custom properties for color, spacing, typography, motion, and radius. SF Pro Display + IBM Plex Mono via Google Fonts.
- **Hero with live typing animation** that cycles through roles (designer, developer, etc.).
- **Hover-video project cards** — every card autoplays a short MP4 / MOV preview on mouseenter without blocking initial paint.
- **Scroll-reveal animations** powered by `IntersectionObserver`, staggered per section.
- **Project modal system** with body-scroll lock, ESC-to-close, and focus management.
- **Page loader** with a logo + progress bar to mask the initial font / image load.
- **Responsive at 1024 / 768 / 480 px** breakpoints — every page lays out cleanly down to small phones.
- **Accessibility-conscious** — all images carry alt text, videos use `playsinline` and `preload="auto"`, modal traps focus and supports keyboard dismissal.

## Tech Stack

| Layer        | Choice                                            |
| ------------ | ------------------------------------------------- |
| Markup       | Hand-written semantic HTML5                        |
| Styling      | Vanilla CSS (Custom Properties, Grid, Flexbox)     |
| Behavior     | Vanilla ES2020+ JavaScript (no transpiler)         |
| Typography   | SF Pro Display, IBM Plex Mono (Google Fonts)       |
| Media        | MP4 / MOV project previews, optimized PNGs         |
| Tooling      | None — direct edit & deploy                        |
| Hosting      | GitHub Pages (static)                              |

The decision to skip a framework is intentional. The site is a piece of writing as much as it is a piece of software, and a build step would have added overhead the project doesn't need.

## Repository Layout

```
Portfolio/
├── index.html              # Landing page — hero, project grid, about, contact
├── style.css               # Global design system + landing-page styles
├── script.js               # Loader, typing, scroll observers, modal, hover videos
├── portfolio_logo.png      # Brand mark (used in nav + loader)
├── projects/
│   ├── project-styles.css  # Shared styles for case-study pages
│   ├── visualizer.html     # 50+ effect audio-visualizer case study
│   ├── amazeweb.html       # Web-design service case study
│   ├── oldyorktimes.html   # Publication → print magazine pivot
│   ├── artist.html         # Artist portfolio site (3-version arc)
│   ├── fibber.html         # Apple Watch lie-detector
│   ├── moodring.html       # Apple Watch mood visualization
│   ├── reflexo.html        # Apple Watch reaction game
│   ├── peerpair.html       # TikTok-based matching app
│   └── ... (12 more)
├── images/                 # Favicon set
├── project images/         # Per-project posters + hover videos (~40 assets)
└── Hello!/Resume.pdf       # Downloadable resume
```

## Selected Case Studies

A few of the deeper write-ups in the `projects/` directory:

- **Visualizer** — A Three.js / WebGL audio visualizer with 50+ effects, four playback modes, a Custom Effect Creator for user-written shaders, Draw Mode, Game Mode, and a recording pipeline. Long, dated feed of every major release from late 2024 through May 2026.
- **Old York Times → The Pulp** — A UI/UX concept that started as a digital pulp publication and pivoted to a physical magazine after pre-launch reassessment. Documents the full pivot, the rename in October 2025, and the May 2026 print finalization.
- **Amaze Web** — A six-year-running client web service. Started 2020 on Wix / WordPress, adopted Webflow in 2021, Framer in 2024, and now expanding into templates, AI-agent integrations, and email design.
- **Apple Watch trio** — Fibber, Moodbeat, and Reflex-o. Three short, focused watchOS experiments built in May–June 2025 and released on the App Store in November 2026.
- **Artist Website** — Three discrete versions shipped to a single client between September 2023 and December 2024, with Three.js gallery interactions and a full CMS handoff.

Each case study uses the same component vocabulary — dated feed entries, wireframe blocks, decision cards, persona grids, user-flow strips — implemented entirely in CSS.

## Running Locally

There is no install step. Any static-file server works:

```sh
# clone
git clone https://github.com/thecoolguy2001/Portfolio.git
cd Portfolio

# serve (any of these)
python3 -m http.server 8000
# or
npx serve .
```

Then open `http://localhost:8000`.

> Opening `index.html` directly via `file://` mostly works, but a local server is recommended so videos and font preconnects behave correctly.

## Deployment

The site is configured to deploy as a static GitHub Pages build. Any push to the default branch republishes. There are no CI workflows or build scripts — what's in the repo is what ships.

## Design Principles

A handful of decisions show up across every page:

1. **Writing first.** Each case study is structured as a narrative, not a slide deck. Wireframes and personas exist to support the story, not perform research.
2. **No framework, on purpose.** Performance, simplicity, and editability all benefit from hand-written code at this scale.
3. **Honest dated feeds.** Every project page reads as a chronological log — what shipped, what was reconsidered, what was paused.
4. **Reusable component vocabulary.** Wireframes, decision cards, personas, and flows are styled once in shared CSS and reused across all twenty pages.

## Contact

- **Email:** demontewalker12@gmail.com
- **LinkedIn:** [linkedin.com/in/demonte-walker-83506017b](https://www.linkedin.com/in/demonte-walker-83506017b/)
- **GitHub:** [@thecoolguy2001](https://github.com/thecoolguy2001)
- **Resume:** [`Hello!/Resume.pdf`](Hello!/Resume.pdf)

---

© 2026 Demonte Walker. All rights reserved.
