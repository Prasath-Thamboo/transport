import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface-2">
      <Container>
        <div className="grid gap-10 py-14 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-white shadow-brand">
                <span className="text-sm font-bold tracking-tight">VT</span>
              </div>

              <div className="leading-tight">
                <div className="text-sm font-semibold text-text">
                  Votre Transporteur
                </div>
                <div className="text-xs text-text-muted">
                  Transport routier B2B
                </div>
              </div>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-text-muted">
              Transport routier de marchandises pour les professionnels :
              solutions planifiées, suivi clair, interlocuteur unique.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Devis clair", "Suivi & traçabilité", "B2B"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <div className="text-sm font-semibold text-text">Navigation</div>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  className="text-text-muted transition-colors hover:text-brand"
                  href="/services"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  className="text-text-muted transition-colors hover:text-brand"
                  href="/flotte"
                >
                  Flotte &amp; moyens
                </Link>
              </li>
              <li>
                <Link
                  className="text-text-muted transition-colors hover:text-brand"
                  href="/contact"
                >
                  Contact / Devis
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <div className="text-sm font-semibold text-text">Contact</div>
            <ul className="mt-4 space-y-3 text-sm text-text-muted">
              <li>
                <a
                  className="transition-colors hover:text-brand"
                  href="tel:+33123456789"
                >
                  +33 1 23 45 67 89
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-brand"
                  href="mailto:contact@exemple.fr"
                >
                  contact@exemple.fr
                </a>
              </li>
              <li>Lun–Ven : 8h30–18h</li>
              <li>Zone : Régional / National</li>
            </ul>
          </div>

          {/* Légal */}
          <div className="lg:col-span-2">
            <div className="text-sm font-semibold text-text">Légal</div>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link
                  className="text-text-muted transition-colors hover:text-brand"
                  href="/mentions-legales"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  className="text-text-muted transition-colors hover:text-brand"
                  href="/politique-confidentialite"
                >
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre du bas */}
        <div className="flex flex-col gap-3 border-t border-border py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-text-muted">
            © {new Date().getFullYear()} Votre Transporteur. Tous droits réservés.
          </div>

          <div className="flex flex-wrap gap-4 text-xs">
            <Link
              className="text-text-muted transition-colors hover:text-brand"
              href="/contact"
            >
              Demander un devis
            </Link>
            <a
              className="text-text-muted transition-colors hover:text-brand"
              href="tel:+33123456789"
            >
              Appeler
            </a>
            <a
              className="text-text-muted transition-colors hover:text-brand"
              href="mailto:contact@exemple.fr"
            >
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
