import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
