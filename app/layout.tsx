import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PHOTOS, SITE_URL } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Educai: tutor de IA para el aula",
  description:
    "Educai convierte las conversaciones de estudio en información útil para que el docente decida mejor sus clases.",
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Educai",
    images: [
      {
        url: PHOTOS.tedxEncendedorHero.src,
        width: PHOTOS.tedxEncendedorHero.width,
        height: PHOTOS.tedxEncendedorHero.height,
        alt: PHOTOS.tedxEncendedorHero.alt,
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#FAF9FF",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
