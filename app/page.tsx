import type { Metadata } from "next";
import { Button, TextLink } from "@/components/Button";
import { Card } from "@/components/Card";
import { ChatMock } from "@/components/ChatMock";
import { CtaBand } from "@/components/CtaBand";
import { Eyebrow } from "@/components/Eyebrow";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Stat } from "@/components/Stat";
import { StepList } from "@/components/StepList";
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
          <h1 className="h1">{hero.title}</h1>
          <p className="lead measure-560">{hero.subtitle}</p>
          <div className="row gap-14 pt-8">
            <Button href={FORM_URL}>{hero.primaryCta}</Button>
            <Button href={ROUTES.resultados} variant="ghost">
              {hero.secondaryCta}
            </Button>
          </div>
        </div>
        <ChatMock />
      </Section>

      {/* Esto nos pasa */}
      <Section tone="ink" gap={56} labelledBy="tension-title">
        <SectionHeading eyebrow={tension.eyebrow} title={tension.title} id="tension-title" />
        <div className="row gap-24">
          {tension.columns.map((column) => (
            <Card key={column.title} variant="dark" padding="p32" gap={16} basis={420}>
              <h3 className="h3 h3--28 text-violet">{column.title}</h3>
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

      {/* El producto */}
      <Section tone="white" labelledBy="product-title">
        <SectionHeading eyebrow={product.eyebrow} title={product.title} id="product-title" />
        <div className="row gap-24">
          {product.audiences.map((audience) => (
            <Card key={audience.label} variant="tint" padding="p32" gap={12} basis={420}>
              <p className="eyebrow">{audience.label}</p>
              <h3 className="h3 h3--26">{audience.title}</h3>
              <p className="card-text">{audience.text}</p>
            </Card>
          ))}
        </div>
        <ul className="row gap-20">
          {product.principles.map((principle) => (
            <Card key={principle.title} as="li" variant="outline" padding="p24" gap={8} basis={240}>
              <h3 className="h3 h3--19">{principle.title}</h3>
              <p className="small-text">{principle.text}</p>
            </Card>
          ))}
        </ul>
      </Section>

      {/* El ciclo que probamos en clase */}
      <Section labelledBy="cycle-title">
        <SectionHeading eyebrow={cycle.eyebrow} title={cycle.title} id="cycle-title" />
        <StepList steps={cycle.steps} />
        <Card variant="ink" padding="p28x32" gap={8}>
          <p className="label">{cycle.highlightLabel}</p>
          <p className="highlight-text">{cycle.highlight}</p>
        </Card>
        <TextLink href={ROUTES.tecnico}>{cycle.link}</TextLink>
      </Section>

      {/* Modelo en construcción */}
      <Section tone="ink" labelledBy="model-title">
        <SectionHeading eyebrow={model.eyebrow} title={model.title} id="model-title" measure={820}>
          <p className="body-lg">{model.text}</p>
        </SectionHeading>
        <ul className="row gap-24">
          {model.stakeholders.map((item) => (
            <Card key={item.title} as="li" variant="dark" gap={10} basis={260}>
              <h3 className="h3 h3--22 text-violet">{item.title}</h3>
              <p className="card-text">{item.text}</p>
            </Card>
          ))}
        </ul>
        <p className="callout measure-820">{model.disclaimer}</p>
      </Section>

      {/* Teaser de resultados */}
      <Section tone="tint" gap={36} labelledBy="results-title">
        <SectionHeading eyebrow={resultsTeaser.eyebrow} title={resultsTeaser.title} id="results-title" />
        <div className="row gap-24">
          {resultsTeaser.stats.map((stat) => (
            <Stat key={stat.value} value={stat.value} label={stat.label} />
          ))}
        </div>
        <p className="note">{resultsTeaser.disclaimer}</p>
        <div className="row">
          <Button href={ROUTES.resultados} variant="ghost">
            {resultsTeaser.link}
          </Button>
        </div>
      </Section>

      {/* Cierre */}
      <CtaBand
        tall
        eyebrow={closing.eyebrow}
        title={closing.title}
        text={closing.text}
        href={FORM_URL}
        cta={PILOT_CTA}
        titleSize={42}
      />
    </>
  );
}
