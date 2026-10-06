import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  EnvelopeSimple,
  MapPin,
  Phone,
  WarningCircle,
} from "@phosphor-icons/react/ssr";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { COMPANY } from "@/lib/company";

export const metadata = { title: "Contact et devis" };

type Field = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  auto?: string;
  placeholder?: string;
  inputMode?: "numeric" | "tel" | "email" | "text";
};

const IDENTITY: Field[] = [
  { label: "Nom", name: "name", required: true, auto: "name" },
  { label: "Entreprise", name: "company", auto: "organization" },
  { label: "Email", name: "email", type: "email", required: true, auto: "email" },
  { label: "Téléphone", name: "phone", type: "tel", auto: "tel", inputMode: "tel" },
];

const ROUTE: Field[] = [
  { label: "Code postal de départ", name: "fromZip", placeholder: "ex : 94150", inputMode: "numeric" },
  { label: "Code postal d'arrivée", name: "toZip", placeholder: "ex : 69007", inputMode: "numeric" },
];

const CONTACTS = [
  { icon: Phone, label: COMPANY.phone, href: COMPANY.phoneHref },
  { icon: EnvelopeSimple, label: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: MapPin, label: COMPANY.address },
  { icon: Clock, label: COMPANY.hours },
];

function Input({ f }: { f: Field }) {
  const id = `f-${f.name}`;
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="field-label">
        {f.label}
        {f.required ? <span className="text-accent-ink"> *</span> : null}
      </label>
      <input
        id={id}
        type={f.type || "text"}
        name={f.name}
        required={f.required}
        autoComplete={f.auto}
        inputMode={f.inputMode}
        placeholder={f.placeholder}
        className="field-input"
      />
    </div>
  );
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ sent?: string; error?: string }>;
}) {
  const { sent: sentParam, error: errorParam } = await searchParams;
  const sent = sentParam === "1";
  const error = errorParam === "1";

  return (
    <section className="py-14 sm:py-20">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.35fr] lg:gap-16">
          {/* Colonne infos */}
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">Contact et devis</p>
            <h1 className="display mt-5 text-[clamp(2.4rem,4.2vw,3.5rem)] text-text">
              Parlons de votre prochain envoi.
            </h1>
            <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-text-muted">
              Décrivez votre besoin. Vous recevez une proposition chiffrée et un
              planning, en moyenne sous 2 heures ouvrées.
            </p>

            <ul className="mt-10 space-y-4 border-t border-border pt-8 text-sm">
              {CONTACTS.map((c) => (
                <li key={c.label} className="flex items-start gap-3 text-text">
                  <c.icon size={20} weight="duotone" className="mt-px shrink-0 text-accent-ink" aria-hidden />
                  {c.href ? (
                    <a href={c.href} className="font-medium tabular-nums transition-colors hover:text-accent-ink">
                      {c.label}
                    </a>
                  ) : (
                    <span className="text-text-muted">{c.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Formulaire */}
          <Reveal delay={120}>
            {sent && (
              <div
                role="status"
                className="mb-6 flex items-start gap-3 rounded-2xl border border-success/30 bg-success-soft p-5 text-sm text-success"
              >
                <CheckCircle size={22} weight="fill" className="shrink-0" aria-hidden />
                <div>
                  <p className="font-semibold">Demande bien reçue.</p>
                  <p className="mt-1 opacity-90">Un exploitant vous recontacte rapidement avec une proposition.</p>
                </div>
              </div>
            )}
            {error && (
              <div
                role="alert"
                className="mb-6 flex items-start gap-3 rounded-2xl border border-danger/30 bg-danger-soft p-5 text-sm text-danger"
              >
                <WarningCircle size={22} weight="fill" className="shrink-0" aria-hidden />
                <div>
                  <p className="font-semibold">L&apos;envoi n&apos;a pas abouti.</p>
                  <p className="mt-1 opacity-90">
                    Vérifiez les champs obligatoires (message de 10 caractères minimum) ou
                    appelez-nous au <span className="whitespace-nowrap">{COMPANY.phone}</span>.
                  </p>
                </div>
              </div>
            )}

            <form
              className="rounded-2xl border border-border bg-surface p-6 shadow-soft sm:p-10"
              action="/api/contact"
              method="post"
            >
              {/* Honeypot anti-spam */}
              <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

              <fieldset>
                <legend className="text-base font-semibold text-text [font-stretch:112%]">Vos coordonnées</legend>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  {IDENTITY.map((f) => (
                    <Input key={f.name} f={f} />
                  ))}
                </div>
              </fieldset>

              <fieldset className="mt-10 border-t border-border pt-8">
                <legend className="float-left w-full text-base font-semibold text-text [font-stretch:112%]">
                  Votre transport
                </legend>
                <div className="clear-both grid gap-5 pt-5 sm:grid-cols-2">
                  {ROUTE.map((f) => (
                    <Input key={f.name} f={f} />
                  ))}

                  <div className="grid gap-2">
                    <label htmlFor="f-type" className="field-label">Type de transport</label>
                    <select id="f-type" name="type" defaultValue="FTL" className="field-input">
                      <option value="FTL">Lot complet</option>
                      <option value="LTL">Groupage (lot partiel)</option>
                      <option value="EXPRESS">Express dédié</option>
                      <option value="AFFRETEMENT">Affrètement</option>
                      <option value="AUTRE">Autre</option>
                    </select>
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="f-load" className="field-label">Poids ou volume</label>
                    <input id="f-load" name="load" placeholder="ex : 800 kg, 6 palettes" className="field-input" />
                  </div>

                  <div className="grid gap-2 sm:col-span-2">
                    <label htmlFor="f-message" className="field-label">
                      Message<span className="text-accent-ink"> *</span>
                    </label>
                    <textarea
                      id="f-message"
                      name="message"
                      required
                      minLength={10}
                      rows={6}
                      aria-describedby="f-message-help"
                      className="field-input resize-y"
                    />
                    <p id="f-message-help" className="field-help">
                      Date souhaitée, contraintes d&apos;accès, rendez-vous, nature de la marchandise.
                    </p>
                  </div>
                </div>
              </fieldset>

              <label className="mt-8 flex items-start gap-3 text-sm text-text-muted">
                <input type="checkbox" name="consent" required className="mt-0.5 h-4 w-4 shrink-0 accent-accent" />
                <span>
                  J&apos;accepte que mes informations soient utilisées pour être recontacté.{" "}
                  <Link className="font-medium text-text underline underline-offset-2 hover:text-accent-ink" href="/politique-confidentialite">
                    En savoir plus
                  </Link>
                </span>
              </label>

              <button className="btn btn-primary group mt-8 w-full py-4 text-base" type="submit">
                Envoyer la demande
                <ArrowRight size={18} weight="bold" className="transition-transform group-hover:translate-x-1" aria-hidden />
              </button>

              <p className="mt-4 text-center text-xs text-text-muted">
                Les champs marqués * sont obligatoires. Vos données servent uniquement à répondre à votre demande.
              </p>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
