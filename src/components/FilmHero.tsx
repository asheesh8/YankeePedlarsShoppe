"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { ArrowCounterClockwiseIcon } from "@phosphor-icons/react";
import { SHOP } from "@/lib/site";

/**
 * Opening film: pull in off River Road, cross the porch, walk into the yellow
 * room (Higgsfield image-to-video from the real storefront, porch and
 * interior; see ASSET-PROVENANCE.md). Plays once, holds the last frame,
 * softens it and brings the name up over it. Reduced motion, blocked
 * autoplay or a load error skip straight to that final state.
 */
export function FilmHero({ src, poster, lastFrame }: { src: string; poster: string; lastFrame: string }) {
  const reduce = useReducedMotion();
  const video = useRef<HTMLVideoElement>(null);
  const [ended, setEnded] = useState(false);
  const [failed, setFailed] = useState(false);
  const still = reduce || failed;
  const settled = still || ended;

  useEffect(() => {
    const v = video.current;
    if (still || !v) return;
    v.play().catch(() => setFailed(true));
  }, [still]);

  const replay = () => {
    const v = video.current;
    if (!v) return;
    setEnded(false);
    v.currentTime = 0;
    v.play().catch(() => setFailed(true));
  };

  return (
    <section aria-label="Arriving at the shop" className="relative overflow-hidden bg-[#2a2216]">
      <div className="relative aspect-[4/3] max-h-[calc(100svh-4rem)] w-full sm:aspect-[16/9]">
        {still ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={lastFrame}
            alt="Inside Yankee Pedlars' Shoppe: mustard walls covered in framed pictures, glowing lamps and a green velvet armchair."
            className="absolute inset-0 h-full w-full scale-105 object-cover blur-[2px] brightness-[0.72]"
          />
        ) : (
          <video
            ref={video}
            src={src}
            poster={poster}
            muted
            playsInline
            preload="auto"
            aria-label="A short film: driving up River Road to the shop, crossing the porch and walking inside."
            onEnded={() => setEnded(true)}
            onError={() => setFailed(true)}
            className={`absolute inset-0 h-full w-full object-cover transition-[filter,scale] duration-[1400ms] ease-out ${
              ended ? "scale-105 blur-[2px] brightness-[0.72]" : ""
            }`}
          />
        )}

        <div
          className={`pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center transition-all duration-1000 ease-out ${
            settled ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: settled && !still ? "350ms" : "0ms" }}
        >
          <p className="font-display text-[clamp(2.6rem,8vw,7.5rem)] leading-[0.95] tracking-[-0.02em] text-[#fbf6e6] [text-shadow:0_2px_30px_rgb(0_0_0/0.45)]">
            {SHOP.name}
          </p>
          <p className="ribbon mt-4 text-[clamp(0.85rem,1.6vw,1.15rem)] font-semibold text-[#16192b] sm:mt-6">
            Furniture &amp; Antiques, since {SHOP.founded}
          </p>
        </div>

        {ended && !still && (
          <button
            type="button"
            onClick={replay}
            className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 bg-black/45 px-3 py-2 text-sm font-semibold text-white backdrop-blur-sm hover:bg-black/60 sm:right-5 sm:bottom-5"
          >
            <ArrowCounterClockwiseIcon size={16} weight="bold" aria-hidden />
            Replay
          </button>
        )}
      </div>
    </section>
  );
}
