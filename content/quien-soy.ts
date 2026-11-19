import { whyItMatters } from "@/content/inicio";
import { MATERIAL } from "@/content/site";

export const meta = {
  title: "Tomás Fossatti",
  description:
    "Fundador de Educai. Hijo y nieto de docentes, emprendedor y estudiante en Córdoba, Argentina.",
};

export const hero = {
  eyebrow: "Quién soy",
  title: "Tomás Fossatti",
  subtitle:
    "Soy hijo y nieto de docentes. Vivo la educación desde adentro y construyo experiencias para que el aula tenga lo que el celular no te da.",
  chips: ["Emprendedor", "Estudiante", "TEDx", "Córdoba, Argentina"],
  photoNote: "TEDx, noviembre de 2025",
};

export const perspective = {
  eyebrow: "Perspectiva",
  title: "Ir a clase tiene que valer la pena. Enseñar también.",
  /** Primera oración del primer párrafo: la pregunta guía, en cita con margen. */
  question: "Mi pregunta guía es esta: «Si puedo aprender en casa, ¿para qué ir a clase?».",
  paragraphs: [
    "Hoy creo que una clase tiene que darte algo más difícil de conseguir que una buena explicación: la pregunta que te daba vergüenza hacer, la discusión con alguien que piensa distinto, un desafío que no podés resolver solo.",
    "Por eso diseño productos y experiencias para potenciar el aprendizaje dentro y fuera del aula. Si queremos mejores ingenieros, médicos y profesionales, tenemos que cuidar a quienes los forman.",
    "Una idea educativa vale lo que aguanta cuando la usa otra persona. Prefiero diseñar pruebas chicas que me obliguen a cambiar de opinión antes que enamorarme de la explicación perfecta.",
  ],
};

/** TODO(material): sin foto familiar, esta sección no se muestra. */
export const origins = {
  title: "De dónde vengo",
  /** Reutiliza la historia de Inicio, sin duplicar el texto. */
  paragraph: whyItMatters.paragraphs[0],
  photo: MATERIAL.familiaDocente,
  caption: MATERIAL.familiaDocenteCaption,
};

export const projects = {
  eyebrow: "Proyectos",
  title: "Donde pongo a prueba estas ideas",
  intro:
    "Uno para estudiantes y otro para docentes. Los dos buscan que el aula tenga lo que el celular no te da.",
  items: [
    {
      label: "Comunidad I+D · Estudiantes",
      title: "Espacio IDI",
      text: "Una comunidad de estudiantes que pone en práctica lo que aprende resolviendo problemas reales de empresas locales a través de Innovatones, con equipos multidisciplinarios y tiempo limitado.",
      link: null,
    },
    {
      label: "Startup ed-tech · Docentes",
      title: "Educai",
      text: "Los estudiantes estudian con un tutor de IA basado en los materiales de la materia, y el docente ve lo que se repite en el grupo para decidir qué hacer en clase.",
      link: "Conocer el producto →",
    },
  ],
};

export const talks = {
  eyebrow: "Exposiciones",
  title: "Ideas puestas en conversación",
  tedx: {
    label: "Charla TEDx · 6 de noviembre de 2025",
    title: "AI in the classroom: From fear to replacement",
    text: "Una charla en TEDxUniversidad Siglo 21 sobre el futuro del aprendizaje, la transformación del aula y el desafío de crear experiencias educativas que motiven y vayan más allá de transmitir contenidos.",
    cta: "Ver en YouTube",
    playLabel: "Reproducir la charla TEDx de Tomás Fossatti",
    thumbAlt: "Tomás Fossatti en el escenario de TEDxUniversidad Siglo 21",
  },
  fairs: {
    title: "Ferias, congresos y sesiones con mentores",
    text: "Presenté Educai en Feria21 Tech 2025, en la Universidad Siglo 21, en el congreso Innova Educa 21 y en una sesión de Meet the mentors con mentores de Endeavor.",
    captions: {
      stand: "Stand de Educai en Feria21 Tech 2025, Universidad Siglo 21.",
      visitantes: "Conversando con visitantes en Feria21 Tech 2025.",
      mentors: "Meet the mentors, con mentores de Endeavor.",
    },
  },
  congress: {
    label: "Congreso Innova Educa 21",
    title: "Póster con los resultados del test de Educai",
    link: "Ver los resultados →",
  },
  interview: {
    label: "Entrevista · 4 de junio de 2025",
    title: "Cuando una IA deja de hablar como nosotros, ¿cómo sabemos qué está haciendo?",
    text: "Una reflexión sobre la comunicación entre agentes de IA, a partir de una entrevista en La Gaceta.",
  },
};

export const contact = {
  eyebrow: "Contacto",
  title: "¿Estás pensando en problemas parecidos?",
  text: "Quiero hablar con más docentes, responsables académicos y founders que construyen experiencias de aprendizaje. Si das clases en una institución privada y querés incorporar Educai en tu cátedra, escribime.",
  cta: "Hablemos",
};
