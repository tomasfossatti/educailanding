import Image from "next/image";
import type { Photo } from "@/content/site";
import { Button } from "./Button";

type CtaBandProps = {
  eyebrow?: string;
  title: string;
  text: string;
  cta: { href: string; label: string };
  /** "Qué pasa después": lista ordenada de pasos. */
  next?: { title: string; items: readonly string[] };
  /** Microcopy de riesgo bajo debajo del botón. */
  note?: string;
  /** Segundo botón (WhatsApp). Solo se muestra si existe. */
  secondary?: { href: string; label: string } | null;
  /** Foto de Tomás. TODO(material): solo se muestra si no es null. */
  person?: { photo: Photo | null; text: string };
  id?: string;
};

/** Banda de cierre en azul birome. */
export function CtaBand({ eyebrow, title, text, cta, next, note, secondary, person, id }: CtaBandProps) {
  const titleId = id ? `${id}-title` : undefined;
  return (
    <section className="cta-wrap" id={id} aria-labelledby={titleId}>
      <div className="container">
        <div className="cta-band on-accent">
          <div className="cta-band__main stack gap-16">
            {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
            <h2 id={titleId} className="h2">
              {title}
            </h2>
            <p className="cta-band__text">{text}</p>
            {person?.photo ? (
              <div className="cta-band__person">
                <Image
                  src={person.photo.src}
                  alt={person.photo.alt}
                  width={72}
                  height={72}
                  sizes="72px"
                  loading="lazy"
                  className="cta-band__portrait"
                />
                <p>{person.text}</p>
              </div>
            ) : null}
          </div>
          <div className="cta-band__side stack gap-20">
            {next ? (
              <div className="stack gap-12">
                <h3 className="cta-band__next-title">{next.title}</h3>
                <ol className="cta-steps">
                  {next.items.map((item, index) => (
                    <li key={item}>
                      <span className="cta-steps__n" aria-hidden="true">
                        {index + 1}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ) : null}
            <div className="stack gap-10 items-start">
              <Button href={cta.href} variant="chalk" arrow>
                {cta.label}
              </Button>
              {note ? <p className="cta-band__note">{note}</p> : null}
              {secondary ? (
                <Button href={secondary.href} variant="quiet">
                  {secondary.label}
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
