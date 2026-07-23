## Medicare Consultants Group

Marketing landing page for Medicare Consultants Group, built with React, Vite, Tailwind CSS, and shadcn/ui.

### Local development

```
npm install
npm run dev
```

### Build

```
npm run build
```

Outputs a static site to `./dist`.

### Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.

To enable it on a new repo: **Settings → Pages → Source → GitHub Actions**.

The site is served from `/medicare-consultants-group/` (see `base` in `vite.config.js`) to match the default GitHub Pages project URL, `https://<username>.github.io/medicare-consultants-group/`. Update that value if the repo is renamed or a custom domain is used.
