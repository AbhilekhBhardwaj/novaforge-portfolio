import Image, { type StaticImageData } from "next/image";
import { projects } from "@/lib/site";
import { SectionHead } from "./SectionHead";

import harborlineDesktop from "../../public/work/harborline-desktop.jpg";
import harborlineMobile from "../../public/work/harborline-mobile.jpg";
import brightwellDesktop from "../../public/work/brightwell-desktop.jpg";
import brightwellMobile from "../../public/work/brightwell-mobile.jpg";
import steadfastDesktop from "../../public/work/steadfast-desktop.jpg";
import steadfastMobile from "../../public/work/steadfast-mobile.jpg";

const shots: Record<string, { desktop: StaticImageData; mobile: StaticImageData }> = {
  harborline: { desktop: harborlineDesktop, mobile: harborlineMobile },
  brightwell: { desktop: brightwellDesktop, mobile: brightwellMobile },
  steadfast: { desktop: steadfastDesktop, mobile: steadfastMobile },
};

const host = (url: string) => new URL(url).host;

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-[88rem] scroll-mt-16 px-5 pt-28 sm:px-8 sm:pt-36 lg:px-12">
      <SectionHead label="Recent work" title="Three sites for three kinds of local business.">
        A family dentist in North Carolina, an emergency plumber in Idaho and a realtor in Texas.
        The businesses are made up, but the sites are real and live, built the same way a client
        site would be. Try them on your phone, since that&rsquo;s where their customers would be.
      </SectionHead>

      <ol className="mt-16 sm:mt-20">
        {projects.map((p, i) => {
          const s = shots[p.slug];
          const flip = i % 2 === 1;
          return (
            <li key={p.slug} className="border-t hairline py-12 sm:py-16">
              <a
                href={p.url}
                target="_blank"
                rel="noopener"
                className="group grid items-center gap-10 lg:grid-cols-12 lg:gap-12"
                aria-label={`${p.name}, open the live site in a new tab`}
              >
                {/* Desktop view with the phone view overlapping its corner */}
                <div className={`relative lg:col-span-8 ${flip ? "lg:order-2" : ""}`}>
                  <div className="overflow-hidden bg-ink transition-transform duration-700 ease-out-soft group-hover:-translate-y-1">
                    <p className="truncate border-b border-white/10 px-3 py-1.5 text-[0.68rem] tracking-wide text-white/50">
                      {host(p.url)}
                    </p>
                    <Image
                      src={s.desktop}
                      alt={`${p.name} homepage on desktop`}
                      placeholder="blur"
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      className="block h-auto w-full"
                    />
                  </div>
                  <div className="absolute -right-2 -bottom-6 w-[22%] min-w-[92px] overflow-hidden rounded-[14px] border-[3px] border-ink bg-ink shadow-[0_24px_40px_-18px_rgba(28,27,25,0.55)] transition-transform duration-700 ease-out-soft group-hover:-translate-y-2.5 sm:-right-5 sm:-bottom-8">
                    <Image
                      src={s.mobile}
                      alt={`${p.name} homepage on a phone`}
                      placeholder="blur"
                      sizes="(min-width: 1024px) 14vw, 24vw"
                      className="block h-auto w-full"
                    />
                  </div>
                </div>

                <div className={`lg:col-span-4 ${flip ? "lg:order-1" : ""} max-lg:pt-4`}>
                  <p className="eyebrow flex items-center gap-2.5 text-ink-3">
                    <span aria-hidden className="size-2 rounded-full" style={{ background: p.swatch }} />
                    {p.trade}, {p.location}
                  </p>
                  <h3 className="display mt-4 text-[clamp(2rem,3.4vw,2.9rem)] leading-[1.02]">{p.name}</h3>
                  <p className="mt-6 max-w-md leading-relaxed text-ink-2">{p.summary}</p>

                  <div className="mt-9 flex items-end justify-between gap-6 border-t hairline pt-5">
                    <span className="link-draw pb-0.5 text-[0.95rem] font-medium">Open the live site</span>
                    {p.lighthouse && (
                      <span className="text-right text-[0.75rem] leading-tight text-ink-3">
                        <span className="display block text-2xl text-ink">{p.lighthouse}</span>
                        Lighthouse, mobile
                      </span>
                    )}
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
