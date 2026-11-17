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

/** Datos del póster de Innova Educa 21. */
export const approvals = {
  title: "Aprobados por parcial",
  total: 47,
  bars: [
    {
      label: "1.er parcial, antes de Educai (33 de 47)",
      approved: 33,
      percent: 70,
      tone: "muted" as const,
    },
    {
      label: "2.º parcial, con Educai disponible (44 de 47)",
      approved: 44,
      percent: 94,
      tone: "highlight" as const,
    },
  ],
  reading: "La aprobación fue mayor y coincide con Educai, sin atribución causal.",
};

export const adoption = {
  title: "Adopción de Educai",
  rows: [
    { label: "Universidad: lo usaron", value: 29, total: 47 },
    { label: "Universidad: completaron el ciclo", value: 25, total: 47 },
    { label: "Robótica: lo usaron", value: 20, total: 20 },
    { label: "Robótica: completaron el ciclo", value: 20, total: 20 },
  ],
  reading:
    "29 de 47 estudiantes (62 %) usaron Educai con asistencia estable, lo que sugiere uso fuera del aula.",
  stats: [
    { value: "25 de 29", label: "de los que empezaron el ciclo lo terminaron." },
    {
      value: "1–2 a 3–4",
      label:
        "fue la valoración promedio de la clase entre el inicio y el final del período, en una escala de 1 a 4.",
    },
  ],
};

export const observations = {
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
  roboticsNote:
    "En la escuela de robótica, los 20 estudiantes usaron Educai y los 20 completaron el ciclo, con ejercicios adaptados a la fase de cada proyecto.",
};

export const limits = {
  eyebrow: "Límites del test",
  title: "Lo que todavía no podemos afirmar",
  text: "El diseño fue observacional y no tuvo grupo control. El anonimato impide vincular el uso con el desempeño de cada estudiante, no se controló la dificultad de los parciales y no conocemos las razones por las que 18 estudiantes no lo usaron.",
};

export const nextSteps = {
  eyebrow: "Próximos pasos",
  title: "Qué vamos a medir en 2027",
  text: "Vamos a sumar un grupo control, a estudiar por qué 18 estudiantes no lo usaron y a medir el impacto en el aprendizaje.",
};

export const closing = {
  title: "Sumate a la cohorte 2027 y ayudanos a medir el impacto",
  text: "Buscamos docentes e instituciones que quieran probar Educai con un grupo control.",
};
