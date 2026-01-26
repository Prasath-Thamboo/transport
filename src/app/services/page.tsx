import Section from "@/components/Section";
import Card from "@/components/Card";
import CTA from "@/components/CTA";

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
    <ul className="mt-4 space-y-2 text-sm text-slate-700">
      {items.map((it) => (
        <li key={it} className="flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
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
          <div className="lg:col-span-5">
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
              Une offre claire, pensée pour les professionnels
            </span>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900">
              Services de transport routier
              <span className="block">adaptés à vos contraintes B2B</span>
            </h1>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              Lots complets ou partiels, dédié/express, affrètement : nous construisons
              une solution planifiée, suivie et conforme à vos exigences (RDV, accès, sécurité).
            </p>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
              <div className="text-sm font-semibold text-slate-900">Ce que vous gagnez</div>
              <BulletList items={["Interlocuteur unique", "Planning précis", "Suivi & traçabilité"]} />
            </div>
          </div>

          {/* Cartes de synthèse */}
          <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
            <Card title="FTL / LTL">
              Lots complets et partiels selon volumes, délais et contraintes de chargement.
              <BulletList items={["Optimisation coût/délai", "Moins d’imprévus", "Livraison confirmée"]} />
            </Card>

            <Card title="Dédié / Express">
              Pour l’urgence ou la sensibilité : véhicule dédié et suivi prioritaire.
              <BulletList items={["Prise en charge rapide", "Communication proactive", "Traçabilité"]} />
            </Card>

            <Card title="Affrètement">
              Capacité flexible via un réseau partenaires sélectionnés et pilotés.
              <BulletList items={["Absorption pics", "Flexibilité", "Pilotage"]} />
            </Card>

            <Card title="Sur-mesure">
              RDV, accès, horaires, procédures site : on s’adapte à votre organisation.
              <BulletList items={["Analyse", "Planning", "Exécution"]} />
            </Card>
          </div>
        </div>
      </Section>

      {/* Grille complète */}
      <Section className="bg-slate-50 border-y border-slate-200">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            Détail des prestations
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl">
            Une couverture modulable selon vos flux. Ajustez le niveau de service en fonction
            de l’urgence, des volumes et des contraintes.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Card key={s.title} title={s.title}>
              {s.desc}
              <BulletList items={s.bullets} />
            </Card>
          ))}
        </div>
      </Section>

      {/* Réassurance */}
      <Section>
        <div className="grid gap-4 lg:grid-cols-3">
          <Card title="Communication claire">
            Point de contact unique et informations utiles à chaque étape.
          </Card>
          <Card title="Sécurité & conformité">
            Process de transport, documentation et exigences site respectées.
          </Card>
          <Card title="Ponctualité">
            Planification rigoureuse et gestion proactive des aléas.
          </Card>
        </div>

        <div className="mt-10">
          <CTA />
        </div>
      </Section>
    </>
  );
}
