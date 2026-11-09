import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-[88rem] px-5 pt-14 pb-12 sm:px-8 sm:pt-16 lg:px-12"
    >
      <div className="max-w-5xl">
        <h1 className="hero-rise display text-[clamp(2.75rem,7vw,6.25rem)]">
          Serious websites for small&nbsp;businesses,{" "}
          <span className="text-ink-3">launched in days.</span>
        </h1>

        <p className="hero-rise mt-8 max-w-xl text-[1.125rem] leading-relaxed text-ink-2 [animation-delay:90ms] sm:text-[1.25rem]">
          Custom-designed and hand-coded at a fixed price, with most sites ready to launch in{" "}
          {site.buildTime}.
        </p>

        <div className="hero-rise mt-10 [animation-delay:180ms]">
          <a
            href="#contact"
            className="press inline-flex h-13 items-center rounded-[2px] bg-ink px-7 text-[1rem] font-medium text-stone hover:bg-cobalt focus-visible:bg-cobalt"
          >
            Start a project
          </a>
        </div>
      </div>
    </section>
  );
}
