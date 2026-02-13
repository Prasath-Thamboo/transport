import Link from "next/link";
import Container from "./Container";
import Image from "next/image";

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-text-muted">
    {children}
  </div>
);

export default function Hero() {
  return (
    <div className="relative overflow-hidden border-b border-border bg-bg">
      {/* Lueur premium subtile */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-gold/5 blur-3xl" />
      </div>

      <Container>
        <div className="relative py-16 sm:py-20 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-2">
              <Badge>Interlocuteur unique</Badge>
              <Badge>Suivi & traçabilité</Badge>
              <Badge>Départs réguliers</Badge>
              <Badge>Assurance marchandise</Badge>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-text">
              Transport routier de marchandises,
              <span className="block text-gold">fiable et réactif.</span>
            </h1>

            <p className="mt-5 text-base leading-7 text-text-muted">
              Lots complets ou partiels, dédié, express : des délais tenus, une communication
              claire et une solution adaptée à vos contraintes B2B.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-gold px-6 py-3 text-sm font-semibold text-black hover:bg-gold-2 transition shadow-[0_10px_25px_rgba(0,0,0,0.55)]"
              >
                Demander un devis
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-surface px-6 py-3 text-sm font-semibold text-text hover:bg-muted transition"
              >
                Voir nos services
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-border bg-surface p-4 shadow-soft">
                <div className="text-sm font-semibold text-text">Ponctualité</div>
                <div className="text-gold text-3xl">TEST GOLD</div>
                <div className="mt-1 text-xs text-text-muted">Planification & RDV</div>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-4 shadow-soft">
                <div className="text-sm font-semibold text-text">Sécurité</div>
                <div className="mt-1 text-xs text-text-muted">Process & conformité</div>
              </div>
              <div className="rounded-2xl border border-border bg-surface p-4 shadow-soft">
                <div className="text-sm font-semibold text-text">Réactivité</div>
                <div className="mt-1 text-xs text-text-muted">Dédié / Express</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-border bg-surface shadow-soft overflow-hidden transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(0,0,0,0.65)]">
              {/* Liseré OR subtil */}
              <div className="pointer-events-none absolute inset-0 ring-1 ring-gold/10 rounded-3xl" />

              {/* Zone image : ratio stable */}
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src="/hero.png"
                  alt="Transport routier / logistique"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 1024px) 420px, 100vw"
                />

                {/* Overlay premium (or + profondeur) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.18),transparent_55%)]" />

                {/* Badge en haut à gauche */}
                <div className="absolute left-4 top-4">
                  <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    Suivi & traçabilité
                  </div>
                </div>

                {/* Micro-infos en bas */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="grid grid-cols-3 gap-2">
                    <div className="rounded-2xl border border-white/10 bg-white/10 px-3 py-2 backdrop-blur">
                      <div className="text-xs font-semibold text-white">FTL / LTL</div>
                      <div className="mt-0.5 text-[11px] text-white/75">Selon volumes</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/10 px-3 py-2 backdrop-blur">
                      <div className="text-xs font-semibold text-white">Dédié</div>
                      <div className="mt-0.5 text-[11px] text-white/75">Délai court</div>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-white/10 px-3 py-2 backdrop-blur">
                      <div className="text-xs font-semibold text-white">Affrètement</div>
                      <div className="mt-0.5 text-[11px] text-white/75">Capacité flexible</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Zone texte sous l’image */}
              <div className="p-6">
                <div className="text-sm font-semibold text-text">
                  Réponse rapide <span className="text-gold">•</span> Devis sans engagement
                </div>
                <p className="mt-2 text-sm text-text-muted">
                  Indiquez départ/arrivée, volume, contraintes. On revient vers vous avec une solution et un planning.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="rounded-xl border border-border bg-bg px-3 py-2 text-xs text-text-muted">
                    RDV / horaires
                  </div>
                  <div className="rounded-xl border border-border bg-bg px-3 py-2 text-xs text-text-muted">
                    Accès / hayon
                  </div>
                  <div className="rounded-xl border border-border bg-bg px-3 py-2 text-xs text-text-muted">
                    Marchandise sensible
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
