import Section from "@/components/Section";
import Card from "@/components/Card";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Flotte & moyens" };

const SYNTHESE = [
  {
    title: "Types de véhicules",
    body: "Porteurs et semi-remorques adaptés aux flux professionnels (tautliner, plateau, autres selon besoin).",
  },
  {
    title: "Capacités",
    body: "Gestion des volumes, palettes et contraintes de chargement selon vos marchandises et délais.",
  },
  {
    title: "Sécurité",
    body: "Procédures d’arrimage, contrôles avant départ et respect des consignes spécifiques site.",
  },
  {
    title: "Traçabilité",
    body: "Suivi des transports, points de passage et confirmations de livraison.",
  },
];

const REASSURANCE = [
  {
    title: "Assurance marchandises",
    body: "Couverture adaptée aux marchandises transportées (niveau communiqué sur demande).",
  },
  {
    title: "Qualité de service",
    body: "Ponctualité, communication proactive et gestion anticipée des aléas.",
  },
  {
    title: "Conformité réglementaire",
    body: "Respect des règles de transport routier et des exigences professionnelles.",
  },
];

export default function FlottePage() {
  return (
    <>
      {/* Intro */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Moyens maîtrisés &amp; conformes</p>

            <h1 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.08] tracking-tight text-text">
              Flotte &amp; moyens
              <span className="block text-brand">au service de vos flux B2B</span>
            </h1>

            <p className="mt-4 max-w-md text-sm leading-6 text-text-muted">
              Une flotte adaptée aux contraintes professionnelles et des process
              éprouvés pour garantir sécurité, ponctualité et traçabilité.
            </p>

            {/* Preuves */}
            <ul className="mt-6 space-y-3 text-sm text-text-muted">
              {[
                "Véhicules entretenus et contrôlés régulièrement",
                "Conducteurs formés aux exigences clients",
                "Respect des procédures de sécurité et de conformité",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Cartes synthèse */}
          <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
            {SYNTHESE.map((c, i) => (
              <Reveal key={c.title} delay={60 + i * 90}>
                <Card title={c.title}>{c.body}</Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Détails & réassurance */}
      <Section className="border-y border-border bg-surface-2">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Sécurité, conformité et fiabilité
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-text-muted">
            Au-delà des véhicules, nous mettons en œuvre des procédures claires
            pour garantir la protection des marchandises et le respect des
            engagements clients.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REASSURANCE.map((c, i) => (
            <Reveal key={c.title} delay={i * 110}>
              <Card title={c.title}>{c.body}</Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <Reveal y={28}>
          <CTA />
        </Reveal>
      </Section>
    </>
  );
}
