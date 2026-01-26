import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: {
    default: "Transport routier de marchandises | Votre Transporteur",
    template: "%s | Votre Transporteur",
  },
  description:
    "Transport routier fiable et réactif : lots complets/partiels, dédié, express. Suivi clair, interlocuteur unique, délais tenus.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Transport routier de marchandises",
    description:
      "Lots complets/partiels, dédié, express. Suivi clair et délais tenus.",
    type: "website",
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={manrope.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

