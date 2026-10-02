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
    <header className="sticky top-0 z-40 bg-wall text-on-wall">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-10"
      >
        <Link href="/" className="font-display text-[1.15rem] leading-none tracking-[-0.01em] whitespace-nowrap min-[380px]:text-[1.4rem]" onClick={() => setOpen(false)}>
          {SHOP.name}
        </Link>

        <ul className="hidden items-center gap-8 text-[0.95rem] font-medium md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="underline-offset-[6px] decoration-2 hover:underline">
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={SHOP.phoneHref}
              className="inline-flex items-center gap-2 bg-fg px-4 py-2.5 text-[0.95rem] font-semibold text-bg transition-transform active:translate-y-px"
            >
              <PhoneIcon size={18} weight="bold" aria-hidden />
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
          {open ? <XIcon size={26} aria-hidden /> : <ListIcon size={26} aria-hidden />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-on-wall/10 md:hidden">
          <ul className="flex flex-col px-4 py-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block py-3 font-display text-3xl"
                  onClick={() => setOpen(false)}
                >
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
