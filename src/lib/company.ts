/**
 * Identité de l'entreprise affichée sur le site.
 *
 * ⚠️ DONNÉES FICTIVES (site de démonstration) — à remplacer par les vraies
 * informations du client avant toute mise en production :
 * - téléphone dans la plage ARCEP réservée à la fiction (01 99 00 xx xx) ;
 * - SIREN volontairement invalide (clé de Luhn fausse), il ne peut
 *   correspondre à aucune entreprise réelle.
 */
export const COMPANY = {
  name: "Transports Aubrelle",
  legalForm: "SAS",
  capital: "50 000 €",
  address: "12 rue des Entrepreneurs, 94150 Rungis",
  phone: "01 99 00 42 17",
  phoneHref: "tel:+33199004217",
  email: "contact@transports-aubrelle.fr",
  privacyEmail: "rgpd@transports-aubrelle.fr",
  siret: "893 214 576 00018",
  rcs: "RCS Créteil 893 214 576",
  vat: "FR19 893 214 576",
  director: { name: "Julien Aubrelle", role: "Président" },
  retention: "24 mois",
  hours: "Du lundi au vendredi, 7h30-18h30",
  founded: 2009,
  // Chiffres de démonstration (fictifs, à remplacer par ceux du client).
  stats: [
    { value: "2009", label: "Création de l'entreprise" },
    { value: "46", label: "Véhicules en propre" },
    { value: "96,8 %", label: "Livraisons à l'heure en 2025" },
    { value: "2 h", label: "Délai moyen de réponse devis" },
  ],
  host: {
    name: "Vercel Inc.",
    address: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
    website: "https://vercel.com",
  },
} as const;
