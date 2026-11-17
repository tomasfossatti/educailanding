type Step = { title: string; text: string };

/**
 * Lista numerada de pasos.
 * - "stacked": número arriba, tarjeta tinte (ciclo de Inicio).
 * - "inline": número a la izquierda, tarjeta tinte (ciclo de Técnica).
 */
export function StepList({
  steps,
  variant = "stacked",
}: {
  steps: readonly Step[];
  variant?: "stacked" | "inline";
}) {
  const isInline = variant === "inline";
  return (
    <ol className="row gap-20">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className={`card card--tint card--p24 ${isInline ? "basis-340 step-row" : "basis-190 gap-10"}`}
        >
          <span
            className={`step__number ${isInline ? "step__number--30" : "step__number--34"}`}
            aria-hidden="true"
          >
            {index + 1}
          </span>
          <div className={isInline ? "stack gap-4" : "stack gap-10"}>
            <h3 className={`h3 ${isInline ? "h3--19" : "h3--20"}`}>
              <span className="sr-only">Paso {index + 1}: </span>
              {step.title}
            </h3>
            <p className="small-text">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/** Lista compacta de pasos en una sola columna (flujo RAG). */
export function CompactStepList({ steps, label }: { steps: readonly string[]; label?: string }) {
  return (
    <ol className="stack gap-12" aria-label={label}>
      {steps.map((step, index) => (
        <li key={step} className="step-compact">
          <span className="step__number">{index + 1}</span>
          <span>{step}</span>
        </li>
      ))}
    </ol>
  );
}
