import type { CSSProperties, ReactNode } from "react";
import { InView } from "./InView";

export type ScribbleVariant = "underline" | "circle" | "arrow" | "check" | "question";

/** Trazados a mano, levemente irregulares. pathLength="1" permite dibujarlos con dasharray. */
const PATHS: Record<ScribbleVariant, { viewBox: string; d: string[]; stretch: boolean }> = {
  underline: {
    viewBox: "0 0 200 12",
    d: ["M2 8 C 40 3, 80 11, 120 6 S 180 4, 198 7"],
    stretch: true,
  },
  circle: {
    viewBox: "0 0 210 64",
    d: ["M118 7 C 52 2, 6 16, 9 35 C 12 55, 82 61, 142 54 C 197 48, 207 20, 164 9 C 136 3, 96 5, 72 12"],
    stretch: true,
  },
  arrow: {
    viewBox: "0 0 120 60",
    d: ["M4 10 C 40 4, 86 14, 104 46", "M92 40 L 105 48 L 108 33"],
    stretch: false,
  },
  check: {
    viewBox: "0 0 24 24",
    d: ["M4 13 C 7 15, 8 17, 10 19 C 13 13, 16 8, 21 4"],
    stretch: false,
  },
  question: {
    viewBox: "0 0 24 24",
    d: ["M8 8 C 8 4, 16 3, 16 8 C 16 11, 12 11, 12 14", "M12 19 L 12 19.5"],
    stretch: false,
  },
};

type ScribbleProps = {
  variant: ScribbleVariant;
  /** Texto que se subraya o se encierra (underline y circle). */
  children?: ReactNode;
  /** Si es false, aparece ya dibujada (por ejemplo, en la navegación). */
  animate?: boolean;
  /** Demora del dibujo, en ms. */
  delay?: number;
  className?: string;
};

function Mark({ variant, animate, delay, className = "" }: Omit<ScribbleProps, "children">) {
  const shape = PATHS[variant];
  const classes = ["scribble", `scribble--${variant}`, animate ? "scribble--draw" : "", className]
    .filter(Boolean)
    .join(" ");
  const style = delay ? ({ "--scribble-delay": `${delay}ms` } as CSSProperties) : undefined;
  const svg = (
    <svg
      viewBox={shape.viewBox}
      preserveAspectRatio={shape.stretch ? "none" : "xMidYMid meet"}
      focusable="false"
      aria-hidden="true"
    >
      {shape.d.map((d) => (
        <path key={d} d={d} pathLength={1} />
      ))}
    </svg>
  );
  if (!animate) {
    return (
      <span className={classes} aria-hidden="true">
        {svg}
      </span>
    );
  }
  return (
    <InView as="span" className={classes} style={style} aria-hidden="true">
      {svg}
    </InView>
  );
}

/**
 * Marca a mano en lápiz rojo (o el color del texto que la contiene).
 * Como máximo 3 por pantalla: si se usan de más, el recurso se gasta.
 */
export function Scribble({ variant, children, animate = true, delay, className }: ScribbleProps) {
  if (variant === "underline" || variant === "circle") {
    return (
      <span className={`scribble-wrap scribble-wrap--${variant}`}>
        {children}
        <Mark variant={variant} animate={animate} delay={delay} className={className} />
      </span>
    );
  }
  return <Mark variant={variant} animate={animate} delay={delay} className={className} />;
}
