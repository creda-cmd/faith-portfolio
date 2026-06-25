# Faith Musyoka — Portfolio

Personal portfolio for **Faith Musyoka**, an Information Technology graduand specialising in
cybersecurity, network infrastructure, IT support, and full-stack web development.

Built with [React](https://react.dev) + [Vite](https://vite.dev). Single-page, responsive, dark theme.

## Development

```bash
npm install
npm run dev      # start dev server
npm run lint     # lint
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Editing content

All resume content lives in [`src/data.js`](src/data.js) — profile, summary, experience,
skills, projects, references, and contact details. Update that file to change the site copy.

## Deployment (GitHub Pages)

`.github/workflows/deploy.yml` builds and deploys to GitHub Pages on every push to `main`.

To enable it once: in the repo, go to **Settings → Pages → Build and deployment → Source**
and select **GitHub Actions**. The build sets Vite's `base` to `/<repo-name>/` automatically
via the `VITE_BASE` environment variable, so project-site URLs resolve correctly.

The site can also be deployed to Netlify, Vercel, or a custom domain — in those cases leave
`VITE_BASE` unset so `base` defaults to `/`.
