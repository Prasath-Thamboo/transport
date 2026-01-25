export type ContactPayload = {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  fromZip?: string;
  toZip?: string;
  type?: string;
  load?: string;
  message: string;
  consent: string; // "on"
};

export function isEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export function sanitize(s: string) {
  return s.replace(/[<>]/g, "").trim();
}

export function validate(payload: ContactPayload) {
  const errors: string[] = [];
  if (!payload.name || sanitize(payload.name).length < 2) errors.push("Nom invalide");
  if (!payload.email || !isEmail(payload.email)) errors.push("Email invalide");
  if (!payload.message || sanitize(payload.message).length < 10) errors.push("Message trop court");
  if (!payload.consent) errors.push("Consentement requis");
  return errors;
}
