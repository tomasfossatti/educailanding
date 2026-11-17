import type { ReactNode } from "react";

type Tone = "bg" | "white" | "tint" | "ink" | "dark";

type SectionProps = {
  tone?: Tone;
  /** Variante de padding para los héroes. */
  variant?: "default" | "hero" | "hero-compact";
  /** Separación vertical entre los bloques del contenedor. */
  gap?: 24 | 32 | 36 | 40 | 48 | 56 | 64;
  /** Si es "row", el contenedor es una fila flex que se reacomoda. */
  layout?: "stack" | "row";
  /** Alineación vertical de las columnas cuando layout es "row". */
  align?: "center" | "start";
  className?: string;
  id?: string;
  labelledBy?: string;
  children: ReactNode;
};

export function Section({
  tone = "bg",
  variant = "default",
  gap = 40,
  layout = "stack",
  align,
  className = "",
  id,
  labelledBy,
  children,
}: SectionProps) {
  const isDark = tone === "ink" || tone === "dark";
  const classes = [
    "section",
    tone !== "bg" ? `section--${tone}` : "",
    variant !== "default" ? `section--${variant}` : "",
    isDark ? "on-dark" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={classes} aria-labelledby={labelledBy}>
      <div className={`container ${layout} gap-${gap}${align ? ` items-${align}` : ""}`}>{children}</div>
    </section>
  );
}
