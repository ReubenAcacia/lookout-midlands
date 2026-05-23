# Look out Midlands

A personalised what's-on guide for the West Midlands region. Inspired by Head First Bristol.

The user tells it their name, age, local government area, and three interests from a 30-option palette. It returns up to 8 events from a curated dataset of ~70 real events across the region.

## Run locally

Needs Node 18 or later.

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Build

```bash
npm run build
```

The static site lands in `dist/`.

## Deploy to GitHub Pages

1. Create a new GitHub repo named `lookout-midlands` (or rename later — see below).
2. Push this folder to it:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOURNAME/lookout-midlands.git
   git push -u origin main
   ```
3. In the repo on github.com, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to **GitHub Actions**.
5. The included workflow (`.github/workflows/deploy.yml`) will build and deploy on every push to `main`.
6. After the first run, the site appears at `https://YOURNAME.github.io/lookout-midlands/`.

### If you rename the repo

Open `vite.config.ts` and change `base: '/lookout-midlands/'` to match your repo name (always with leading and trailing slashes), then commit and push.

### Custom domain

If you set up a custom domain in Settings → Pages, change `vite.config.ts` to `base: '/'` and commit.

## Update the events

Edit `src/events.ts`. Each event is a plain object with `title`, `venue`, `date`, `time`, `price`, `tags`, `city`, `blurb`, `why`. The tags must be IDs from the 30 preferences in `src/App.tsx`. Push to `main` and the site rebuilds.
