# gatlat.com

Personal portfolio for **Gatlat Deng Bum** — Computer Science & Psychology at McGill University.
Live at **[gatlat.com](https://gatlat.com)**.

![The portfolio homepage: a chalkboard hero with a live local clock](docs/screenshot-hero.png)

A single-page React site with two reading modes: the full visual layout above, and a
stripped-down **Minimal** mode that renders the same content as a single-column CV for
anyone who just wants the facts.

<table>
<tr>
<td width="62%"><img src="docs/screenshot-full.png" alt="Full page scroll: work, projects, skills, education, updates"></td>
<td width="38%"><img src="docs/screenshot-mobile.png" alt="Mobile layout at 390px wide"></td>
</tr>
<tr>
<td align="center"><em>Full page</em></td>
<td align="center"><em>Mobile (390px)</em></td>
</tr>
</table>

## Stack

React 19 and TypeScript, built with Vite 8 and styled with Tailwind CSS v4. Animations
use Framer Motion; the display and body font is DM Mono throughout. GitHub Actions builds
and deploys to GitHub Pages on every push to `main`.

There is no runtime backend — content lives in [src/data/work.ts](src/data/work.ts) as
typed objects, so adding a job or project means editing one array rather than touching
any markup.

## Prerendering

GitHub Pages serves static files, but a plain Vite SPA ships an empty `<div id="root">` —
so crawlers, link unfurlers, and anything that doesn't run JavaScript see a blank page.
[prerender.mjs](prerender.mjs) fixes that at build time: it does a second SSR build of
[src/entry-server.tsx](src/entry-server.tsx), renders the app to an HTML string, injects
it into `dist/index.html`, and deletes the SSR artifacts. The result is a static file with
real content in it, which React then hydrates.

## Local development

```bash
npm install
npm run dev          # dev server with HMR
```

To check what actually deploys — including the prerendered HTML, which `npm run dev`
does not produce:

```bash
npm run build        # tsc -b && vite build
node prerender.mjs   # inject SSR HTML into dist/index.html
npm run preview      # serve dist/ at localhost:4173
```

## Layout

```
src/
  components/     Nav, Hero, Work, Projects, Skills, Education, Updates, Footer
  context/        view mode (full ↔ minimal)
  data/work.ts    all job and project content
  entry-server.tsx  SSR entry used only by prerender.mjs
assets/           images and the resume PDF, symlinked into public/
docs/             the screenshots in this README
```

`public/assets` is a symlink to the top-level `assets/` directory, so files referenced by
absolute path (`/assets/…`) resolve identically in dev and in the build.

## Deployment

Pushing to `main` triggers [.github/workflows/deploy.yml](.github/workflows/deploy.yml),
which runs `vite build`, then `prerender.mjs`, then publishes `dist/` to GitHub Pages.
The custom domain survives each deploy via `public/CNAME`.

One gap worth knowing: the workflow calls `npx vite build` directly rather than
`npm run build`, which means it skips the `tsc -b` typecheck. Type errors will not fail
the deploy — run `npm run build` locally before pushing.
