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
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
            Devis B2B • Réponse rapide
          </span>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
            Contact / Devis
          </h1>

          <p className="mt-4 text-sm leading-6 text-slate-600 max-w-md">
            Décrivez votre besoin (départ/arrivée, volumes, contraintes). Nous vous
            répondons avec une solution claire et un planning adapté.
          </p>

          {/* Feedback */}
          {sent && (
            <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
              Demande envoyée. Nous revenons vers vous au plus vite.
            </div>
          )}
          {error && (
            <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900">
              Une erreur est survenue. Veuillez réessayer ou nous appeler.
            </div>
          )}

          {/* Coordonnées */}
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
            <div className="text-sm font-semibold text-slate-900">Coordonnées</div>
            <div className="mt-3 space-y-2 text-sm text-slate-600">
              <a className="block hover:text-slate-900" href="tel:+33123456789">
                +33 1 23 45 67 89
              </a>
              <a className="block hover:text-slate-900" href="mailto:contact@exemple.fr">
                contact@exemple.fr
              </a>
              <div className="text-slate-500">Lun–Ven : 8h30–18h</div>
              <div className="text-slate-500">Zone : Régional / National</div>
            </div>

            {/* Réassurance */}
            <div className="mt-6 grid gap-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <div className="text-xs font-semibold text-slate-900">Ce que vous recevez</div>
                <div className="mt-1 text-xs text-slate-600">
                  Une proposition claire : solution, planning, prix et conditions.
                </div>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <div className="text-xs font-semibold text-slate-900">Confidentialité</div>
                <div className="mt-1 text-xs text-slate-600">
                  Données utilisées uniquement pour répondre à votre demande.
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Pour en savoir plus :{" "}
              <Link className="underline hover:text-slate-900" href="/politique-confidentialite">
                politique de confidentialité
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Formulaire */}
        <div className="lg:col-span-7">
          <form
            className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_10px_30px_rgba(2,6,23,0.08)]"
            action="/api/contact"
            method="post"
          >
            {/* Honeypot anti-spam (doit rester caché) */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Nom *</label>
                <input
                  name="name"
                  required
                  autoComplete="name"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-900"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Entreprise</label>
                <input
                  name="company"
                  autoComplete="organization"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-900"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-900"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Téléphone</label>
                <input
                  name="phone"
                  autoComplete="tel"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-900"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">CP départ</label>
                <input
                  name="fromZip"
                  inputMode="numeric"
                  placeholder="ex: 69000"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-900"
                />
                <p className="mt-1 text-xs text-slate-500">Ville ou code postal</p>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">CP arrivée</label>
                <input
                  name="toZip"
                  inputMode="numeric"
                  placeholder="ex: 75000"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-900"
                />
                <p className="mt-1 text-xs text-slate-500">Ville ou code postal</p>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Type</label>
                <select
                  name="type"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-900"
                  defaultValue="FTL"
                >
                  <option value="FTL">Lot complet (FTL)</option>
                  <option value="LTL">Lot partiel (LTL)</option>
                  <option value="EXPRESS">Dédié / Express</option>
                  <option value="AFFRETEMENT">Affrètement</option>
                  <option value="AUTRE">Autre</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">Poids / Volume</label>
                <input
                  name="load"
                  placeholder="ex: 800kg / 6 palettes"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-900"
                />
                <p className="mt-1 text-xs text-slate-500">Poids, palettes, dimensions si utile</p>
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700">Message *</label>
                <textarea
                  name="message"
                  required
                  rows={7}
                  placeholder="Date souhaitée, contraintes (RDV, accès, horaires), nature marchandise, conditions de chargement…"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-900"
                />
                <p className="mt-1 text-xs text-slate-500">
                  Plus les informations sont précises, plus le devis est rapide.
                </p>
              </div>

              <div className="sm:col-span-2">
                <label className="flex items-start gap-3 text-sm text-slate-600">
                  <input type="checkbox" name="consent" required className="mt-1" />
                  <span>
                    J’accepte que mes informations soient utilisées uniquement pour être recontacté au
                    sujet de ma demande (B2B).{" "}
                    <Link className="underline hover:text-slate-900" href="/politique-confidentialite">
                      En savoir plus
                    </Link>
                    .
                  </span>
                </label>
              </div>
            </div>

            <button
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
              type="submit"
            >
              Envoyer la demande
            </button>

            <p className="mt-3 text-xs text-slate-500">
              Les informations sont utilisées uniquement pour répondre à votre demande. Aucun tracking publicitaire.
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
}
