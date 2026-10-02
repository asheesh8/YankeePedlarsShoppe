# Asset provenance

## Real photography (the shop's own)

- `public/images/finds/*` and `public/images/shop/*`: photos the shop posted to its
  Facebook page (The Yankee Pedlars Shoppe, page id 100063745925215), downloaded
  Oct 1, 2026 at full size, cropped to 3:4 and re-encoded as WebP. Mapping from
  each file back to its Facebook photo id is in `client-assets/finds-manifest.json`
  (`fb` field = index into the local scrape).

## Generated with Higgsfield (account dancinganglerfish1540, Plus)

All generations Oct 1-2, 2026. Raw masters live in `client-assets/higgsfield/`
(not committed).

### Drive-in film: `public/video/hero-film.mp4` (Visit section)

Two Kling 3.0 Pro image-to-video shots, joined and retimed with ffmpeg.

1. **Drive in** (job `22fee23a-8b84-443f-89b7-73cf882d395f`). Start frame: a Google
   Street View screenshot of 23 River Rd supplied by the agency, cropped and then
   cleaned and relit to October golden hour with GPT Image 2.5 (job
   `66989b20-b9de-4a34-9562-7f6b68e1a178`). The Street View image itself is not
   published anywhere on the site; it was only a reference frame.
2. **Walk in** (job `9b9e95c7-96e8-4cc6-8981-39a9ab2ad7ca`). Start frame: the shop's
   porch photo (Facebook, cropped 16:9). End frame: the shop's mustard-wall room
   photo (Facebook, cropped 16:9). The room is shown at its real size.


### Watercolors

- `public/images/art/1982-yard-sale.webp`, `2004-river-rd.webp`, `addition.webp`,
  `doodles.webp`, `truck.webp`: GPT Image 2.5, ink and watercolor vignettes. White
  paper lifted to alpha with `client-assets/color_to_alpha.py` so the paint blends
  into the page. These are illustrations of Linda's story, labelled on the page as
  interpretations, not historical photos.
- `public/images/vt/*`: GPT Image 2.5 with transparent backgrounds. Maple branch,
  birch and pine, falling leaves, fern and berry sprig, maple syrup jug and bottle,
  sap buckets, sugar shack, covered bridge, Green Mountains ridge. Decorative only.
- `public/images/vt/truck.webp`: GPT Image 2.5 transparent re-render of the pickup
  (job `42224355-56b0-40e6-b29c-080f97a712ee`) for the pine "we buy" band.
- `public/images/art/leopard.webp`, `truck.webp`: from the first (mustard) version,
  no longer used on the page.

### Rejected

- Three wide "hero stills" of an invented, larger interior. Rejected by the agency
  because the real shop is much smaller. Kept in `client-assets/higgsfield/rejected/`
  for reference only.
- An earlier framed portrait reel (three 9:16 clips). Replaced by the drive-in film.
- The whole first "mustard wall" design (film hero with title card). Replaced by
  the antique-catalog direction; the film now lives in the Visit section.
