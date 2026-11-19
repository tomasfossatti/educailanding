import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { ORGANIZATION, PAGES, SITE_LOCALE, SITE_NAME } from "@/content/seo";
import { ROUTES, SITE_URL } from "@/content/site";
import { siteGraph } from "@/lib/structured-data";
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
  title: { default: PAGES.inicio.title, template: `%s | ${SITE_NAME}` },
  description: PAGES.inicio.description,
  applicationName: SITE_NAME,
  category: "education",
  authors: [{ name: "Tomás Fossatti", url: ROUTES.quienSoy }],
  creator: "Tomás Fossatti",
  publisher: ORGANIZATION.name,
  openGraph: {
    type: "website",
    locale: SITE_LOCALE.replace("-", "_"),
    siteName: SITE_NAME,
  },
  twitter: { card: "summary_large_image" },
  alternates: {
    types: { "text/plain": [{ url: "/llms.txt", title: "Resumen de Educai para modelos de lenguaje" }] },
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
    <html lang={SITE_LOCALE} className={`${geist.variable} ${geistMono.variable}`}>
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <JsonLd data={siteGraph()} />
      </body>
    </html>
  );
}
