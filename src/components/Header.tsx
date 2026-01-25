import Link from "next/link";
import Container from "./Container";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="text-sm font-medium text-slate-700 hover:text-slate-900 transition"
  >
    {children}
  </Link>
);

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-slate-900" />
            <div className="leading-tight">
              <div className="text-sm font-semibold text-slate-900">Votre Transporteur</div>
              <div className="text-xs text-slate-500">Transport routier B2B</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="/services">Services</NavLink>
            <NavLink href="/flotte">Flotte</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="tel:+33123456789"
              className="hidden sm:inline-flex items-center justify-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
            >
              +33 1 23 45 67 89
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition"
            >
              Devis
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
}
