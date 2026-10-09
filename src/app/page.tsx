import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About, Contact, Footer, Process } from "@/components/Sections";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-stone"
      >
        Skip to work
      </a>
      <Header />
      <main>
        <Hero />
        <Work />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
