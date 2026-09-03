import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Texte de contexte */}
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Transport routier B2B</p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Une logistique fiable,
              <span className="block text-brand">sans frictions opérationnelles</span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-text-muted">
              Nous accompagnons les professionnels avec des solutions de transport claires,
              planifiées et suivies, pour garantir le respect de vos délais et engagements clients.
            </p>

            {/* Mini preuves */}
            <ul className="mt-6 space-y-3 text-sm text-text-muted">
              {[
                "Interlocuteur unique du devis à la livraison",
                "Planification précise et gestion des contraintes",
                "Communication proactive en cas d’aléa",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Cartes services */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {[
              {
                title: "Lots complets & partiels",
                body: "Transport FTL et LTL, organisation optimisée selon vos volumes, délais et contraintes de chargement.",
              },
              {
                title: "Dédié / Express",
                body: "Véhicule dédié, prise en charge rapide et suivi prioritaire pour les flux urgents ou sensibles.",
              },
              {
                title: "Affrètement",
                body: "Capacité flexible pour absorber vos pics d’activité grâce à notre réseau de partenaires qualifiés.",
              },
              {
                title: "Suivi & traçabilité",
                body: "Points de passage, confirmations de livraison et information continue tout au long du transport.",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 90}>
                <Card title={c.title}>{c.body}</Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-y border-border bg-surface-2">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Process simple &amp; maîtrisé</p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-text sm:text-4xl">
            Comment ça marche
          </h2>

          <p className="mt-3 text-sm leading-6 text-text-muted">
            Une organisation claire en trois étapes pour garantir des délais tenus
            et une communication fluide, du premier contact à la livraison.
          </p>
        </Reveal>

        <div className="relative mt-10 grid gap-4 lg:grid-cols-3">
          {/* Ligne de liaison (desktop) */}
          <div className="pointer-events-none absolute inset-x-0 top-8 hidden lg:block">
            <div className="mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-brand/30 to-transparent" />
          </div>

          {[
            {
              title: "1) Demande",
              body: "Vous nous transmettez les informations clés : départ, arrivée, volumes et contraintes spécifiques (RDV, hayon, ADR, etc.).",
            },
            {
              title: "2) Proposition",
              body: "Nous analysons votre besoin et vous proposons une solution adaptée avec un planning précis et un tarif clair.",
            },
            {
              title: "3) Exécution",
              body: "Enlèvement, transport et livraison avec suivi, traçabilité et confirmation finale.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <Card title={c.title}>{c.body}</Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal y={28}>
          <CTA />
        </Reveal>
      </Section>
    </>
  );
}
