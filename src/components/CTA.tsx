import Link from "next/link";

export default function CTA() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-brand px-6 py-10 shadow-brand sm:px-10 sm:py-12">
      {/* Décor lumineux */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/15 blur-3xl" />
        <div className="absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-brand-dark/50 blur-3xl" />
      </div>

      <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white">
            Réponse rapide • Devis sans engagement
          </span>

          <h3 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Un transport à organiser ?
          </h3>

          <p className="mt-3 text-sm leading-6 text-white/80">
            Décrivez votre besoin (départ, arrivée, volumes, contraintes). Nous
            vous proposons une solution claire, planifiée et adaptée à vos
            exigences professionnelles.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="btn bg-white text-brand hover:-translate-y-0.5 hover:bg-white/90"
          >
            Demander un devis
            <span aria-hidden>→</span>
          </Link>

          <a
            href="tel:+33123456789"
            className="btn border border-white/30 text-white hover:bg-white/10"
          >
            Appeler directement
          </a>
        </div>
      </div>
    </div>
  );
}
