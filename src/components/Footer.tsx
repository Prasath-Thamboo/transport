import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        <div className="py-12 grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900 text-white">
                <span className="text-sm font-semibold">VT</span>
              </div>
              <div className="leading-tight">
                <div className="text-sm font-semibold text-slate-900">
                  Votre Transporteur
                </div>
                <div className="text-xs text-slate-500">Transport routier B2B</div>
              </div>
            </Link>

            <p className="mt-4 text-sm leading-6 text-slate-600 max-w-sm">
              Transport routier de marchandises pour les professionnels : solutions
              planifiées, suivi clair, interlocuteur unique.
            </p>

            {/* Mini preuves */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                Devis clair
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                Suivi & traçabilité
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                B2B
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <div className="text-sm font-semibold text-slate-900">Navigation</div>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link className="text-slate-600 hover:text-slate-900 transition" href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-slate-900 transition" href="/flotte">
                  Flotte & moyens
                </Link>
              </li>
              <li>
                <Link className="text-slate-600 hover:text-slate-900 transition" href="/contact">
                  Contact / Devis
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <div className="text-sm font-semibold text-slate-900">Contact</div>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>
                <a className="hover:text-slate-900 transition" href="tel:+33123456789">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li>
                <a className="hover:text-slate-900 transition" href="mailto:contact@exemple.fr">
                  contact@exemple.fr
                </a>
              </li>
              <li className="text-slate-500">Lun–Ven : 8h30–18h</li>
              <li className="text-slate-500">Zone : Régional / National</li>
            </ul>
          </div>

          {/* Légal */}
          <div className="lg:col-span-2">
            <div className="text-sm font-semibold text-slate-900">Légal</div>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link className="text-slate-600 hover:text-slate-900 transition" href="/mentions-legales">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-600 hover:text-slate-900 transition"
                  href="/politique-confidentialite"
                >
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre du bas */}
        <div className="border-t border-slate-200 py-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-xs text-slate-500">
            © {new Date().getFullYear()} Votre Transporteur. Tous droits réservés.
          </div>

          <div className="flex flex-wrap gap-3 text-xs">
            <Link className="text-slate-500 hover:text-slate-900 transition" href="/contact">
              Demander un devis
            </Link>
            <a className="text-slate-500 hover:text-slate-900 transition" href="tel:+33123456789">
              Appeler
            </a>
            <a className="text-slate-500 hover:text-slate-900 transition" href="mailto:contact@exemple.fr">
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
