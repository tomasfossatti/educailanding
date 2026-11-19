import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { A11Y, PHOTOS, SITE_URL } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "opsz"], // fuente variable: no se pasa "weight"
  style: ["normal", "italic"],
  variable: "--font-fraunces",
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
  themeColor: "#FBF8F2",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es-AR" className={`${fraunces.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Marca que hay JS: recién ahí se aplican los estados iniciales de las animaciones. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a className="skip-link" href="#contenido">
          {A11Y.skipLink}
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
