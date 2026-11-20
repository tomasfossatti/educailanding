"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  FORM_URL,
  HEADER,
  NAV_LINKS,
  PILOT_CTA_SHORT,
  PILOT_CTA_TINY,
  ROUTES,
} from "@/content/site";
import { Button } from "./Button";
import { LogoMark } from "./LogoMark";
import { Scribble } from "./Scribble";

const MENU_ID = "menu-mobile";

function Logo() {
  return (
    <Link href={ROUTES.inicio} className="logo" aria-label={HEADER.logoLabel}>
      <LogoMark />
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Filete inferior cuando se scrollea más de 8 px (centinela, sin listener de scroll).
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const close = useCallback((returnFocus: boolean) => {
    setOpen(false);
    if (returnFocus) menuButtonRef.current?.focus();
  }, []);

  // Se cierra al cambiar de ruta.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape cierra y devuelve el foco; el body no scrollea mientras está abierto.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close(true);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  // Si se agranda la ventana a desktop con el menú abierto, se cierra.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 900px)");
    const onChange = () => query.matches && setOpen(false);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const links = NAV_LINKS.map((link) => {
    const isCurrent = pathname === link.href;
    return { ...link, isCurrent };
  });

  return (
    <>
      <div ref={sentinelRef} className="header-sentinel" aria-hidden="true" />
      <header className="site-header" data-scrolled={scrolled ? "true" : undefined}>
        <div className="container site-header__inner">
          <Logo />

          <nav aria-label={HEADER.navLabel} className="site-nav">
            <ul className="site-nav__list">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="nav-link"
                    aria-current={link.isCurrent ? "page" : undefined}
                  >
                    {link.isCurrent ? (
                      <Scribble variant="underline" animate={false}>
                        {link.label}
                      </Scribble>
                    ) : (
                      link.label
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <Button href={FORM_URL} size="sm" arrow={false}>
              {PILOT_CTA_SHORT}
            </Button>
          </nav>

          <div className="site-header__mobile">
            <Button href={FORM_URL} size="sm" arrow={false}>
              {PILOT_CTA_TINY}
            </Button>
            <button
              ref={menuButtonRef}
              type="button"
              className="menu-btn"
              aria-expanded={open}
              aria-controls={MENU_ID}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? HEADER.menuClose : HEADER.menu}
            </button>
          </div>
        </div>

        <div id={MENU_ID} className="mobile-menu" data-open={open ? "true" : undefined}>
          <nav aria-label={HEADER.navLabel} className="container">
            <ul className="mobile-menu__list">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="mobile-menu__link"
                    aria-current={link.isCurrent ? "page" : undefined}
                    onClick={() => close(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
