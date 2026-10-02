import Image from "next/image";
import Link from "next/link";
import {
  ChatTextIcon,
  ClockIcon,
  HandCoinsIcon,
  MapPinIcon,
  NavigationArrowIcon,
  PhoneIcon,
  StarIcon,
  TruckIcon,
} from "@phosphor-icons/react/ssr";
import { FindCard } from "@/components/FindCard";
import { InlineFilm } from "@/components/InlineFilm";
import { CATEGORIES, FINDS } from "@/lib/finds";
import { BUY_STEPS, FEATURED_REVIEW, REVIEWS, SHOP, STORY, VISIT_NOTES } from "@/lib/site";

const container = "relative mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-12";
const h2 = "font-display text-[clamp(2.4rem,4.6vw,4rem)] leading-[1.02] font-medium tracking-[-0.01em]";
const buttonPine =
  "inline-flex items-center gap-2 bg-pine px-6 py-3.5 font-medium text-on-pine transition-colors hover:bg-pine-deep active:translate-y-px";

/** The hero plate: three of the shop's own photographs, captioned. */
const PLATE = [
  {
    src: "/images/shop/beam-room.webp",
    w: 1050,
    h: 1400,
    caption: "Under the beams",
    alt: "Inside the shop: a walnut sideboard and an old steamer trunk on a red kilim rug, under pine beams strung with lights.",
    cell: "col-span-2 aspect-[4/3] sm:aspect-auto sm:col-span-7 sm:row-span-2",
  },
  {
    src: "/images/shop/porch.webp",
    w: 1050,
    h: 1400,
    caption: "Out on the porch",
    alt: "The shop's porch: a painted dresser, a blue table lamp and a dress form among chairs and side tables.",
    cell: "aspect-square sm:aspect-auto sm:col-span-5",
  },
  {
    src: "/images/shop/sign-golden-hour.webp",
    w: 1050,
    h: 1400,
    caption: "Out front on River Road",
    alt: "The shop's yellow roadside sign under a maple tree at sunset.",
    cell: "aspect-square sm:aspect-auto sm:col-span-5",
  },
];

const FACTS = [
  { icon: StarIcon, text: `${SHOP.rating} on Google from ${SHOP.reviewCount} reviews`, href: SHOP.reviewsUrl },
  { icon: TruckIcon, text: "Free local delivery" },
  { icon: HandCoinsIcon, text: "We buy furniture, cash and pickup" },
  { icon: ClockIcon, text: SHOP.hours },
];

function Botanical({ src, width, height, className }: { src: string; width: number; height: number; className: string }) {
  return (
    <Image
      src={src}
      alt=""
      aria-hidden
      width={width}
      height={height}
      sizes={`${Math.round(width / 2)}px`}
      className={`botanical h-auto ${className}`}
    />
  );
}

export default function HomePage() {
  const featured = FINDS.filter((f) => f.featured).slice(0, 8);
  const quotes = REVIEWS.slice(0, 3);

  return (
    <>
      {/* ── Hero: headline and a plate of real photographs ────────────── */}
      <section className="pt-10 pb-12 sm:pt-14 lg:pt-16 lg:pb-16">
        <div className={`${container} grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14`}>
          <div className="lg:col-span-5">
            <p className="text-[0.95rem] text-muted">River Road, Essex Junction, Vermont</p>
            <h1 className="mt-4 max-w-[15ch] font-display text-[clamp(3.1rem,6vw,5.6rem)] leading-[0.98] font-medium tracking-[-0.015em]">
              Fine used furniture and antiques, since 1982.
            </h1>
            <p className="mt-6 max-w-[38ch] text-lg leading-relaxed text-muted">
              Three generations of Vermont pickers and a shop packed to the rafters. New pieces every week, and free
              local delivery.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a href={SHOP.mapsUrl} target="_blank" rel="noreferrer" className={buttonPine}>
                <NavigationArrowIcon size={18} aria-hidden />
                Get directions
              </a>
              <Link href="#finds" className="font-medium underline decoration-line decoration-2 underline-offset-[6px] hover:decoration-ink">
                Browse recent finds
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:h-[min(72vh,40rem)] sm:grid-cols-12 sm:grid-rows-2 sm:gap-4 lg:col-span-7">
            {PLATE.map((p, i) => (
              <figure
                key={p.src}
                className={`plate-in m-0 flex min-h-0 flex-col ${p.cell}`}
                style={{ "--d": `${120 + i * 140}ms` } as React.CSSProperties}
              >
                <div className="relative min-h-0 flex-1 overflow-hidden bg-linen">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    preload={i === 0}
                    sizes={i === 0 ? "(min-width: 1024px) 34vw, 100vw" : "(min-width: 1024px) 24vw, 50vw"}
                    className="object-cover"
                  />
                </div>
                <figcaption className="caption mt-2 text-[1.05rem] text-muted sm:text-[1.15rem]">{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Facts ────────────────────────────────────────────────────── */}
      <section aria-label="At a glance" className="border-y border-line">
        <ul className={`${container} grid grid-cols-2 gap-x-6 gap-y-4 py-6 text-[0.95rem] lg:grid-cols-4`}>
          {FACTS.map(({ icon: Icon, text, href }) => (
            <li key={text} className="flex items-center gap-3">
              <Icon size={22} className="shrink-0 text-brick" aria-hidden />
              {href ? (
                <a href={href} target="_blank" rel="noreferrer" className="hover:underline underline-offset-4">
                  {text}
                </a>
              ) : (
                <span>{text}</span>
              )}
            </li>
          ))}
        </ul>
      </section>

      {/* ── Recent finds ─────────────────────────────────────────────── */}
      <section id="finds" className="relative scroll-mt-20 overflow-hidden py-16 lg:py-24">
        <Botanical
          src="/images/vt/birch-pine.webp"
          width={557}
          height={1100}
          className="-top-12 right-4 hidden w-[8rem] opacity-90 lg:block xl:right-10"
        />
        <div className={container}>
          <h2 className={h2}>Recently on the floor</h2>
          <p className="mt-3 max-w-[54ch] text-lg text-muted">
            Real pieces from the last few weeks. Things sell fast, so text us before you drive over.
          </p>
          <nav aria-label="Browse by category" className="mt-6">
            <ul className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
              {CATEGORIES.map((c) => (
                <li key={c.id} className="shrink-0">
                  <Link
                    href={`/finds?c=${c.id}`}
                    className="inline-flex border border-line px-3.5 py-1.5 text-[0.9rem] text-muted transition-colors hover:border-ink hover:text-ink"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-14 max-lg:[&>li:nth-child(n+7)]:hidden">
            {featured.map((f) => (
              <li key={f.slug}>
                <FindCard find={f} sizes="(min-width: 1024px) 22vw, 46vw" />
              </li>
            ))}
          </ul>

          <Link
            href="/finds"
            className="mt-12 inline-block font-medium underline decoration-line decoration-2 underline-offset-[6px] hover:decoration-ink"
          >
            See all {FINDS.length} finds
          </Link>
        </div>
      </section>

      {/* ── Story ────────────────────────────────────────────────────── */}
      <section id="story" className="scroll-mt-20 border-t border-line py-16 lg:py-24">
        <div className={container}>
          <h2 className={`${h2} max-w-[18ch]`}>Three generations of Vermont pickers</h2>
          <ol className="no-scrollbar -mx-5 mt-12 flex snap-x snap-mandatory scroll-px-5 gap-6 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-4 lg:gap-10">
            {STORY.map((c) => (
              <li key={c.marker} className="w-[78vw] max-w-[22rem] shrink-0 snap-start md:w-auto md:max-w-none">
                <div className="relative aspect-[4/3]">
                  <Image src={c.art} alt={c.alt} fill sizes="(min-width: 1024px) 24vw, 78vw" className="object-contain" />
                </div>
                <p className="mt-4 font-display text-2xl text-brick italic">{c.marker}</p>
                <h3 className="mt-1 font-display text-[1.75rem] leading-tight font-medium">{c.title}</h3>
                <p className="mt-2 text-[0.97rem] leading-relaxed text-muted">{c.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-muted">
            Watercolors are interpretations, not historical photos. The story is Linda&apos;s own, from the
            shop&apos;s Facebook page.
          </p>
        </div>
      </section>

      {/* ── We buy ───────────────────────────────────────────────────── */}
      <section id="we-buy" className="scroll-mt-20 overflow-hidden bg-pine py-16 text-on-pine lg:py-24">
        <div className={`${container} grid items-center gap-12 lg:grid-cols-12`}>
          <div className="lg:col-span-6">
            <p className="font-display text-2xl text-on-pine-muted italic">Always buying</p>
            <h2 className={`${h2} mt-2 max-w-[16ch]`}>Cleaning out a house? We pay cash and haul it away.</h2>
            <p className="mt-5 max-w-[46ch] text-lg text-on-pine-muted">
              Moving, downsizing or settling an estate. Linda buys furniture, antiques and good smalls.
            </p>
            <ol className="mt-10 grid gap-6 sm:grid-cols-3 lg:grid-cols-1 lg:gap-4 xl:grid-cols-3 xl:gap-6">
              {BUY_STEPS.map((s, i) => (
                <li key={s.title} className="flex gap-3 border-t border-on-pine/25 pt-4 sm:block lg:flex xl:block">
                  <span className="font-display text-3xl leading-none italic">{i + 1}</span>
                  <div>
                    <p className="font-medium sm:mt-3 lg:mt-0 xl:mt-3">{s.title}</p>
                    <p className="mt-1 text-[0.93rem] leading-snug text-on-pine-muted">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={`${SHOP.smsHref}?&body=${encodeURIComponent("Hi Linda! I have some furniture I'd like to sell. Here are a few photos:")}`}
                className="inline-flex items-center gap-2 bg-on-pine px-6 py-3.5 font-medium text-pine transition-colors hover:bg-white active:translate-y-px"
              >
                <ChatTextIcon size={19} aria-hidden />
                Text us photos
              </a>
              <a href={SHOP.phoneHref} className="text-on-pine-muted underline underline-offset-4 hover:text-on-pine">
                or call {SHOP.phone}
              </a>
            </div>
          </div>
          <div className="lg:col-span-6">
            <Image
              src="/images/vt/truck.webp"
              alt="Watercolor of an old blue pickup loaded with a dresser, a rocking chair, a lamp and a rolled rug."
              width={1300}
              height={858}
              sizes="(min-width: 1024px) 44vw, 92vw"
              className="mx-auto h-auto w-full max-w-[36rem]"
            />
          </div>
        </div>
      </section>

      {/* ── Reviews ──────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className={container}>
          <figure className="mx-auto max-w-[44rem] text-center">
            <blockquote className="font-display text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.15] font-medium italic">
              &ldquo;{FEATURED_REVIEW.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-muted">
              {FEATURED_REVIEW.name}, {FEATURED_REVIEW.when}
            </figcaption>
          </figure>
          <ul className="mt-14 grid gap-8 md:grid-cols-3 md:gap-0 md:divide-x md:divide-line">
            {quotes.map((r) => (
              <li key={r.name} className="md:px-8 md:first:pl-0 md:last:pr-0">
                <blockquote className="leading-relaxed">&ldquo;{r.quote}&rdquo;</blockquote>
                <p className="mt-3 text-sm text-muted">
                  {r.name}, {r.when}
                </p>
              </li>
            ))}
          </ul>
          <a
            href={SHOP.reviewsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-block font-medium underline decoration-line decoration-2 underline-offset-[6px] hover:decoration-ink"
          >
            Read all {SHOP.reviewCount} reviews on Google
          </a>
        </div>
      </section>

      {/* ── Visit ────────────────────────────────────────────────────── */}
      <section id="visit" className="scroll-mt-20 border-t border-line pt-16 lg:pt-24">
        <div className={`${container} grid gap-12 lg:grid-cols-12`}>
          <div className="lg:col-span-5">
            <h2 className={h2}>Come poke around</h2>
            <dl className="mt-7 space-y-4 text-lg">
              <div className="flex gap-3">
                <dt className="sr-only">Address</dt>
                <MapPinIcon size={22} className="mt-1 shrink-0 text-brick" aria-hidden />
                <dd>
                  {SHOP.street}, {SHOP.city}, {SHOP.state} {SHOP.zip}
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="sr-only">Hours</dt>
                <ClockIcon size={22} className="mt-1 shrink-0 text-brick" aria-hidden />
                <dd>{SHOP.hours}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="sr-only">Phone</dt>
                <PhoneIcon size={22} className="mt-1 shrink-0 text-brick" aria-hidden />
                <dd>
                  <a href={SHOP.phoneHref} className="underline underline-offset-4">
                    {SHOP.phone}
                  </a>
                  <span className="text-muted"> (call or text)</span>
                </dd>
              </div>
            </dl>
            <a href={SHOP.mapsUrl} target="_blank" rel="noreferrer" className={`${buttonPine} mt-8`}>
              <NavigationArrowIcon size={18} aria-hidden />
              Get directions
            </a>
            <ul className="mt-12 grid gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-2">
              {VISIT_NOTES.map((n) => (
                <li key={n.title}>
                  <p className="font-medium">{n.title}</p>
                  <p className="mt-1 text-[0.95rem] leading-snug text-muted">{n.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8 lg:col-span-7">
            <InlineFilm
              src="/video/drive-in.mp4"
              poster="/video/drive-in-poster.webp"
              label="A short film: driving along River Road and pulling in toward the shop's porch."
              caption="Pulling in off River Road"
            />
            <iframe
              title="Map to Yankee Pedlars' Shoppe, 23 River Rd, Essex Junction"
              src={SHOP.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block aspect-[21/9] w-full border border-line"
            />
          </div>
        </div>

        {/* The Green Mountains run down into the footer. */}
        <div aria-hidden className="pointer-events-none relative mt-16 aspect-[2000/346] max-h-[14rem] w-full bg-[linear-gradient(to_bottom,transparent_88%,var(--pine)_88%)] select-none">
          <Image src="/images/vt/green-mountains.webp" alt="" fill sizes="100vw" className="object-cover object-bottom" />
        </div>
      </section>
    </>
  );
}
