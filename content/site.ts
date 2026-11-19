export const FORM_URL = "https://forms.gle/H1VRZcY6WzL2wMh96";
export const INSTAGRAM_URL = "https://www.instagram.com/tomasfossatti_/";
export const EMAIL = "tomas.fossatti01@gmail.com";
export const YOUTUBE_TEDX_ID = "n1LSi7t5WKs";
export const YOUTUBE_TEDX_URL = `https://www.youtube.com/watch?v=${YOUTUBE_TEDX_ID}`;

/** WhatsApp con texto prellenado. Mientras sea null, no se muestra en ningún lado. */
export const WHATSAPP_URL: string | null = null; // TODO(material): https://wa.me/<número> con texto prellenado

export const PILOT_CTA = "Sumate al piloto 2027";
/** Versión corta del CTA para el header en desktop. */
export const PILOT_CTA_SHORT = "Sumate al piloto";
/** Versión mínima del CTA para el header en mobile, donde no entra la corta. */
export const PILOT_CTA_TINY = "Sumate";
/** Segundo botón de la banda de cierre, solo si existe WHATSAPP_URL. */
export const WHATSAPP_CTA = "O escribinos por WhatsApp";

export const ROUTES = {
  inicio: "/",
  resultados: "/resultados",
  tecnico: "/funcionamiento-tecnico",
  quienSoy: "/quien-soy",
} as const;

export const NAV_LINKS = [
  { href: ROUTES.inicio, label: "Inicio" },
  { href: ROUTES.resultados, label: "Resultados" },
  { href: ROUTES.tecnico, label: "Cómo funciona" },
  { href: ROUTES.quienSoy, label: "Quién soy" },
] as const;

export const HEADER = {
  logoLabel: "Educai, inicio",
  navLabel: "Principal",
  menu: "Menú",
  menuClose: "Cerrar",
};

export const FOOTER = {
  tagline: "Hecho en Córdoba, Argentina, por un hijo y nieto de docentes.",
  founder: "Fundado por Tomás Fossatti",
  navLabel: "Secciones del sitio",
  contactLabel: "Contacto",
  instagram: "Instagram",
  whatsapp: "WhatsApp",
  note: "Los resultados del test son observacionales y sin grupo control.",
};

/** Textos para lectores de pantalla de los componentes reutilizables. */
export const A11Y = {
  skipLink: "Saltar al contenido",
  newTab: " (se abre en una pestaña nueva)",
};

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

/** Material pendiente. Mientras sea null, el bloque que lo usa no se muestra. */
export const MATERIAL = {
  panelDocente: null as Photo | null, // TODO(material): captura real del panel docente, PNG 2x, sin datos reales de estudiantes
  familiaDocente: null as Photo | null, // TODO(material): foto real de la abuela o la mamá dando clase, o un parcial corregido en rojo
  familiaDocenteCaption: null as string | null, // TODO(material): nombre y año de la foto familiar
  tomasRetrato: null as Photo | null, // TODO(material): retrato cuadrado para la banda de cierre
  posterInnovaEduca: null as Photo | null, // TODO(material): póster del congreso
  aulaPiloto: [] as Photo[], // TODO(material): fotos del aula del piloto, con consentimiento
  testimonial: null as null | {
    quote: string;
    name: string;
    role: string;
    photo?: Photo;
    videoId?: string;
  }, // TODO(material): testimonio real de un docente del piloto, con autorización
  videoPresentacion: null as string | null, // TODO(material): ID de YouTube de un video de 60–90 s
};

export const NOT_FOUND = {
  eyebrow: "Error 404",
  titleBefore: "No encontramos ",
  titleCircled: "esta página",
  text: "Puede que el link esté mal escrito o que la página se haya movido.",
  cta: "Volver al inicio",
  metaTitle: "Página no encontrada",
};

/** Metadatos generales y datos estructurados de la organización. */
export const SITE_META = {
  name: "Educai",
  tagline: "Tutor de IA para tu cátedra",
  founder: "Tomás Fossatti",
  location: "Córdoba, Argentina",
  ogAlt: "Que el «¿se entendió?» tenga respuesta. Educai, tutor de IA para tu cátedra.",
  ogTitle: "Que el «¿se entendió?» tenga ",
  ogTitleUnderlined: "respuesta",
  ogTitleEnd: ".",
  ogFooter: "Educai · Tutor de IA para tu cátedra",
};
