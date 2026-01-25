import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Card from "@/components/Card";
import CTA from "@/components/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-semibold text-slate-900">
              Une logistique B2B sans frictions
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Un interlocuteur unique, une planification claire, et une communication proactive
              pour sécuriser vos délais.
            </p>
          </div>

          <div className="lg:col-span-7 grid gap-4 sm:grid-cols-2">
            <Card title="Lots complets & partiels">
              FTL/LTL, organisation optimisée selon volumes, contraintes et délais.
            </Card>
            <Card title="Dédié / Express">
              Prise en charge rapide, véhicule dédié, suivi simple.
            </Card>
            <Card title="Affrètement">
              Capacité flexible selon vos pics d’activité, réseau partenaires.
            </Card>
            <Card title="Suivi & traçabilité">
              Points de passage, confirmations, gestion proactive des aléas.
            </Card>
          </div>
        </div>
      </Section>

      <Section className="bg-slate-50 border-y border-slate-200">
        <h2 className="text-2xl font-semibold text-slate-900">Comment ça marche</h2>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <Card title="1) Demande" >
            Départ/arrivée, volume, contraintes (RDV, hayon, ADR, etc.).
          </Card>
          <Card title="2) Proposition">
            Solution + planning + prix clair. Ajustements rapides si nécessaire.
          </Card>
          <Card title="3) Exécution">
            Enlèvement, transport, livraison + confirmation et traçabilité.
          </Card>
        </div>
      </Section>

      <Section>
        <CTA />
      </Section>
    </>
  );
}
