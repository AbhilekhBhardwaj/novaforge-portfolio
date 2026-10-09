import { Wordmark } from "./Mark";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b hairline bg-stone/85 backdrop-blur-md supports-[backdrop-filter]:bg-stone/70">
      <div className="mx-auto flex h-16 max-w-[88rem] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#top" aria-label="Novaforge Studio, back to top">
          <Wordmark />
        </a>
        <nav aria-label="Primary" className="flex items-center gap-6 text-sm sm:gap-9">
          <ul className="hidden items-center gap-9 text-ink-2 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-ink">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="link-draw pb-0.5 font-medium text-ink"
          >
            Start a project
          </a>
        </nav>
      </div>
    </header>
  );
}
