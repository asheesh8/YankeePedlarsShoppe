import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  ChatTextIcon,
  ClockIcon,
  MapPinIcon,
  NavigationArrowIcon,
  PhoneIcon,
  StarIcon,
} from "@phosphor-icons/react/ssr";
import { FilmHero } from "@/components/FilmHero";
import { HangTag } from "@/components/HangTag";
import { FindCard } from "@/components/FindCard";
import { CATEGORIES, FINDS } from "@/lib/finds";
import {
  BUY_STEPS,
  FEATURED_REVIEW,
  REVIEWS,
  SHOP,
  STORY,
  VISIT_NOTES,
} from "@/lib/site";

const container = "relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10";
const h2 = "font-display text-[clamp(2.2rem,4.4vw,3.6rem)] leading-[1.02] tracking-[-0.015em]";

/** Decorative watercolor (Higgsfield), positioned by the caller. */
function Botanical({
  src,
  width,
  height,
  className,
}: {
  src: string;
  width: number;
  height: number;
  className: string;
}) {
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

  return (
    <>
      <FilmHero
        src="/video/hero-film.mp4"
        poster="/video/hero-film-first.webp"
        lastFrame="/video/hero-film-last.webp"
      />

      {/* ── Intro on the mustard wall ───────────────────────────────── */}
      <section className="relative overflow-hidden bg-wall text-on-wall">
        <Botanical
          src="/images/vt/maple-branch.webp"
          width={1300}
          height={826}
          className="-top-10 -right-12 w-[10.5rem] -scale-x-100 opacity-95 sm:-top-6 sm:-right-16 sm:w-[22rem] lg:top-[-1.5rem] lg:-right-10 lg:w-[34rem]"
        />
        <Botanical
          src="/images/vt/falling-leaves.webp"
          width={1100}
          height={714}
          className="right-[24%] bottom-2 hidden w-[15rem] opacity-90 lg:block"
        />
        <div className={`${container} grid gap-8 py-14 lg:grid-cols-12 lg:items-end lg:py-20`}>
          <div className="relative z-10 lg:col-span-7">
            <h1 className="max-w-[14ch] font-display text-[clamp(2.9rem,6.4vw,5.6rem)] leading-[0.98] tracking-[-0.02em]">
              Packed to the gills since 1982.
            </h1>
            <p className="mt-5 max-w-[40ch] text-lg leading-relaxed sm:text-xl">
              Used furniture, antiques and vintage finds on River Road in Essex Junction. New pieces every week, and
              free local delivery.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={SHOP.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-fg px-6 py-3.5 font-semibold text-bg transition-transform active:translate-y-px"
              >
                <NavigationArrowIcon size={18} weight="bold" aria-hidden />
                Get directions
              </a>
              <a
                href="#finds"
                className="inline-flex items-center gap-2 border-2 border-on-wall px-6 py-3 font-semibold transition-colors hover:bg-on-wall hover:text-wall"
              >
                See what&apos;s in
              </a>
            </div>
          </div>
          <div className="relative z-10 lg:col-span-5 lg:justify-self-end">
            <HangTag tilt={-5} stringLength={26} className="[&_.hang-tag]:text-[1.8rem]">
              <span className="block leading-[0.95]">
                Open daily
                <br />
                noon to 5
              </span>
            </HangTag>
          </div>
        </div>
      </section>

      {/* ── Recent finds ─────────────────────────────────────────────── */}
      <section id="finds" className="relative scroll-mt-16 overflow-hidden py-16 lg:py-20">
        <Botanical
          src="/images/vt/birch-pine.webp"
          width={557}
          height={1100}
          className="-top-10 right-2 hidden w-[9rem] opacity-90 md:block lg:right-8 lg:w-[11rem]"
        />
        <div className={container}>
          <h2 className={`${h2} max-w-[16ch]`}>Recently on the floor</h2>
          <p className="mt-3 max-w-[52ch] text-lg text-muted">
            Real pieces from the last few weeks. Things go fast, so text us before you drive over.
          </p>

          <nav aria-label="Browse by category" className="mt-6">
            <ul className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
              {CATEGORIES.map((c) => (
                <li key={c.id} className="shrink-0">
                  <Link
                    href={`/finds?c=${c.id}`}
                    className="inline-flex border border-line bg-surface px-3.5 py-2 text-[0.9rem] font-semibold transition-colors hover:border-fg"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12 lg:overflow-visible lg:px-0 lg:pb-0 lg:[&>li:nth-child(4n+2)]:translate-y-10 lg:[&>li:nth-child(4n+4)]:translate-y-5">
            {featured.map((f, i) => (
              <li key={f.slug} className="w-[64vw] max-w-[17rem] shrink-0 snap-start lg:w-auto lg:max-w-none">
                <FindCard find={f} index={i} sizes="(min-width: 1024px) 22vw, 64vw" />
              </li>
            ))}
          </ul>

          <div className="mt-4 lg:mt-16">
            <Link
              href="/finds"
              className="inline-flex items-center gap-2 bg-accent px-7 py-4 font-semibold text-on-accent transition-colors hover:bg-accent-hover"
            >
              See all {FINDS.length} finds
              <ArrowRightIcon size={18} weight="bold" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Story ────────────────────────────────────────────────────── */}
      <section id="story" className="relative scroll-mt-16 border-t border-line pt-16 lg:pt-20">
        <div className={container}>
          <h2 className={`${h2} max-w-[20ch]`}>How a yard sale turned into a shop</h2>
          <ol className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory scroll-px-4 gap-6 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 lg:grid-cols-4 lg:gap-8">
            {STORY.map((c) => (
              <li key={c.marker} className="w-[78vw] max-w-[22rem] shrink-0 snap-start md:w-auto md:max-w-none">
                <div className="paper-pool relative aspect-[4/3]">
                  <Image src={c.art} alt={c.alt} fill sizes="(min-width: 1024px) 24vw, 78vw" className="object-contain" />
                </div>
                <p className="mt-3 font-display text-3xl leading-none text-accent">{c.marker}</p>
                <h3 className="mt-2 font-display text-2xl leading-tight">{c.title}</h3>
                <p className="mt-2 text-[0.97rem] leading-relaxed text-muted">{c.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-[60ch] text-sm text-muted">
            Watercolors are interpretations, not historical photos. The story is Linda&apos;s own, from the
            shop&apos;s Facebook page.
          </p>
        </div>
        {/* The Green Mountains run along the seam into the mustard section. */}
        <div aria-hidden className="pointer-events-none relative mt-6 aspect-[2000/346] max-h-[15rem] w-full select-none">
          <Image
            src="/images/vt/green-mountains.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-bottom"
          />
        </div>
      </section>

      {/* ── We buy ───────────────────────────────────────────────────── */}
      <section id="we-buy" className="relative scroll-mt-16 overflow-hidden bg-wall py-16 text-on-wall lg:py-20">
        <div className={`${container} grid items-center gap-10 lg:grid-cols-12`}>
          <div className="relative z-10 lg:col-span-6">
            <HangTag leopard tilt={-6} stringLength={0} className="mb-5 [&_.hang-tag]:text-[1.9rem]">
              Always buying!
            </HangTag>
            <h2 className={`${h2} max-w-[16ch]`}>Cleaning out a house? We pay cash and haul it away.</h2>
            <p className="mt-4 max-w-[46ch] text-lg text-on-wall-muted">
              Moving, downsizing or settling an estate. Linda buys furniture, antiques and good smalls.
            </p>

            <ol className="mt-7 grid gap-4 sm:mt-8 sm:grid-cols-3 sm:gap-5">
              {BUY_STEPS.map((s, i) => (
                <li key={s.title} className="flex gap-3 border-t-2 border-on-wall pt-3 sm:block">
                  <span className="font-display text-2xl leading-none">{i + 1}</span>
                  <div>
                    <p className="font-semibold sm:mt-2">{s.title}</p>
                    <p className="mt-1 text-[0.93rem] leading-snug text-on-wall-muted">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
              <a
                href={`${SHOP.smsHref}?&body=${encodeURIComponent("Hi Linda! I have some furniture I'd like to sell. Here are a few photos:")}`}
                className="inline-flex items-center gap-2 bg-fg px-7 py-4 font-semibold text-bg transition-transform active:translate-y-px"
              >
                <ChatTextIcon size={20} weight="bold" aria-hidden />
                Text us photos
              </a>
              <p className="text-[0.95rem] text-on-wall-muted">
                or call{" "}
                <a href={SHOP.phoneHref} className="font-semibold text-on-wall underline underline-offset-4">
                  {SHOP.phone}
                </a>
              </p>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <Image
              src="/images/art/truck.webp"
              alt="Watercolor of an old blue pickup on a Vermont back road in fall, loaded with a dresser, a rocking chair, a lamp and a rolled rug."
              width={1400}
              height={1045}
              sizes="(min-width: 1024px) 44vw, 92vw"
              className="relative mx-auto h-auto w-full max-w-[38rem]"
            />
          </div>
        </div>
      </section>

      {/* ── Reviews ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-16 lg:py-20">
        <div className={`${container} grid items-center gap-8 lg:grid-cols-12`}>
          <div className="lg:col-span-8">
            <a
              href={SHOP.reviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[0.95rem] font-semibold text-muted hover:text-fg"
            >
              <span className="flex text-mustard" aria-hidden>
                {[0, 1, 2, 3, 4].map((i) => (
                  <StarIcon key={i} size={18} weight={i < 4 ? "fill" : "duotone"} />
                ))}
              </span>
              {SHOP.rating} on Google from {SHOP.reviewCount} reviews
            </a>
            <figure className="mt-6">
              <blockquote className="max-w-[30ch] font-display text-[clamp(1.8rem,3.3vw,2.8rem)] leading-[1.12] tracking-[-0.01em]">
                &ldquo;{FEATURED_REVIEW.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-muted">
                {FEATURED_REVIEW.name}, {FEATURED_REVIEW.when}
              </figcaption>
            </figure>
          </div>
          <div className="hidden lg:col-span-4 lg:block">
            <Image
              src="/images/vt/syrup.webp"
              alt=""
              aria-hidden
              width={900}
              height={871}
              sizes="26vw"
              className="ml-auto h-auto w-[19rem]"
            />
          </div>
        </div>

        <ul
          className="no-scrollbar mt-10 flex snap-x snap-mandatory scroll-px-4 gap-4 overflow-x-auto px-4 pb-4 sm:scroll-px-6 sm:px-6 lg:scroll-px-[max(2.5rem,calc((100vw-1400px)/2+2.5rem))] lg:px-[max(2.5rem,calc((100vw-1400px)/2+2.5rem))]"
          aria-label="More Google reviews"
        >
          {REVIEWS.map((r) => (
            <li key={r.name} className="w-[min(80vw,21rem)] shrink-0 snap-start border border-line bg-surface p-5">
              <blockquote className="leading-relaxed">&ldquo;{r.quote}&rdquo;</blockquote>
              <p className="mt-3 text-sm text-muted">
                {r.name}, {r.when}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Visit ────────────────────────────────────────────────────── */}
      <section id="visit" className="relative scroll-mt-16 overflow-hidden border-t border-line py-16 lg:py-20">
        <Botanical
          src="/images/vt/sap-buckets.webp"
          width={592}
          height={900}
          className="bottom-0 -left-6 hidden w-[9rem] opacity-95 xl:block"
        />
        <div className={`${container} grid gap-10 lg:grid-cols-12`}>
          <div className="relative z-10 lg:col-span-5 xl:pl-24">
            <h2 className={h2}>Come poke around</h2>
            <dl className="mt-6 space-y-4 text-lg">
              <div className="flex gap-3">
                <dt className="sr-only">Address</dt>
                <MapPinIcon size={24} className="mt-1 shrink-0 text-accent" aria-hidden />
                <dd>
                  {SHOP.street}, {SHOP.city}, {SHOP.state} {SHOP.zip}
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="sr-only">Hours</dt>
                <ClockIcon size={24} className="mt-1 shrink-0 text-accent" aria-hidden />
                <dd>{SHOP.hours}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="sr-only">Phone</dt>
                <PhoneIcon size={24} className="mt-1 shrink-0 text-accent" aria-hidden />
                <dd>
                  <a href={SHOP.phoneHref} className="font-semibold underline underline-offset-4">
                    {SHOP.phone}
                  </a>
                  <span className="text-muted"> (call or text)</span>
                </dd>
              </div>
            </dl>
            <a
              href={SHOP.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 bg-fg px-6 py-3.5 font-semibold text-bg transition-transform active:translate-y-px"
            >
              <NavigationArrowIcon size={18} weight="bold" aria-hidden />
              Get directions
            </a>
            <ul className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {VISIT_NOTES.map((n) => (
                <li key={n.title}>
                  <p className="font-semibold">{n.title}</p>
                  <p className="mt-1 text-[0.95rem] leading-snug text-muted">{n.body}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 lg:col-span-7">
            <div className="picture-frame">
              <div className="mat">
                <iframe
                  title="Map to Yankee Pedlars' Shoppe, 23 River Rd, Essex Junction"
                  src={SHOP.mapsEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="block aspect-[16/11] w-full border-0"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
