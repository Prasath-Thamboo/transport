import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rateLimit";
import { sanitize, validate, type ContactPayload } from "@/lib/validators";

function getIP(req: Request) {
  // Sur Vercel/Reverse proxy, adapte selon headers réels
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

export async function POST(req: Request) {
  const ip = getIP(req);
  const rl = rateLimit(ip, 8, 60_000);
  if (!rl.ok) {
    return NextResponse.json({ ok: false, error: "Trop de requêtes" }, { status: 429 });
  }

  const formData = await req.formData();

  const payload: ContactPayload = {
    name: String(formData.get("name") || ""),
    company: String(formData.get("company") || ""),
    email: String(formData.get("email") || ""),
    phone: String(formData.get("phone") || ""),
    fromZip: String(formData.get("fromZip") || ""),
    toZip: String(formData.get("toZip") || ""),
    type: String(formData.get("type") || ""),
    load: String(formData.get("load") || ""),
    message: String(formData.get("message") || ""),
    consent: String(formData.get("consent") || ""),
  };

  const errors = validate(payload);
  if (errors.length) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  // Ici, branche l’envoi email (Nodemailer, Resend, etc.) ou stockage (DB/CRM).
  // Pour l’instant, on renvoie un OK.

  return NextResponse.json({
    ok: true,
    received: {
      name: sanitize(payload.name),
      email: sanitize(payload.email),
    },
  });
}
