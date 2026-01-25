import Section from "@/components/Section";
import Card from "@/components/Card";
import CTA from "@/components/CTA";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <Section>
        <h1 className="text-3xl font-semibold text-slate-900">Services</h1>
        <p className="mt-3 text-sm text-slate-600 max-w-2xl">
          Solutions de transport routier adaptées aux contraintes B2B : délais, RDV, volumes, sécurité.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card title="Transport régional">Tournées et flux réguliers, souplesse opérationnelle.</Card>
          <Card title="Transport national">Couverture France, organisation et planification.</Card>
          <Card title="Transport international">Selon zones (à préciser) et contraintes douanières.</Card>
          <Card title="Lots complets (FTL)">Camion complet, solution directe et optimisée.</Card>
          <Card title="Lots partiels (LTL)">Groupage, maîtrise coûts/délais selon volumes.</Card>
          <Card title="Dédié / Express">Véhicule dédié, délai court, communication prioritaire.</Card>
          <Card title="Affrètement">Capacité ponctuelle et gestion pics d’activité.</Card>
          <Card title="Sur-mesure">Contraintes spécifiques : RDV, accès, horaires, etc.</Card>
          <Card title="Options">Hayon / ADR / Frigo / Plateau (à confirmer selon flotte).</Card>
        </div>
      </Section>

      <Section className="bg-slate-50 border-y border-slate-200">
        <CTA />
      </Section>
    </>
  );
}
