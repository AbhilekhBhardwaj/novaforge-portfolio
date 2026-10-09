// Single source of truth for copy that is likely to change.
// Edit URLs, studio details and claims here. Components read from this file.

// Build timeline, from go-ahead to a site ready to launch. The hero and metadata
// read from this; keep the day ranges in `process` below in step with it.
const buildTime = "3–4 days";

export const site = {
  name: "Novaforge Studio",
  shortName: "Novaforge",
  url: "https://novaforge.studio",
  email: "hello@novaforge.studio",
  buildTime,
  description:
    `Novaforge is a web design studio in India building custom websites for small businesses in the US, UK and Canada. Most sites are built and ready to launch in ${buildTime}.`,
};

export type Project = {
  slug: string;
  name: string;
  trade: string;
  location: string;
  url: string;
  summary: string;
  /** Mobile Lighthouse performance score, only where measured. */
  lighthouse?: number;
  /** The demo's own brand accent, shown as a small swatch. */
  swatch: string;
};

export const projects: Project[] = [
  {
    slug: "brightwell",
    name: "Brightwell Family Dental",
    trade: "Dental clinic",
    location: "Cary, NC",
    url: "https://novaforge-demo-dental.vercel.app/",
    summary:
      "Written for people who put off the dentist because they’re nervous. Everything on the page moves slowly and speaks gently, and the header says whether the office is open right now, so you know someone will pick up if you call.",
    swatch: "#1D5A60",
  },
  {
    slug: "steadfast",
    name: "Steadfast Plumbing & Heating",
    trade: "Home services",
    location: "Boise, ID",
    url: "https://novaforge-demo-plumbing.vercel.app/",
    summary:
      "Nobody browses a plumber’s website at 2am. They want the number, so it’s the biggest thing on the screen, and the page is light enough to load on one bar of signal in a flooded basement.",
    lighthouse: 98,
    swatch: "#FF5A1F",
  },
  {
    slug: "harborline",
    name: "Harborline Realty",
    trade: "Real estate",
    location: "Round Rock, TX",
    url: "https://novaforge-demo-realestate.vercel.app/",
    summary:
      "People pick a realtor on gut feel, so the homepage opens on a short film of a house at dusk. Below that it splits into buying and selling, and the phone number stays one tap away the whole way down.",
    lighthouse: 92,
    swatch: "#F4A73B",
  },
];

export const process = [
  {
    step: "Discovery call",
    time: "30 minutes, free",
    body: "A conversation about your business, who your customers are and what the site has to do for them. A fixed quote follows the call.",
  },
  {
    step: "Build",
    time: "Days 1–2",
    body: "Design happens straight in the browser, so the first thing you see is a working site rather than a picture of one.",
  },
  {
    step: "Review",
    time: "Days 3–4",
    body: "You get a private link to try on your own phone. Send changes by email, on a call or as a voice note, whichever is easiest.",
  },
  {
    step: "Launch",
    time: "When you’re happy",
    body: "Your domain gets connected and hosting and analytics set up. Everything is registered in your name, so the site and the accounts are yours.",
  },
];
