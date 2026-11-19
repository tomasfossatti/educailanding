import type { ReactNode } from "react";

type SectionProps = {
  /** "contrast": franja invertida (una por página). "secondary": franja gris con borde. */
  band?: "contrast" | "secondary";
  /** Primera sección de la página, con menos aire arriba. */
  opening?: boolean;
  labelledBy?: string;
  className?: string;
  children: ReactNode;
};

export function Section({ band, opening = false, labelledBy, className = "", children }: SectionProps) {
  const classes = [
    "section",
    band ? `band band--${band}` : "",
    opening ? "section--opening" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classes} aria-labelledby={labelledBy}>
      <div className="container">{children}</div>
    </section>
  );
}

/** Título de sección con bajada opcional, en 8 columnas de escritorio. */
export function SectionHead({
  id,
  title,
  children,
  wide = false,
}: {
  id: string;
  title: ReactNode;
  children?: ReactNode;
  wide?: boolean;
}) {
  return (
    <div className="grid section-head">
      <div className={`${wide ? "d-9" : "d-8"} stack`}>
        <h2 id={id} className="h2">
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}
