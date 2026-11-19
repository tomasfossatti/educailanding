import type { ElementType, ReactNode } from "react";

export type CardVariant = "sheet" | "kraft" | "outline" | "board" | "note";

type CardProps = {
  variant?: CardVariant;
  /** sm = 22 px, md = 28 px (mobile 22 px), lg = 36 px (mobile 24 px). */
  padding?: "sm" | "md" | "lg";
  gap?: 6 | 8 | 10 | 12 | 16 | 20 | 24;
  basis?: 240 | 260 | 280 | 300 | 340 | 380 | 420;
  /** Ficha clickeable: se eleva 2 px en hover. */
  interactive?: boolean;
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

/** "Ficha": la tarjeta del sitio. */
export function Card({
  variant = "sheet",
  padding = "md",
  gap = 10,
  basis,
  interactive = false,
  as: Tag = "div",
  className = "",
  children,
}: CardProps) {
  const classes = [
    "card",
    `card--${variant}`,
    padding !== "md" ? `card--${padding}` : "",
    `gap-${gap}`,
    basis ? `basis-${basis}` : "",
    interactive ? "card--interactive" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <Tag className={classes}>{children}</Tag>;
}
