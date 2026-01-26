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

  // Ferme le menu quand on change de route
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/75 backdrop-blur">
      <div className="pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:linear-gradient(to_bottom,black,transparent)]">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
      </div>
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Brand */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative grid h-10 w-10 place-items-center rounded-2xl bg-slate-900 text-white shadow-sm">
              <span className="text-sm font-semibold">VT</span>
              <span className="absolute bottom-2 h-0.5 w-4 rounded-full bg-white/40" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-slate-900">
                Votre Transporteur
              </div>
              <div className="text-xs text-slate-500">
                Transport routier B2B
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 rounded-2xl border border-slate-200 bg-white px-1 py-1 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cx(
                  "rounded-xl px-4 py-2 text-sm font-medium transition",
                  isActive(item.href)
                    ? "bg-slate-900 text-white"
                    : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
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
              className="hidden sm:inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-[0_1px_0_rgba(15,23,42,0.04)] hover:bg-slate-50 transition"
            >
              +33 1 23 45 67 89
            </a>

            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition"
            >
              Devis
              <span className="ml-2 hidden sm:inline-flex items-center rounded-full bg-white/10 px-2 py-0.5 text-[11px] font-medium text-white/80">
                Réponse rapide
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-[0_1px_0_rgba(15,23,42,0.04)] hover:bg-slate-50 transition"
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <div className="grid gap-1">
                <span className={cx("h-0.5 w-5 bg-slate-900 transition", open && "translate-y-1.5 rotate-45")} />
                <span className={cx("h-0.5 w-5 bg-slate-900 transition", open && "opacity-0")} />
                <span className={cx("h-0.5 w-5 bg-slate-900 transition", open && "-translate-y-1.5 -rotate-45")} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        <div
          className={cx(
            "md:hidden overflow-hidden transition-[max-height] duration-300",
            open ? "max-h-96" : "max-h-0"
          )}
        >
          <div className="pb-4">
            <div className="mt-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cx(
                    "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition",
                    isActive(item.href)
                      ? "bg-slate-900 text-white"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  {item.label}
                  <span className={cx("text-xs", isActive(item.href) ? "text-white/70" : "text-slate-400")}>
                    →
                  </span>
                </Link>
              ))}

              <div className="mt-2 grid gap-2 px-2 pb-2">
                <a
                  href="tel:+33123456789"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
                >
                  Appeler
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
                >
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
