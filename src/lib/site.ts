/**
 * Single source of truth for everything the site says.
 *
 * Sources: the shop's Facebook page (bio, featured "Introducing us" post),
 * its Instagram bio, and the Google Business listing. Reviews are real,
 * published Google reviews, trimmed to a sentence or two. Anything the
 * client still needs to confirm is marked CONFIRM: and collected in
 * ../../CLIENT-QUESTIONS.md.
 */

export const SHOP = {
  name: "Yankee Pedlars' Shoppe",
  phone: "(802) 238-0258",
  phoneHref: "tel:+18022380258",
  smsHref: "sms:+18022380258",
  street: "23 River Rd",
  city: "Essex Junction",
  state: "VT",
  zip: "05452",
  address: "23 River Rd, Essex Junction, VT 05452",
  /** CONFIRM: Instagram says "open every day", Google shows a noon opening, a
   *  Dec 2025 listing shows 12 to 5. Ask Linda before launch. */
  hours: "Open daily, noon to 5",
  hoursShort: "Daily 12-5",
  openingHours: "Mo-Su 12:00-17:00",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Yankee+Pedlars%27+Shoppe+23+River+Rd+Essex+Junction+VT+05452",
  mapsEmbed: "https://www.google.com/maps?q=23+River+Rd,+Essex+Junction,+VT+05452&output=embed",
  reviewsUrl: "https://www.google.com/search?q=Yankee+Pedlars%27+Shoppe+Essex+Junction+reviews",
  facebookUrl: "https://www.facebook.com/p/The-Yankee-Pedlars-Shoppe-100063745925215/",
  instagramUrl: "https://www.instagram.com/yankeepedlarsshoppe/",
  rating: 4.3,
  reviewCount: 45,
  founded: 1982,
} as const;

/** Prefilled text for "ask about this piece" links. */
export function smsAbout(label: string) {
  const body = `Hi! Is the ${label.toLowerCase()} from your website still available?`;
  return `${SHOP.smsHref}?&body=${encodeURIComponent(body)}`;
}

/* --------------------------------------------------------------- story --- */

export type Chapter = {
  marker: string;
  title: string;
  body: string;
  art: string;
  alt: string;
};

/** Retold from Linda's "Introducing us" post on the shop's Facebook page. */
export const STORY: Chapter[] = [
  {
    marker: "1982",
    title: "A yard sale on Pearl Street",
    body: "Linda and her mom started holding yard sales for fun, right out of their own home on Pearl Street in Essex Junction. It grew wild, and it grew fast. They built an addition onto the back of the house to keep up.",
    art: "/images/art/1982-yard-sale.webp",
    alt: "Watercolor of a yard sale on a lawn in front of a small white house: a table of china, a rocking chair, a dresser and a quilt.",
  },
  {
    marker: "2004",
    title: "The second Yankee Pedlars",
    body: "Linda bought the storefront at 23 River Road. It filled up quickly as people brought things in to sell, and she went out to homes going on the market and to storage units to find more.",
    art: "/images/art/2004-river-rd.webp",
    alt: "Watercolor of a white farmhouse-style shop with a long front porch full of chairs and dressers, a yellow roadside sign and maple trees.",
  },
  {
    marker: "Then",
    title: "John builds more room",
    body: "Running out of space, Linda's husband John built a huge addition and an upstairs. Her daughter Erin became a familiar face on the floor while Linda was out buying furniture.",
    art: "/images/art/addition.webp",
    alt: "Watercolor of a new wooden addition being framed onto the back of a white clapboard building, with lumber, sawhorses and a dresser waiting on the grass.",
  },
  {
    marker: "Now",
    title: "Three generations on the floor",
    body: "Granddaughter McKinley joined a few years back and is there every day. Stop in and you might meet the shop's pack of golden doodles, too.",
    art: "/images/art/doodles.webp",
    alt: "Watercolor of three golden doodles napping on an oriental rug beside a floral wingback chair and a stained-glass lamp.",
  },
];

/* ------------------------------------------------------------- we buy --- */

export const BUY_STEPS = [
  {
    title: "Text us photos",
    body: "A few pictures of what you have and a rough idea of where it is.",
  },
  {
    title: "We come take a look",
    body: "Linda buys from homes going on the market, estates and storage units.",
  },
  {
    title: "Cash, and we haul it",
    body: "We pay cash and pick it up, so you don't have to move a thing.",
  },
] as const;

/* ------------------------------------------------------------- reviews --- */

export type Review = { quote: string; name: string; when: string };

/** Verbatim excerpts from published Google reviews. Family members' reviews
 *  are deliberately left out. */
export const FEATURED_REVIEW: Review = {
  quote: "I just love this shop so much. They have a beautiful and always changing variety of antiques and furniture.",
  name: "Caitlin Quinn",
  when: "Google review",
};

export const REVIEWS: Review[] = [
  {
    quote:
      "Packed with interesting and functional furniture at affordable prices. Better quality than what I found when I shopped for new at other stores!",
    name: "Carrie M.",
    when: "Google review",
  },
  {
    quote:
      "I got a vintage, velvet pink sofa that looks amazing on my screened in porch. They also delivered the sofa and helped me load it in.",
    name: "Meghan Miller",
    when: "Google review",
  },
  {
    quote: "Linda is very pleasant and gives great deals and delivers if needed!",
    name: "M M",
    when: "Google review",
  },
  {
    quote: "It is so fun to walk through all of the treasures there. Furniture, art, collectibles, rugs, and more.",
    name: "Raya Lurvey",
    when: "Google review",
  },
  {
    quote: "Bought a wonderful leather recliner at an awesome price.",
    name: "Holly LaFrance",
    when: "Google review",
  },
  {
    quote: "This place is amazing, I recommend it to my friends all the time.",
    name: "Abby Bessette",
    when: "Google review",
  },
];

/* --------------------------------------------------------------- visit --- */

export const VISIT_NOTES = [
  {
    title: "Free local delivery",
    body: "Found something too big for the car? We'll bring it to you.",
  },
  {
    title: "Leave your coat in the car",
    body: "A regular's tip. It's packed in here, and some aisles are narrow.",
  },
  {
    title: "Text before you drive over",
    body: "Pieces sell fast. Send us a photo from the site and we'll check.",
  },
  {
    title: "Park right out front",
    body: "There's a gravel lot by the sign. Check the porch and lawn on your way in.",
  },
] as const;
