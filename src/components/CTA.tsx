import Link from "next/link";
import { ArrowRight, Phone } from "@phosphor-icons/react/ssr";
import Container from "./Container";
import Reveal from "./Reveal";
import { COMPANY } from "@/lib/company";

/** Bandeau de conversion final, commun à toutes les pages. */
export default function CTA({
  title = "Un transport à organiser ?",
  className = "",
}: {
  title?: string;
  className?: string;
}) {
  return (
    <section className={`pb-20 sm:pb-28 ${className}`}>
      <Container>
        <Reveal y={28}>
          <div className="relative overflow-hidden rounded-2xl bg-accent px-6 py-14 text-on-accent sm:px-12 sm:py-16 lg:px-16">
            {/* Bandes de signalisation, en filigrane */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 opacity-[0.12] lg:block"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(-45deg, currentColor 0 22px, transparent 22px 44px)",
              }}
            />

            <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
              <div>
                <h2 className="display text-[clamp(2rem,3.6vw,3rem)]">{title}</h2>
                <p className="mt-5 max-w-[52ch] text-base leading-relaxed opacity-90">
                  Indiquez le départ, l&apos;arrivée et le volume. Vous recevez une
                  proposition chiffrée et un planning sous 2 heures ouvrées.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link
                  href="/contact"
                  className="btn group bg-on-accent px-6 py-3.5 text-accent-ink hover:opacity-90"
                >
                  Demander un devis
                  <ArrowRight
                    size={16}
                    weight="bold"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden
                  />
                </Link>
                <a
                  href={COMPANY.phoneHref}
                  className="btn border border-current/40 px-6 py-3.5 tabular-nums hover:bg-on-accent/10"
                >
                  <Phone size={16} weight="bold" aria-hidden />
                  {COMPANY.phone}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
