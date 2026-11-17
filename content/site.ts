export const FORM_URL = "https://forms.gle/H1VRZcY6WzL2wMh96";
export const INSTAGRAM_URL = "https://www.instagram.com/tomasfossatti_/";
export const EMAIL = "tomas.fossatti01@gmail.com";
export const YOUTUBE_TEDX_URL = "https://www.youtube.com/watch?v=n1LSi7t5WKs";

export const PILOT_CTA = "Sumate al piloto 2027";

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

export const PHOTOS = {
  tedxEncendedorHero: {
    src: "/photos/tedx-encendedor.jpg",
    width: 480,
    height: 853,
    alt: "Tomás Fossatti durante su charla TEDx",
  },
  tedxEncendedor: {
    src: "/photos/tedx-encendedor.jpg",
    width: 480,
    height: 853,
    alt: "Expositor durante la charla TEDx, con un encendedor en la mano",
  },
  tedxEscenario: {
    src: "/photos/tedx-escenario.jpg",
    width: 480,
    height: 860,
    alt: "Expositor con los brazos abiertos sobre el escenario de TEDx",
  },
  feria21Stand: {
    src: "/photos/feria21-stand.jpg",
    width: 1280,
    height: 853,
    alt: "Dos estudiantes junto al stand de Educai en Feria21 Tech, de la Universidad Siglo 21",
  },
  feria21Visitantes: {
    src: "/photos/feria21-visitantes.jpg",
    width: 480,
    height: 319,
    alt: "Conversación con visitantes durante Feria21 Tech",
  },
  meetTheMentors: {
    src: "/photos/meet-the-mentors.jpg",
    width: 480,
    height: 319,
    alt: "Conversación con un mentor en una sesión de Meet the mentors",
  },
} satisfies Record<string, Photo>;
