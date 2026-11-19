import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PHOTOS, SITE_URL } from "@/content/site";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
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
        url: PHOTOS.tedxEnEscena.src,
        width: PHOTOS.tedxEnEscena.width,
        height: PHOTOS.tedxEnEscena.height,
        alt: PHOTOS.tedxEnEscena.alt,
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${geist.variable} ${geistMono.variable}`}>
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
