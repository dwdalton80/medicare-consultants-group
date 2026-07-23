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

The site is served at the root path (`base: '/'` in `vite.config.js`) via the custom domain `medicareconsultantsgroup.com` (see `public/CNAME`). If the custom domain is removed and the site falls back to `https://<username>.github.io/<repo>/`, change `base` back to `/<repo>/`.
