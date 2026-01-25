import Section from "@/components/Section";
import Card from "@/components/Card";
import CTA from "@/components/CTA";

export const metadata = { title: "Flotte & moyens" };

export default function FlottePage() {
  return (
    <>
      <Section>
        <h1 className="text-3xl font-semibold text-slate-900">Flotte & moyens</h1>
        <p className="mt-3 text-sm text-slate-600 max-w-2xl">
          Présente ici les types de véhicules, capacités et engagements (sécurité, conformité, assurance).
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="Types de véhicules">Porteurs, semi, tautliner, frigo, plateau, etc.</Card>
          <Card title="Capacités">Poids/volume/palettes, dimensions, contraintes de chargement.</Card>
          <Card title="Sécurité">Arrimage, procédures, contrôle, documentation.</Card>
          <Card title="Traçabilité">Suivi, points de passage, confirmation de livraison.</Card>
          <Card title="Assurance">Marchandises transportées (niveau à préciser).</Card>
          <Card title="Qualité">Ponctualité, communication proactive, gestion des aléas.</Card>
        </div>
      </Section>

      <Section className="bg-slate-50 border-y border-slate-200">
        <CTA />
      </Section>
    </>
  );
}
