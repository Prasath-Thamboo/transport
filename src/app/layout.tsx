import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Archivo } from "next/font/google";
import { COMPANY } from "@/lib/company";

// Pas encore de nom de domaine : on utilise l'URL fournie par Vercel.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

// Archivo variable : l'axe de largeur (wdth) sert aux titres "élargis".
const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  axes: ["wdth"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: {
    default: `Transport routier de marchandises | ${COMPANY.name}`,
    template: `%s | ${COMPANY.name}`,
  },
  description:
    "Transport routier fiable et réactif : lots complets/partiels, dédié, express. Suivi clair, interlocuteur unique, délais tenus.",
  metadataBase: new URL(siteUrl),
  icons: { icon: "/images/icon.ico" },
  openGraph: {
    title: "Transport routier de marchandises",
    description:
      "Lots complets/partiels, dédié, express. Suivi clair et délais tenus.",
    type: "website",
    images: ["/images/camion-quai.jpg"],
  },
  // Site de démonstration aux données fictives : non indexé par les moteurs.
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={archivo.variable}>
      <body className="flex min-h-[100dvh] flex-col bg-bg font-sans text-text antialiased">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
