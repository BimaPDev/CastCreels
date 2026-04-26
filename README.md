# CastCreel — Landing Page

Marketing site for CastCreel, the AI-powered fishing field journal. Static-site
generated with Vite + React + TypeScript + Tailwind, prerendered to HTML for SEO.

## Routes

- `/` — Landing page (hero, features, how-it-works, CTA)
- `/support` — Support and contact page
- `/privacy` — Privacy Policy (scaffolded with `{{TODO}}` placeholders)
- `/terms` — Terms of Service (scaffolded with `{{TODO}}` placeholders)

## Develop

```bash
cd landing-page
npm install
npm run dev          # http://localhost:5173
npm run typecheck    # TypeScript check
npm run lint         # ESLint
npm run build        # Static SSG build → ./dist
npm run preview      # Serve ./dist locally
```

## Deploy

The `dist/` folder is fully static. Drop it on any of:

- **Vercel** — `npm run build`, output dir `dist`.
- **Netlify** — same.
- **Cloudflare Pages / S3 + CloudFront** — same.

A `sitemap.xml` is emitted at build time by `scripts/generate-sitemap.mjs`.
Override the site URL with `SITE_URL=https://your-domain npm run build`.

## Configure

All site-wide constants live in `src/lib/site.ts`:

- `appStoreUrl`, `playStoreUrl` — replace placeholder IDs with real ones when ready.
- `waitlistEndpoint` — set to your ESP form endpoint (e.g. ConvertKit, Beehiiv,
  Mailchimp, custom). The form falls back to a "thanks" UI when this is empty.
- `email`, `twitter`, `url` — used in footer / SEO / JSON-LD.

## Filling in legal text

`src/content/privacy.ts` and `src/content/terms.ts` define each page as a typed
`LegalDoc` with `sections: LegalSection[]`. Replace each `{{TODO: …}}` body
string with your actual legal copy. Paragraphs are separated by blank lines.

`{{TODO: …}}` markers render as a styled inline placeholder in the page so
unfilled sections are obvious during review.

## Design tokens

The palette mirrors `frontend-mobile/src/theme.ts` so the marketing site is
visually consistent with the mobile app. See `tailwind.config.ts`.
