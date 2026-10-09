import Image from "next/image";
import { site } from "@/lib/site";
import heroForge from "../../public/hero-forge.jpg";

const facts = [
  { value: site.buildTime, label: "From go-ahead to a site ready to launch" },
  { value: "Fixed", label: "Price, agreed in writing before any work starts" },
  { value: "90+", label: "Mobile Lighthouse score every build is held to" },
];

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-[88rem] px-5 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col lg:col-span-7 lg:pt-6">
          <p className="eyebrow text-ink-2">Web design for small businesses in the US, UK and Canada</p>

          <h1 className="display mt-8 text-[clamp(2.7rem,6.2vw,5.25rem)]">
            Serious websites for small&nbsp;businesses, <span className="text-ink-3">launched in days.</span>
          </h1>

          <p className="mt-8 max-w-xl text-[1.075rem] leading-relaxed text-ink-2">
            Agencies tend to quote small businesses five figures and three months. Templates are
            cheap, but your site ends up looking like everyone else&rsquo;s. Novaforge designs and
            codes custom sites for much less than an agency charges, and most are built and ready
            to launch in {site.buildTime}.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
            <a
              href="#contact"
              className="inline-flex h-12 items-center rounded-[2px] bg-ink px-6 text-[0.95rem] font-medium text-stone transition-colors hover:bg-cobalt"
            >
              Start a project
            </a>
            <a href="#work" className="link-draw pb-0.5 text-[0.95rem] font-medium">
              See recent work
            </a>
          </div>

          <dl className="mt-auto grid grid-cols-3 gap-4 border-t hairline pt-6 max-lg:mt-14 sm:gap-8">
            {facts.map((f) => (
              <div key={f.value} className="flex flex-col">
                <dt className="order-2 mt-2 text-[0.8rem] leading-snug text-ink-3">{f.label}</dt>
                <dd className="display text-[clamp(1.5rem,2.6vw,2.1rem)]">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden bg-stone-3 max-lg:aspect-[5/4] lg:col-span-5">
          <Image
            src={heroForge}
            alt="Slabs of pale limestone stacked at right angles around a thin plate of blue-tempered steel, in low morning light"
            fill
            priority
            placeholder="blur"
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover max-lg:object-[50%_75%]"
          />
        </div>
      </div>
    </section>
  );
}
