import type { Metadata } from "next";
import { Suspense } from "react";
import { FindCard } from "@/components/FindCard";
import { FindsBrowser, FindsGrid } from "@/components/FindsBrowser";
import { FINDS } from "@/lib/finds";
import { SHOP } from "@/lib/site";

export const metadata: Metadata = {
  title: "Recent finds",
  description: `Furniture, lamps, art, kitchenware, rugs and porch pieces recently on the floor at ${SHOP.name} in Essex Junction, VT. Text ${SHOP.phone} to check what's still in.`,
  alternates: { canonical: "/finds" },
};

export default function FindsPage() {
  const cards = Object.fromEntries(
    FINDS.map((f, i) => [
      f.slug,
      <FindCard key={f.slug} find={f} index={i} sizes="(min-width: 1024px) 22vw, (min-width: 768px) 30vw, 46vw" />,
    ]),
  );

  return (
    <section className="py-14 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <h1 className="font-display text-[clamp(2.8rem,6vw,5rem)] leading-[1] tracking-[-0.02em]">Recent finds</h1>
        <p className="mt-4 max-w-[56ch] text-lg text-muted">
          Pieces the shop has posted over the last few weeks. New things come in all the time and these sell fast,
          so text a photo to {SHOP.phone} and we&apos;ll tell you what&apos;s still here.
        </p>
        <div className="mt-10">
          {/* useSearchParams needs a boundary; the fallback is the unfiltered grid. */}
          <Suspense
            fallback={
              <FindsGrid>
                {FINDS.map((f) => (
                  <li key={f.slug}>{cards[f.slug]}</li>
                ))}
              </FindsGrid>
            }
          >
            <FindsBrowser finds={FINDS.map(({ slug, category }) => ({ slug, category }))} cards={cards} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
