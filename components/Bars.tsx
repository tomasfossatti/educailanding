import type { CSSProperties } from "react";

type ApprovalBar = {
  label: string;
  approved: number;
  percent: number;
  emphasis: boolean;
};

/**
 * Comparación de aprobados en una escala común de 0 al total del curso.
 * El largo de cada barra es la cantidad de aprobados sobre el total.
 */
export function ApprovalBars({
  bars,
  total,
  unit,
}: {
  bars: readonly ApprovalBar[];
  total: number;
  unit: string;
}) {
  return (
    <div>
      <ul className="bars">
        {bars.map((bar) => (
          <li key={bar.label}>
            <div className="bars__row-head">
              <span className={bar.emphasis ? "h4" : "secondary"}>{bar.label}</span>
              <span className="bars__value">
                {bar.approved} de {total}
                <span className="secondary"> · {bar.percent} %</span>
              </span>
            </div>
            <div className="bars__track" aria-hidden="true">
              <div
                className={`bars__fill${bar.emphasis ? " bars__fill--strong" : ""}`}
                style={{ width: `${(bar.approved / total) * 100}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className="bars__scale meta" aria-hidden="true">
        <span>0</span>
        <span>
          {total} {unit}
        </span>
      </div>
    </div>
  );
}

type AdoptionGroup = {
  name: string;
  total: number;
  rows: readonly { label: string; value: number }[];
};

/** Adopción por grupo, en porcentaje sobre los inscriptos de cada uno (escala común de 0 a 100 %). */
export function AdoptionBars({ groups }: { groups: readonly AdoptionGroup[] }) {
  return (
    <div>
      {groups.map((group) => (
        <div key={group.name} className="bar-group">
          <h4 className="h4">
            {group.name} <span className="count">· {group.total} inscriptos</span>
          </h4>
          <ul className="bars bars--compact">
            {group.rows.map((row) => {
              const percent = Math.round((row.value / group.total) * 100);
              return (
                <li key={row.label}>
                  <div className="bars__row-head">
                    <span>{row.label}</span>
                    <span className="bars__value">
                      {row.value} de {group.total}
                      <span className="secondary"> · {percent} %</span>
                    </span>
                  </div>
                  <div className="bars__track" aria-hidden="true">
                    <div className="bars__fill bars__fill--strong" style={{ width: `${percent}%` }} />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
      <div className="bars__scale meta" aria-hidden="true">
        <span>0 %</span>
        <span>100 %</span>
      </div>
    </div>
  );
}

type RatingPeriod = { label: string; from: number; to: number; emphasis: boolean };

/** Rango de valoración sobre una escala discreta (1 a 4). */
export function RatingRange({
  scale,
  periods,
  stacked = false,
}: {
  scale: readonly number[];
  periods: readonly RatingPeriod[];
  /** Etiqueta arriba de cada barra, para columnas angostas. */
  stacked?: boolean;
}) {
  const min = scale[0];
  const style = { "--points": scale.length } as CSSProperties;
  return (
    <div className={`rating${stacked ? " rating--stacked" : ""}`} style={style}>
      {periods.map((period) => (
        <div key={period.label} className="rating__row">
          <span className={period.emphasis ? "h4" : "secondary"}>{period.label}</span>
          <div className="rating__track">
            <span
              className={`rating__span${period.emphasis ? " rating__span--strong" : ""}`}
              style={{ gridColumn: `${period.from - min + 1} / ${period.to - min + 2}` }}
            />
            <span className="visually-hidden">
              {period.from} a {period.to}
            </span>
          </div>
        </div>
      ))}
      <div className="rating__axis" aria-hidden="true">
        <span />
        <div className="rating__ticks meta">
          {scale.map((point) => (
            <span key={point}>{point}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
