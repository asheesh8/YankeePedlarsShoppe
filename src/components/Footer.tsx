import Link from "next/link";
import { FacebookLogoIcon, InstagramLogoIcon } from "@phosphor-icons/react/ssr";
import { SHOP } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-pine text-on-pine">
      <div className="mx-auto grid max-w-[1360px] gap-10 px-5 pt-16 pb-12 sm:px-8 md:grid-cols-12 lg:px-12">
        <div className="md:col-span-6">
          <p className="font-display text-[2.6rem] leading-none font-semibold sm:text-5xl">{SHOP.name}</p>
          <p className="mt-4 max-w-[40ch] text-on-pine-muted">
            Used furniture, antiques and vintage finds. Family run in Essex Junction since {SHOP.founded}.
          </p>
        </div>

        <div className="text-[0.95rem] md:col-span-3">
          <p className="font-medium">Visit</p>
          <address className="mt-2 text-on-pine-muted not-italic">
            {SHOP.street}
            <br />
            {SHOP.city}, {SHOP.state} {SHOP.zip}
          </address>
          <p className="mt-2 text-on-pine-muted">{SHOP.hours}</p>
          <a href={SHOP.phoneHref} className="mt-2 inline-block underline underline-offset-4">
            {SHOP.phone}
          </a>
        </div>

        <div className="text-[0.95rem] md:col-span-3">
          <p className="font-medium">Around the shop</p>
          <ul className="mt-2 space-y-1 text-on-pine-muted">
            <li>
              <Link href="/finds" className="hover:text-on-pine">
                Recent finds
              </Link>
            </li>
            <li>
              <Link href="/#we-buy" className="hover:text-on-pine">
                Sell us your furniture
              </Link>
            </li>
          </ul>
          <div className="mt-4 flex gap-2">
            <a
              href={SHOP.facebookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Yankee Pedlars' Shoppe on Facebook"
              className="inline-flex size-11 items-center justify-center border border-on-pine/25 hover:border-on-pine"
            >
              <FacebookLogoIcon size={20} aria-hidden />
            </a>
            <a
              href={SHOP.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Yankee Pedlars' Shoppe on Instagram"
              className="inline-flex size-11 items-center justify-center border border-on-pine/25 hover:border-on-pine"
            >
              <InstagramLogoIcon size={20} aria-hidden />
            </a>
          </div>
        </div>
      </div>
      <p className="mx-auto max-w-[1360px] border-t border-on-pine/15 px-5 py-6 text-sm text-on-pine-muted sm:px-8 lg:px-12">
        &copy; {new Date().getFullYear()} {SHOP.name}, {SHOP.city}, Vermont
      </p>
    </footer>
  );
}
