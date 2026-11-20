import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { meta } from "@/content/inicio";
import { A11Y, EMAIL, INSTAGRAM_URL, SITE_META, SITE_URL } from "@/content/site";
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
  title: { default: meta.title, template: `%s · ${SITE_META.name}` },
  description: meta.description,
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: SITE_META.name,
  },
  twitter: { card: "summary_large_image" },
};

/** Datos estructurados de la organización. */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_META.name,
  description: meta.description,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  email: EMAIL,
  sameAs: [INSTAGRAM_URL],
  founder: { "@type": "Person", name: SITE_META.founder },
  address: { "@type": "PostalAddress", addressLocality: "Córdoba", addressCountry: "AR" },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
