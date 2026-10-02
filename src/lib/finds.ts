/**
 * Real pieces photographed by the shop and posted to its Facebook page
 * (Aug to Sep 2026). Stock turns over fast, so the site never promises any
 * of these are still in. Every card asks the visitor to text first.
 * Regenerate from client-assets/finds-manifest.json.
 */

export const CATEGORIES = [
  { id: "furniture", label: "Furniture" },
  { id: "lighting", label: "Lamps & lighting" },
  { id: "art", label: "Art & frames" },
  { id: "kitchen", label: "Kitchen & dining" },
  { id: "collectibles", label: "Collectibles" },
  { id: "porch", label: "Porch & yard" },
  { id: "rugs", label: "Rugs" },
] as const;

export type CategoryId = (typeof CATEGORIES)[number]["id"];

export type Find = {
  slug: string;
  label: string;
  category: CategoryId;
  featured: boolean;
  src: string;
  width: number;
  height: number;
};

export const FINDS: Find[] = [
  { slug: "stained-glass-lamp", label: "Stained-glass table lamp", category: "lighting", featured: true, src: "/images/finds/stained-glass-lamp.webp", width: 900, height: 1200 },
  { slug: "maple-secretary-desk", label: "Maple secretary desk", category: "furniture", featured: true, src: "/images/finds/maple-secretary-desk.webp", width: 900, height: 1200 },
  { slug: "victrola-cabinet", label: "Victrola phonograph cabinet", category: "furniture", featured: true, src: "/images/finds/victrola-cabinet.webp", width: 900, height: 1200 },
  { slug: "ski-adirondack-chairs", label: "Ski Adirondack chairs", category: "porch", featured: true, src: "/images/finds/ski-adirondack-chairs.webp", width: 900, height: 1200 },
  { slug: "blue-willow-pitcher", label: "Blue-and-white pitcher and bowl", category: "kitchen", featured: true, src: "/images/finds/blue-willow-pitcher.webp", width: 900, height: 1200 },
  { slug: "parlor-lamp", label: "Hand-painted parlor lamp", category: "lighting", featured: true, src: "/images/finds/parlor-lamp.webp", width: 900, height: 1200 },
  { slug: "eastlake-dresser", label: "Eastlake dresser with mirror", category: "furniture", featured: true, src: "/images/finds/eastlake-dresser.webp", width: 900, height: 1200 },
  { slug: "bulldog-figure", label: "Ceramic bulldog", category: "collectibles", featured: true, src: "/images/finds/bulldog-figure.webp", width: 900, height: 1200 },
  { slug: "striped-wingback", label: "Striped wingback chair", category: "furniture", featured: true, src: "/images/finds/striped-wingback.webp", width: 900, height: 1200 },
  { slug: "jadeite-canisters", label: "Jadeite canister set", category: "kitchen", featured: true, src: "/images/finds/jadeite-canisters.webp", width: 900, height: 1200 },
  { slug: "brass-trim-box", label: "Brass-trimmed painted box", category: "collectibles", featured: true, src: "/images/finds/brass-trim-box.webp", width: 900, height: 1200 },
  { slug: "tall-ship-painting", label: "Tall ship oil painting", category: "art", featured: true, src: "/images/finds/tall-ship-painting.webp", width: 900, height: 1200 },
  { slug: "maple-dresser-cupboard", label: "Maple dresser and corner cupboard", category: "furniture", featured: false, src: "/images/finds/maple-dresser-cupboard.webp", width: 900, height: 1200 },
  { slug: "pine-chest", label: "Pine chest of drawers", category: "furniture", featured: false, src: "/images/finds/pine-chest.webp", width: 900, height: 1200 },
  { slug: "cherry-chest", label: "Cherry chest with turned columns", category: "furniture", featured: false, src: "/images/finds/cherry-chest.webp", width: 900, height: 1200 },
  { slug: "tall-chest", label: "Tall chest of drawers", category: "furniture", featured: false, src: "/images/finds/tall-chest.webp", width: 900, height: 1200 },
  { slug: "long-sideboard", label: "Long walnut sideboard", category: "furniture", featured: false, src: "/images/finds/long-sideboard.webp", width: 900, height: 1200 },
  { slug: "empire-chest", label: "Empire chest with mirror back", category: "furniture", featured: false, src: "/images/finds/empire-chest.webp", width: 900, height: 1200 },
  { slug: "marble-top-table", label: "Marble-top round table", category: "furniture", featured: false, src: "/images/finds/marble-top-table.webp", width: 900, height: 1200 },
  { slug: "floral-recliner", label: "Floral recliner", category: "furniture", featured: false, src: "/images/finds/floral-recliner.webp", width: 900, height: 1200 },
  { slug: "painted-dresser", label: "Painted white dresser", category: "furniture", featured: false, src: "/images/finds/painted-dresser.webp", width: 900, height: 1200 },
  { slug: "red-rush-chairs", label: "Red rush-seat chairs", category: "furniture", featured: false, src: "/images/finds/red-rush-chairs.webp", width: 900, height: 1200 },
  { slug: "baby-grand-piano", label: "Baby grand piano", category: "furniture", featured: false, src: "/images/finds/baby-grand-piano.webp", width: 900, height: 1200 },
  { slug: "lattice-secretary", label: "Lattice-front secretary", category: "furniture", featured: false, src: "/images/finds/lattice-secretary.webp", width: 900, height: 1200 },
  { slug: "recliner-pair", label: "Pair of upholstered recliners", category: "furniture", featured: false, src: "/images/finds/recliner-pair.webp", width: 900, height: 1200 },
  { slug: "carved-armchair", label: "Carved cane-back armchair", category: "furniture", featured: false, src: "/images/finds/carved-armchair.webp", width: 900, height: 1200 },
  { slug: "writing-desk", label: "Writing desk with lyre base", category: "furniture", featured: false, src: "/images/finds/writing-desk.webp", width: 900, height: 1200 },
  { slug: "hutch-desk", label: "Pine hutch desk", category: "furniture", featured: false, src: "/images/finds/hutch-desk.webp", width: 900, height: 1200 },
  { slug: "floral-wingback", label: "Floral wingback chair", category: "furniture", featured: false, src: "/images/finds/floral-wingback.webp", width: 900, height: 1200 },
  { slug: "pine-washstand", label: "Pine washstand", category: "furniture", featured: false, src: "/images/finds/pine-washstand.webp", width: 900, height: 1200 },
  { slug: "mahogany-chest", label: "Mahogany bachelor chest", category: "furniture", featured: false, src: "/images/finds/mahogany-chest.webp", width: 900, height: 1200 },
  { slug: "dining-set", label: "Queen Anne dining set", category: "furniture", featured: false, src: "/images/finds/dining-set.webp", width: 900, height: 1200 },
  { slug: "stained-glass-nightstands", label: "Nightstands with leaded-glass doors", category: "furniture", featured: false, src: "/images/finds/stained-glass-nightstands.webp", width: 900, height: 1200 },
  { slug: "eastlake-bed", label: "Eastlake bed", category: "furniture", featured: false, src: "/images/finds/eastlake-bed.webp", width: 900, height: 1200 },
  { slug: "blanket-chest", label: "Old blanket chest", category: "furniture", featured: false, src: "/images/finds/blanket-chest.webp", width: 900, height: 1200 },
  { slug: "ginger-jar-lamp", label: "Black ginger-jar lamp", category: "lighting", featured: false, src: "/images/finds/ginger-jar-lamp.webp", width: 900, height: 1200 },
  { slug: "figural-lamp", label: "Figural bronze-tone lamp", category: "lighting", featured: false, src: "/images/finds/figural-lamp.webp", width: 900, height: 1200 },
  { slug: "mission-lamp", label: "Mission-style slag glass lamp", category: "lighting", featured: false, src: "/images/finds/mission-lamp.webp", width: 900, height: 1200 },
  { slug: "tole-lamp", label: "Painted tole lamp", category: "lighting", featured: false, src: "/images/finds/tole-lamp.webp", width: 900, height: 1200 },
  { slug: "blue-glass-lamp", label: "Blue glass lamp with white enamel", category: "lighting", featured: false, src: "/images/finds/blue-glass-lamp.webp", width: 900, height: 1200 },
  { slug: "tulip-lamp", label: "Tulip-shade accent lamp", category: "lighting", featured: false, src: "/images/finds/tulip-lamp.webp", width: 900, height: 1200 },
  { slug: "boston-terrier", label: "Cast-iron Boston terrier", category: "collectibles", featured: false, src: "/images/finds/boston-terrier.webp", width: 900, height: 1200 },
  { slug: "minnow-bucket", label: "Min-O-Life minnow bucket", category: "collectibles", featured: false, src: "/images/finds/minnow-bucket.webp", width: 900, height: 1200 },
  { slug: "marble-jar", label: "Jar of old marbles", category: "collectibles", featured: false, src: "/images/finds/marble-jar.webp", width: 720, height: 960 },
  { slug: "chinese-vases", label: "Pair of painted porcelain vases", category: "collectibles", featured: false, src: "/images/finds/chinese-vases.webp", width: 900, height: 1200 },
  { slug: "stag-vase", label: "Stag-head vase", category: "collectibles", featured: false, src: "/images/finds/stag-vase.webp", width: 900, height: 1200 },
  { slug: "cobalt-vase", label: "Cobalt glass vase", category: "collectibles", featured: false, src: "/images/finds/cobalt-vase.webp", width: 900, height: 1200 },
  { slug: "porcelain-flowers", label: "Porcelain flower centerpiece", category: "collectibles", featured: false, src: "/images/finds/porcelain-flowers.webp", width: 900, height: 1200 },
  { slug: "pair-of-vases", label: "Pair of patterned vases", category: "collectibles", featured: false, src: "/images/finds/pair-of-vases.webp", width: 900, height: 1200 },
  { slug: "fruit-bowl", label: "Ceramic fruit centerpiece", category: "collectibles", featured: false, src: "/images/finds/fruit-bowl.webp", width: 900, height: 1200 },
  { slug: "globes", label: "Pair of desk globes", category: "art", featured: false, src: "/images/finds/globes.webp", width: 900, height: 1200 },
  { slug: "bird-print", label: "Framed bird print", category: "art", featured: false, src: "/images/finds/bird-print.webp", width: 900, height: 1200 },
  { slug: "pelican-painting", label: "Pelican oil painting", category: "art", featured: false, src: "/images/finds/pelican-painting.webp", width: 900, height: 1200 },
  { slug: "gallery-wall", label: "A wall of framed art", category: "art", featured: false, src: "/images/finds/gallery-wall.webp", width: 900, height: 1200 },
  { slug: "adirondack-poster", label: "Adirondack watercolor poster", category: "art", featured: false, src: "/images/finds/adirondack-poster.webp", width: 900, height: 1200 },
  { slug: "cat-watercolors", label: "Cat watercolors, framed", category: "art", featured: false, src: "/images/finds/cat-watercolors.webp", width: 900, height: 1200 },
  { slug: "cornbread-pan", label: "Cast-iron cornbread pan", category: "kitchen", featured: false, src: "/images/finds/cornbread-pan.webp", width: 900, height: 1200 },
  { slug: "teapot-shelf", label: "Teapots by the shelf-full", category: "kitchen", featured: false, src: "/images/finds/teapot-shelf.webp", width: 900, height: 1200 },
  { slug: "pottery-shelves", label: "Crocks and stoneware", category: "kitchen", featured: false, src: "/images/finds/pottery-shelves.webp", width: 900, height: 1200 },
  { slug: "yellow-plates", label: "Yellow dinnerware", category: "kitchen", featured: false, src: "/images/finds/yellow-plates.webp", width: 900, height: 1200 },
  { slug: "pewter-teapot", label: "Pewter teapot", category: "kitchen", featured: false, src: "/images/finds/pewter-teapot.webp", width: 900, height: 1200 },
  { slug: "painted-bowl", label: "Hand-painted serving bowl", category: "kitchen", featured: false, src: "/images/finds/painted-bowl.webp", width: 900, height: 1200 },
  { slug: "wicker-swivel-chairs", label: "White wicker swivel chairs", category: "porch", featured: false, src: "/images/finds/wicker-swivel-chairs.webp", width: 900, height: 1200 },
  { slug: "patio-set", label: "Patio set with umbrella", category: "porch", featured: false, src: "/images/finds/patio-set.webp", width: 900, height: 1200 },
  { slug: "pine-pedestal-table", label: "Pine pedestal table", category: "porch", featured: false, src: "/images/finds/pine-pedestal-table.webp", width: 900, height: 1200 },
  { slug: "wine-rack", label: "Wooden wine rack", category: "porch", featured: false, src: "/images/finds/wine-rack.webp", width: 900, height: 1200 },
  { slug: "wrought-iron-chair", label: "Wrought-iron chair", category: "porch", featured: false, src: "/images/finds/wrought-iron-chair.webp", width: 900, height: 1200 },
  { slug: "drafting-table", label: "Old drafting table", category: "porch", featured: false, src: "/images/finds/drafting-table.webp", width: 900, height: 1200 },
  { slug: "pine-work-table", label: "Pine work table", category: "porch", featured: false, src: "/images/finds/pine-work-table.webp", width: 900, height: 1200 },
  { slug: "oriental-rug", label: "Oriental wool rug", category: "rugs", featured: false, src: "/images/finds/oriental-rug.webp", width: 900, height: 1200 },
  { slug: "braided-rug", label: "Round braided rug", category: "rugs", featured: false, src: "/images/finds/braided-rug.webp", width: 720, height: 960 },
  { slug: "braided-rug-2", label: "Braided rag rug", category: "rugs", featured: false, src: "/images/finds/braided-rug-2.webp", width: 900, height: 1200 },
];

