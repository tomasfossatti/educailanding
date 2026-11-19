import type { Metadata } from "next";
import { CONTENT_UPDATED, PAGES, SITE_LOCALE, SITE_NAME } from "@/content/seo";
import { SITE_URL } from "@/content/site";

export type PageKey = keyof typeof PAGES;

/** URL absoluta a partir de una ruta del sitio. */
export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

/** Metadatos de una página: título, descripción, canónica y redes. */
export function pageMetadata(key: PageKey, path: string): Metadata {
  const page = PAGES[key];
  const isHome = path === "/";
  return {
    title: isHome ? { absolute: page.title } : page.title,
    description: page.description,
    alternates: { canonical: path },
    openGraph: {
      title: page.ogTitle,
      description: page.description,
      url: path,
      siteName: SITE_NAME,
      locale: SITE_LOCALE.replace("-", "_"),
      type: key === "quienSoy" ? "profile" : "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.ogTitle,
      description: page.description,
    },
  };
}

/** «noviembre de 2026», a partir de CONTENT_UPDATED. */
export function updatedMonth() {
  const [year, month] = CONTENT_UPDATED.split("-").map(Number);
  return new Intl.DateTimeFormat(SITE_LOCALE, { month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(Date.UTC(year, month - 1, 1)),
  );
}
