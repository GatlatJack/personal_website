# gatlat.com — Personal Portfolio

Personal portfolio for **Gatlat Deng Bum**, Computer Science & Psychology at McGill University. Live at [gatlat.com](https://gatlat.com).

## Stack

- **React 19** + **TypeScript**
- **Vite 8** (build tool)
- **Tailwind CSS v4** (utility classes)
- **DM Mono** (font — display + body)
- Deployed via **GitHub Actions** → **GitHub Pages**

## Sections

| Section | Description |
|---|---|
| Hero | Chalkboard GIF background, animated person overlay, profile photo, live clock |
| Work | Enzygent (AI drug discovery), Genedig (genomics platform) — both RI-MUHC internships |
| Projects | DNA Sequence Alignment, Medical Diagnostic AI, and more |
| Skills | Languages, Frameworks, Infrastructure, Tools |
| Education | McGill University, WUSC-SRP Scholarship, Windle International |
| Updates | Photos + Top Books (collapsible, tabbed) |

## Features

- **Minimal mode** — toggles a single-column CV layout via React Context
- **Responsive** — mobile nav (hamburger), responsive skills grid, reduced padding on small screens
- **Gradient section dividers** — fade in/out at edges
- **Hero edge fades** — smooth top/bottom transition into page background
- **Custom favicon** — rust-red "G" SVG icon

## Local Development

```bash
npm install
npm run dev
```

## Deployment

Pushes to `main` automatically trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds with `npx vite build` and deploys to GitHub Pages. Custom domain is preserved via `public/CNAME`.

## Assets

Profile photo and GIF backgrounds live in `src/assets/`. Static photos for the Updates section are served from `public/assets/`.
