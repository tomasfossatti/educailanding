/** Franja de credibilidad: texto, sin logos. */
export function ProofStrip({ label, items }: { label: string; items: readonly string[] }) {
  return (
    <section className="proof" aria-label={label}>
      <div className="container">
        <div className="proof__scroller">
          <ul className="proof__list">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
