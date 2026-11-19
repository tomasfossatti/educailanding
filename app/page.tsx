import type { Metadata } from "next";
import { Button, TextLink } from "@/components/Button";
import { Card } from "@/components/Card";
import { TeacherPanelMock } from "@/components/TeacherPanelMock";
import { CtaBand } from "@/components/CtaBand";
import { Eyebrow } from "@/components/Eyebrow";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import {
  closing,
  hero,
  model,
  teacherPanel,
  tension,
  whyItMatters,
} from "@/content/inicio";
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
  return (
    <>
      {/* Hero */}
      <Section variant="hero" layout="row" gap={56} align="center">
        <div className="stack gap-28 basis-480">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 className="h1 h1--display">{hero.title}</h1>
          <p className="lead measure-560">{hero.subtitle}</p>
          <div className="row gap-14 pt-8">
            <Button href={FORM_URL}>{hero.primaryCta}</Button>
            <Button href={ROUTES.resultados} variant="secondary">
              {hero.secondaryCta}
            </Button>
          </div>
        </div>
        <TeacherPanelMock content={teacherPanel} />
      </Section>

      {/* Esto nos pasa */}
      <Section tone="board" gap={56} labelledBy="tension-title">
        <SectionHeading eyebrow={tension.eyebrow} title={tension.title} id="tension-title" />
        <div className="row gap-24">
          {tension.columns.map((column) => (
            <Card key={column.title} variant="board" padding="lg" gap={16} basis={420}>
              <h3 className="h3 h3--28 text-chalk">{column.title}</h3>
              <ul className="stack gap-16">
                {column.items.map((item) => (
                  <li key={item} className="body">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <blockquote className="callout callout--quote quote measure-960">{tension.quote}</blockquote>
      </Section>

      {/* Por qué me importa */}
      <Section layout="row" gap={64} labelledBy="why-title">
        <div className="stack gap-16 basis-380">
          <Eyebrow>{whyItMatters.eyebrow}</Eyebrow>
          <h2 id="why-title" className="h2 h2--38">
            {whyItMatters.title}
          </h2>
        </div>
        <div className="stack gap-22 basis-480 body-lg">
          {whyItMatters.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <TextLink href={ROUTES.quienSoy}>{whyItMatters.link}</TextLink>
        </div>
      </Section>

      {/* Modelo en construcción */}
      <Section tone="board" labelledBy="model-title">
        <SectionHeading eyebrow={model.eyebrow} title={model.title} id="model-title">
          <p className="body-lg">{model.text}</p>
        </SectionHeading>
        <ul className="row gap-24">
          {model.stakeholders.map((item) => (
            <Card key={item.title} as="li" variant="board" gap={10} basis={260}>
              <h3 className="h3 h3--22 text-chalk">{item.title}</h3>
              <p className="card-text">{item.text}</p>
            </Card>
          ))}
        </ul>
        <p className="callout measure-820">{model.disclaimer}</p>
      </Section>

      {/* Cierre */}
      <CtaBand
        eyebrow={closing.eyebrow}
        title={closing.title}
        text={closing.text}
        cta={{ href: FORM_URL, label: PILOT_CTA }}
      />
    </>
  );
}
