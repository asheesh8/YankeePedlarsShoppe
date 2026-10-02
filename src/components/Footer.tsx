import Image from "next/image";
import Link from "next/link";
import { FacebookLogoIcon, InstagramLogoIcon } from "@phosphor-icons/react/ssr";
import { SHOP } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line">
      <Image
        src="/images/vt/sprig-row.webp"
        alt=""
        aria-hidden
        width={1200}
        height={387}
        sizes="420px"
        className="botanical -top-5 right-4 h-auto w-[16rem] sm:w-[22rem] lg:right-16"
      />
      <Image
        src="/images/vt/sugar-shack.webp"
        alt=""
        aria-hidden
        width={1100}
        height={814}
        sizes="300px"
        className="botanical right-6 bottom-4 hidden h-auto w-[11rem] opacity-90 xl:block 2xl:right-[calc((100vw-1400px)/2+2.5rem)] 2xl:w-[13rem]"
      />
      <div className="relative mx-auto grid max-w-[1400px] gap-10 px-4 pt-20 pb-14 sm:px-6 md:grid-cols-12 lg:px-10">
        <div className="md:col-span-6 lg:col-span-5">
          <p className="font-display text-4xl leading-none sm:text-5xl">{SHOP.name}</p>
          <p className="mt-4 max-w-[38ch] text-muted">
            Used furniture, antiques and vintage finds. Family run in Essex Junction since {SHOP.founded}.
          </p>
        </div>

        <div className="text-[0.95rem] md:col-span-3">
          <p className="font-semibold">Visit</p>
          <address className="mt-2 not-italic text-muted">
            {SHOP.street}
            <br />
            {SHOP.city}, {SHOP.state} {SHOP.zip}
          </address>
          <p className="mt-2 text-muted">{SHOP.hours}</p>
          <a href={SHOP.phoneHref} className="mt-2 inline-block font-semibold text-accent">
            {SHOP.phone}
          </a>
        </div>

        <div className="text-[0.95rem] md:col-span-3 lg:col-span-2">
          <p className="font-semibold">Around the shop</p>
          <ul className="mt-2 space-y-1 text-muted">
            <li>
              <Link href="/finds" className="hover:text-fg">Recent finds</Link>
            </li>
            <li>
              <Link href="/#we-buy" className="hover:text-fg">Sell us your furniture</Link>
            </li>
          </ul>
          <div className="mt-4 flex gap-2">
            <a
              href={SHOP.facebookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Yankee Pedlars' Shoppe on Facebook"
              className="inline-flex size-11 items-center justify-center border border-line hover:border-fg"
            >
              <FacebookLogoIcon size={22} aria-hidden />
            </a>
            <a
              href={SHOP.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Yankee Pedlars' Shoppe on Instagram"
              className="inline-flex size-11 items-center justify-center border border-line hover:border-fg"
            >
              <InstagramLogoIcon size={22} aria-hidden />
            </a>
          </div>
        </div>
      </div>
      <p className="relative mx-auto max-w-[1400px] px-4 pb-8 text-sm text-muted sm:px-6 lg:px-10">
        &copy; {new Date().getFullYear()} {SHOP.name}, {SHOP.city}, Vermont
      </p>
    </footer>
  );
}
