# GitHub, Vercel, and Namecheap deployment

## 1. Create the GitHub repository

Create a new empty repository, for example `aesthetica-legal`. Do not initialize
it with a README, `.gitignore`, or license because this folder already contains
them.

From a terminal opened inside this folder:

```bash
git init
git add .
git commit -m "Add Aesthetica terms and privacy pages"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/aesthetica-legal.git
git push -u origin main
```

Alternatively, add the folder in GitHub Desktop and select **Publish repository**.
A private repository works with Vercel after GitHub access is authorized.

## 2. Import into Vercel

1. In Vercel, select **Add New > Project**.
2. Import the `aesthetica-legal` GitHub repository.
3. Confirm the Framework Preset is **Other**.
4. Leave Root Directory at the repository root.
5. The included `vercel.json` sets Output Directory to `public` and skips dependency installation.
6. No environment variables are required.
7. Deploy.

Test the temporary Vercel URL:

- `/`
- `/terms/`
- `/privacy/`
- `/assets/legal.css`
- `/assets/legal.js`
- `/robots.txt`
- `/sitemap.xml`

## 3. Add the custom domains in Vercel

In the Vercel project, open **Settings > Domains** and add:

1. `omniderma-aesthetica.com`
2. `www.omniderma-aesthetica.com`

Keep `omniderma-aesthetica.com` as the primary production domain because the
canonical URLs and sitemap already use it. Configure the `www` domain to
redirect to `omniderma-aesthetica.com` in the Vercel Domains screen.

Vercel will display the exact DNS record required for each hostname. Copy those
values rather than relying on an old generic Vercel IP or CNAME from a tutorial.

## 4. Configure Namecheap DNS

1. Sign in to Namecheap.
2. Open **Domain List > Manage** for `omniderma-aesthetica.com`.
3. Confirm Nameservers are using a Namecheap DNS option if you want to manage
   records under **Advanced DNS**.
4. Open **Advanced DNS > Host Records**.
5. Remove conflicting parking, URL redirect, A, ALIAS, or CNAME records only for
   the hosts `@` and `www`.
6. Add the apex record for host `@` using the exact type and value shown by Vercel.
7. Add the subdomain record for host `www` using the exact type and value shown by Vercel.
8. Use Automatic TTL unless Vercel shows otherwise.
9. Keep all MX and email-verification TXT records unchanged.

Return to Vercel's Domains screen and use **Refresh** or **Verify** until both
hostnames show as correctly configured. Vercel provisions HTTPS automatically
after DNS validation.

## 5. Final checks

Confirm:

- `https://omniderma-aesthetica.com/terms/`
- `https://omniderma-aesthetica.com/privacy/`
- `https://www.omniderma-aesthetica.com/terms/` redirects to the non-www domain
- English/Greek switching works
- mobile layout works
- `robots.txt` points to the correct sitemap
- browser certificate is valid

Then add these absolute links to the Aesthetica app:

```text
https://omniderma-aesthetica.com/terms/
https://omniderma-aesthetica.com/privacy/
```
