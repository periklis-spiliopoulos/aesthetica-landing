# OmniDerma Aesthetica Site

Static bilingual product and legal site for OmniDerma Aesthetica:

- https://omniderma-aesthetica.com/
- https://omniderma-aesthetica.com/legal/
- https://omniderma-aesthetica.com/terms/
- https://omniderma-aesthetica.com/privacy/

The landing page includes English/Greek switching, authentic app screenshots,
feature and safety information, and links to Google Play and the legal pages.

## Repository layout

```text
public/                       Files published by Vercel
  index.html
  assets/
    landing.css
    landing.js
    brand/
    screens/
  legal/index.html
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
