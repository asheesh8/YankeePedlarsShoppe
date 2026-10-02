"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ListIcon, PhoneIcon, XIcon } from "@phosphor-icons/react";
import { SHOP } from "@/lib/site";

const LINKS = [
  { href: "/finds", label: "Finds" },
  { href: "/#story", label: "Our story" },
  { href: "/#we-buy", label: "We buy" },
  { href: "/#visit", label: "Visit" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-md">
      <nav
        aria-label="Main"
        className="mx-auto flex h-[4.25rem] max-w-[1360px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12"
      >
        <Link
          href="/"
          className="font-display text-[1.45rem] leading-none font-semibold whitespace-nowrap min-[400px]:text-[1.65rem]"
          onClick={() => setOpen(false)}
        >
          {SHOP.name}
        </Link>

        <ul className="hidden items-center gap-9 text-[0.95rem] md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-muted transition-colors hover:text-ink">
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={SHOP.phoneHref}
              className="inline-flex items-center gap-2 bg-pine px-4 py-2.5 text-[0.92rem] font-medium text-on-pine transition-colors hover:bg-pine-deep"
            >
              <PhoneIcon size={16} weight="bold" aria-hidden />
              {SHOP.phone}
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="-mr-2 inline-flex size-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <XIcon size={24} aria-hidden /> : <ListIcon size={24} aria-hidden />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line md:hidden">
          <ul className="flex flex-col px-5 py-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="block py-2.5 font-display text-3xl" onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
