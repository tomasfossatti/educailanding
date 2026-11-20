"use client";

import { useEffect, useRef, type CSSProperties, type ElementType, type ReactNode } from "react";

type InViewProps = {
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  id?: string;
  role?: string;
  "aria-label"?: string;
  "aria-hidden"?: boolean | "true" | "false";
  children?: ReactNode;
};

/**
 * La primera vez que el elemento entra en pantalla le agrega data-inview="true"
 * y deja de observar. Los estados "ocultos" del CSS solo aplican con html.js,
 * así que sin JS todo se ve.
 */
export function InView({ as: Tag = "div", children, ...rest }: InViewProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const reveal = () => element.setAttribute("data-inview", "true");
    if (typeof IntersectionObserver === "undefined") {
      reveal();
      return;
    }
    // Umbral de 0.25, salvo en bloques más altos que la pantalla, que nunca llegan
    // al 25 %: a esos les alcanza con ocupar un cuarto de la ventana.
    const height = element.getBoundingClientRect().height || 1;
    const threshold = Math.min(0.25, (window.innerHeight * 0.25) / height);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  );
}
