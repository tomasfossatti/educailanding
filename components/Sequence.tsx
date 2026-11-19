import type { CSSProperties, ReactNode } from "react";

type Step = { title: string; text: string };

/**
 * Pasos de un proceso sobre una línea continua. En pantallas angostas la línea
 * pasa a ser vertical. `annotation` se alinea debajo del paso `annotateFrom`.
 */
export function Sequence({
  steps,
  label,
  annotation,
  annotateFrom,
}: {
  steps: readonly Step[];
  label?: string;
  annotation?: ReactNode;
  annotateFrom?: number;
}) {
  const style = {
    "--steps": steps.length,
    "--annotate-from": annotateFrom ?? 1,
  } as CSSProperties;

  return (
    <div style={style}>
      <ol className="sequence" aria-label={label}>
        {steps.map((step, index) => (
          <li key={step.title} className="sequence__step">
            <span className="sequence__index" aria-hidden="true">
              {index + 1}
            </span>
            <h3 className="h4">
              <span className="visually-hidden">Paso {index + 1}: </span>
              {step.title}
            </h3>
            <p className="secondary">{step.text}</p>
          </li>
        ))}
      </ol>
      {annotation ? (
        <div className="sequence__annotation">
          <div className="sequence__annotation-body">{annotation}</div>
        </div>
      ) : null}
    </div>
  );
}
