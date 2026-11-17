import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

type SectionHeadingProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  id?: string;
  /** Tamaño del H2: 42 (por defecto), 40, 38 o 34. */
  size?: 42 | 40 | 38 | 34;
  measure?: 760 | 820;
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  id,
  size = 42,
  measure = 760,
  children,
}: SectionHeadingProps) {
  const sizeClass = size === 42 ? "" : ` h2--${size}`;
  return (
    <div className={`stack gap-16 measure-${measure}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 id={id} className={`h2${sizeClass}`}>
        {title}
      </h2>
      {children}
    </div>
  );
}
