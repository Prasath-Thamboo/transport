import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { COMPANY } from "@/lib/company";

export const metadata = { title: "Politique de confidentialité" };

export default function PolitiqueConfidentialite() {
  return (
    <Section>
      <Reveal as="h1" className="display text-[clamp(2.2rem,4vw,3.25rem)] text-text">
        Politique de confidentialité
      </Reveal>

      <Reveal delay={100} className="prose-legal mt-12">
        <p>
          La présente politique de confidentialité décrit la manière dont
          <strong> {COMPANY.name}</strong> collecte, utilise et protège les
          données personnelles des utilisateurs du site.
        </p>

        <div>
          <h2>Données collectées</h2>
          <p>
            Les données personnelles susceptibles d’être collectées via le formulaire
            de contact sont :
          </p>
          <ul>
            <li>Nom et prénom</li>
            <li>Entreprise</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Informations relatives à la demande de transport</li>
          </ul>
        </div>

        <div>
          <h2>Finalité du traitement</h2>
          <p>
            Les données collectées sont utilisées exclusivement pour :
          </p>
          <ul>
            <li>Répondre aux demandes de contact ou de devis</li>
            <li>Échanger dans le cadre d’une relation commerciale B2B</li>
          </ul>
        </div>

        <div>
          <h2>Base légale du traitement</h2>
          <p>
            Le traitement des données repose sur le consentement explicite de
            l’utilisateur, matérialisé par la validation du formulaire de contact.
          </p>
        </div>

        <div>
          <h2>Durée de conservation</h2>
          <p>
            Les données sont conservées pour une durée maximale de
            <strong> {COMPANY.retention}</strong> à compter du dernier échange,
            sauf obligation légale contraire.
          </p>
        </div>

        <div>
          <h2>Destinataires des données</h2>
          <p>
            Les données sont exclusivement destinées à
            <strong> {COMPANY.name}</strong> et ne sont en aucun cas cédées
            ou vendues à des tiers.
          </p>
        </div>

        <div>
          <h2>Droits des utilisateurs</h2>
          <p>
            Conformément au Règlement Général sur la Protection des Données (RGPD),
            vous disposez d’un droit d’accès, de rectification, d’effacement,
            d’opposition et de limitation du traitement de vos données.
          </p>
          <p>
            Vous pouvez exercer ces droits en contactant :
            <strong> {COMPANY.privacyEmail}</strong>
          </p>
        </div>

        <div>
          <h2>Sécurité des données</h2>
          <p>
            Des mesures techniques et organisationnelles appropriées sont mises
            en œuvre afin de garantir la sécurité et la confidentialité des données
            personnelles.
          </p>
        </div>

        <div>
          <h2>Modification de la politique</h2>
          <p>
            La présente politique de confidentialité peut être modifiée à tout
            moment afin de rester conforme à la réglementation en vigueur.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
