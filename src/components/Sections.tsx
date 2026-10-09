import { process, site } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import { Wordmark } from "./Mark";
import { SectionHead } from "./SectionHead";

export function Process() {
  return (
    <section id="process" className="mx-auto max-w-[88rem] scroll-mt-16 px-5 pt-28 sm:px-8 sm:pt-36 lg:px-12">
      <SectionHead label="Process" title="How a project runs" />
      <ol className="mt-14 grid gap-px overflow-hidden border-y hairline bg-ink/15 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        {process.map((p, i) => (
          <li key={p.step} className="flex flex-col bg-stone py-8 sm:px-6 sm:py-10 lg:first:pl-0">
            <span aria-hidden className="display text-5xl text-ink-3/70 tabular-nums">
              {i + 1}
            </span>
            <h3 className="mt-8 text-lg font-semibold tracking-[-0.01em]">{p.step}</h3>
            <p className="eyebrow mt-1.5 text-cobalt">{p.time}</p>
            <p className="mt-4 max-w-xs text-[0.95rem] leading-relaxed text-ink-2">{p.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function About() {
  const facts = [
    ["Based in", "India (IST, UTC+5:30)"],
    ["Clients in", "The US, UK and Canada"],
    ["Replies", "Within one business day"],
  ];
  return (
    <section id="about" className="mx-auto max-w-[88rem] scroll-mt-16 px-5 pt-28 sm:px-8 sm:pt-36 lg:px-12">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-12">
        <p className="eyebrow text-ink-3 lg:col-span-3 lg:pt-3">About</p>

        <div className="lg:col-span-5">
          <h2 className="display text-[clamp(2.3rem,4.4vw,3.8rem)]">How the studio works</h2>
          <div className="mt-8 space-y-5 text-[1.05rem] leading-relaxed text-ink-2">
            <p>
              Novaforge is a small web design studio based in India, building websites for small
              businesses in the US, the UK and Canada.
            </p>
            <p>
              Every site starts from the customer who will actually use it: on a phone, often in a
              hurry, deciding whether to call. Speed, plain language and a phone number that&rsquo;s
              easy to find come before decoration.
            </p>
            <p>
              There are no handoffs. Whoever is on your first call also writes the copy and builds
              the site, so nothing gets lost between a salesperson, a designer and a developer.
              It&rsquo;s also a big part of why it costs less than an agency.
            </p>
            <p>
              The time difference works in your favour. If you send feedback at the end of your
              day, the changes are usually on your preview link by the next morning.
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 lg:pl-6">
          <div className="border-t border-ink pt-6">
            <p className="font-semibold">{site.name}</p>
            <p className="text-sm text-ink-3">Design, copywriting and development</p>
            <dl className="mt-8 divide-y divide-ink/15 border-y hairline text-[0.92rem]">
              {facts.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 py-3.5">
                  <dt className="text-ink-3">{k}</dt>
                  <dd className="text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="mt-28 scroll-mt-16 bg-ink text-stone sm:mt-36">
      <div className="mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
        <SectionHead tone="dark" label="Contact" title="Tell the studio about your business." />
        <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-3" />
          <div className="lg:col-span-4">
            <p className="max-w-sm text-[1.05rem] leading-relaxed text-stone/75">
              A few lines is enough. Say what the business does, where you are, and what you
              don&rsquo;t like about your current site, or that you don&rsquo;t have one yet. Every
              message gets a personal reply within one business day.
            </p>
            <p className="eyebrow mt-12 text-stone/60">Or email directly</p>
            <a
              href={`mailto:${site.email}`}
              className="display mt-3 inline-block text-[clamp(1.6rem,2.6vw,2.2rem)] transition-colors hover:text-cobalt-soft"
            >
              {site.email}
            </a>
          </div>
          <div className="lg:col-span-5">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-stone/10 bg-ink text-stone/60">
      <div className="mx-auto flex max-w-[88rem] flex-col gap-6 px-5 py-10 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <Wordmark className="text-stone [&_.text-ink]:text-stone [&_.text-ink-2]:text-stone/70 [&_.text-ink-3]:text-stone/40" />
        <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-2">
          <a href="#work" className="hover:text-stone">Work</a>
          <a href="#process" className="hover:text-stone">Process</a>
          <a href="#about" className="hover:text-stone">About</a>
          <a href={`mailto:${site.email}`} className="hover:text-stone">{site.email}</a>
        </nav>
        <p>© {year} {site.name}</p>
      </div>
    </footer>
  );
}
