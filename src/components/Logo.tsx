import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/company";

/** Pictogramme camion + nom. Le camion "avance" légèrement au survol. */
export default function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label={`${COMPANY.name}, accueil`}>
      <Image
        src="/images/logo.png"
        alt=""
        width={40}
        height={40}
        priority
        className="h-10 w-10 transition-transform duration-300 group-hover:translate-x-1"
      />
      <span className="text-[15px] font-bold tracking-tight text-text [font-stretch:112%]">
        {COMPANY.name}
      </span>
    </Link>
  );
}
