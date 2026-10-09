import { site } from "@/lib/site";

// Sends enquiries through Resend's REST API when RESEND_API_KEY is set.
// Without it, responds 503 and the form falls back to the visitor's mail app.
export async function POST(req: Request) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return Response.json({ error: "Invalid body" }, { status: 400 });
  }

  const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
  const name = str(data.name, 120);
  const email = str(data.email, 200);
  const website = str(data.website, 300);
  const message = str(data.message, 5000);

  // Honeypot filled: pretend success, drop silently.
  if (str(data.company, 200)) return Response.json({ ok: true });

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Missing fields" }, { status: 422 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) return Response.json({ error: "Mail not configured" }, { status: 503 });

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? `Novaforge Website <website@novaforge.studio>`,
      to: [process.env.CONTACT_TO ?? site.email],
      reply_to: email,
      subject: `New project enquiry from ${name}`,
      text: `${message}\n\nName: ${name}\nEmail: ${email}\nWebsite: ${website || "not given"}`,
    }),
  });

  if (!res.ok) return Response.json({ error: "Send failed" }, { status: 502 });
  return Response.json({ ok: true });
}
