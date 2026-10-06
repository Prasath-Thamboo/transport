import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ChatCircleText,
  ClipboardText,
  Clock,
  Lightning,
  MapTrifold,
  ShieldCheck,
  Truck,
  UserCircle,
  Handshake,
} from "@phosphor-icons/react/ssr";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { COMPANY } from "@/lib/company";

const STEPS = [
  {
    icon: ChatCircleText,
    title: "Demande",
    body: "Départ, arrivée, volume et contraintes (rendez-vous, hayon, ADR). Par formulaire ou par téléphone.",
  },
  {
    icon: ClipboardText,
    title: "Proposition",
    body: "Un tarif ferme et un planning d'enlèvement, en général sous 2 heures ouvrées.",
  },
  {
    icon: Truck,
    title: "Livraison",
    body: "Enlèvement, suivi en cours de route et preuve de livraison envoyée le jour même.",
  },
];

const COMMITMENTS = [
  {
    icon: UserCircle,
    title: "Un seul interlocuteur",
    body: "Le même exploitant suit votre dossier du devis à la facture.",
  },
  {
    icon: Clock,
    title: "Des créneaux respectés",
    body: "Prises de rendez-vous gérées par nos soins, alerte immédiate en cas d'aléa.",
  },
  {
    icon: ShieldCheck,
    title: "Marchandise assurée",
    body: "Assurance ad valorem sur demande pour les envois à forte valeur.",
  },
  {
    icon: Handshake,
    title: "Des prix tenus",
    body: "Le tarif accepté est le tarif facturé, sans frais ajoutés après coup.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Chiffres clés : sous le hero, jamais dedans */}
      <section className="border-y border-border bg-surface">
        <Container>
          <dl className="grid grid-cols-2 gap-px bg-border lg:grid-cols-4">
            {COMPANY.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="flex flex-col-reverse bg-surface py-8 pl-5 pr-2 odd:pl-0 sm:py-10 sm:pl-8 lg:odd:pl-8 lg:first:pl-0">
                <dt className="mt-2 text-sm text-text-muted">{s.label}</dt>
                <dd className="display text-[clamp(2rem,3.4vw,2.75rem)] tabular-nums text-text">{s.value}</dd>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      {/* Services : bento asymétrique, 4 contenus = 4 cellules */}
      <Section>
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="display max-w-[16ch] text-[clamp(2rem,3.6vw,3rem)] text-text">
            Une solution pour chaque flux.
          </h2>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-text hover:text-accent-ink"
          >
            Toutes nos prestations
            <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-1" aria-hidden />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-6 lg:grid-rows-[auto_auto_auto]">
          {/* Cellule image principale */}
          <Reveal className="group relative min-h-[380px] overflow-hidden rounded-2xl lg:col-span-4 lg:row-span-2">
            <Image
              src="/images/entrepot-chariot.jpg"
              alt="Cariste chargeant une palette filmée dans un entrepôt à racks"
              fill
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d10]/90 via-[#0b0d10]/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <h3 className="display text-2xl text-[#f4f5f6] sm:text-3xl">Lots complets et groupage</h3>
              <p className="mt-3 max-w-[48ch] text-sm leading-relaxed text-[#f4f5f6]/85 sm:text-base">
                Un camion dédié dès 12 palettes, ou une place dans nos tournées de
                groupage pour les plus petits envois.
              </p>
            </div>
          </Reveal>

          {/* Cellule teintée accent */}
          <Reveal delay={100} className="flex flex-col justify-between gap-10 rounded-2xl bg-accent-soft p-7 lg:col-span-2">
            <Lightning size={28} weight="duotone" className="text-accent-ink" aria-hidden />
            <div>
              <h3 className="text-xl font-semibold text-text [font-stretch:112%]">Express et dédié</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                Un véhicule pour vous seul, au départ dans l&apos;heure pour les urgences.
              </p>
            </div>
          </Reveal>

          {/* Cellule neutre */}
          <Reveal delay={180} className="flex flex-col justify-between gap-10 rounded-2xl border border-border bg-surface p-7 lg:col-span-2">
            <MapTrifold size={28} weight="duotone" className="text-accent-ink" aria-hidden />
            <div>
              <h3 className="text-xl font-semibold text-text [font-stretch:112%]">Affrètement</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                Nos transporteurs partenaires prennent le relais lors de vos pics d&apos;activité.
              </p>
            </div>
          </Reveal>

          {/* Cellule large : image + texte */}
          <Reveal delay={120} className="grid overflow-hidden rounded-2xl border border-border bg-surface sm:grid-cols-[1fr_1.6fr] lg:col-span-6">
            <div className="relative min-h-[200px]">
              <Image
                src="/images/camion-brouillard.jpg"
                alt="Porteur roulant sur une route de campagne dans le brouillard"
                fill
                sizes="(min-width: 640px) 35vw, 100vw"
                className="object-cover object-[50%_60%]"
              />
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <h3 className="text-xl font-semibold text-text [font-stretch:112%]">Suivi et traçabilité</h3>
              <p className="mt-2 max-w-[56ch] text-sm leading-relaxed text-text-muted">
                Confirmation d&apos;enlèvement, position en cours de route et preuve de
                livraison signée. Vous savez où est votre marchandise, même quand la
                météo se dégrade.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Process : frise horizontale */}
      <Section className="border-t border-border bg-surface">
        <Reveal>
          <h2 className="display max-w-[18ch] text-[clamp(2rem,3.6vw,3rem)] text-text">
            De la demande à la livraison.
          </h2>
        </Reveal>

        <div className="relative mt-14">
          {/* Ligne reliant le centre de la 1re icône à celui de la dernière (3 colonnes, gap 32px) */}
          <div
            aria-hidden
            className="absolute left-7 right-[calc((100%-64px)/3-28px)] top-7 hidden border-t-2 border-dashed border-border-strong md:block"
          />
          <ol className="relative grid gap-12 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 140} className="relative">
              <div className="grid h-14 w-14 place-items-center rounded-full border border-border-strong bg-bg text-accent-ink">
                <step.icon size={24} weight="duotone" aria-hidden />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-text [font-stretch:112%]">{step.title}</h3>
              <p className="mt-2 max-w-[34ch] text-sm leading-relaxed text-text-muted">{step.body}</p>
            </Reveal>
          ))}
          </ol>
        </div>
      </Section>

      {/* Couverture : bandeau photo pleine largeur */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/images/autoroute-vue-aerienne.jpg"
          alt="Vue aérienne d'une autoroute avec une semi-remorque"
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b0d10]/90 via-[#0b0d10]/65 to-[#0b0d10]/20" />
        <Container>
          <Reveal className="max-w-xl py-24 sm:py-32">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f59a6b]">Zones desservies</p>
            <h2 className="display mt-4 text-[clamp(2rem,3.6vw,3rem)] text-[#f4f5f6]">
              Régional, national, international.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#f4f5f6]/85">
              Des départs quotidiens depuis Rungis vers toute la France, et des
              liaisons régulières vers la Belgique, l&apos;Allemagne, l&apos;Espagne et l&apos;Italie.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Engagements : titre fixe à gauche, liste à droite */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="display text-[clamp(2rem,3.6vw,3rem)] text-text">Nos engagements.</h2>
            <p className="mt-5 max-w-[42ch] text-base leading-relaxed text-text-muted">
              Ce que nos clients attendent d&apos;un transporteur tient en quatre points.
              Nous les tenons sur chaque envoi.
            </p>
          </Reveal>

          <ul className="divide-y divide-border">
            {COMMITMENTS.map((c, i) => (
              <Reveal as="li" key={c.title} delay={i * 80} className="flex gap-5 py-7 first:pt-0 last:pb-0">
                <c.icon size={26} weight="duotone" className="mt-0.5 shrink-0 text-accent-ink" aria-hidden />
                <div>
                  <h3 className="text-lg font-semibold text-text">{c.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <CTA />
    </>
  );
}
