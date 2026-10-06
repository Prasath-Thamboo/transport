import Image from "next/image";
import {
  Buildings,
  CalendarCheck,
  CaretDown,
  GlobeHemisphereWest,
  Lightning,
  MapPin,
  Package,
  Path,
  Stack,
  Truck,
} from "@phosphor-icons/react/ssr";
import Section from "@/components/Section";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";

export const metadata = { title: "Services" };

const GROUPS = [
  {
    title: "Selon la distance",
    items: [
      {
        icon: MapPin,
        title: "Régional",
        body: "Tournées et flux réguliers en Île-de-France et dans les départements limitrophes.",
      },
      {
        icon: Path,
        title: "National",
        body: "Toute la France métropolitaine, livraison le lendemain sur la plupart des destinations.",
      },
      {
        icon: GlobeHemisphereWest,
        title: "International",
        body: "Liaisons régulières vers le Benelux, l'Allemagne, l'Espagne et l'Italie.",
      },
    ],
  },
  {
    title: "Selon le volume",
    items: [
      {
        icon: Truck,
        title: "Lot complet",
        body: "Une semi-remorque dédiée jusqu'à 33 palettes, chargée et livrée sans rupture de charge.",
      },
      {
        icon: Stack,
        title: "Groupage",
        body: "De 1 à 12 palettes, intégrées à nos tournées pour mutualiser le coût du trajet.",
      },
      {
        icon: Lightning,
        title: "Express dédié",
        body: "Utilitaire ou porteur au départ dans l'heure, pour les envois urgents ou sensibles.",
      },
    ],
  },
  {
    title: "Selon vos contraintes",
    items: [
      {
        icon: Buildings,
        title: "Affrètement",
        body: "Un réseau de transporteurs partenaires audités pour absorber vos pics d'activité.",
      },
      {
        icon: CalendarCheck,
        title: "Flux réguliers",
        body: "Navettes et départs planifiés, avec un tarif annuel et des créneaux réservés.",
      },
      {
        icon: Package,
        title: "Livraisons techniques",
        body: "Prise de rendez-vous, hayon, transpalette et respect des procédures de vos sites.",
      },
    ],
  },
];

const EQUIPMENT = [
  "Hayon élévateur",
  "Transport ADR",
  "Température dirigée",
  "Tautliner",
  "Plateau",
  "Porteur 19 t",
  "Utilitaire 20 m³",
  "Transpalette embarqué",
];

const FAQ = [
  {
    q: "Sous quel délai recevez-vous un devis ?",
    a: "En moyenne sous 2 heures ouvrées. Pour un express, appelez-nous directement : nous confirmons la prise en charge pendant l'appel.",
  },
  {
    q: "Quelle différence entre lot complet et groupage ?",
    a: "En lot complet, la remorque est réservée à votre marchandise et part directement chez le destinataire. En groupage, vos palettes partagent le camion avec d'autres envois, ce qui réduit le coût mais ajoute un passage par notre quai.",
  },
  {
    q: "Transportez-vous des marchandises dangereuses ?",
    a: "Oui. Nos conducteurs sont formés ADR et une partie de la flotte est équipée en conséquence. Précisez la classe et les quantités dans votre demande.",
  },
  {
    q: "Comment suivre mon envoi ?",
    a: "Vous recevez une confirmation à l'enlèvement, une information en cas de retard et la preuve de livraison signée le jour même.",
  },
  {
    q: "Ma marchandise est-elle assurée ?",
    a: "Notre responsabilité de transporteur s'applique dans les conditions légales. Pour les marchandises de valeur, nous pouvons souscrire une assurance complémentaire sur la valeur déclarée.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* En-tête + bandeau photo */}
      <section className="pt-14 sm:pt-20">
        <Container>
          <Reveal>
            <p className="eyebrow">Nos services</p>
            <h1 className="display mt-5 max-w-[18ch] text-[clamp(2.4rem,4.6vw,3.75rem)] text-text">
              Le bon camion, au bon moment.
            </h1>
            <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-text-muted">
              Du colis palettisé à la semi-remorque complète, nous adaptons le
              véhicule, le délai et le prix à chaque envoi.
            </p>
          </Reveal>

          <Reveal delay={120} className="relative mt-12 aspect-[16/9] overflow-hidden rounded-2xl sm:aspect-[21/8]">
            <Image
              src="/images/entrepot-chariot.jpg"
              alt="Allée d'entrepôt avec racks de palettes et chariot élévateur"
              fill
              priority
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover object-[50%_45%]"
            />
          </Reveal>
        </Container>
      </section>

      {/* Prestations regroupées en trois familles */}
      <Section>
        <div className="space-y-16">
          {GROUPS.map((group) => (
            <div key={group.title} className="grid gap-8 border-t border-border pt-10 lg:grid-cols-[1fr_3fr] lg:gap-12">
              <Reveal as="h2" className="text-xl font-semibold text-text [font-stretch:112%]">
                {group.title}
              </Reveal>
              <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
                {group.items.map((item, i) => (
                  <Reveal key={item.title} delay={i * 90}>
                    <item.icon size={26} weight="duotone" className="text-accent-ink" aria-hidden />
                    <h3 className="mt-4 text-lg font-semibold text-text">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.body}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Équipements : puces */}
      <section className="border-y border-border bg-surface py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_3fr] lg:items-center lg:gap-12">
            <Reveal>
              <h2 className="text-xl font-semibold text-text [font-stretch:112%]">Équipements disponibles</h2>
              <p className="mt-2 text-sm text-text-muted">À préciser dans votre demande.</p>
            </Reveal>
            <Reveal delay={100}>
              <ul className="flex flex-wrap gap-2.5">
                {EQUIPMENT.map((e) => (
                  <li
                    key={e}
                    className="rounded-full border border-border-strong bg-bg px-4 py-2 text-sm font-medium text-text"
                  >
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FAQ : accordéon natif, sans JavaScript */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <Reveal>
            <h2 className="display text-[clamp(2rem,3.6vw,3rem)] text-text">Questions fréquentes.</h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="divide-y divide-border border-y border-border">
              {FAQ.map((item) => (
                <details key={item.q} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-base font-semibold text-text marker:hidden [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <CaretDown
                      size={18}
                      weight="bold"
                      className="shrink-0 text-text-muted transition-transform duration-300 group-open:rotate-180"
                      aria-hidden
                    />
                  </summary>
                  <p className="max-w-[62ch] pb-6 text-sm leading-relaxed text-text-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <CTA title="Un besoin précis ?" />
    </>
  );
}
