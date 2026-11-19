export const FORM_URL = "https://forms.gle/H1VRZcY6WzL2wMh96";
export const INSTAGRAM_URL = "https://www.instagram.com/tomasfossatti_/";
export const EMAIL = "tomas.fossatti01@gmail.com";
export const YOUTUBE_TEDX_URL = "https://www.youtube.com/watch?v=n1LSi7t5WKs";

export const PILOT_CTA = "Sumate al piloto 2027";
export const NAV_CTA = "Sumarme al piloto 2027";
export const FOOTER_TEXT = "Fundado por Tomás Fossatti en Córdoba, Argentina";

export const ROUTES = {
  inicio: "/",
  resultados: "/resultados",
  tecnico: "/funcionamiento-tecnico",
  quienSoy: "/quien-soy",
} as const;

export const NAV_LINKS = [
  { href: ROUTES.inicio, label: "Inicio" },
  { href: ROUTES.resultados, label: "Resultados" },
  { href: ROUTES.tecnico, label: "Funcionamiento técnico" },
  { href: ROUTES.quienSoy, label: "Quién soy" },
] as const;

/**
 * Base absoluta para metadatos, sitemap y Open Graph.
 * Se toma de NEXT_PUBLIC_SITE_URL si existe (dominio propio), si no del
 * dominio de producción de Vercel, y en local cae a localhost.
 */
export const SITE_URL = (() => {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
})();

export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

/**
 * Fotos de Tomás tomadas del sitio personal (repo landing-tomas-fossatti),
 * con los mismos textos alternativos que usa ese sitio.
 */
export const PHOTOS = {
  tedxEnEscena: {
    src: "/photos/tedx-en-escena.webp",
    width: 720,
    height: 960,
    alt: "Tomás Fossatti dando su charla TEDx en la Universidad Siglo 21",
  },
  tedxCharla: {
    src: "/photos/tedx-charla.webp",
    width: 540,
    height: 720,
    alt: "Tomás Fossatti hablando en su charla TEDx en la Universidad Siglo 21",
  },
  feria21Stand: {
    src: "/photos/feria21-stand.jpg",
    width: 1280,
    height: 853,
    alt: "Dos estudiantes junto al stand de Educai en Feria21 Tech, de la Universidad Siglo 21",
  },
  feria21Presentacion: {
    src: "/photos/educai-feria21-presentacion-2025.webp",
    width: 1000,
    height: 1000,
    alt: "Tomás Fossatti explicando Educai a un grupo de personas en Feria21",
  },
  meetTheMentors: {
    src: "/photos/meet-the-mentors-endeavor.webp",
    width: 800,
    height: 533,
    alt: "Tomás Fossatti conversando con un mentor en Meet the Mentors, de Endeavor",
  },
  innovaEducaCartel: {
    src: "/photos/innova-educa-2025-educai-cartel.webp",
    width: 900,
    height: 1200,
    alt: "Tomás Fossatti junto al cartel de Innova Educa 21, mostrando Educai en su computadora",
  },
  innovaEducaPoster: {
    src: "/photos/innova-educa-2026-presentacion.webp",
    width: 464,
    height: 618,
    alt: "Tomás Fossatti presentando el póster de la investigación sobre Educai en Innova Educa 21",
  },
  tonucci: {
    src: "/photos/tonucci.webp",
    width: 900,
    height: 1200,
    alt: "Tomás Fossatti junto a Francesco Tonucci",
  },
  espacioIdiStand: {
    src: "/photos/espacio-idi-feria21-2026-stand.webp",
    width: 800,
    height: 800,
    alt: "Tomás Fossatti explicando Espacio IDI a un grupo de estudiantes en el stand de Feria21",
  },
} satisfies Record<string, Photo>;
