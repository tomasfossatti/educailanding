"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FORM_URL, NAV_LINKS, ROUTES } from "@/content/site";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="container site-header">
      <Link href={ROUTES.inicio} className="logo">
        Educai
      </Link>
      <nav aria-label="Principal" className="site-nav">
        {NAV_LINKS.map((link) => {
          const isCurrent = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link"
              aria-current={isCurrent ? "page" : undefined}
            >
              {link.label}
            </Link>
          );
        })}
        <a className="btn btn--nav" href={FORM_URL} target="_blank" rel="noopener">
          Sumarme al piloto 2027
        </a>
      </nav>
    </header>
  );
}
