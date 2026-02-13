import Link from "next/link";

export default function CTA() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-8 sm:p-10 shadow-soft">
      
      {/* Décor lumineux subtil */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="relative flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        
        {/* Texte */}
        <div className="max-w-xl">
          <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-text-muted">
            Réponse rapide • Devis sans engagement
          </span>

          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-text">
            Un transport à organiser ?
          </h3>

          <p className="mt-3 text-sm leading-6 text-text-muted">
            Décrivez votre besoin (départ, arrivée, volumes, contraintes).
            Nous vous proposons une solution claire, planifiée et adaptée
            à vos exigences professionnelles.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          
          {/* Bouton principal OR */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-black transition hover:bg-gold-2 shadow-[0_6px_20px_rgba(0,0,0,0.35)]"
          >
            Demander un devis
            <span className="ml-2 hidden sm:inline">→</span>
          </Link>

          {/* Bouton secondaire */}
          <a
            href="tel:+33123456789"
            className="inline-flex items-center justify-center rounded-xl border border-border bg-bg px-6 py-3 text-sm font-semibold text-text hover:bg-muted transition"
          >
            Appeler directement
          </a>

        </div>
      </div>
    </div>
  );
}
