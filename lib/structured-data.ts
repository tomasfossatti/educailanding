import { faq } from "@/content/inicio";
import { talks } from "@/content/quien-soy";
import {
  CONTENT_UPDATED,
  ORGANIZATION,
  PAGES,
  PROFILES,
  SITE_LOCALE,
  SITE_NAME,
} from "@/content/seo";
import { NAV_LINKS, PHOTOS, ROUTES } from "@/content/site";
import { absoluteUrl, type PageKey } from "./seo";

/** Identificadores estables para enlazar las entidades entre páginas. */
export const IDS = {
  organization: absoluteUrl("/#organization"),
  website: absoluteUrl("/#website"),
  person: absoluteUrl(`${ROUTES.quienSoy}#tomas`),
  app: absoluteUrl("/#educai"),
  tedx: absoluteUrl(`${ROUTES.quienSoy}#tedx`),
};

const ROUTE_BY_PAGE: Record<PageKey, string> = {
  inicio: ROUTES.inicio,
  resultados: ROUTES.resultados,
  tecnico: ROUTES.tecnico,
  quienSoy: ROUTES.quienSoy,
};

/** Organización, sitio y fundador: van en todas las páginas. */
export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": IDS.organization,
        name: ORGANIZATION.name,
        url: absoluteUrl("/"),
        logo: { "@type": "ImageObject", url: absoluteUrl("/logo.png"), width: 512, height: 512 },
        description: ORGANIZATION.description,
        founder: { "@id": IDS.person },
        address: {
          "@type": "PostalAddress",
          addressLocality: ORGANIZATION.location.locality,
          addressRegion: ORGANIZATION.location.region,
          addressCountry: ORGANIZATION.location.country,
        },
        knowsAbout: ORGANIZATION.topics,
        sameAs: [PROFILES.educaiInstagram],
      },
      {
        "@type": "WebSite",
        "@id": IDS.website,
        name: SITE_NAME,
        url: absoluteUrl("/"),
        inLanguage: SITE_LOCALE,
        publisher: { "@id": IDS.organization },
      },
      {
        "@type": "Person",
        "@id": IDS.person,
        name: "Tomás Fossatti",
        url: absoluteUrl(ROUTES.quienSoy),
        image: absoluteUrl(PHOTOS.tedxEnEscena.src),
        jobTitle: ORGANIZATION.founderJobTitle,
        worksFor: { "@id": IDS.organization },
        homeLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: ORGANIZATION.location.locality,
            addressCountry: ORGANIZATION.location.country,
          },
        },
        sameAs: [PROFILES.tomasWebsite, PROFILES.tomasLinkedin, PROFILES.tomasInstagram],
      },
    ],
  };
}

/** Página web con su ruta de navegación (breadcrumb). */
function webPage(key: PageKey, type = "WebPage", extra: Record<string, unknown> = {}) {
  const path = ROUTE_BY_PAGE[key];
  const url = absoluteUrl(path);
  const label = NAV_LINKS.find((link) => link.href === path)?.label ?? PAGES[key].title;
  const breadcrumb =
    path === ROUTES.inicio
      ? undefined
      : {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: absoluteUrl("/") },
            { "@type": "ListItem", position: 2, name: label, item: url },
          ],
        };
  return {
    "@type": type,
    "@id": `${url}#webpage`,
    url,
    name: PAGES[key].title,
    description: PAGES[key].description,
    inLanguage: SITE_LOCALE,
    isPartOf: { "@id": IDS.website },
    about: { "@id": IDS.app },
    dateModified: CONTENT_UPDATED,
    ...(breadcrumb ? { breadcrumb } : {}),
    ...extra,
  };
}

export function homeGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPage("inicio"),
      {
        "@type": "SoftwareApplication",
        "@id": IDS.app,
        name: SITE_NAME,
        url: absoluteUrl("/"),
        description: PAGES.inicio.description,
        applicationCategory: "EducationalApplication",
        operatingSystem: "Web",
        inLanguage: SITE_LOCALE,
        creator: { "@id": IDS.organization },
        audience: [
          { "@type": "EducationalAudience", educationalRole: "teacher" },
          { "@type": "EducationalAudience", educationalRole: "student" },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${absoluteUrl("/")}#faq`,
        inLanguage: SITE_LOCALE,
        mainEntity: faq.items.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
}

export function resultsGraph() {
  return { "@context": "https://schema.org", "@graph": [webPage("resultados")] };
}

export function technicalGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPage("tecnico", "WebPage", {
        mainEntity: {
          "@type": "TechArticle",
          headline: PAGES.tecnico.ogTitle,
          description: PAGES.tecnico.description,
          inLanguage: SITE_LOCALE,
          author: { "@id": IDS.person },
          publisher: { "@id": IDS.organization },
          dateModified: CONTENT_UPDATED,
        },
      }),
    ],
  };
}

export function aboutGraph() {
  const videoId = new URL(PROFILES.tedx).searchParams.get("v");
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPage("quienSoy", "ProfilePage", { mainEntity: { "@id": IDS.person } }),
      {
        "@type": "VideoObject",
        "@id": IDS.tedx,
        name: talks.tedx.title,
        description: talks.tedx.text,
        url: PROFILES.tedx,
        embedUrl: videoId ? `https://www.youtube.com/embed/${videoId}` : undefined,
        thumbnailUrl: videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : undefined,
        creator: { "@id": IDS.person },
        recordedAt: {
          "@type": "Event",
          name: talks.tedx.event,
          startDate: talks.tedx.date,
          location: { "@type": "Place", name: talks.tedx.venue, address: "Córdoba, Argentina" },
        },
      },
    ],
  };
}
