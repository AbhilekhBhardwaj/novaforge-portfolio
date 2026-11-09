"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "./Mark";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 12);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      {/* Background and border live on their own layer so only its opacity animates. */}
      <div
        aria-hidden
        className={`absolute inset-0 border-b hairline bg-stone/80 backdrop-blur-md transition-opacity duration-300 ease-out-soft ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />
      <div className="relative mx-auto flex h-16 max-w-[88rem] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#top" aria-label="Novaforge Studio, back to top" className="transition-opacity duration-200 hover:opacity-75 active:opacity-60">
          <Wordmark />
        </a>
        <nav aria-label="Primary" className="flex items-center gap-6 text-sm sm:gap-9">
          <ul className="hidden items-center gap-9 text-ink-2 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="link-slide hover:text-ink focus-visible:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="link-draw pb-0.5 font-medium text-ink">
            Start a project
          </a>
        </nav>
      </div>
    </header>
  );
}
