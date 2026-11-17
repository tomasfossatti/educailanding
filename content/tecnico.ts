export const hero = {
  eyebrow: "Funcionamiento técnico",
  title: "Cómo funciona Educai por dentro",
  subtitle:
    "Educai ya funciona como un MVP desplegado en producción, con flujo de estudiante, flujo de docente y lógica analítica. Convierte conversaciones individuales en patrones colectivos sin construir perfiles de cada alumno.",
  stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Render"],
};

export const fullCycle = {
  eyebrow: "El ciclo completo",
  title: "Del contenido del docente a una nueva decisión docente",
  steps: [
    { title: "Contenido docente", text: "El docente carga y activa los materiales de su materia." },
    { title: "Estudio con IA", text: "El estudiante conversa con un tutor que usa esos materiales." },
    { title: "Conversaciones", text: "Cada interacción queda como una conversación de varios turnos." },
    { title: "Análisis", text: "La IA detecta conceptos y señales dentro de las conversaciones." },
    {
      title: "Patrones de aprendizaje",
      text: "Las señales se agrupan por concepto entre participantes independientes.",
    },
    {
      title: "Decisión docente",
      text: "El docente ve insights y recomendaciones, y decide qué hacer.",
    },
    { title: "Intervención en clase", text: "Registra su acción y realiza la sesión de clase." },
    { title: "Feedback", text: "Los estudiantes responden con una valoración y un comentario." },
    {
      title: "Nueva evidencia",
      text: "Las conversaciones siguientes permiten comparar señales antes y después.",
    },
  ],
};

export const validatedTutor = {
  eyebrow: "Tutor con contenido validado",
  title: "El docente controla de dónde responde la IA",
  paragraphs: [
    "El docente carga materiales en texto, Markdown o PDF, y cada uno tiene un estado: borrador (DRAFT), activo (ACTIVE) o retirado (RETIRED). Solo los materiales activos se usan para recuperar contexto durante las conversaciones.",
    "Educai conserva la trazabilidad de qué fragmentos se usaron en cada respuesta. Hoy la búsqueda es principalmente léxica, y todavía no usa embeddings ni una base vectorial.",
  ],
  ragLabel: "Flujo de recuperación (RAG)",
  rag: [
    "El docente carga el material.",
    "Educai extrae el texto y lo divide en fragmentos.",
    "Guarda esos fragmentos.",
    "Cuando el estudiante pregunta, busca los fragmentos relacionados.",
    "Los envía a la IA junto con la pregunta.",
    "Genera una respuesta contextualizada y registra qué fragmentos usó.",
  ],
};

export const signals = {
  eyebrow: "Del chat al patrón colectivo",
  title: "Educai busca señales y agrega evidencia por participante",
  paragraphs: [
    "Además de guardar la conversación que necesita el estudiante, Educai la analiza y detecta preguntas, confusiones, reformulaciones, conceptos involucrados, tipos de explicación y señales de comprensión. La IA devuelve el análisis bajo un esquema estructurado que se valida antes de guardarlo, y esas señales son observaciones sobre la conversación, sin convertirse en una nota.",
    "Para que una conversación intensa de una sola persona no distorsione el resultado, la agregación cuenta participantes independientes y deja de lado la cantidad de mensajes.",
  ],
  states: [
    { code: "NO_DATA", text: "No hay señales suficientes para ese concepto." },
    {
      code: "INSUFFICIENT",
      text: "Hay señales, pero en pocas personas. Educai lo reconoce y evita convertirlo en una conclusión grupal.",
    },
    {
      code: "SUFFICIENT",
      text: "El patrón aparece en al menos 3 participantes independientes (umbral configurable) y se muestra al docente como evidencia agregada.",
    },
  ],
  exampleLabel: "Ejemplo del mensaje que ve el docente",
  example:
    "«Varios participantes muestran señales relacionadas con dificultades para distinguir correlación y causalidad.»",
  exampleNote: "Educai evita los diagnósticos individuales y habla del grupo.",
};

export const insights = {
  eyebrow: "Insights y seguimiento",
  title: "De la evidencia a la acción en clase",
  items: [
    {
      title: "Insight",
      text: "Cuando hay evidencia suficiente, incluye el concepto, los participantes afectados sobre el total, la proporción, el estado de evidencia, un resumen y fragmentos anonimizados y sanitizados.",
    },
    {
      title: "Recomendación",
      text: "Concreta, ligada a la evidencia y ejecutable en una clase. Por ejemplo: usar dos casos comparativos donde exista una correlación sin relación causal.",
    },
    {
      title: "Intervención",
      text: "El docente registra qué hizo, como explicar de nuevo, usar otro ejemplo, hacer una actividad práctica o abrir una discusión, y queda conectada con el insight.",
    },
    {
      title: "Sesiones y feedback",
      text: "El docente abre y cierra sesiones de clase, y después los estudiantes dejan una valoración y un comentario que llegan en resultados agregados.",
    },
  ],
  note: "Educai muestra una comparación de señales antes y después de una intervención. Una mejora posterior no demuestra por sí sola que la intervención la haya causado.",
};

export const privacy = {
  eyebrow: "Privacidad desde la arquitectura",
  title: "Identidad, análisis y agregación van por separado",
  text: "La conversación pertenece a la experiencia privada del estudiante. Las señales se transforman antes de llegar al docente, que trabaja sobre el insight del grupo y no sobre un expediente individual.",
  flowLabel: "Recorrido de los datos",
  flow: [
    "Alumno identificado",
    "Conversación",
    "Análisis",
    "Pseudonimización",
    "Agregación",
    "Insight grupal",
    "Docente",
  ],
  items: [
    {
      title: "Patrones colectivos",
      text: "El docente no dispone de perfiles analíticos individuales, rankings, métricas cognitivas por alumno ni diagnósticos automáticos.",
    },
    {
      title: "Eliminación real",
      text: "Cuando el estudiante elimina una conversación, también se eliminan los análisis y señales derivados, y se recalculan los agregados.",
    },
    {
      title: "Evidencia anonimizada",
      text: "Los fragmentos que ve el docente están anonimizados y sanitizados, y solo aparecen cuando hay evidencia grupal suficiente.",
    },
  ],
};

export const roadmap = {
  eyebrow: "Hacia dónde va · especificado, todavía no construido",
  title: "De la evidencia a la próxima decisión",
  intro:
    "Además del MVP, tenemos escritas las especificaciones (versión 1.0) de la capa que sigue. Las incluimos acá porque muestran cómo pensamos el producto, pero no las contamos como funcionalidades existentes.",
  engines: [
    {
      title: "Motor de interpretación",
      paragraphs: [
        "Convierte varias señales sobre una capacidad en un estado visible con cuatro etiquetas: «Todavía no sabemos», «En desarrollo», «Evidencia sólida» y «Conviene revisar». Son etiquetas operativas que salen de evidencia observable, y no porcentajes de comprensión.",
        "Para llegar a «Evidencia sólida» pide al menos dos oportunidades independientes, una de ellas de calidad alta y con poca ayuda. Una sola respuesta, correcta o incorrecta, no cambia el estado. Los umbrales están pensados como hipótesis a calibrar en un piloto.",
      ],
    },
    {
      title: "Motor de recomendación",
      paragraphs: [
        "Toma esa interpretación, el cronograma y las restricciones del aula, y propone una sola acción principal con su motivo. Para el docente trabaja siempre con agregados: la unidad es la capacidad o el patrón del grupo, nunca un alumno señalado.",
        "Las reglas de prioridad viven en código versionado y la IA ayuda a redactar y a proponer variantes, pero no decide umbrales ni quién entra en un cálculo.",
      ],
    },
    {
      title: "Panel docente por cátedra",
      paragraphs: [
        "Cada cátedra queda aislada de las demás. La pantalla de inicio responde en unos segundos dónde está la cursada, qué necesita el aula y qué conviene hacer en la próxima clase, con un mapa de aprendizaje vinculado al programa y un botón para cerrar la clase.",
        "Los porcentajes se calculan solo sobre estudiantes con evidencia suficiente: si 12 de 27 necesitan revisar un tema, se muestra 44 % «basado en 27», y no 12 sobre los 42 inscriptos. Con menos de 5 estudiantes no se muestra el agregado.",
      ],
    },
  ],
  proposals: [
    {
      title: "Diseño de experiencias de clase",
      text: "La pregunta de partida es qué comportamiento queremos provocar para que el estudiante necesite aprender el contenido. De ahí salen el desafío, la dinámica, el feedback y la evidencia que deja. La creatividad de la dinámica es un medio, y lo que importa es el aprendizaje que se pueda mostrar. Si la tecnología no mejora lo que se logra con papel o pizarra, el sistema recomienda una experiencia presencial.",
    },
    {
      title: "Onboarding de autodescubrimiento",
      text: "Una conversación estructurada de unos 10 a 12 minutos, en cinco etapas, que arma una primera hipótesis profesional del estudiante y le propone experimentos para ponerla a prueba. El resultado se presenta como hipótesis y no como identidad. Es una propuesta de rediseño y está separada del perfil académico.",
    },
  ],
};

export const mvpStatus = {
  eyebrow: "Estado actual del MVP",
  title: "Lo que ya funciona y lo que todavía falta",
  done: {
    title: "Ya funciona",
    items: [
      "Autenticación y roles",
      "Materias y códigos de ingreso",
      "Carga de PDF, Markdown y texto",
      "Versionado y estados de materiales",
      "Actividades",
      "Tutor multi-turno con RAG",
      "Trazabilidad de fuentes",
      "Análisis estructurado con IA",
      "Pseudonimización y agregación",
      "Insights y recomendaciones",
      "Intervenciones y sesiones",
      "Feedback y comparación antes y después",
      "Eliminación de conversaciones",
    ],
  },
  pending: {
    title: "Todavía falta",
    items: [
      "Recuperación semántica con embeddings",
      "Análisis asincrónico para escalar",
      "Almacenamiento de archivos fuera de PostgreSQL",
      "SSO, SAML y directorios universitarios",
      "Políticas de retención configurables",
      "Auditoría completa y exportable",
      "Más tests de punta a punta",
      "Motores de interpretación y recomendación v1.0",
      "Mapa de aprendizaje y cierre de clase",
      "Onboarding de autodescubrimiento",
    ],
  },
  note: "Los insights agregados y el mapa de temas todavía no se evaluaron en el test con estudiantes.",
};

export const closing = {
  title: "Probá Educai en tu cátedra",
  text: "Buscamos docentes e instituciones para la cohorte 2027.",
};
