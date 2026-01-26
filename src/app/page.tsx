import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          {/* Texte de contexte */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
              Transport routier B2B
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
              Une logistique fiable,
              <span className="block">sans frictions opérationnelles</span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-slate-600">
              Nous accompagnons les professionnels avec des solutions de transport claires,
              planifiées et suivies, pour garantir le respect de vos délais et engagements clients.
            </p>

            {/* Mini preuves */}
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                Interlocuteur unique du devis à la livraison
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                Planification précise et gestion des contraintes
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-slate-900" />
                Communication proactive en cas d’aléa
              </li>
            </ul>
          </div>

          {/* Cartes services */}
          <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
            <Card title="Lots complets & partiels">
              Transport FTL et LTL, organisation optimisée selon vos volumes, délais
              et contraintes de chargement.
            </Card>

            <Card title="Dédié / Express">
              Véhicule dédié, prise en charge rapide et suivi prioritaire pour les
              flux urgents ou sensibles.
            </Card>

            <Card title="Affrètement">
              Capacité flexible pour absorber vos pics d’activité grâce à notre
              réseau de partenaires qualifiés.
            </Card>

            <Card title="Suivi & traçabilité">
              Points de passage, confirmations de livraison et information continue
              tout au long du transport.
            </Card>
          </div>
        </div>
      </Section>


      <Section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
            Process simple & maîtrisé
          </span>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
            Comment ça marche
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Une organisation claire en trois étapes pour garantir des délais tenus
            et une communication fluide, du premier contact à la livraison.
          </p>
        </div>

        <div className="relative mt-10 grid gap-4 lg:grid-cols-3">
          {/* Ligne de liaison (desktop) */}
          

          <Card title="1) Demande">
            Vous nous transmettez les informations clés : départ, arrivée, volumes
            et contraintes spécifiques (RDV, hayon, ADR, etc.).
          </Card>

          <Card title="2) Proposition">
            Nous analysons votre besoin et vous proposons une solution adaptée avec
            un planning précis et un tarif clair.
          </Card>

          <Card title="3) Exécution">
            Enlèvement, transport et livraison avec suivi, traçabilité et
            confirmation finale.
          </Card>
        </div>
      </Section>


      <Section>
        <CTA />
      </Section>
    </>
  );
}
