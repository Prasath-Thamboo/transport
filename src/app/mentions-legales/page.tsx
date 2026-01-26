import Section from "@/components/Section";

export const metadata = { title: "Mentions légales" };

export default function MentionsLegales() {
  return (
    <Section>
      <h1 className="text-3xl font-semibold text-slate-900">Mentions légales</h1>

      <div className="mt-8 space-y-6 text-sm leading-6 text-slate-700 max-w-3xl">
        <p>
          Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la
          confiance dans l’économie numérique, il est précisé aux utilisateurs du
          site l’identité des différents intervenants dans le cadre de sa réalisation
          et de son suivi.
        </p>

        <div>
          <h2 className="text-base font-semibold text-slate-900">Éditeur du site</h2>
          <p>
            Raison sociale : <strong>[Nom de l’entreprise]</strong><br />
            Forme juridique : <strong>[SARL / SAS / EI / etc.]</strong><br />
            Capital social : <strong>[Montant]</strong><br />
            Siège social : <strong>[Adresse complète]</strong><br />
            Téléphone : <strong>[Téléphone]</strong><br />
            Email : <strong>[Email]</strong><br />
            SIRET : <strong>[Numéro SIRET]</strong><br />
            TVA intracommunautaire : <strong>[Numéro TVA]</strong>
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-900">
            Responsable de la publication
          </h2>
          <p>
            <strong>[Nom et prénom]</strong>, en qualité de <strong>[Fonction]</strong>.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-900">Hébergement</h2>
          <p>
            Le site est hébergé par : <strong>[Nom de l’hébergeur]</strong><br />
            Adresse : <strong>[Adresse de l’hébergeur]</strong><br />
            Téléphone : <strong>[Téléphone hébergeur]</strong>
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-900">Propriété intellectuelle</h2>
          <p>
            L’ensemble des contenus présents sur ce site (textes, images, graphismes,
            logos, icônes, etc.) est la propriété exclusive de l’éditeur, sauf mentions
            contraires. Toute reproduction, représentation, modification ou exploitation,
            totale ou partielle, sans autorisation préalable est interdite.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-900">Responsabilité</h2>
          <p>
            L’éditeur s’efforce de fournir sur le site des informations aussi précises
            que possible. Toutefois, il ne saurait être tenu responsable des omissions,
            inexactitudes ou carences dans la mise à jour.
          </p>
        </div>
      </div>
    </Section>
  );
}
