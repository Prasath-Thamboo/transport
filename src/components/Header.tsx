"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "./Container";

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/flotte", label: "Flotte" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <header className="animate-fade-in sticky top-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Brand */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-white shadow-brand transition-transform group-hover:-translate-y-0.5">
              <span className="text-sm font-bold tracking-tight">VT</span>
            </div>

            <div className="leading-tight">
              <div className="text-sm font-semibold text-text">
                Votre Transporteur
              </div>
              <div className="text-xs text-text-muted">Transport routier B2B</div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cx(
                  "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  "after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-300 hover:after:scale-x-100",
                  isActive(item.href)
                    ? "bg-brand-soft text-brand after:scale-x-0"
                    : "text-text-muted hover:bg-surface-2 hover:text-text"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <a
              href="tel:+33123456789"
              className="hidden items-center text-sm font-semibold text-text-muted transition-colors hover:text-brand sm:inline-flex"
            >
              +33 1 23 45 67 89
            </a>

            <Link href="/contact" className="btn btn-primary px-4 py-2">
              Demander un devis
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface transition-colors hover:bg-surface-2 md:hidden"
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <div className="grid gap-1">
                <span
                  className={cx(
                    "h-0.5 w-5 bg-text transition",
                    open && "translate-y-1.5 rotate-45"
                  )}
                />
                <span
                  className={cx(
                    "h-0.5 w-5 bg-text transition",
                    open && "opacity-0"
                  )}
                />
                <span
                  className={cx(
                    "h-0.5 w-5 bg-text transition",
                    open && "-translate-y-1.5 -rotate-45"
                  )}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        <div
          className={cx(
            "overflow-hidden transition-[max-height] duration-300 md:hidden",
            open ? "max-h-96" : "max-h-0"
          )}
        >
          <div className="pb-4">
            <div className="mt-1 rounded-2xl border border-border bg-surface p-2 shadow-soft">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cx(
                    "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "bg-brand-soft text-brand"
                      : "text-text-muted hover:bg-surface-2 hover:text-text"
                  )}
                >
                  {item.label}
                  <span aria-hidden>→</span>
                </Link>
              ))}

              <div className="mt-2 grid gap-2 px-2 pb-2">
                <a
                  href="tel:+33123456789"
                  className="btn btn-secondary"
                >
                  Appeler
                </a>
                <Link href="/contact" className="btn btn-primary">
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
