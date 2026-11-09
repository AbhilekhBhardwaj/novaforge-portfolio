"use client";

import { useEffect } from "react";

/**
 * Fades and lifts every `[data-reveal]` element once as it enters the viewport.
 *
 * Only elements that start below the fold are hidden, so nothing the visitor can
 * already see is ever pulled away, and the page renders fully without JavaScript.
 * Does nothing at all when the visitor prefers reduced motion.
 */
export function RevealOnScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const pending = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]")).filter(
      (el) => el.getBoundingClientRect().top > window.innerHeight,
    );
    if (pending.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.add("reveal-in");
          el.classList.remove("reveal-pending");
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    for (const el of pending) {
      el.classList.add("reveal-pending");
      observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return null;
}
