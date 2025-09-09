# Leo9-Inspired Hero + Navbar (React + Vite + Tailwind + Framer Motion)

**What’s included**
- Sticky glassmorphism Navbar (desktop + mobile)
- Animated Hero with gradient auras, parallax, 3D hover card, rotating words
- Responsive layout
- Bonus: 2 sections below hero (`Work`, `Services`) + `Contact` + `Footer`
- Built with React + Vite + Tailwind + Framer Motion

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Deploy (Vercel)

- Push this repo to GitHub
- Import into Vercel
- Framework preset: **Vite**
- Build command: `npm run build`
- Output dir: `dist`

## Deploy (Netlify)

- New site from Git
- Build command: `npm run build`
- Publish directory: `dist`

## Deploy (GitHub Pages)

- Install `gh-pages`: `npm i -D gh-pages`
- Add to `package.json`:
  ```json
  "homepage": "https://<your-username>.github.io/<repo-name>/",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
  ```
- `npm run deploy`
- Enable GitHub Pages on the repo (branch: `gh-pages`)
```

## Notes
- The design is **inspired by** leo9studio.com Hero & Navbar, with original implementation and animations.
- Lighthouse-ready: semantic HTML, accessible buttons/links, smooth animations.
