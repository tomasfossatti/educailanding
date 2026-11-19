type StatProps = {
  value: string;
  label: string;
  className?: string;
};

/** Cifra grande en Fraunces, sin tarjeta, con filete arriba. */
export function Stat({ value, label, className = "" }: StatProps) {
  return (
    <div className={`stat ${className}`.trim()}>
      <span className="stat__value">{value}</span>
      <span className="stat__label">{label}</span>
    </div>
  );
}
