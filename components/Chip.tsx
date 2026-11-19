import type { ReactNode } from "react";

type ChipVariant = "default" | "done" | "pending";

type ChipProps = {
  variant?: ChipVariant;
  /** Tipografía monoespaciada (stack técnico). */
  mono?: boolean;
  children: ReactNode;
};

/** Etiqueta escolar en píldora. */
export function Chip({ variant = "default", mono = false, children }: ChipProps) {
  const classes = ["chip", variant !== "default" ? `chip--${variant}` : "", mono ? "chip--mono" : ""]
    .filter(Boolean)
    .join(" ");
  return <span className={classes}>{children}</span>;
}

export function ChipList({
  items,
  variant = "default",
  mono = false,
  label,
}: {
  items: readonly string[];
  variant?: ChipVariant;
  mono?: boolean;
  label?: string;
}) {
  return (
    <ul className="chip-list" aria-label={label}>
      {items.map((item) => (
        <li key={item}>
          <Chip variant={variant} mono={mono}>
            {item}
          </Chip>
        </li>
      ))}
    </ul>
  );
}
