import { MATERIAL, PILOT_CTA } from "@/content/site";
import {
  adoption,
  approvalRows,
  approvals,
  approvalsDiffNote,
  facts,
  knownFacts,
  rating,
} from "@/content/resultados";
import { recommendationExample, signals } from "@/content/tecnico";

/*
 * Inicio. Marcas en los textos:
 * ==resaltador== (como máximo dos por página) y __subrayado rojo__.
 */

export const meta = {
  title: "Educai: tutor de IA para tu cátedra",
  description:
    "Tus estudiantes ya estudian con IA. Con Educai, responde con tus apuntes y te muestra, sin nombres, qué no se entendió antes del parcial.",
};

// 1. Hero
export const hero = {
  eyebrow: "Tutor de IA para tu cátedra",
  title: "Que el «¿se entendió?» tenga __respuesta__.",
  subtitle:
    "Tus estudiantes ya estudian con IA. Con Educai, esa IA responde con tus apuntes y te cuenta, sin nombres, qué no se entendió ==antes del parcial==.",
  primaryCta: PILOT_CTA,
  ctaNote: "Buscamos docentes de instituciones privadas para la cohorte 2027.",
  secondaryCta: "Ver qué pasó en el test",
};

/** Panel del docente del hero (vista de ejemplo, datos ilustrativos). */
export const teacherPanel = {
  ariaLabel: "Ilustración: lo que ve el docente en Educai, con datos de ejemplo",
  // TODO(confirmar): si Tomás prefiere otra materia de ejemplo.
  course: "Metodología de la investigación · Comisión B",
  when: "Antes de la clase del jueves",
  repeatLabel: "Lo que se repite en tu curso",
  repeatText: signals.exampleText,
  evidence: "Evidencia suficiente · basada en participantes independientes, sin nombres",
  nextLabel: "Para la próxima clase",
  nextText: recommendationExample,
  decide: "Vos decidís si la usás.",
  originLabel: "Lo que pregunta un estudiante, en su casa",
  studentQuestion: "¿Si dos cosas suben juntas, una causa la otra?",
  tutorAnswer:
    "No necesariamente. Antes de responder, ¿qué otra cosa podría estar haciendo subir a las dos?",
  marginNote: "sin nombres, solo patrones",
  dataNote: "Vista de ejemplo con datos ilustrativos.",
};

// 2. Franja de credibilidad
export const proof = {
  label: "Probado y presentado",
  items: [
    "2 meses de prueba en una materia universitaria y una escuela de robótica",
    "Charla en TEDxUniversidad Siglo 21",
    "Congreso Innova Educa 21",
    "Feria21 Tech 2025",
    "Meet the mentors, con mentores de Endeavor",
  ],
};

// 3. Esto nos pasa (pizarrón)
export const tension = {
  eyebrow: "Esto nos pasa",
  title: "Dos personas en la misma aula que no terminan de conectar",
  columns: [
    {
      title: "Lo que te pasa a vos",
      voice: false,
      items: [
        "Te quedás hasta las once de la noche preparando una clase para que tus estudiantes entiendan.",
        "Llegás al aula con toda la energía, preguntás «¿se entendió?» y recibís ese silencio que todos conocemos.",
        "Tenés que decidir si seguís con el programa o volvés a explicar algo sin saber cuántos lo entendieron.",
        "Y a fin de mes descubrís que haber preparado una mejor clase no cambió lo que cobrás.",
      ],
    },
    {
      title: "Lo que tus estudiantes no te dicen",
      /** Es la voz del estudiante: va en itálica y en primera persona del plural. */
      voice: true,
      items: [
        "Mirábamos el reloj preguntándonos cuánto faltaba para que terminara la clase.",
        "No entendíamos un tema y no levantábamos la mano porque nos daba vergüenza preguntar delante de todos.",
        "Escuchábamos tres veces la misma explicación y necesitábamos que alguien nos la contara de otra manera.",
        "Salíamos de dos horas de clase, abríamos YouTube o ChatGPT y en diez minutos entendíamos lo que no habíamos entendido en el aula.",
      ],
    },
  ],
  quote:
    "«Si puedo aprenderlo en mi casa, si tengo toda la información en internet y una inteligencia artificial que me responde a cualquier hora... ¿para qué voy a ir a clase?»",
  quoteCite: "Lo que nos preguntamos los estudiantes",
  closingLine: "Educai nace para que esa pregunta tenga una buena respuesta.",
};

// 4. Por qué me importa (carta)
export const whyItMatters = {
  eyebrow: "Por qué me importa",
  title: "Soy estudiante, hijo y nieto de docentes",
  paragraphs: [
    "Crecí entre bibliotecas, libros, hojas y marcadores. Recuerdo a mi abuela con su guardapolvo blanco, corrigiendo con un lápiz rojo, y los domingos en mi casa, cuando mi mamá podía estar hasta las once de la noche preparando sus clases.",
    "Yo le decía: «Vieja, ¿por qué te quedás trabajando hasta esta hora si a fin de mes vas a cobrar lo mismo?». Con los años entendí que lo hacía ==porque amaba enseñar y le importaban sus estudiantes==.",
    "Hay algo que nunca terminé de entender: ¿por qué un docente tendría que depender solo de esa pasión para hacer un trabajo extraordinario? Y al mismo tiempo, ¿cómo conseguimos que los estudiantes encontremos tanto valor en las clases que no queramos perdernos ninguna?",
  ],
  /** Cuarto párrafo: va en Fraunces itálica, tamaño lead. */
  closing: "Esas preguntas me llevaron a construir Educai.",
  signature: "Tomás Fossatti",
  link: "Conocer quién está detrás de Educai →",
  /** TODO(material): MATERIAL.familiaDocente. Si es null, la columna queda solo con el texto. */
  photo: MATERIAL.familiaDocente,
  photoCaption: MATERIAL.familiaDocenteCaption,
};

// 5. Cómo funciona en tres pasos
export const steps = {
  id: "como-funciona",
  eyebrow: "Cómo funciona",
  title: "Tres pasos, y la decisión sigue siendo tuya",
  items: [
    {
      title: "Cargás tus apuntes",
      // TODO(confirmar): cuánto tiempo lleva el paso 1. Hasta entonces, no se menciona tiempo.
      text: "Subís tus materiales en PDF, Markdown o texto y elegís cuáles usa el tutor.",
    },
    {
      title: "Tus estudiantes estudian con ellos",
      text: "Preguntan sin vergüenza, a cualquier hora, y el tutor responde con lo que vos cargaste.",
    },
    {
      title: "Antes de la próxima clase, sabés qué reforzar",
      text: "Ves lo que se repite en el grupo, sin nombres, y una sugerencia concreta para la clase.",
    },
  ],
  link: "Ver cómo funciona por dentro →",
};

/** TODO(material): MATERIAL.videoPresentacion. Bloque entre las secciones 5 y 6. */
export const video = {
  title: "Educai en 90 segundos",
  id: MATERIAL.videoPresentacion,
  playLabel: "Reproducir el video de presentación de Educai",
  thumbAlt: "Video de presentación de Educai",
};

// 6. Lo que vas a ver vos
export const teacherView = {
  eyebrow: "Para vos",
  title: "Ver qué necesita tu clase antes del parcial",
  text: "Educai agrupa lo que preguntan tus estudiantes y te muestra lo que se repite en el grupo, con una sugerencia concreta para la próxima clase. Lo que hacés con eso lo decidís vos.",
  points: [
    { title: "Lo que se repite", text: "Los temas que generan dudas y las preguntas que vuelven a aparecer." },
    {
      title: "Con evidencia suficiente",
      text: "Un tema aparece recién cuando lo muestran al menos 3 participantes independientes.",
    },
    {
      title: "Una sugerencia, no una orden",
      text: "Una idea concreta para la clase, ligada a lo que se observó.",
    },
    {
      title: "Lo que hiciste, registrado",
      text: "Anotás qué hiciste en clase y después ves la devolución de tus estudiantes.",
    },
  ],
  studentSide: {
    title: "Y para tus estudiantes",
    text: "Un tutor que responde con tus materiales. Pueden pedir ejemplos, comparaciones o una explicación distinta, y seguir la conversación cuantos turnos necesiten.",
  },
};

// 7. Lo que Educai no hace
export const notDoing = {
  eyebrow: "Para que estés tranquilo",
  title: "Lo que Educai no hace",
  /** Cada título empieza con «No», que va en rojo. */
  items: [
    { title: "No te reemplaza", text: "La IA aporta evidencia y sugerencias. El criterio pedagógico es tuyo." },
    {
      title: "No te muestra quién preguntó qué",
      text: "Ves al grupo, nunca a un estudiante con nombre y apellido.",
    },
    {
      title: "No arma rankings ni diagnósticos",
      text: "No hay perfiles individuales, ni puntajes, ni etiquetas por estudiante.",
    },
    {
      title: "No pone notas",
      text: "Lo que detecta son observaciones sobre las conversaciones, no calificaciones.",
    },
    {
      title: "No responde con cualquier cosa",
      text: "Se apoya en los materiales que vos elegiste para la materia.",
    },
    {
      title: "No se queda con lo que el estudiante borra",
      text: "Si elimina una conversación, se eliminan también los análisis que salieron de ella.",
    },
  ],
};

// 8. Lo que probamos (los números salen de content/resultados.ts)
export const results = {
  eyebrow: "Lo que probamos",
  title: "Dos meses en una materia universitaria y en una escuela de robótica",
  chart: {
    caption: approvals.title,
    rows: approvalRows,
    diffNote: approvalsDiffNote,
    notes: [approvals.reading, approvals.disclaimer],
  },
  stats: [
    { value: adoption.stats[0].value, label: adoption.stats[0].label },
    {
      value: rating.end,
      label: "fue la valoración promedio de la clase al final del período, en una escala de 1 a 4.",
    },
  ],
  ledger: {
    known: knownFacts,
    unknown: [
      "Si la mejora se debe a Educai: no hubo grupo control.",
      "Si los dos parciales tenían la misma dificultad.",
      `Por qué ${facts.notUsed} estudiantes no lo usaron.`,
    ],
    knownTitle: "Lo que sabemos",
    unknownTitle: "Lo que todavía no",
  },
  link: "Ver los resultados completos",
};

// 9. Testimonio. TODO(material): null hasta que haya un testimonio real con autorización.
export const testimonial = {
  title: "Lo que dice un docente que lo probó",
  data: MATERIAL.testimonial,
  videoTitle: "Lo que dice un docente que probó Educai",
  playLabel: "Reproducir el testimonio",
};

// 10. Que enseñar mejor valga más (pizarrón)
export const model = {
  eyebrow: "Modelo en construcción",
  title: "Que enseñar mejor valga más. Y que ir a clase también.",
  disclaimerLabel: "Importante",
  disclaimer:
    "El reparto a docentes todavía no está implementado. Estamos definiendo las condiciones de pago, cómo medimos la actividad real y cómo comprobamos que generamos valor educativo.",
  text: "Estamos desarrollando un modelo en el que las instituciones privadas pagan por cada estudiante activo que usa Educai, durante un período acordado. Los docentes participan de lo que Educai cobra por la adopción en sus cátedras, y la intención es que su parte sea mayor que la nuestra.",
  stakeholders: [
    { title: "Para tus estudiantes", text: "Una experiencia de aprendizaje que realmente les sirva." },
    {
      title: "Para vos",
      text: "Información para mejorar tus clases y participación en el valor económico que se genera.",
    },
    {
      title: "Para tu institución",
      text: "Mejores herramientas para acompañar la evolución educativa de tus estudiantes.",
    },
  ],
};

// 11. Para instituciones
export const institutions = {
  eyebrow: "¿Sos de una institución?",
  title: "Que tus estudiantes no quieran perderse una clase",
  text: "Educai le da a tus docentes información para mejorar cada clase, y a tus estudiantes una experiencia de aprendizaje que les sirva. Buscamos instituciones privadas para la cohorte 2027.",
  cta: "Escribinos",
  subject: "Educai para mi institución",
};

// 12. Preguntas frecuentes. Las que tienen answer: null no se publican.
export const faq = {
  eyebrow: "Preguntas frecuentes",
  title: "Lo que nos preguntan los docentes",
  items: [
    {
      q: "¿Educai me va a reemplazar?",
      answer:
        "No. Educai responde con los materiales que vos elegís y te muestra lo que se repite en el grupo. Qué hacer en clase lo decidís vos.",
    },
    {
      q: "¿Voy a ver qué preguntó cada estudiante?",
      answer:
        "No. Ves lo que se repite en el grupo, de forma anónima. Un tema aparece recién cuando lo muestran al menos 3 participantes independientes, y los fragmentos que ves están anonimizados.",
    },
    {
      q: "¿De dónde saca las respuestas el tutor?",
      answer:
        "De los materiales que cargás y activás para tu materia, en PDF, Markdown o texto. Educai registra qué fragmentos usó en cada respuesta.",
    },
    {
      q: "¿Qué pasa con las conversaciones de mis estudiantes?",
      answer:
        "Son de cada estudiante. Las comparte por decisión propia y puede eliminarlas cuando quiera. Si las elimina, se borran también los análisis que salieron de ellas.",
    },
    {
      q: "¿En qué materias se probó?",
      answer:
        "Durante dos meses, en una materia universitaria con 47 estudiantes y en una escuela de robótica con 20 estudiantes de 12 a 18 años.",
    },
    {
      q: "¿Cuánto cuesta?",
      answer:
        "Estamos construyendo un modelo en el que la institución paga por estudiante activo durante un período acordado, y los docentes participan de lo que se cobra. Las condiciones del piloto 2027 las charlamos cuando nos escribís.",
    },
    { q: "¿Cuánto tiempo me lleva prepararlo?", answer: null }, // TODO(confirmar)
    { q: "¿Mis estudiantes no van a usarlo para que la IA les haga la tarea?", answer: null }, // TODO(confirmar)
    { q: "¿Mis materiales siguen siendo míos?", answer: null }, // TODO(confirmar)
  ] as { q: string; answer: string | null }[],
};

// 13. Cierre
export const closing = {
  eyebrow: "Cohorte 2027",
  title: "Probá Educai en tu cátedra",
  text: "Queremos empezar en una cátedra, junto con vos y tus estudiantes, y aprender de lo que pase en el aula. Si das clases en una institución privada, completá el formulario y te escribimos.",
  next: [
    "Completás el formulario.",
    "Te escribimos para conocer tu cátedra.",
    "Si encaja, armamos juntos el piloto 2027.",
  ],
  nextTitle: "Qué pasa después",
  cta: PILOT_CTA,
  /** Solo se muestra junto a MATERIAL.tomasRetrato (TODO(material)). */
  personNote: "Te escribimos nosotros, no un bot.",
};
