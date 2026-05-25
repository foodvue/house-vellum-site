# House Vellum

Custom Next.js site for House Vellum — handmade tallow soap, slow-cured by hand in Indiana.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS** (with House Vellum brand tokens)
- **Cormorant Garamond + Inter** fonts via `next/font`
- Hosted on **Vercel**, code on **GitHub**

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Brand tokens

Defined in `tailwind.config.ts`:

| Token | Value | Use |
|---|---|---|
| `oxblood` | `#6B1F18` | Primary brand, wax seal color |
| `oxblood-dark` | `#4A1410` | Hover states, deep accents |
| `oxblood-light` | `#8B2A20` | Highlights |
| `cream` | `#F5EDE0` | Background, label paper |
| `kraft` | `#A88556` | Accent text, kraft paper feel |
| `ink` | `#1A1614` | Body text |
| `caramel` | `#9C6B3E` | Soap bar color reference |

## Deployment

Auto-deploys to Vercel on push to `main`.

Production URL: [housevellum.com](https://housevellum.com)

## DNS configuration

Domain registered at Squarespace, pointed at Vercel via:

- **A record** `@` → `76.76.21.21`
- **CNAME** `www` → `cname.vercel-dns.com`

## Project structure

```
src/
  app/
    layout.tsx       # Root layout with fonts and metadata
    page.tsx         # Homepage (currently launch placeholder)
    globals.css      # Tailwind directives + global styles
public/              # Static assets (logo, images)
tailwind.config.ts   # Brand tokens
next.config.ts       # Next.js config
```

## Roadmap

- [x] Phase 1: Foundation, brand tokens, placeholder homepage
- [ ] Phase 2: Full landing page with logo, hero, brand story
- [ ] Phase 3: Email capture (waitlist)
- [ ] Phase 4: Product preview pages (The Library, The Garden, The Pantry)
- [ ] Phase 5: Shopify Storefront API integration
- [ ] Phase 6: Launch
