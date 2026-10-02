"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { ArrowCounterClockwiseIcon } from "@phosphor-icons/react";
import { SHOP } from "@/lib/site";

/**
 * Opening film: pull in off River Road, cross the porch, walk into the yellow
 * room (Higgsfield image-to-video from the real storefront, porch and
 * interior; see docs/ASSET-PROVENANCE.md). It is the hero's backdrop rather
 * than a box: `.film-wash` feathers it into the mustard wall, and the intro
 * copy (children) sits in the dissolve below. Plays once, holds the last
 * frame and brings the name up over it. Reduced motion, blocked autoplay or a
 * load error skip straight to that final state.
 */
export function FilmHero({
  src,
  poster,
  lastFrame,
  children,
}: {
  src: string;
  poster: string;
  lastFrame: string;
  children: React.ReactNode;
}) {
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

  const settledLook = "scale-[1.03] blur-[1.5px] brightness-[0.78]";

  return (
    <section aria-label="Welcome" className="relative overflow-hidden bg-wall text-on-wall">
      <div className="film-wash relative h-[62svh] w-full sm:h-[min(76svh,54vw)] sm:min-h-[26rem]">
        {still ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={lastFrame}
            alt="Inside Yankee Pedlars' Shoppe: mustard walls covered in framed pictures, glowing lamps and a green velvet armchair."
            className={`absolute inset-0 h-full w-full object-cover ${settledLook}`}
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
              ended ? settledLook : ""
            }`}
          />
        )}

        <div
          className={`pointer-events-none absolute inset-x-0 top-[13%] flex flex-col items-center px-6 text-center transition-all duration-1000 ease-out sm:top-[17%] ${
            settled ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
          }`}
          style={{ transitionDelay: settled && !still ? "350ms" : "0ms" }}
        >
          <p className="font-display text-[clamp(2.6rem,7.5vw,7rem)] leading-[0.95] tracking-[-0.02em] text-[#fbf6e6] [text-shadow:0_2px_30px_rgb(0_0_0/0.45)]">
            {SHOP.name}
          </p>
          <p className="ribbon mt-4 text-[clamp(0.85rem,1.5vw,1.1rem)] font-semibold text-[#16192b] sm:mt-5">
            Furniture &amp; Antiques
          </p>
        </div>

        {ended && !still && (
          <button
            type="button"
            onClick={replay}
            className="absolute top-[47%] right-4 inline-flex size-11 items-center justify-center gap-1.5 bg-black/40 text-sm font-semibold text-white backdrop-blur-sm hover:bg-black/60 sm:top-[10%] sm:right-[7%] sm:size-auto sm:px-3 sm:py-2"
          >
            <ArrowCounterClockwiseIcon size={16} weight="bold" aria-hidden />
            <span className="sr-only sm:not-sr-only">Replay</span>
          </button>
        )}
      </div>

      {/* Intro copy rides up into the film's dissolve. */}
      <div className="relative z-10 -mt-[11svh] sm:-mt-[15vh]">{children}</div>
    </section>
  );
}
