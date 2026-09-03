import Section from "@/components/Section";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Contact / Devis" };

export default function ContactPage({
  searchParams,
}: {
  searchParams?: { sent?: string; error?: string };
}) {
  const sent = searchParams?.sent === "1";
  const error = searchParams?.error === "1";

  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-12">
        {/* Colonne infos */}
        <Reveal className="lg:col-span-5">
          <p className="eyebrow">Devis B2B • Réponse rapide</p>

          <h1 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.08] tracking-tight text-text">
            Contact / Devis
          </h1>

          <p className="mt-4 max-w-md text-sm leading-6 text-text-muted">
            Décrivez votre besoin (départ/arrivée, volumes, contraintes). Nous vous
            répondons avec une solution claire et un planning adapté.
          </p>

          {/* Feedback */}
          {sent && (
            <div className="mt-6 rounded-2xl border border-success/30 bg-success-soft p-4 text-sm font-medium text-success">
              Demande envoyée. Nous revenons vers vous au plus vite.
            </div>
          )}
          {error && (
            <div className="mt-6 rounded-2xl border border-danger/30 bg-danger-soft p-4 text-sm font-medium text-danger">
              Une erreur est survenue. Veuillez réessayer ou nous appeler.
            </div>
          )}

          {/* Coordonnées */}
          <div className="mt-8 rounded-2xl border border-border bg-surface p-6 shadow-soft">
            <div className="text-sm font-semibold text-text">Coordonnées</div>
            <div className="mt-3 space-y-2 text-sm text-text-muted">
              <a className="block transition-colors hover:text-brand" href="tel:+33123456789">
                +33 1 23 45 67 89
              </a>
              <a className="block transition-colors hover:text-brand" href="mailto:contact@exemple.fr">
                contact@exemple.fr
              </a>
              <div>Lun–Ven : 8h30–18h</div>
              <div>Zone : Régional / National</div>
            </div>

            {/* Réassurance */}
            <div className="mt-6 grid gap-3">
              <div className="rounded-xl border border-border bg-surface-2 px-4 py-3">
                <div className="text-xs font-semibold text-text">Ce que vous recevez</div>
                <div className="mt-1 text-xs text-text-muted">
                  Une proposition claire : solution, planning, prix et conditions.
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface-2 px-4 py-3">
                <div className="text-xs font-semibold text-text">Confidentialité</div>
                <div className="mt-1 text-xs text-text-muted">
                  Données utilisées uniquement pour répondre à votre demande.
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs text-text-muted">
              Pour en savoir plus :{" "}
              <Link className="font-medium text-brand underline underline-offset-2" href="/politique-confidentialite">
                politique de confidentialité
              </Link>.
            </p>
          </div>
        </Reveal>

        {/* Formulaire */}
        <Reveal className="lg:col-span-7" delay={120}>
          <form
            className="rounded-3xl border border-border bg-surface p-6 shadow-soft sm:p-8"
            action="/api/contact"
            method="post"
          >
            {/* Honeypot anti-spam */}
            <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Nom *", name: "name", required: true, auto: "name" },
                { label: "Entreprise", name: "company", auto: "organization" },
                { label: "Email *", name: "email", type: "email", required: true, auto: "email" },
                { label: "Téléphone", name: "phone", auto: "tel" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="field-label">{field.label}</label>
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    required={field.required}
                    autoComplete={field.auto}
                    className="field-input"
                  />
                </div>
              ))}

              <div>
                <label className="field-label">CP départ</label>
                <input
                  name="fromZip"
                  inputMode="numeric"
                  placeholder="ex: 69000"
                  className="field-input"
                />
              </div>

              <div>
                <label className="field-label">CP arrivée</label>
                <input
                  name="toZip"
                  inputMode="numeric"
                  placeholder="ex: 75000"
                  className="field-input"
                />
              </div>

              <div>
                <label className="field-label">Type</label>
                <select name="type" defaultValue="FTL" className="field-input">
                  <option value="FTL">Lot complet (FTL)</option>
                  <option value="LTL">Lot partiel (LTL)</option>
                  <option value="EXPRESS">Dédié / Express</option>
                  <option value="AFFRETEMENT">Affrètement</option>
                  <option value="AUTRE">Autre</option>
                </select>
              </div>

              <div>
                <label className="field-label">Poids / Volume</label>
                <input
                  name="load"
                  placeholder="ex: 800kg / 6 palettes"
                  className="field-input"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="field-label">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={7}
                  className="field-input"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="flex items-start gap-3 text-sm text-text-muted">
                  <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 accent-brand" />
                  <span>
                    J’accepte que mes informations soient utilisées pour être recontacté.
                    <Link className="ml-1 font-medium text-brand underline underline-offset-2" href="/politique-confidentialite">
                      En savoir plus
                    </Link>
                  </span>
                </label>
              </div>
            </div>

            <button className="btn btn-primary mt-6 w-full" type="submit">
              Envoyer la demande
            </button>

            <p className="mt-3 text-xs text-text-muted">
              Aucune utilisation commerciale. Données utilisées uniquement pour répondre à votre demande.
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
