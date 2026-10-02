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
- `src/components/InlineFilm.tsx`: the drive-up film, shown in the Visit section; plays once when scrolled into view.
- `public/video/`: hero film and its first and last frames.
- `public/images/finds`, `shop`: the shop's own Facebook photos.
- `public/images/art`, `vt`: Higgsfield watercolors (story, truck, Vermont botanicals).
- `docs/ASSET-PROVENANCE.md`: where every image and video came from.

Raw source media (Facebook originals, Higgsfield masters) stays in `client-assets/`
locally and is not committed.

## Design notes

Direction: "antique catalog" (chosen Oct 2, 2026 after the first mustard-wall
version was rejected for too much yellow and the film hero).

- Warm white paper page; pine green for structure (buttons, "we buy" band,
  footer); brick red as the single accent. Light only. Tokens in `globals.css`.
- Type: Cormorant Garamond (headlines, italic catalog captions), Instrument Sans (text).
- The shop's own photographs lead: a captioned photo plate in the hero, catalog
  entries for recent finds. Square corners everywhere.
- Vermont watercolors kept to a few touches: birch and pine by the finds, the
  pickup on the pine band, the Green Mountains running into the footer.
