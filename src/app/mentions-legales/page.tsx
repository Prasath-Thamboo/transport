import Section from "@/components/Section";

export const metadata = { title: "Mentions légales" };

export default function MentionsLegales() {
  return (
    <Section>
      <h1 className="text-3xl font-semibold text-slate-900">Mentions légales</h1>
      <div className="mt-6 prose prose-slate max-w-none">
        <p>Renseigner : raison sociale, forme juridique, adresse, SIRET, TVA, responsable de publication, hébergeur.</p>
      </div>
    </Section>
  );
}
