import type { ReactNode } from "react";

type ChipProps = {
  variant?: "fill" | "outline" | "surface" | "accent";
  size?: "sm" | "md";
  children: ReactNode;
};

export function Chip({ variant = "fill", size = "md", children }: ChipProps) {
  const classes = ["chip", `chip--${variant}`, size === "sm" ? "chip--sm" : ""]
    .filter(Boolean)
    .join(" ");
  return <span className={classes}>{children}</span>;
}

export function ChipList({
  items,
  variant = "fill",
  size = "md",
  label,
}: {
  items: readonly string[];
  variant?: ChipProps["variant"];
  size?: ChipProps["size"];
  label?: string;
}) {
  return (
    <ul className="row gap-10" aria-label={label}>
      {items.map((item) => (
        <li key={item}>
          <Chip variant={variant} size={size}>
            {item}
          </Chip>
        </li>
      ))}
    </ul>
  );
}
