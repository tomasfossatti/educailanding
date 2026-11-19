import type { CSSProperties } from "react";
import { InView } from "./InView";

export type UnitRow = {
  /** «1.er parcial, antes de Educai» */
  label: string;
  /** Texto del valor, por ejemplo «33 de 47». */
  value: string;
  /** Lo que lee un lector de pantalla: «33 de 47 estudiantes aprobaron el 1.er parcial». */
  ariaLabel: string;
  filled: number;
  total: number;
  tone: "muted" | "accent";
};

type UnitChartProps = {
  rows: readonly UnitRow[];
  caption: string;
  /** Nota al margen entre la primera y la segunda fila (la diferencia). */
  diffNote?: string;
  /** Lectura y descargos, siempre visibles debajo del gráfico. */
  notes: readonly string[];
  headingLevel?: "h2" | "h3";
  className?: string;
};

/** Gráfico de unidades: cada estudiante es un punto. */
export function UnitChart({ rows, caption, diffNote, notes, headingLevel = "h3", className = "" }: UnitChartProps) {
  const Heading = headingLevel;
  return (
    <figure className={`unit-chart ${className}`.trim()}>
      <Heading className="unit-chart__caption">{caption}</Heading>
      <InView className="unit-chart__rows">
        {rows.map((row, rowIndex) => (
          <div key={row.label} className="stack gap-10">
            {rowIndex === 1 && diffNote ? <p className="unit-chart__diff">{diffNote}</p> : null}
            <div className={`unit-row unit-row--${row.tone}`}>
              <div className="unit-row__head">
                <span className="unit-row__label">{row.label}</span>
                <span className="unit-row__value">{row.value}</span>
              </div>
              <div className="unit-grid" role="img" aria-label={row.ariaLabel}>
                {Array.from({ length: row.total }, (_, index) => (
                  <span
                    key={index}
                    aria-hidden="true"
                    className={index < row.filled ? "unit-dot unit-dot--filled" : "unit-dot"}
                    style={{ "--i": index } as CSSProperties}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </InView>
      <figcaption className="unit-chart__notes">
        {notes.map((note) => (
          <span key={note}>{note}</span>
        ))}
      </figcaption>
    </figure>
  );
}
