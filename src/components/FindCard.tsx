import Image from "next/image";
import { smsAbout } from "@/lib/site";
import { CATEGORIES, type Find } from "@/lib/finds";

const CATEGORY_LABEL = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.label]));

/** One catalog entry: photograph, italic caption, category and a text link. */
export function FindCard({ find, sizes }: { find: Find; sizes: string }) {
  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-linen">
        <Image
          src={find.src}
          alt={find.label}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        />
      </div>
      <h3 className="caption mt-3">{find.label}</h3>
      <div className="mt-1 flex items-baseline justify-between gap-3 text-[0.85rem]">
        <span className="text-muted">{CATEGORY_LABEL[find.category]}</span>
        <a
          href={smsAbout(find.label)}
          className="inline-flex min-h-11 items-center font-medium text-brick underline-offset-4 hover:underline sm:min-h-0"
        >
          Ask about it<span className="sr-only">: {find.label}</span>
        </a>
      </div>
    </article>
  );
}
