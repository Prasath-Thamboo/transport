import Link from "next/link";
import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/ssr";
import Container from "./Container";
import Logo from "./Logo";
import { COMPANY } from "@/lib/company";

const LINKS = [
  { href: "/services", label: "Services" },
  { href: "/flotte", label: "Flotte" },
  { href: "/contact", label: "Contact et devis" },
];

const LEGAL = [
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-confidentialite", label: "Politique de confidentialité" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-6 text-text-muted">
              Transport routier de marchandises pour les professionnels, en France
              et en Europe, depuis {COMPANY.founded}.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-text">Navigation</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-text-muted transition-colors hover:text-text">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-text">Informations</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {LEGAL.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-text-muted transition-colors hover:text-text">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-text">Nous joindre</h2>
            <ul className="mt-4 space-y-3 text-sm text-text-muted">
              <li>
                <a href={COMPANY.phoneHref} className="inline-flex items-center gap-2.5 tabular-nums transition-colors hover:text-text">
                  <Phone size={16} aria-hidden />
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="inline-flex items-center gap-2.5 transition-colors hover:text-text">
                  <EnvelopeSimple size={16} aria-hidden />
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0" aria-hidden />
                <span>{COMPANY.address}</span>
              </li>
              <li className="pl-[26px]">{COMPANY.hours}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border py-6 text-xs text-text-muted">
          © {new Date().getFullYear()} {COMPANY.name}. Tous droits réservés.
        </div>
      </Container>
    </footer>
  );
}
