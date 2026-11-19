import Link from "next/link";
import type { ReactNode } from "react";
import { A11Y } from "@/content/site";

export type ButtonVariant = "primary" | "secondary" | "chalk" | "quiet";

type ButtonProps = {
  href: string;
  variant?: ButtonVariant;
  /** "sm" = 44 px de alto (header). */
  size?: "md" | "sm";
  /** Flecha tipográfica al final. Por defecto, solo en primary. */
  arrow?: boolean;
  className?: string;
  children: ReactNode;
};

export function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

function Arrow() {
  return (
    <span aria-hidden="true" className="btn__arrow">
      →
    </span>
  );
}

/** Link con estilo de botón. Los externos se abren en otra pestaña y lo anuncian. */
export function Button({
  href,
  variant = "primary",
  size = "md",
  arrow,
  className = "",
  children,
}: ButtonProps) {
  const showArrow = arrow ?? variant === "primary";
  const classes = ["btn", `btn--${variant}`, size === "sm" ? "btn--sm" : "", className]
    .filter(Boolean)
    .join(" ");
  const content = (
    <>
      <span>{children}</span>
      {showArrow ? <Arrow /> : null}
    </>
  );

  if (href.startsWith("mailto:")) {
    return (
      <a className={classes} href={href}>
        {content}
      </a>
    );
  }

  if (isExternal(href)) {
    return (
      <a className={classes} href={href} target="_blank" rel="noopener">
        {content}
        <span className="sr-only">{A11Y.newTab}</span>
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
}

/**
 * Link suelto ("Ver resultados →"). Si el texto del contenido termina en "→",
 * la flecha se saca del texto y se dibuja aparte, oculta para lectores de pantalla.
 */
export function TextLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: string;
  className?: string;
}) {
  const label = children.replace(/\s*→\s*$/, "");
  const classes = `text-link ${className}`.trim();
  const content = (
    <>
      <span>{label}</span>
      <span aria-hidden="true" className="text-link__arrow">
        →
      </span>
    </>
  );
  if (isExternal(href)) {
    return (
      <a className={classes} href={href} target="_blank" rel="noopener">
        {content}
        <span className="sr-only">{A11Y.newTab}</span>
      </a>
    );
  }
  if (href.startsWith("mailto:")) {
    return (
      <a className={classes} href={href}>
        {content}
      </a>
    );
  }
  return (
    <Link className={classes} href={href}>
      {content}
    </Link>
  );
}
