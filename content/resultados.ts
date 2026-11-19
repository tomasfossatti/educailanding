export const intro = {
  title:
    "Qué pasó durante dos meses en una materia universitaria y en una escuela de robótica",
  subtitle:
    "Aplicamos el ciclo completo de Educai durante dos meses y presentamos los resultados en el congreso Innova Educa 21.",
  context: [
    { label: "Duración", value: "2 meses", detail: "de ciclo aplicado en clase." },
    { label: "Universidad", value: "47", detail: "estudiantes en una materia universitaria." },
    {
      label: "Escuela de robótica",
      value: "20",
      detail: "estudiantes de 12 a 18 años.",
    },
  ],
};

/** Datos del póster de Innova Educa 21. */
export const approvals = {
  title: "Aprobados por parcial",
  total: 47,
  unit: "estudiantes",
  bars: [
    {
      label: "1.er parcial, antes de Educai",
      approved: 33,
      percent: 70,
      emphasis: false,
    },
    {
      label: "2.º parcial, con Educai disponible",
      approved: 44,
      percent: 94,
      emphasis: true,
    },
  ],
  /** Se muestra como «+11 aprobados más», calculado a partir de las barras. */
  deltaSuffix: "aprobados más que en el 1.er parcial",
  reading: "La aprobación fue mayor y coincide con Educai, sin atribución causal.",
};

export const adoption = {
  title: "Adopción de Educai",
  scaleLabel: "Porcentaje sobre los inscriptos de cada grupo",
  groups: [
    {
      name: "Universidad",
      total: 47,
      rows: [
        { label: "Lo usaron", value: 29 },
        { label: "Completaron el ciclo", value: 25 },
      ],
    },
    {
      name: "Escuela de robótica",
      total: 20,
      rows: [
        { label: "Lo usaron", value: 20 },
        { label: "Completaron el ciclo", value: 20 },
      ],
    },
  ],
  reading:
    "29 de 47 estudiantes (62 %) usaron Educai con asistencia estable, lo que sugiere uso fuera del aula.",
  completion: {
    label: "Terminaron el ciclo",
    value: "25 de 29",
    detail: "de los que lo empezaron en la universidad.",
  },
};

/** Valoración promedio de la clase, en una escala de 1 a 4. */
export const rating = {
  title: "Valoración de la clase",
  text: "Promedio entre el inicio y el final del período, en una escala de 1 a 4.",
  scale: [1, 2, 3, 4],
  periods: [
    { label: "Inicio del período", from: 1, to: 2, emphasis: false },
    { label: "Final del período", from: 3, to: 4, emphasis: true },
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
  title: "Lo que todavía no podemos afirmar",
  text: "El diseño fue observacional y no tuvo grupo control. El anonimato impide vincular el uso con el desempeño de cada estudiante, no se controló la dificultad de los parciales y no conocemos las razones por las que 18 estudiantes no lo usaron.",
};

export const nextSteps = {
  title: "Qué vamos a medir en 2027",
  text: "Vamos a sumar un grupo control, a estudiar por qué 18 estudiantes no lo usaron y a medir el impacto en el aprendizaje.",
};

export const closing = {
  title: "Sumate a la cohorte 2027 y ayudanos a medir el impacto",
  text: "Buscamos docentes e instituciones que quieran probar Educai con un grupo control.",
};
