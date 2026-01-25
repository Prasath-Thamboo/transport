import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container>
        <div className="py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-sm font-semibold text-slate-900">Votre Transporteur</div>
            <p className="mt-2 text-sm text-slate-600">
              Transport routier de marchandises : fiable, réactif, orienté B2B.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900">Pages</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="text-slate-600 hover:text-slate-900" href="/services">Services</Link></li>
              <li><Link className="text-slate-600 hover:text-slate-900" href="/flotte">Flotte</Link></li>
              <li><Link className="text-slate-600 hover:text-slate-900" href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900">Contact</div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a className="hover:text-slate-900" href="tel:+33123456789">+33 1 23 45 67 89</a></li>
              <li><a className="hover:text-slate-900" href="mailto:contact@exemple.fr">contact@exemple.fr</a></li>
              <li>Du lun. au ven. — 8h30 à 18h</li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-900">Légal</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link className="text-slate-600 hover:text-slate-900" href="/mentions-legales">Mentions légales</Link></li>
              <li><Link className="text-slate-600 hover:text-slate-900" href="/politique-confidentialite">Politique de confidentialité</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 py-6 text-xs text-slate-500">
          © {new Date().getFullYear()} Votre Transporteur. Tous droits réservés.
        </div>
      </Container>
    </footer>
  );
}
