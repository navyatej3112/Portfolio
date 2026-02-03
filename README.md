# Portfolio — Navyatej Tummala

Modern single-page portfolio (Vite + React + TypeScript + Tailwind) with dark/light theme, smooth scrolling, and GitHub Pages deployment.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev
```

Runs at `http://localhost:5173`.

## Build

```bash
npm run build
```

Output is in `dist/`.

## Base path (GitHub Pages)

The site supports two deployment targets:

- **User/org site:** `https://<username>.github.io` → base path `/`
- **Project site:** `https://<username>.github.io/<repo>/` → base path `/<repo>/`

Base path is read from the **`BASE_PATH`** environment variable in `vite.config.ts`:

- **Local / user site:** leave unset or set `BASE_PATH=/` (default).
- **Project site (e.g. repo name `Portfolio`):** set `BASE_PATH=/Portfolio/` when building.

Examples:

```bash
# Default (user site or local)
npm run build

# Project site
BASE_PATH=/Portfolio/ npm run build
```

The provided GitHub Actions workflow (`.github/workflows/deploy.yml`) sets `BASE_PATH` automatically:

- If the repo name is `<owner>.github.io`, it uses `/`.
- Otherwise it uses `/<repository-name>/`.

## Deploy to GitHub Pages (manual, from your laptop)

This deploy does not use GitHub Actions runners. You build locally and push the built site to the `gh-pages` branch.

1. **Build and publish:**
   ```bash
   npm install
   npm run deploy:pages
   ```
2. **Configure GitHub Pages:**
   - In the repo: **Settings → Pages**.
   - Under **Build and deployment**, set **Source** to **Deploy from a branch**.
   - **Branch:** `gh-pages` / **Folder:** `/ (root)`.
   - Save. The site will be at **https://navyatej3112.github.io/Portfolio/**.

You can run `npm run deploy:pages` whenever you want to update the live site.

## Content

- **Profile data:** edit `src/data/profile.ts` (name, bio, experience, projects, skills, resume path, profile image path).
- **Assets:** put `resume.pdf` and `profile.jpg` (or your image filename) in `public/` and reference them in `profile.ts` as `resumePath` and `profileImagePath` (e.g. `/resume.pdf`, `/profile.jpg`).

## Tech stack

- Vite, React, TypeScript
- Tailwind CSS (design tokens, dark/light theme)
- framer-motion, lucide-react
