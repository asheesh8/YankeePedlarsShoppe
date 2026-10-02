# Yankee Pedlars' Shoppe

Website for Yankee Pedlars' Shoppe, a family-run used furniture and antiques shop at
23 River Rd, Essex Junction, VT. Built by ArkiTech Solutions.

```bash
npm install
npm run dev
```

Next.js 16 (App Router), Tailwind v4, Motion, Phosphor icons. Both routes are static.

## Where things live

- `src/lib/site.ts`: every fact and line of copy (hours, phone, story, reviews).
  Items marked `CONFIRM:` are open questions, collected in `CLIENT-QUESTIONS.md`.
- `src/lib/finds.ts`: the recent-finds catalog, generated from
  `client-assets/finds-manifest.json`.
- `src/components/FilmHero.tsx`: the opening drive-up film, plays once and holds.
- `public/video/`: hero film and its first and last frames.
- `public/images/finds`, `shop`: the shop's own Facebook photos.
- `public/images/art`, `vt`: Higgsfield watercolors (story, truck, Vermont botanicals).
- `docs/ASSET-PROVENANCE.md`: where every image and video came from.

Raw source media (Facebook originals, Higgsfield masters) stays in `client-assets/`
locally and is not committed.

## Design notes

- Palette from the shop: mustard wall paint (surface), Blue Willow cobalt (single
  accent), ledger navy ink. Light and dark themes via CSS variables in `globals.css`.
- Type: Gloock (display), Schibsted Grotesk (text), Reenie Beanie (price tags only).
- Signature device: handwritten manila hang tags, like the price tags in the shop.
- Corners are square everywhere; tags are the only shaped element.
