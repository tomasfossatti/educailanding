import { INSTAGRAM_URL, YOUTUBE_TEDX_URL } from "./site";

/**
 * Fecha de la última revisión de los contenidos (AAAA-MM-DD).
 * Se usa en el sitemap, en los datos estructurados y en «Actualizado en…».
 * Actualizala cada vez que cambies textos o datos del sitio.
 */
export const CONTENT_UPDATED = "2026-11-19";

export const SITE_NAME = "Educai";
export const SITE_LOCALE = "es-AR";

/** Perfiles públicos que identifican a Educai y a Tomás en otros sitios. */
export const PROFILES = {
  educaiInstagram: "https://www.instagram.com/educai__/",
  tomasInstagram: INSTAGRAM_URL,
  tomasLinkedin: "https://www.linkedin.com/in/tomas-fossatti-ing/",
  tomasWebsite: "https://tomasfossatti.vercel.app",
  tedx: YOUTUBE_TEDX_URL,
};

export const ORGANIZATION = {
  name: "Educai",
  description:
    "Plataforma con IA que convierte las conversaciones de estudio en información útil para que el docente decida mejor sus clases.",
  location: { locality: "Córdoba", region: "Córdoba", country: "AR" },
  founderJobTitle: "Fundador de Educai",
  topics: [
    "Inteligencia artificial en educación",
    "Tutor de IA",
    "Analítica de aprendizaje",
    "Innovación educativa",
  ],
};

/** Títulos y descripciones de cada página (buscadores y redes). */
export const PAGES = {
  inicio: {
    title: "Educai: tutor de IA para el aula",
    ogTitle: "Si la IA ya lo sabe todo, ¿para qué ir a clase?",
    description:
      "Educai es un tutor de IA que responde con los materiales del docente y le muestra patrones del grupo para que decida mejor sus clases. Piloto 2027.",
  },
  resultados: {
    title: "Resultados del test",
    ogTitle: "Qué pasó en dos meses de clase con Educai",
    description:
      "Dos meses con Educai en una materia universitaria y en una escuela de robótica: aprobados, adopción, valoración de la clase y límites del test.",
  },
  tecnico: {
    title: "Funcionamiento técnico",
    ogTitle: "Cómo funciona Educai por dentro",
    description:
      "Cómo funciona Educai por dentro: tutor con contenido validado (RAG), señales agregadas por participante y privacidad desde la arquitectura.",
  },
  quienSoy: {
    title: "Tomás Fossatti",
    ogTitle: "Tomás Fossatti, fundador de Educai",
    description:
      "Tomás Fossatti, fundador de Educai. Hijo y nieto de docentes, emprendedor y estudiante en Córdoba, Argentina. Charla TEDx sobre IA en el aula.",
  },
};

/** Textos de las imágenes para compartir en redes. */
export const OG_IMAGE = {
  footer: "Tutor de IA para el aula · Córdoba, Argentina",
};

export const UPDATED_LABEL = "Actualizado en";
