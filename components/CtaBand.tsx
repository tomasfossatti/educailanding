import { Button } from "./Button";

type CtaBandProps = {
  eyebrow?: string;
  title: string;
  text: string;
  href: string;
  cta: string;
  /** Inicio y Quién soy usan la versión alta con margen arriba y abajo. */
  tall?: boolean;
  titleSize?: 42 | 40 | 38;
};

export function CtaBand({ eyebrow, title, text, href, cta, tall = false, titleSize = 38 }: CtaBandProps) {
  const sizeClass = titleSize === 42 ? "h2" : `h2 h2--${titleSize}`;
  return (
    <section className={`container cta-wrap${tall ? " cta-wrap--top" : ""}`}>
      <div className={`cta-band on-accent${tall ? " cta-band--tall" : ""}`}>
        <div className={`stack basis-460 ${tall ? "gap-18" : "gap-14"}`}>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2 className={sizeClass}>{title}</h2>
          <p className="measure-620 cta-band__text">{text}</p>
        </div>
        <div className="cta-band__actions">
          <Button href={href} variant="light">
            {cta}
          </Button>
        </div>
      </div>
    </section>
  );
}
