import type { ReactNode } from "react";

/** Antetítulo en minúscula de oración, precedido por un trazo rojo corto. */
export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow ${className}`.trim()}>{children}</p>;
}
