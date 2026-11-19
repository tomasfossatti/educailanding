import type { ReactNode } from "react";

export type Tone = "paper" | "sheet" | "kraft" | "board";

type SectionProps = {
  /** Fondo de la sección. "board" es el pizarrón y agrega la clase on-board. */
  tone?: Tone;
  /** Variante de padding para los héroes. */
  variant?: "default" | "hero" | "hero-compact";
  /** Separación vertical entre los bloques del contenedor. */
  gap?: 24 | 32 | 40 | 48 | 56 | 64;
  /** Si es "row", el contenedor es una fila flex que se reacomoda. */
  layout?: "stack" | "row";
  /** Alineación vertical de las columnas cuando layout es "row". */
  align?: "center" | "start";
  className?: string;
  containerClassName?: string;
  id?: string;
  labelledBy?: string;
  children: ReactNode;
};

export function Section({
  tone = "paper",
  variant = "default",
  gap = 40,
  layout = "stack",
  align,
  className = "",
  containerClassName = "",
  id,
  labelledBy,
  children,
}: SectionProps) {
  const classes = [
    "section",
    `section--${tone}`,
    variant !== "default" ? `section--${variant}` : "",
    tone === "board" ? "on-board" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const containerClasses = [
    "container",
    layout,
    `gap-${gap}`,
    align ? `items-${align}` : "",
    containerClassName,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className={classes} aria-labelledby={labelledBy}>
      <div className={containerClasses}>{children}</div>
    </section>
  );
}
