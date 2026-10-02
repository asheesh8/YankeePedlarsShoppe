"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { CATEGORIES, type CategoryId, type Find } from "@/lib/finds";

type Filter = CategoryId | "all";

const isCategory = (c: string | null): c is CategoryId => CATEGORIES.some((x) => x.id === c);

/**
 * Category filter over the finds grid. Cards are rendered on the server and
 * passed in keyed by slug, so this component only decides which ones show.
 * The choice lives in `?c=` so a filtered view can be shared.
 */
export function FindsBrowser({
  finds,
  cards,
}: {
  finds: Pick<Find, "slug" | "category">[];
  cards: Record<string, React.ReactNode>;
}) {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const c = params.get("c");
  const filter: Filter = isCategory(c) ? c : "all";

  const choose = (f: Filter) => {
    router.replace(f === "all" ? pathname : `${pathname}?c=${f}`, { scroll: false });
  };

  const shown = finds.filter((f) => filter === "all" || f.category === filter);
  const options: { id: Filter; label: string }[] = [{ id: "all", label: "Everything" }, ...CATEGORIES];

  return (
    <>
      <div
        role="group"
        aria-label="Filter by category"
        className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {options.map((o) => {
          const on = filter === o.id;
          const n = o.id === "all" ? finds.length : finds.filter((f) => f.category === o.id).length;
          return (
            <button
              key={o.id}
              type="button"
              aria-pressed={on}
              onClick={() => choose(o.id)}
              className={`shrink-0 border px-4 py-2.5 text-[0.95rem] font-semibold transition-colors ${
                on ? "border-fg bg-fg text-bg" : "border-line bg-surface hover:border-fg"
              }`}
            >
              {o.label} <span className={on ? "opacity-70" : "text-muted"}>{n}</span>
            </button>
          );
        })}
      </div>

      <p className="mt-6 text-sm text-muted" aria-live="polite">
        Showing {shown.length} {shown.length === 1 ? "piece" : "pieces"}
      </p>

      <FindsGrid>
        {shown.map((f) => (
          <li key={f.slug}>{cards[f.slug]}</li>
        ))}
      </FindsGrid>
    </>
  );
}

export function FindsGrid({ children }: { children: React.ReactNode }) {
  return (
    <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-12 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
      {children}
    </ul>
  );
}
