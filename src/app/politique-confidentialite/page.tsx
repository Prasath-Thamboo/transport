import Section from "@/components/Section";

export const metadata = { title: "Politique de confidentialité" };

export default function Politique() {
  return (
    <Section>
      <h1 className="text-3xl font-semibold text-slate-900">Politique de confidentialité</h1>
      <div className="mt-6 prose prose-slate max-w-none">
        <p>Décrire : données collectées (formulaire), finalités (recontact), base légale, durée de conservation, droits RGPD, contact DPO, etc.</p>
      </div>
    </Section>
  );
}
