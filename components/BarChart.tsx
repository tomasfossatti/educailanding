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
