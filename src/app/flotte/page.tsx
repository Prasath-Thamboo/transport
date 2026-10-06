import Image from "next/image";
import { CheckCircle } from "@phosphor-icons/react/ssr";
import Section from "@/components/Section";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Flotte et moyens" };

// Composition de la flotte de démonstration (fictive). Capacités = standards du marché.
const FLEET = [
  {
    name: "Semi-remorque tautliner",
    count: 22,
    pallets: 33,
    specs: [
      ["Charge utile", "24 t"],
      ["Longueur utile", "13,6 m"],
      ["Usage", "Lots complets, longue distance"],
    ],
  },
  {
    name: "Porteur 19 t",
    count: 10,
    pallets: 18,
    specs: [
      ["Charge utile", "9 t"],
      ["Équipement", "Hayon 1,5 t"],
      ["Usage", "Groupage, livraisons urbaines"],
    ],
  },
  {
    name: "Porteur frigorifique",
    count: 6,
    pallets: 16,
    specs: [
      ["Charge utile", "7,5 t"],
      ["Température", "-25 °C à +25 °C"],
      ["Usage", "Agroalimentaire, santé"],
    ],
  },
  {
    name: "Utilitaire 20 m³",
    count: 8,
    pallets: 6,
    specs: [
      ["Charge utile", "1 t"],
      ["Équipement", "Hayon, sangles"],
      ["Usage", "Express, centre-ville"],
    ],
  },
];

const SAFETY = [
  "Entretien préventif réalisé dans notre atelier de Rungis",
  "Contrôle du véhicule et de l'arrimage avant chaque départ",
  "Conducteurs salariés, formés FIMO, FCO et ADR",
  "Tracteurs aux normes Euro VI, renouvelés tous les 5 ans",
];

export default function FlottePage() {
  return (
    <>
      {/* En-tête : image à gauche, texte à droite */}
      <section className="pt-10 sm:pt-14">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <Reveal className="relative order-last aspect-[4/3] overflow-hidden rounded-2xl lg:order-first lg:aspect-[1/1]">
              <Image
                src="/images/remorque-crepuscule.jpg"
                alt="Semi-remorque en mouvement sur une route au crépuscule"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </Reveal>

            <Reveal delay={100}>
              <p className="eyebrow">Flotte et moyens</p>
              <h1 className="display mt-5 text-[clamp(2.4rem,4vw,3.25rem)] text-text">
                46 véhicules, entretenus chez nous.
              </h1>
              <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-text-muted">
                Des semi-remorques aux utilitaires, chaque envoi part dans le véhicule
                adapté à son volume et à ses contraintes.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Composition de la flotte */}
      <Section>
        <Reveal>
          <h2 className="display max-w-[20ch] text-[clamp(2rem,3.6vw,3rem)] text-text">
            Quatre types de véhicules.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {FLEET.map((v, i) => (
            <Reveal
              key={v.name}
              delay={(i % 2) * 100}
              className="rounded-2xl border border-border bg-surface p-7 transition-shadow duration-300 hover:shadow-soft sm:p-9"
            >
              <div className="flex items-start justify-between gap-6">
                <h3 className="text-xl font-semibold text-text [font-stretch:112%]">{v.name}</h3>
                <span className="shrink-0 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold tabular-nums text-accent-ink">
                  {v.count} en service
                </span>
              </div>

              <p className="mt-8 flex items-baseline gap-2">
                <span className="display text-6xl tabular-nums text-text">{v.pallets}</span>
                <span className="text-sm text-text-muted">palettes europe</span>
              </p>

              <dl className="mt-8 grid gap-3 border-t border-border pt-6 text-sm">
                {v.specs.map(([k, val]) => (
                  <div key={k} className="flex justify-between gap-4">
                    <dt className="text-text-muted">{k}</dt>
                    <dd className="text-right font-medium text-text">{val}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Sécurité : texte + image */}
      <Section className="border-t border-border bg-surface">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <Reveal>
            <h2 className="display text-[clamp(2rem,3.6vw,3rem)] text-text">
              Sécurité et conformité.
            </h2>
            <p className="mt-5 max-w-[50ch] text-base leading-relaxed text-text-muted">
              Une marchandise bien arrimée, un véhicule contrôlé et un conducteur
              formé : c&apos;est la condition d&apos;une livraison à l&apos;heure.
            </p>
            <ul className="mt-8 space-y-4">
              {SAFETY.map((s) => (
                <li key={s} className="flex gap-3 text-sm leading-relaxed text-text">
                  <CheckCircle size={20} weight="fill" className="mt-0.5 shrink-0 text-accent" aria-hidden />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src="/images/camion-brouillard.jpg"
              alt="Porteur roulant dans le brouillard, feux arrière allumés"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </Reveal>
        </div>
      </Section>

      <CTA className="pt-20 sm:pt-28" />
    </>
  );
}
