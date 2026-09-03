import Link from "next/link";
import Container from "./Container";
import Image from "next/image";

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="badge badge-dot">{children}</div>
);

const STATS = [
  { value: "98%", label: "Ponctualité", hint: "Planification & RDV" },
  { value: "< 2 h", label: "Réactivité", hint: "Dédié / Express" },
  { value: "24/7", label: "Suivi", hint: "Traçabilité continue" },
];

export default function Hero() {
  return (
    <div className="relative overflow-hidden border-b border-border bg-bg">
      {/* Halo bleu subtil + grille discrète */}
      <div className="pointer-events-none absolute inset-0">
        <div className="float-slow absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-brand/10 blur-3xl" />
        <div className="float-slower absolute -bottom-56 -left-24 h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.5] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)] bg-[linear-gradient(to_right,#0d15260a_1px,transparent_1px),linear-gradient(to_bottom,#0d15260a_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <Container>
        <div className="relative grid gap-12 py-16 sm:py-24 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="animate-fade-up flex flex-wrap gap-2">
              <Badge>Interlocuteur unique</Badge>
              <Badge>Suivi &amp; traçabilité</Badge>
              <Badge>Départs réguliers</Badge>
              <Badge>Assurance marchandise</Badge>
            </div>

            <h1 className="animate-fade-up anim-delay-1 mt-7 text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight text-text">
              Transport routier de marchandises,{" "}
              <span className="bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">
                fiable et réactif.
              </span>
            </h1>

            <p className="animate-fade-up anim-delay-2 mt-5 max-w-xl text-base leading-7 text-text-muted">
              Lots complets ou partiels, dédié, express : des délais tenus, une
              communication claire et une solution adaptée à vos contraintes B2B.
            </p>

            <div className="animate-fade-up anim-delay-3 mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-primary">
                Demander un devis
                <span aria-hidden>→</span>
              </Link>
              <Link href="/services" className="btn btn-secondary">
                Voir nos services
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-4">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={`animate-fade-up anim-delay-${i + 4} rounded-2xl border border-border bg-surface p-4 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-lift`}
                >
                  <dd className="text-2xl font-extrabold tracking-tight text-brand">
                    {s.value}
                  </dd>
                  <dt className="mt-1 text-sm font-semibold text-text">
                    {s.label}
                  </dt>
                  <p className="mt-0.5 text-xs text-text-muted">{s.hint}</p>
                </div>
              ))}
            </dl>
          </div>

          <div className="animate-fade-in anim-delay-2 lg:col-span-5">
            <div className="group relative overflow-hidden rounded-3xl border border-border bg-surface shadow-lift transition-transform duration-300 hover:-translate-y-1">
              <div className="relative aspect-[16/11] w-full">
                <Image
                  src="/hero.png"
                  alt="Transport routier / logistique"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(min-width: 1024px) 440px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d1526]/55 via-[#0d1526]/10 to-transparent" />

                <div className="absolute left-4 top-4">
                  <div className="rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                    Suivi &amp; traçabilité
                  </div>
                </div>

                <div className="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-2">
                  {[
                    ["FTL / LTL", "Selon volumes"],
                    ["Dédié", "Délai court"],
                    ["Affrètement", "Capacité flexible"],
                  ].map(([t, s]) => (
                    <div
                      key={t}
                      className="rounded-xl border border-white/20 bg-white/15 px-3 py-2 backdrop-blur-md transition-colors duration-200 hover:bg-white/25"
                    >
                      <div className="text-xs font-semibold text-white">{t}</div>
                      <div className="mt-0.5 text-[11px] text-white/80">{s}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <div className="text-sm font-semibold text-text">
                  Réponse rapide <span className="text-brand">•</span> Devis sans
                  engagement
                </div>
                <p className="mt-2 text-sm leading-6 text-text-muted">
                  Indiquez départ/arrivée, volume, contraintes. On revient vers
                  vous avec une solution et un planning.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {["RDV / horaires", "Accès / hayon", "Marchandise sensible"].map(
                    (t) => (
                      <span
                        key={t}
                        className="rounded-lg border border-border bg-surface-2 px-3 py-1.5 text-xs text-text-muted transition-colors hover:border-border-strong hover:text-text"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
