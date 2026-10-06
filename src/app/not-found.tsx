import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/ssr";
import Container from "@/components/Container";

export const metadata = { title: "Page introuvable" };

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <p className="display text-[clamp(4rem,12vw,9rem)] tabular-nums text-accent">404</p>
        <h1 className="display mt-4 text-[clamp(1.8rem,3.4vw,2.75rem)] text-text">
          Cette page a pris une autre route.
        </h1>
        <p className="mt-5 max-w-[48ch] text-lg leading-relaxed text-text-muted">
          L&apos;adresse saisie n&apos;existe pas ou a été déplacée.
        </p>
        <Link href="/" className="btn btn-primary group mt-9 px-6 py-3.5">
          Retour à l&apos;accueil
          <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-1" aria-hidden />
        </Link>
      </Container>
    </section>
  );
}
