import { sanitize } from "@/lib/validators";

type Payload = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  fromZip?: string;
  toZip?: string;
  type?: string;
  load?: string;
  message: string;
};

function row(label: string, value?: string) {
  const v = (value || "").trim();
  if (!v) return "";
  return `
    <tr>
      <td style="padding:10px 0; width:160px; color:#475569; font-size:13px;">${label}</td>
      <td style="padding:10px 0; color:#0f172a; font-size:13px; font-weight:600;">${sanitize(v)}</td>
    </tr>
  `;
}

export function contactEmailHtml(p: Payload) {
  const safeMessage = sanitize(p.message).replace(/\n/g, "<br/>");

  return `
  <div style="margin:0; padding:0; background:#f8fafc;">
    <div style="max-width:720px; margin:0 auto; padding:28px 16px;">
      <div style="background:#ffffff; border:1px solid #e2e8f0; border-radius:18px; overflow:hidden;">
        <div style="padding:18px 22px; background:#0f172a;">
          <div style="color:#ffffff; font-size:14px; opacity:0.9;">Nouveau message depuis le site</div>
          <div style="color:#ffffff; font-size:18px; font-weight:700; margin-top:6px;">
            Demande de devis / contact
          </div>
        </div>

        <div style="padding:22px;">
          <table style="width:100%; border-collapse:collapse;">
            ${row("Nom", p.name)}
            ${row("Entreprise", p.company)}
            ${row("Email", p.email)}
            ${row("Téléphone", p.phone)}
            ${row("CP départ", p.fromZip)}
            ${row("CP arrivée", p.toZip)}
            ${row("Type", p.type)}
            ${row("Poids / Volume", p.load)}
          </table>

          <div style="margin-top:18px; padding:16px; border:1px solid #e2e8f0; border-radius:14px; background:#f8fafc;">
            <div style="font-size:13px; color:#475569; margin-bottom:8px;">Message</div>
            <div style="font-size:14px; color:#0f172a; line-height:1.6;">
              ${safeMessage}
            </div>
          </div>

          <div style="margin-top:18px; font-size:12px; color:#64748b;">
            Email envoyé automatiquement depuis le formulaire du site.
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
}
