import Image from "next/image";
import { ChatTextIcon } from "@phosphor-icons/react/ssr";
import { HangTag } from "@/components/HangTag";
import { smsAbout } from "@/lib/site";
import type { Find } from "@/lib/finds";

const TILTS = [-5, 3, -2, 4, -3, 2];

export function FindCard({ find, index, sizes }: { find: Find; index: number; sizes: string }) {
  return (
    <article className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-surface shadow-card">
        <Image
          src={find.src}
          alt={find.label}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="-mt-5 ml-3 sm:ml-4">
        <HangTag tilt={TILTS[index % TILTS.length]}>
          <h3 className="font-hand text-[1.4rem] font-normal leading-[1.05] sm:text-[1.55rem]">{find.label}</h3>
        </HangTag>
      </div>
      <a
        href={smsAbout(find.label)}
        className="mt-2 inline-flex min-h-11 items-center gap-1.5 text-[0.9rem] font-semibold text-accent underline-offset-4 hover:underline"
      >
        <ChatTextIcon size={18} weight="bold" aria-hidden />
        Ask if it&apos;s still here
        <span className="sr-only">: {find.label}</span>
      </a>
    </article>
  );
}
