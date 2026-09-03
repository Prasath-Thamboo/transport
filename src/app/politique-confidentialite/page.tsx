import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Politique de confidentialité" };

export default function PolitiqueConfidentialite() {
  return (
    <Section>
      <Reveal as="h1" className="text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[1.08] tracking-tight text-text">
        Politique de confidentialité
      </Reveal>

      <Reveal delay={100} className="mt-8 space-y-6 text-sm leading-6 text-text-muted max-w-3xl">
        <p>
          La présente politique de confidentialité décrit la manière dont
          <strong> [Nom de l’entreprise]</strong> collecte, utilise et protège les
          données personnelles des utilisateurs du site.
        </p>

        <div>
          <h2 className="text-base font-semibold text-text">
            Données collectées
          </h2>
          <p>
            Les données personnelles susceptibles d’être collectées via le formulaire
            de contact sont :
          </p>
          <ul className="list-disc pl-5">
            <li>Nom et prénom</li>
            <li>Entreprise</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Informations relatives à la demande de transport</li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-semibold text-text">
            Finalité du traitement
          </h2>
          <p>
            Les données collectées sont utilisées exclusivement pour :
          </p>
          <ul className="list-disc pl-5">
            <li>Répondre aux demandes de contact ou de devis</li>
            <li>Échanger dans le cadre d’une relation commerciale B2B</li>
          </ul>
        </div>

        <div>
          <h2 className="text-base font-semibold text-text">
            Base légale du traitement
          </h2>
          <p>
            Le traitement des données repose sur le consentement explicite de
            l’utilisateur, matérialisé par la validation du formulaire de contact.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-text">
            Durée de conservation
          </h2>
          <p>
            Les données sont conservées pour une durée maximale de
            <strong> [ex : 12 ou 24 mois]</strong> à compter du dernier échange,
            sauf obligation légale contraire.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-text">
            Destinataires des données
          </h2>
          <p>
            Les données sont exclusivement destinées à
            <strong> [Nom de l’entreprise]</strong> et ne sont en aucun cas cédées
            ou vendues à des tiers.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-text">
            Droits des utilisateurs
          </h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD),
            vous disposez d’un droit d’accès, de rectification, d’effacement,
            d’opposition et de limitation du traitement de vos données.
          </p>
          <p>
            Vous pouvez exercer ces droits en contactant :
            <strong> [Email de contact RGPD]</strong>
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-text">
            Sécurité des données
          </h2>
          <p>
            Des mesures techniques et organisationnelles appropriées sont mises
            en œuvre afin de garantir la sécurité et la confidentialité des données
            personnelles.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-text">
            Modification de la politique
          </h2>
          <p>
            La présente politique de confidentialité peut être modifiée à tout
            moment afin de rester conforme à la réglementation en vigueur.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
