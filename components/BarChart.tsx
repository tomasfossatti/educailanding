type ColumnBar = {
  label: string;
  percent: number;
  tone: "muted" | "highlight";
};

/** Altura de la barra más alta; el resto es proporcional (94 % → 150px, 70 % → 112px). */
const MAX_BAR_HEIGHT = 150;

/**
 * Gráfico de columnas (aprobados por parcial). Los valores aparecen como texto
 * sobre cada barra y en la leyenda; las barras son decorativas.
 */
export function ColumnChart({ bars }: { bars: readonly ColumnBar[] }) {
  const max = Math.max(...bars.map((bar) => bar.percent));
  return (
    <div className="stack gap-20">
      <div className="columns-chart">
        {bars.map((bar) => (
          <div key={bar.label} className="columns-chart__col">
            <span className="columns-chart__value">{bar.percent} %</span>
            <div
              aria-hidden="true"
              className={`columns-chart__bar columns-chart__bar--${bar.tone}`}
              style={{ height: `${Math.round((bar.percent / max) * MAX_BAR_HEIGHT)}px` }}
            />
          </div>
        ))}
      </div>
      <div className="columns-chart__legend">
        {bars.map((bar) => (
          <span key={bar.label}>{bar.label}</span>
        ))}
      </div>
    </div>
  );
}

type HBarRow = {
  label: string;
  value: number;
  total: number;
};

/** Barras horizontales con etiqueta y valor en texto (adopción). */
export function HorizontalBarChart({ rows }: { rows: readonly HBarRow[] }) {
  return (
    <ul className="stack gap-18">
      {rows.map((row) => (
        <li key={row.label} className="stack gap-6">
          <div className="hbar__head">
            <span>{row.label}</span>
            <span className="hbar__value">
              {row.value} de {row.total}
            </span>
          </div>
          <div className="hbar__track" aria-hidden="true">
            <div className="hbar__fill" style={{ width: `${(row.value / row.total) * 100}%` }} />
          </div>
        </li>
      ))}
    </ul>
  );
}
