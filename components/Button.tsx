import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  size?: "default" | "large";
  children: ReactNode;
};

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

export function Button({ href, variant = "primary", size = "default", children }: ButtonProps) {
  const classes = [
    "button",
    variant === "secondary" ? "button--secondary" : "",
    size === "large" ? "button--large" : "",
  ]
    .filter(Boolean)
    .join(" ");

  if (href.startsWith("mailto:")) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }

  if (isExternal(href)) {
    return (
      <a className={classes} href={href} target="_blank" rel="noopener">
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link className="text-link" href={href}>
      {children}
    </Link>
  );
}
