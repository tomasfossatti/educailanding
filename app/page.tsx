import type { Metadata } from "next";
import { ApprovalBars } from "@/components/Bars";
import { Button, TextLink } from "@/components/Button";
import { Closing } from "@/components/Closing";
import { ProductView } from "@/components/ProductView";
import { Section, SectionHead } from "@/components/Section";
import { Sequence } from "@/components/Sequence";
import {
  closing,
  cycle,
  hero,
  model,
  product,
  resultsTeaser,
  tension,
  whyItMatters,
} from "@/content/inicio";
import { approvals } from "@/content/resultados";
import { FORM_URL, PILOT_CTA, ROUTES } from "@/content/site";

const description =
  "Educai convierte las conversaciones de estudio en información útil para que el docente decida mejor sus clases.";

export const metadata: Metadata = {
  title: "Educai: tutor de IA para el aula",
  description,
  alternates: { canonical: ROUTES.inicio },
  openGraph: { title: "Educai: tutor de IA para el aula", description, url: ROUTES.inicio },
};

export default function InicioPage() {
  const [before, after] = approvals.bars;
  const [teachers, students] = tension.columns;

  return (
    <>
      {/* Apertura: la pregunta y el producto que la responde */}
      <Section opening>
        <div className="grid opening">
          <div className="d-7">
            <h1 className="display">
              {hero.title.split(/(?<=,) /).map((part) => (
                <span key={part}>{part}</span>
              ))}
            </h1>
            <p className="lede">{hero.subtitle}</p>
            <div className="actions">
              <Button href={FORM_URL} size="large">
                {hero.primaryCta}
              </Button>
              <Button href={ROUTES.resultados} variant="secondary" size="large">
                {hero.secondaryCta}
              </Button>
            </div>
          </div>
          <ProductView className="d-from-8" />
        </div>
      </Section>

      {/* Docentes y estudiantes, fila por fila */}
      <Section labelledBy="tension-title">
        <SectionHead id="tension-title" title={tension.title} />
        <div className="pairs">
          <h3 className="h3 pairs__head">{teachers.title}</h3>
          <h3 className="h3 pairs__head">{students.title}</h3>
          {teachers.items.map((item, index) => (
            <TensionRow key={item} teacher={item} student={students.items[index]} />
          ))}
        </div>
      </Section>

      <Section band="contrast">
        <blockquote className="quote">{tension.quote}</blockquote>
      </Section>

      {/* El producto */}
      <Section labelledBy="product-title">
        <SectionHead id="product-title" title={product.title} />
        <div className="grid">
          {product.audiences.map((audience) => (
            <div key={audience.label} className="d-6 t-3 peer">
              <p className="label">{audience.label}</p>
              <h3 className="h3">{audience.title}</h3>
              <p className="secondary">{audience.text}</p>
            </div>
          ))}
        </div>
        <h3 className="visually-hidden">{product.principlesLabel}</h3>
        <ul className="grid mt-16">
          {product.principles.map((principle) => (
            <li key={principle.title} className="d-3 t-3 peer peer--rule">
              <h4 className="h4">{principle.title}</h4>
              <p className="secondary">{principle.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* El ciclo que probamos en clase */}
      <Section labelledBy="cycle-title">
        <SectionHead id="cycle-title" title={cycle.title} />
        <Sequence
          steps={cycle.steps}
          annotateFrom={4}
          annotation={
            <div className="stack-tight">
              <p className="label">{cycle.highlightLabel}</p>
              <p className="h3">{cycle.highlight}</p>
            </div>
          }
        />
        <p className="mt-10">
          <TextLink href={ROUTES.tecnico}>{cycle.link}</TextLink>
        </p>
      </Section>

      {/* Resultados del test */}
      <Section band="secondary" labelledBy="results-title">
        <SectionHead id="results-title" title={resultsTeaser.title} />
        <div className="grid">
          <figure className="d-7 figure">
            <div className="delta">
              <span className="delta__value">+{after.approved - before.approved}</span>
              <span className="secondary">{approvals.deltaSuffix}</span>
            </div>
            <ApprovalBars bars={approvals.bars} total={approvals.total} unit={approvals.unit} />
            <figcaption className="caption">
              {approvals.title}. {resultsTeaser.disclaimer}
            </figcaption>
          </figure>
          <div className="d-from-9 stack-loose">
            {resultsTeaser.stats.map((stat) => (
              <div key={stat.label} className="peer--rule">
                <p className="label">{stat.label}</p>
                <span className="stat__value">{stat.value}</span>
                <p className="stat__detail">{stat.detail}</p>
              </div>
            ))}
            <div>
              <Button href={ROUTES.resultados} variant="secondary">
                {resultsTeaser.link}
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Modelo en construcción */}
      <Section labelledBy="model-title">
        <div className="grid section-head">
          <div className="d-8 stack">
            <p className="status">{model.status}</p>
            <h2 id="model-title" className="h2">
              {model.title}
            </h2>
            <p className="prose--lede secondary">{model.text}</p>
          </div>
        </div>
        <ul className="grid">
          {model.stakeholders.map((item) => (
            <li key={item.title} className="d-4 t-2 peer peer--rule">
              <h3 className="h4">{item.title}</h3>
              <p className="secondary">{item.text}</p>
            </li>
          ))}
        </ul>
        <div className="note stack-tight mt-12">
          <p className="label">{model.disclaimerLabel}</p>
          <p className="secondary">{model.disclaimer}</p>
        </div>
      </Section>

      {/* Por qué me importa */}
      <Section labelledBy="why-title">
        <div className="grid rule">
          <h2 id="why-title" className="h2 d-5">
            {whyItMatters.title}
          </h2>
          <div className="d-from-7 prose prose--lede">
            {whyItMatters.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              <TextLink href={ROUTES.quienSoy}>{whyItMatters.link}</TextLink>
            </p>
          </div>
        </div>
      </Section>

      <Closing id="closing-title" title={closing.title} text={closing.text} href={FORM_URL} cta={PILOT_CTA} />
    </>
  );
}

function TensionRow({ teacher, student }: { teacher: string; student: string }) {
  const [teachers, students] = tension.columns;
  return (
    <>
      <p className="pairs__cell">
        <span className="pairs__who label">{teachers.title}</span>
        {teacher}
      </p>
      <p className="pairs__cell">
        <span className="pairs__who label">{students.title}</span>
        {student}
      </p>
    </>
  );
}
