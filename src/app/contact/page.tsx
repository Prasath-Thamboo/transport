import Section from "@/components/Section";

export const metadata = { title: "Contact / Devis" };

export default function ContactPage() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h1 className="text-3xl font-semibold text-slate-900">Contact / Devis</h1>
          <p className="mt-3 text-sm text-slate-600">
            Décrivez votre besoin (départ/arrivée, volume, contraintes). Réponse rapide avec solution et planning.
          </p>

          <div className="mt-8 rounded-2xl border border-slate-200 p-6">
            <div className="text-sm font-semibold text-slate-900">Coordonnées</div>
            <div className="mt-3 space-y-2 text-sm text-slate-600">
              <a className="block hover:text-slate-900" href="tel:+33123456789">+33 1 23 45 67 89</a>
              <a className="block hover:text-slate-900" href="mailto:contact@exemple.fr">contact@exemple.fr</a>
              <div>Lun–Ven : 8h30–18h</div>
              <div>Zone : à préciser (régional / national / international)</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_1px_0_rgba(15,23,42,0.04)]"
            action="/api/contact"
            method="post"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Nom</label>
                <input
                  name="name"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-900"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Entreprise</label>
                <input
                  name="company"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-900"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-900"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Téléphone</label>
                <input
                  name="phone"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-900"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700">CP départ</label>
                <input
                  name="fromZip"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-900"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">CP arrivée</label>
                <input
                  name="toZip"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-900"
                />
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
                  <option value="EXPRESS">Express / dédié</option>
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
              </div>

              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Contraintes (RDV, hayon, horaires, ADR…), date souhaitée, infos marchandise…"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-900"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="flex items-start gap-3 text-sm text-slate-600">
                  <input type="checkbox" name="consent" required className="mt-1" />
                  <span>
                    J’accepte que mes informations soient utilisées pour être recontacté au sujet de ma demande.
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
              Ajoute une protection anti-spam (hCaptcha/reCAPTCHA) si le site est exposé publiquement.
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
}
