import { NextResponse } from "next/server";
import { Resend } from "resend";
import { rateLimit } from "@/lib/rateLimit";
import { sanitize, validate, type ContactPayload } from "@/lib/validators";
import { contactEmailHtml } from "@/lib/emailTemplates";

function getIP(req: Request) {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function env(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env: ${name}`);
  return v;
}

export async function POST(req: Request) {
  try {
    const ip = getIP(req);

    const rl = rateLimit(ip, 8, 60_000);
    if (!rl.ok) {
      return NextResponse.redirect(new URL("/contact?error=1", req.url), { status: 303 });
    }

    const formData = await req.formData();

    // Honeypot
    const website = String(formData.get("website") || "");
    if (website) {
      return NextResponse.redirect(new URL("/contact?sent=1", req.url), { status: 303 });
    }

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
      return NextResponse.redirect(new URL("/contact?error=1", req.url), { status: 303 });
    }

    // Email
    const resend = new Resend(env("RESEND_API_KEY"));
    const to = env("CONTACT_TO");
    const cc = process.env.CONTACT_CC ? [process.env.CONTACT_CC] : undefined;
    const from = env("CONTACT_FROM");

    const subject = `Demande via site – ${sanitize(payload.name)}${
      payload.company ? ` (${sanitize(payload.company)})` : ""
    }`;

    const html = contactEmailHtml({
      name: payload.name,
      company: payload.company,
      email: payload.email,
      phone: payload.phone,
      fromZip: payload.fromZip,
      toZip: payload.toZip,
      type: payload.type,
      load: payload.load,
      message: payload.message,
    });

    const replyTo = sanitize(payload.email);

    await resend.emails.send({
      from,
      to,
      cc,
      replyTo,
      subject,
      html,
    });

    return NextResponse.redirect(new URL("/contact?sent=1", req.url), { status: 303 });
  } catch {
    return NextResponse.redirect(new URL("/contact?error=1", req.url), { status: 303 });
  }
}
