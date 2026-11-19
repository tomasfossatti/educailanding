import { Button } from "@/components/Button";
import { Section } from "@/components/Section";
import { ROUTES } from "@/content/site";

export default function NotFound() {
  return (
    <Section opening>
      <div className="grid">
        <div className="d-8 stack">
          <p className="label">Error 404</p>
          <h1 className="title">No encontramos esta página</h1>
          <div className="actions mt-8">
            <Button href={ROUTES.inicio}>Volver al inicio</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
