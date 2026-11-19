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
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          // Un bloque más alto que la pantalla nunca llega al 25 %: alcanza con que
          // ocupe un cuarto de la ventana.
          const tallEnough = entry.intersectionRect.height >= window.innerHeight * 0.25;
          if (entry.intersectionRatio >= 0.25 || tallEnough) {
            reveal();
            observer.disconnect();
          }
        }
      },
      { threshold: [0, 0.25, 0.5], rootMargin: "0px 0px -10% 0px" },
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
