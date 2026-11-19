import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

type SectionHeadingProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  id?: string;
  /** Texto debajo del título. */
  children?: ReactNode;
  className?: string;
};

export function SectionHeading({ eyebrow, title, id, children, className = "" }: SectionHeadingProps) {
  return (
    <div className={`section-heading stack gap-16 ${className}`.trim()}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 id={id} className="h2">
        {title}
      </h2>
      {children}
    </div>
  );
}
