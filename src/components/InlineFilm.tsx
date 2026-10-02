"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { ArrowCounterClockwiseIcon } from "@phosphor-icons/react";

/**
 * The drive-in film (Higgsfield image-to-video from the real storefront,
 * porch and interior; see docs/ASSET-PROVENANCE.md), shown as wayfinding in
 * the Visit section. It waits until it is half on screen, plays once, holds
 * the last frame and offers a replay. Reduced motion shows the poster only.
 */
export function InlineFilm({
  src,
  poster,
  caption,
  label,
}: {
  src: string;
  poster: string;
  caption: string;
  label: string;
}) {
  const reduce = useReducedMotion();
  const video = useRef<HTMLVideoElement>(null);
  const [ended, setEnded] = useState(false);

  useEffect(() => {
    const v = video.current;
    if (reduce || !v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        v.play().catch(() => {});
        io.disconnect();
      },
      { threshold: 0.5 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, [reduce]);

  const replay = () => {
    const v = video.current;
    if (!v) return;
    setEnded(false);
    v.currentTime = 0;
    v.play().catch(() => {});
  };

  return (
    <figure className="m-0">
      <div className="relative aspect-video overflow-hidden bg-linen">
        {reduce ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={poster} alt={label} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <video
            ref={video}
            src={src}
            poster={poster}
            muted
            playsInline
            preload="none"
            aria-label={label}
            onEnded={() => setEnded(true)}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
        {ended && (
          <button
            type="button"
            onClick={replay}
            className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 bg-paper/90 px-3 py-2 text-sm font-medium text-ink hover:bg-paper"
          >
            <ArrowCounterClockwiseIcon size={15} weight="bold" aria-hidden />
            Replay
          </button>
        )}
      </div>
      <figcaption className="caption mt-3 text-muted">{caption}</figcaption>
    </figure>
  );
}
