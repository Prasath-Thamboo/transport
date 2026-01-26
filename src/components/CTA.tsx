import Link from "next/link";

export default function CTA() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-[0_10px_30px_rgba(2,6,23,0.08)]">
      {/* Fond décoratif subtil */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-slate-100 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-slate-50 blur-3xl" />
      </div>

      <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        {/* Texte */}
        <div className="max-w-xl">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
            Réponse rapide • Devis sans engagement
          </span>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">
            Un transport à organiser ?
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Décrivez votre besoin (départ, arrivée, volumes, contraintes).
            Nous vous proposons une solution claire, planifiée et adaptée
            à vos exigences professionnelles.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition"
          >
            Demander un devis
            <span className="ml-2 hidden sm:inline text-white/70">→</span>
          </Link>

          <a
            href="tel:+33123456789"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
          >
            Appeler directement
          </a>
        </div>
      </div>
    </div>
  );
}
