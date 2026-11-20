import type { UnitRow } from "@/components/UnitChart";

export const meta = {
  title: "Resultados del test",
  description:
    "Qué pasó durante dos meses en una materia universitaria y en una escuela de robótica.",
};

export const intro = {
  eyebrow: "Resultados del test",
  title:
    "Qué pasó durante dos meses en una materia universitaria y en una escuela de robótica",
  subtitle:
    "Aplicamos el ciclo completo de Educai durante dos meses y presentamos los resultados en el congreso Innova Educa 21.",
  context: [
    { value: "2 meses", label: "de ciclo aplicado en clase." },
    { value: "47", label: "estudiantes en una materia universitaria." },
    { value: "20", label: "estudiantes de 12 a 18 años en una escuela de robótica." },
  ],
};

export const NO_CONTROL_DISCLAIMER = "Observación sin grupo control. No atribuimos la mejora a Educai.";

/** Datos del póster de Innova Educa 21. */
export const approvals = {
  eyebrow: "Aprobados por parcial",
  title: "Aprobados por parcial",
  total: 47,
  bars: [
    {
      label: "1.er parcial, antes de Educai",
      exam: "el 1.er parcial",
      approved: 33,
      tone: "muted" as const,
    },
    {
      label: "2.º parcial, con Educai disponible",
      exam: "el 2.º parcial",
      approved: 44,
      tone: "accent" as const,
    },
  ],
  reading: "La aprobación fue mayor y coincide con Educai, sin atribución causal.",
  disclaimer: NO_CONTROL_DISCLAIMER,
};

const [firstExam, secondExam] = approvals.bars;

/** Filas del gráfico de unidades: cada estudiante es un punto. */
export const approvalRows: UnitRow[] = approvals.bars.map((bar) => ({
  label: bar.label,
  value: `${bar.approved} de ${approvals.total}`,
  ariaLabel: `${bar.approved} de ${approvals.total} estudiantes aprobaron ${bar.exam}`,
  filled: bar.approved,
  total: approvals.total,
  tone: bar.tone,
}));

/** La diferencia entre parciales, calculada de los datos. */
export const approvalsDiffNote = `${secondExam.approved - firstExam.approved} estudiantes más aprobaron`;

const usedUniversity = 29;
const completedUniversity = 25;
const roboticsStudents = 20;
const notUsed = approvals.total - usedUniversity;

/** Valoración promedio de la clase, en una escala de 1 a 4. */
export const rating = { start: "1–2", end: "3–4" };

export const adoption = {
  eyebrow: "Adopción",
  title: "Adopción de Educai",
  rows: [
    { label: "Universidad: lo usaron", value: usedUniversity, total: approvals.total },
    { label: "Universidad: completaron el ciclo", value: completedUniversity, total: approvals.total },
    { label: "Robótica: lo usaron", value: roboticsStudents, total: roboticsStudents },
    { label: "Robótica: completaron el ciclo", value: roboticsStudents, total: roboticsStudents },
  ].map((row) => ({ ...row, valueText: `${row.value} de ${row.total}` })),
  ariaLabel: "Adopción de Educai por grupo",
  reading: `${usedUniversity} de ${approvals.total} estudiantes (62 %) usaron Educai con asistencia estable, lo que sugiere uso fuera del aula.`,
  stats: [
    {
      value: `${completedUniversity} de ${usedUniversity}`,
      label: "de los que empezaron el ciclo lo terminaron.",
    },
    {
      value: `${rating.start} a ${rating.end}`,
      label:
        "fue la valoración promedio de la clase entre el inicio y el final del período, en una escala de 1 a 4.",
    },
  ],
};

export const observations = {
  eyebrow: "En el aula",
  title: "Lo que observamos en clase",
  items: [
    {
      title: "Preguntas más puntuales",
      text: "Los estudiantes llegaban a clase con más curiosidad y con dudas más concretas.",
    },
    {
      title: "Sentido en el contenido",
      text: "La competencia en clase ayudó a que los estudiantes le vieran sentido a lo que aprendían.",
    },
    {
      title: "Docente más motivado",
      text: "Al ver el efecto de sus clases, el docente se sintió más motivado.",
    },
  ],
  roboticsNote: `En la escuela de robótica, los ${roboticsStudents} estudiantes usaron Educai y los ${roboticsStudents} completaron el ciclo, con ejercicios adaptados a la fase de cada proyecto.`,
};

/** Lo que sabemos: una sola fuente para Inicio y Resultados. */
export const knownFacts = [
  `Con Educai disponible, aprobaron el 2.º parcial ${secondExam.approved} de ${approvals.total} estudiantes (en el 1.º, ${firstExam.approved} de ${approvals.total}).`,
  `${completedUniversity} de los ${usedUniversity} que empezaron el ciclo lo terminaron.`,
  `En la escuela de robótica, los ${roboticsStudents} estudiantes lo usaron y lo completaron.`,
];

export const limits = {
  eyebrow: "Límites del test",
  title: "Lo que todavía no podemos afirmar",
  knownTitle: "Lo que sabemos",
  unknownTitle: "Lo que todavía no",
  known: knownFacts,
  unknown: [
    "El diseño fue observacional y no tuvo grupo control.",
    "El anonimato impide vincular el uso con el desempeño de cada estudiante.",
    "No se controló la dificultad de los parciales.",
    `No conocemos las razones por las que ${notUsed} estudiantes no lo usaron.`,
  ],
};

export const nextSteps = {
  eyebrow: "Próximos pasos",
  title: "Qué vamos a medir en 2027",
  intro: "Vamos a:",
  items: [
    "Sumar un grupo control.",
    `Estudiar por qué ${notUsed} estudiantes no lo usaron.`,
    "Medir el impacto en el aprendizaje.",
  ],
};

/** TODO(material): MATERIAL.posterInnovaEduca. Sin imagen, la sección no se muestra. */
export const poster = {
  eyebrow: "Congreso Innova Educa 21",
  title: "El póster con los resultados",
  caption: "Póster presentado en el congreso Innova Educa 21.",
  link: "Ver el póster en grande",
};

export const closing = {
  title: "Sumate a la cohorte 2027 y ayudanos a medir el impacto",
  text: "Buscamos docentes e instituciones que quieran probar Educai con un grupo control.",
};

export const facts = { notUsed, roboticsStudents, usedUniversity, completedUniversity };
