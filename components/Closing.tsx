import { Button } from "./Button";

type ClosingProps = {
  id: string;
  title: string;
  text: string;
  href: string;
  cta: string;
};

/** Cierre de página: la decisión que pedimos, con una sola acción. */
export function Closing({ id, title, text, href, cta }: ClosingProps) {
  return (
    <section className="section" aria-labelledby={id}>
      <div className="container">
        <div className="grid closing">
          <h2 id={id} className="title d-7">
            {title}
          </h2>
          <div className="d-from-8 closing__body">
            <p className="secondary">{text}</p>
            <div className="actions">
              <Button href={href} size="large">
                {cta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
