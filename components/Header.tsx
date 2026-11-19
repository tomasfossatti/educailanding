"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FORM_URL, NAV_CTA, NAV_LINKS, ROUTES } from "@/content/site";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="container site-header">
      <Link href={ROUTES.inicio} className="wordmark">
        Educai
      </Link>
      <nav aria-label="Principal" className="site-nav">
        <ul className="site-nav__links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="nav-link"
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <a className="button" href={FORM_URL} target="_blank" rel="noopener">
          {NAV_CTA}
        </a>
      </nav>
    </header>
  );
}
