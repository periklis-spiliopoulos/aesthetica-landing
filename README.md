# OmniDerma Aesthetica Legal Site

Static bilingual legal site for:

- https://omniderma-aesthetica.com/terms/
- https://omniderma-aesthetica.com/privacy/

## Repository layout

```text
public/                       Files published by Vercel
  index.html
  assets/
  terms/index.html
  privacy/index.html
  robots.txt
  sitemap.xml
APP_INTEGRATION.md            Internal implementation notes; not published
LEGAL_REVIEW_CHECKLIST.md     Internal review checklist; not published
vercel.json                   Vercel static-site configuration
```

## Vercel settings

Import the Git repository into Vercel. The included `vercel.json` selects the
Other framework preset and publishes only `public/`. No build command or
environment variables are required.

After deployment, add both domains in Project Settings > Domains:

- `omniderma-aesthetica.com` — primary
- `www.omniderma-aesthetica.com` — redirect to the primary domain

At Namecheap, keep the existing DNS provider unless you intentionally want to
move all DNS management to Vercel. Add the exact DNS records displayed by the
Vercel Domains screen and remove only conflicting records for `@` and `www`.
Do not remove MX or email-related TXT records.

## Updating the site

Edit files under `public/`, then commit and push to the repository. Vercel will
automatically create a new deployment from the connected production branch.
