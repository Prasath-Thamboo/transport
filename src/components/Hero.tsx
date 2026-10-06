import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import Container from "./Container";
import { COMPANY } from "@/lib/company";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container>
        <div className="grid items-center gap-10 pb-16 pt-10 sm:pt-14 lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-[1.15fr_1fr] lg:gap-14 lg:py-12">
          <div>
            <p className="eyebrow animate-fade-up">Transporteur routier B2B depuis {COMPANY.founded}</p>

            <h1 className="display animate-fade-up anim-delay-1 mt-5 text-[clamp(2.4rem,4.6vw,3.75rem)] text-text">
              Livré à l&apos;heure, <span className="text-accent-ink">partout en France.</span>
            </h1>

            <p className="animate-fade-up anim-delay-2 mt-6 max-w-[46ch] text-lg leading-relaxed text-text-muted">
              Lots complets, groupage, express et affrètement. Un seul interlocuteur,
              du devis jusqu&apos;à la livraison.
            </p>

            <div className="animate-fade-up anim-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-primary group px-6 py-3.5">
                Demander un devis
                <ArrowRight
                  size={16}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden
                />
              </Link>
              <Link href="/services" className="btn btn-secondary px-6 py-3.5">
                Nos services
              </Link>
            </div>
          </div>

          <div className="animate-fade-in relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lift lg:aspect-auto lg:h-[min(640px,calc(100dvh-10rem))]">
              <Image
                src="/images/camion-quai.jpg"
                alt="Semi-remorque à quai devant un entrepôt logistique, au lever du jour"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover object-[32%_50%]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
