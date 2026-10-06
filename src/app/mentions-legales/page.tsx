import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { COMPANY } from "@/lib/company";

export const metadata = { title: "Mentions légales" };

export default function MentionsLegales() {
  return (
    <Section>
      <Reveal as="h1" className="display text-[clamp(2.2rem,4vw,3.25rem)] text-text">
        Mentions légales
      </Reveal>

      <Reveal delay={100} className="prose-legal mt-12">
        <p>
          Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004 pour la
          confiance dans l’économie numérique, il est précisé aux utilisateurs du
          site l’identité des différents intervenants dans le cadre de sa réalisation
          et de son suivi.
        </p>

        <div>
          <h2>Éditeur du site</h2>
          <p>
            Raison sociale : <strong>{COMPANY.name}</strong><br />
            Forme juridique : <strong>{COMPANY.legalForm}</strong><br />
            Capital social : <strong>{COMPANY.capital}</strong><br />
            Siège social : <strong>{COMPANY.address}</strong><br />
            Téléphone : <strong>{COMPANY.phone}</strong><br />
            Email : <strong>{COMPANY.email}</strong><br />
            SIRET : <strong>{COMPANY.siret} ({COMPANY.rcs})</strong><br />
            TVA intracommunautaire : <strong>{COMPANY.vat}</strong>
          </p>
        </div>

        <div>
          <h2>Responsable de la publication</h2>
          <p>
            <strong>{COMPANY.director.name}</strong>, en qualité de <strong>{COMPANY.director.role}</strong>.
          </p>
        </div>

        <div>
          <h2>Hébergement</h2>
          <p>
            Le site est hébergé par : <strong>{COMPANY.host.name}</strong><br />
            Adresse : <strong>{COMPANY.host.address}</strong><br />
            Site web : <strong>{COMPANY.host.website}</strong>
          </p>
        </div>

        <div>
          <h2>Propriété intellectuelle</h2>
          <p>
            L’ensemble des contenus présents sur ce site (textes, images, graphismes,
            logos, icônes, etc.) est la propriété exclusive de l’éditeur, sauf mentions
            contraires. Toute reproduction, représentation, modification ou exploitation,
            totale ou partielle, sans autorisation préalable est interdite.
          </p>
        </div>

        <div>
          <h2>Responsabilité</h2>
          <p>
            L’éditeur s’efforce de fournir sur le site des informations aussi précises
            que possible. Toutefois, il ne saurait être tenu responsable des omissions,
            inexactitudes ou carences dans la mise à jour.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
