import Section from "@/components/Section";
import Card from "@/components/Card";
import CTA from "@/components/CTA";

export const metadata = { title: "Flotte & moyens" };

export default function FlottePage() {
  return (
    <>
      {/* Intro */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <span className="inline-flex items-center rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-text-muted">
              Moyens maîtrisés & conformes
            </span>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-text">
              Flotte & moyens
              <span className="block text-gold">au service de vos flux B2B</span>
            </h1>

            <p className="mt-4 text-sm leading-6 text-text-muted max-w-md">
              Une flotte adaptée aux contraintes professionnelles et des process
              éprouvés pour garantir sécurité, ponctualité et traçabilité.
            </p>

            {/* Preuves */}
            <ul className="mt-6 space-y-3 text-sm text-text-muted">
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Véhicules entretenus et contrôlés régulièrement
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Conducteurs formés aux exigences clients
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                Respect des procédures de sécurité et de conformité
              </li>
            </ul>
          </div>

          {/* Cartes synthèse */}
          <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
            <Card title="Types de véhicules">
              Porteurs et semi-remorques adaptés aux flux professionnels
              (tautliner, plateau, autres selon besoin).
            </Card>

            <Card title="Capacités">
              Gestion des volumes, palettes et contraintes de chargement
              selon vos marchandises et délais.
            </Card>

            <Card title="Sécurité">
              Procédures d’arrimage, contrôles avant départ et respect des
              consignes spécifiques site.
            </Card>

            <Card title="Traçabilité">
              Suivi des transports, points de passage et confirmations de
              livraison.
            </Card>
          </div>
        </div>
      </Section>

      {/* Détails & réassurance */}
      <Section className="bg-muted border-y border-border">
        <h2 className="text-3xl font-semibold tracking-tight text-text">
          Sécurité, conformité et fiabilité
        </h2>

        <p className="mt-3 text-sm leading-6 text-text-muted max-w-2xl">
          Au-delà des véhicules, nous mettons en œuvre des procédures claires
          pour garantir la protection des marchandises et le respect des
          engagements clients.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="Assurance marchandises">
            Couverture adaptée aux marchandises transportées (niveau communiqué
            sur demande).
          </Card>

          <Card title="Qualité de service">
            Ponctualité, communication proactive et gestion anticipée des aléas.
          </Card>

          <Card title="Conformité réglementaire">
            Respect des règles de transport routier et des exigences
            professionnelles.
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <CTA />
      </Section>
    </>
  );
}
