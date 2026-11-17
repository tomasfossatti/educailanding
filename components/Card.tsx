import type { ElementType, ReactNode } from "react";

type CardVariant =
  | "surface"
  | "white"
  | "outline"
  | "tint"
  | "dark"
  | "dark-raised"
  | "dark-outline"
  | "dark-outline-strong"
  | "ink";

type CardProps = {
  variant: CardVariant;
  padding?: "p24" | "p28" | "p32" | "p24x28" | "p28x32";
  gap?: 4 | 6 | 8 | 10 | 12 | 16 | 20;
  basis?: 240 | 260 | 280 | 300 | 340 | 380 | 420;
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export function Card({
  variant,
  padding = "p28",
  gap = 10,
  basis,
  as: Tag = "div",
  className = "",
  children,
}: CardProps) {
  const classes = [
    "card",
    `card--${variant}`,
    padding !== "p28" ? `card--${padding}` : "",
    `gap-${gap}`,
    basis ? `basis-${basis}` : "",
    variant === "ink" ? "on-dark" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <Tag className={classes}>{children}</Tag>;
}
