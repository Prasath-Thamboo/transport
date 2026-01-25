import Link from "next/link";
import Container from "./Container";
import Image from "next/image";

const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
    {children}
  </div>
);

export default function Hero() {
  return (
    <div className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
      <Container>
        <div className="py-16 sm:py-20 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-2">
              <Badge>Interlocuteur unique</Badge>
              <Badge>Suivi & traçabilité</Badge>
              <Badge>Départs réguliers</Badge>
              <Badge>Assurance marchandise</Badge>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
              Transport routier de marchandises,
              <span className="block text-slate-900">fiable et réactif.</span>
            </h1>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Lots complets ou partiels, dédié, express : des délais tenus, une communication
              claire et une solution adaptée à vos contraintes B2B.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
              >
                Demander un devis
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 transition"
              >
                Voir nos services
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-sm font-semibold text-slate-900">Ponctualité</div>
                <div className="mt-1 text-xs text-slate-600">Planification & RDV</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-sm font-semibold text-slate-900">Sécurité</div>
                <div className="mt-1 text-xs text-slate-600">Process & conformité</div>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-sm font-semibold text-slate-900">Réactivité</div>
                <div className="mt-1 text-xs text-slate-600">Dédié / Express</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border border-slate-200 bg-white shadow-soft overflow-hidden transition hover:-translate-y-0.5 hover:shadow-[0_18px_50px_rgba(2,6,23,0.16)]">
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

                {/* Overlay premium (contraste + profondeur) */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/15 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]" />

                {/* Badge en haut à gauche */}
                <div className="absolute left-4 top-4">
                  <div className="rounded-full border border-white/15 bg-black/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    Suivi & traçabilité
                  </div>
                </div>

                {/* Micro-infos en bas (style premium) */}
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
                <div className="text-sm font-semibold text-slate-900">Réponse rapide</div>
                <p className="mt-2 text-sm text-slate-600">
                  Indiquez départ/arrivée, volume, contraintes. On revient vers vous avec une solution et un planning.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-700">
                    RDV / horaires
                  </div>
                  <div className="rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-700">
                    Accès / hayon
                  </div>
                  <div className="rounded-xl border border-slate-200 px-3 py-2 text-xs text-slate-700">
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
