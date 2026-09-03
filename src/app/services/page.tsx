import Section from "@/components/Section";
import Card from "@/components/Card";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Services" };

const SERVICES = [
  {
    title: "Transport régional",
    desc: "Tournées et flux réguliers, souplesse opérationnelle et maîtrise des délais.",
    bullets: ["Départs planifiés", "Gestion RDV", "Suivi simple"],
  },
  {
    title: "Transport national",
    desc: "Couverture France, planification rigoureuse, communication proactive.",
    bullets: ["FTL / LTL", "Accès & contraintes", "Confirmation livraison"],
  },
  {
    title: "Transport international",
    desc: "Organisation selon zones couvertes, contraintes et exigences documentaires.",
    bullets: ["Selon destination", "Coordination", "Traçabilité"],
  },
  {
    title: "Lots complets (FTL)",
    desc: "Camion dédié à votre marchandise, solution directe et optimisée.",
    bullets: ["Délais courts", "Moins de ruptures", "Flux sécurisés"],
  },
  {
    title: "Lots partiels (LTL)",
    desc: "Groupage maîtrisé pour optimiser coût/délai selon vos volumes.",
    bullets: ["Flexible", "Optimisation", "Suivi clair"],
  },
  {
    title: "Dédié / Express",
    desc: "Prise en charge rapide, véhicule dédié et suivi prioritaire.",
    bullets: ["Urgences", "Marchandises sensibles", "Communication proactive"],
  },
  {
    title: "Affrètement",
    desc: "Capacité flexible pour absorber vos pics d’activité (réseau partenaires).",
    bullets: ["Capacité", "Flexibilité", "Pilotage"],
  },
  {
    title: "Solutions sur mesure",
    desc: "Contraintes spécifiques : RDV, horaires, accès, procédures site, etc.",
    bullets: ["Analyse besoin", "Planning clair", "Interlocuteur unique"],
  },
  {
    title: "Options (selon flotte)",
    desc: "Hayon / ADR / Frigo / Plateau — à confirmer selon équipements.",
    bullets: ["Équipements", "Conformité", "Sécurité"],
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2 text-sm text-text-muted">
      {items.map((it) => (
        <li key={it} className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
          {it}
        </li>
      ))}
    </ul>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Intro premium */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Une offre claire, pensée pour les professionnels</p>

            <h1 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.08] tracking-tight text-text">
              Services de transport routier
              <span className="block text-brand">adaptés à vos contraintes B2B</span>
            </h1>

            <p className="mt-4 text-sm leading-6 text-text-muted">
              Lots complets ou partiels, dédié/express, affrètement : nous construisons
              une solution planifiée, suivie et conforme à vos exigences (RDV, accès, sécurité).
            </p>

            <div className="mt-6 rounded-2xl border border-border bg-surface p-5 shadow-soft">
              <div className="text-sm font-semibold text-text">Ce que vous gagnez</div>
              <BulletList
                items={["Interlocuteur unique", "Planning précis", "Suivi & traçabilité"]}
              />
            </div>
          </Reveal>

          {/* Cartes de synthèse */}
          <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
            <Reveal delay={60}>
              <Card title="FTL / LTL">
                Lots complets et partiels selon volumes, délais et contraintes de chargement.
                <BulletList
                  items={["Optimisation coût/délai", "Moins d’imprévus", "Livraison confirmée"]}
                />
              </Card>
            </Reveal>

            <Reveal delay={140}>
              <Card title="Dédié / Express">
                Pour l’urgence ou la sensibilité : véhicule dédié et suivi prioritaire.
                <BulletList
                  items={["Prise en charge rapide", "Communication proactive", "Traçabilité"]}
                />
              </Card>
            </Reveal>

            <Reveal delay={220}>
              <Card title="Affrètement">
                Capacité flexible via un réseau partenaires sélectionnés et pilotés.
                <BulletList items={["Absorption pics", "Flexibilité", "Pilotage"]} />
              </Card>
            </Reveal>

            <Reveal delay={300}>
              <Card title="Sur-mesure">
                RDV, accès, horaires, procédures site : on s’adapte à votre organisation.
                <BulletList items={["Analyse", "Planning", "Exécution"]} />
              </Card>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Grille complète */}
      <Section className="border-y border-border bg-surface-2">
        <Reveal className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Détail des prestations
          </h2>
          <p className="text-sm text-text-muted max-w-2xl">
            Une couverture modulable selon vos flux. Ajustez le niveau de service en fonction
            de l’urgence, des volumes et des contraintes.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 90}>
              <Card title={s.title}>
                {s.desc}
                <BulletList items={s.bullets} />
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Réassurance */}
      <Section>
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              title: "Communication claire",
              body: "Point de contact unique et informations utiles à chaque étape.",
            },
            {
              title: "Sécurité & conformité",
              body: "Process de transport, documentation et exigences site respectées.",
            },
            {
              title: "Ponctualité",
              body: "Planification rigoureuse et gestion proactive des aléas.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 110}>
              <Card title={c.title}>{c.body}</Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10" y={28}>
          <CTA />
        </Reveal>
      </Section>
    </>
  );
}
