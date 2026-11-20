type HBarRow = {
  label: string;
  value: number;
  total: number;
  /** Valor en texto, desde content/ («29 de 47»). */
  valueText: string;
};

/** Barras horizontales con etiqueta y valor en texto (adopción). Las barras son decorativas. */
export function HorizontalBarChart({ rows, label }: { rows: readonly HBarRow[]; label?: string }) {
  return (
    <ul className="hbar" aria-label={label}>
      {rows.map((row) => (
        <li key={row.label} className="hbar__row">
          <div className="hbar__head">
            <span>{row.label}</span>
            <span className="hbar__value">
              {row.valueText}
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
