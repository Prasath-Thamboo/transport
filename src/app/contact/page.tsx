import Section from "@/components/Section";
import Link from "next/link";

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
        <div className="lg:col-span-5">
          <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-text-muted">
            Devis B2B • Réponse rapide
          </span>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text">
            Contact / Devis
          </h1>

          <p className="mt-4 text-sm leading-6 text-text-muted max-w-md">
            Décrivez votre besoin (départ/arrivée, volumes, contraintes). Nous vous
            répondons avec une solution claire et un planning adapté.
          </p>

          {/* Feedback */}
          {sent && (
            <div className="mt-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-sm text-emerald-300">
              Demande envoyée. Nous revenons vers vous au plus vite.
            </div>
          )}
          {error && (
            <div className="mt-6 rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 text-sm text-rose-300">
              Une erreur est survenue. Veuillez réessayer ou nous appeler.
            </div>
          )}

          {/* Coordonnées */}
          <div className="mt-8 rounded-2xl border border-border bg-surface p-6 shadow-soft">
            <div className="text-sm font-semibold text-text">Coordonnées</div>
            <div className="mt-3 space-y-2 text-sm text-text-muted">
              <a className="block hover:text-gold transition" href="tel:+33123456789">
                +33 1 23 45 67 89
              </a>
              <a className="block hover:text-gold transition" href="mailto:contact@exemple.fr">
                contact@exemple.fr
              </a>
              <div>Lun–Ven : 8h30–18h</div>
              <div>Zone : Régional / National</div>
            </div>

            {/* Réassurance */}
            <div className="mt-6 grid gap-3">
              <div className="rounded-xl border border-border bg-muted px-4 py-3">
                <div className="text-xs font-semibold text-text">Ce que vous recevez</div>
                <div className="mt-1 text-xs text-text-muted">
                  Une proposition claire : solution, planning, prix et conditions.
                </div>
              </div>

              <div className="rounded-xl border border-border bg-muted px-4 py-3">
                <div className="text-xs font-semibold text-text">Confidentialité</div>
                <div className="mt-1 text-xs text-text-muted">
                  Données utilisées uniquement pour répondre à votre demande.
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs text-text-muted">
              Pour en savoir plus :{" "}
              <Link className="underline hover:text-gold" href="/politique-confidentialite">
                politique de confidentialité
              </Link>.
            </p>
          </div>
        </div>

        {/* Formulaire */}
        <div className="lg:col-span-7">
          <form
            className="rounded-3xl border border-border bg-surface p-6 sm:p-8 shadow-soft"
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
                  <label className="text-sm font-medium text-text-muted">{field.label}</label>
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    required={field.required}
                    autoComplete={field.auto}
                    className="mt-2 w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                  />
                </div>
              ))}

              <div>
                <label className="text-sm font-medium text-text-muted">CP départ</label>
                <input
                  name="fromZip"
                  inputMode="numeric"
                  placeholder="ex: 69000"
                  className="mt-2 w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-text-muted">CP arrivée</label>
                <input
                  name="toZip"
                  inputMode="numeric"
                  placeholder="ex: 75000"
                  className="mt-2 w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-text-muted">Type</label>
                <select
                  name="type"
                  defaultValue="FTL"
                  className="mt-2 w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                >
                  <option value="FTL">Lot complet (FTL)</option>
                  <option value="LTL">Lot partiel (LTL)</option>
                  <option value="EXPRESS">Dédié / Express</option>
                  <option value="AFFRETEMENT">Affrètement</option>
                  <option value="AUTRE">Autre</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-text-muted">Poids / Volume</label>
                <input
                  name="load"
                  placeholder="ex: 800kg / 6 palettes"
                  className="mt-2 w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-text-muted">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={7}
                  className="mt-2 w-full rounded-xl border border-border bg-bg px-4 py-3 text-sm text-text outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="flex items-start gap-3 text-sm text-text-muted">
                  <input type="checkbox" name="consent" required className="mt-1 accent-[rgb(var(--gold))]" />
                  <span>
                    J’accepte que mes informations soient utilisées pour être recontacté.
                    <Link className="underline hover:text-gold ml-1" href="/politique-confidentialite">
                      En savoir plus
                    </Link>
                  </span>
                </label>
              </div>
            </div>

            <button
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-black hover:bg-gold-2 transition"
              type="submit"
            >
              Envoyer la demande
            </button>

            <p className="mt-3 text-xs text-text-muted">
              Aucune utilisation commerciale. Données utilisées uniquement pour répondre à votre demande.
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
}
