import { Button } from "@/components/Button";
import { ROUTES } from "@/content/site";

export default function NotFound() {
  return (
    <section className="section section--hero">
      <div className="container">
        <div className="stack gap-24 measure-760">
          <p className="eyebrow">Error 404</p>
          <h1 className="h1 h1--compact">No encontramos esta página</h1>
          <div className="row">
            <Button href={ROUTES.inicio}>Volver al inicio</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
