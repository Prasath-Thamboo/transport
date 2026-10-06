"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { List, Phone, X } from "@phosphor-icons/react";
import Container from "./Container";
import Logo from "./Logo";
import { COMPANY } from "@/lib/company";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/flotte", label: "Flotte" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  // Le menu mobile mémorise la page sur laquelle il a été ouvert :
  // il se referme automatiquement dès que l'on change de page.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;

  const isActive = (href: string) => pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-bg/85 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          <Logo />

          <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`relative text-sm font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-[21px] after:h-0.5 after:origin-left after:bg-accent after:transition-transform after:duration-300 ${
                  isActive(item.href)
                    ? "text-text after:scale-x-100"
                    : "text-text-muted after:scale-x-0 hover:text-text"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={COMPANY.phoneHref}
              className="hidden items-center gap-2 px-2 text-sm font-semibold text-text tabular-nums transition-colors hover:text-accent-ink lg:inline-flex"
            >
              <Phone size={16} weight="bold" aria-hidden />
              {COMPANY.phone}
            </a>

            <Link href="/contact" className="btn btn-primary hidden px-4 py-2.5 sm:inline-flex">
              Demander un devis
            </Link>

            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-border-strong text-text md:hidden"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              aria-controls="menu-mobile"
              onClick={() => setOpenOn(open ? null : pathname)}
            >
              {open ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        className={`grid transition-[grid-template-rows] duration-300 md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <Container>
            <nav className="flex flex-col py-4" aria-label="Navigation mobile">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`border-b border-border py-4 text-lg font-semibold [font-stretch:112%] ${
                    isActive(item.href) ? "text-accent-ink" : "text-text"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-5 grid gap-3 pb-2">
                <Link href="/contact" className="btn btn-primary">
                  Demander un devis
                </Link>
                <a href={COMPANY.phoneHref} className="btn btn-secondary">
                  <Phone size={16} weight="bold" aria-hidden />
                  {COMPANY.phone}
                </a>
              </div>
            </nav>
          </Container>
        </div>
      </div>
    </header>
  );
}
