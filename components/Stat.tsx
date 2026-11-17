import { Card } from "./Card";

type StatProps = {
  value: string;
  label: string;
  /** "card": tarjeta blanca con borde. "dark": tarjeta sobre sección oscura. */
  variant?: "card" | "dark";
  size?: 48 | 44 | 36;
  basis?: 240 | 260;
};

export function Stat({ value, label, variant = "card", size = 48, basis = 260 }: StatProps) {
  const isDark = variant === "dark";
  const labelClass = size === 36 ? "small-text" : "card-text";
  return (
    <Card
      variant={isDark ? "dark" : "surface"}
      padding={isDark ? "p24x28" : size === 36 ? "p24" : "p28"}
      gap={size === 36 ? 4 : 6}
      basis={basis}
    >
      <span className={`stat__value stat__value--${size}`}>{value}</span>
      <span className={labelClass}>{label}</span>
    </Card>
  );
}
