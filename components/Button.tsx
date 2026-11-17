import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  variant?: "primary" | "ghost" | "light";
  className?: string;
  children: ReactNode;
};

function isExternal(href: string) {
  return /^https?:\/\//.test(href);
}

export function Button({ href, variant = "primary", className = "", children }: ButtonProps) {
  const classes = `btn btn--${variant} ${className}`.trim();

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
