"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "sent" | "error";

const field =
  "w-full border-0 border-b border-stone/25 bg-transparent px-0 py-3 text-stone placeholder:text-stone/35 focus:border-cobalt-soft focus:outline-none focus:ring-0 transition-colors";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        form.reset();
        setStatus("sent");
        return;
      }
      // No mail provider configured: hand off to the visitor's email app instead.
      if (res.status === 503) {
        const body = `${data.message}\n\n${data.name}\n${data.email}${data.website ? `\n${data.website}` : ""}`;
        window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
          `New project: ${data.name}`,
        )}&body=${encodeURIComponent(body)}`;
        setStatus("idle");
        return;
      }
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border-t border-stone/25 pt-8" role="status">
        <p className="display text-3xl">Thanks, your message is in.</p>
        <p className="mt-4 text-stone/70">Expect a reply within one business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <label className="block">
          <span className="eyebrow text-stone/60">Your name</span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className="eyebrow text-stone/60">Email</span>
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>
      <label className="block">
        <span className="eyebrow text-stone/60">Business or current website</span>
        <input name="website" autoComplete="url" placeholder="Optional" className={field} />
      </label>
      <label className="block">
        <span className="eyebrow text-stone/60">What do you need?</span>
        <textarea
          name="message"
          required
          rows={4}
          className={`${field} resize-none`}
        />
      </label>
      {/* Honeypot: real visitors never see or fill this. */}
      <input name="company" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />

      <div className="flex flex-wrap items-center gap-6 pt-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex h-12 items-center rounded-[2px] bg-stone px-6 text-[0.95rem] font-medium text-ink transition-colors hover:bg-cobalt-soft disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {status === "error" && (
          <p className="text-sm text-stone/70" role="alert">
            That didn&rsquo;t send. Please email{" "}
            <a className="underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
