import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Chip, ChipList } from "@/components/Chip";
import { CtaBand } from "@/components/CtaBand";
import { Eyebrow } from "@/components/Eyebrow";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { CompactStepList, StepList } from "@/components/StepList";
import { FORM_URL, PILOT_CTA, ROUTES } from "@/content/site";
import {
  closing,
  fullCycle,
  hero,
  insights,
  mvpStatus,
  privacy,
  roadmap,
  signals,
  validatedTutor,
} from "@/content/tecnico";

const title = "Funcionamiento técnico";
const description =
  "Cómo funciona Educai por dentro: tutor con contenido validado, patrones colectivos y privacidad desde la arquitectura.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: ROUTES.tecnico },
  openGraph: { title, description, url: ROUTES.tecnico },
};

export default function TecnicoPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="hero-compact" gap={24}>
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <h1 className="h1 h1--compact measure-820">{hero.title}</h1>
        <p className="lead measure-780">{hero.subtitle}</p>
        <ChipList items={hero.stack} size="sm" label="Tecnologías" />
        <div className="row pt-8">
          <Button href={FORM_URL}>{PILOT_CTA}</Button>
        </div>
      </Section>

      {/* El ciclo completo */}
      <Section tone="white" labelledBy="cycle-title">
        <SectionHeading eyebrow={fullCycle.eyebrow} title={fullCycle.title} id="cycle-title" size={38} />
        <StepList steps={fullCycle.steps} variant="inline" />
      </Section>

      {/* Tutor con contenido validado */}
      <Section layout="row" gap={56} labelledBy="tutor-title">
        <div className="stack gap-16 basis-420">
          <Eyebrow>{validatedTutor.eyebrow}</Eyebrow>
          <h2 id="tutor-title" className="h2 h2--34">
            {validatedTutor.title}
          </h2>
          {validatedTutor.paragraphs.map((paragraph) => (
            <p key={paragraph} className="body">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="stack gap-12 basis-420">
          <p className="label">{validatedTutor.ragLabel}</p>
          <CompactStepList steps={validatedTutor.rag} />
        </div>
      </Section>

      {/* Del chat al patrón colectivo */}
      <Section tone="ink" labelledBy="signals-title">
        <SectionHeading
          eyebrow={signals.eyebrow}
          title={signals.title}
          id="signals-title"
          size={38}
          measure={820}
        >
          {signals.paragraphs.map((paragraph) => (
            <p key={paragraph} className="body">
              {paragraph}
            </p>
          ))}
        </SectionHeading>
        <ul className="row gap-24">
          {signals.states.map((state) => (
            <Card key={state.code} as="li" variant="dark" gap={10} basis={280}>
              <h3 className="h3 h3--22 state-code">{state.code}</h3>
              <p className="card-text">{state.text}</p>
            </Card>
          ))}
        </ul>
        <figure className="callout stack gap-10 measure-820">
          <figcaption className="label">{signals.exampleLabel}</figcaption>
          <blockquote className="example-quote">{signals.example}</blockquote>
          <p className="small-text">{signals.exampleNote}</p>
        </figure>
      </Section>

      {/* Insights y seguimiento */}
      <Section labelledBy="insights-title">
        <SectionHeading eyebrow={insights.eyebrow} title={insights.title} id="insights-title" size={38} measure={820} />
        <ul className="row gap-24">
          {insights.items.map((item) => (
            <Card key={item.title} as="li" variant="surface" gap={10} basis={280}>
              <h3 className="h3">{item.title}</h3>
              <p className="card-text">{item.text}</p>
            </Card>
          ))}
        </ul>
        <p className="body measure-820">{insights.note}</p>
      </Section>

      {/* Privacidad desde la arquitectura */}
      <Section tone="tint" labelledBy="privacy-title">
        <SectionHeading eyebrow={privacy.eyebrow} title={privacy.title} id="privacy-title" size={38} measure={820}>
          <p className="body">{privacy.text}</p>
        </SectionHeading>
        <ol className="flow" aria-label={privacy.flowLabel}>
          {privacy.flow.map((step, index) => {
            const isLast = index === privacy.flow.length - 1;
            return (
              <li key={step}>
                <Chip variant={isLast ? "accent" : "surface"}>{step}</Chip>
                {isLast ? null : (
                  <span className="flow__arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </li>
            );
          })}
        </ol>
        <ul className="row gap-24">
          {privacy.items.map((item) => (
            <Card key={item.title} as="li" variant="white" gap={10} basis={280}>
              <h3 className="h3">{item.title}</h3>
              <p className="card-text">{item.text}</p>
            </Card>
          ))}
        </ul>
      </Section>

      {/* Hacia dónde va: especificado, todavía no construido */}
      <Section tone="dark" labelledBy="roadmap-title">
        <SectionHeading eyebrow={roadmap.eyebrow} title={roadmap.title} id="roadmap-title" size={38} measure={820}>
          <p className="body">{roadmap.intro}</p>
        </SectionHeading>
        <ul className="row gap-24">
          {roadmap.engines.map((engine) => (
            <Card key={engine.title} as="li" variant="dark-raised" gap={12} basis={300}>
              <h3 className="h3">{engine.title}</h3>
              {engine.paragraphs.map((paragraph) => (
                <p key={paragraph} className="card-text">
                  {paragraph}
                </p>
              ))}
            </Card>
          ))}
        </ul>
        <ul className="row gap-24">
          {roadmap.proposals.map((proposal) => (
            <Card key={proposal.title} as="li" variant="dark-outline-strong" gap={10} basis={420}>
              <h3 className="h3">{proposal.title}</h3>
              <p className="card-text">{proposal.text}</p>
            </Card>
          ))}
        </ul>
      </Section>

      {/* Estado actual del MVP */}
      <Section labelledBy="mvp-title">
        <SectionHeading eyebrow={mvpStatus.eyebrow} title={mvpStatus.title} id="mvp-title" size={38} measure={820} />
        <div className="row gap-48">
          {[
            { ...mvpStatus.done, variant: "fill" as const },
            { ...mvpStatus.pending, variant: "outline" as const },
          ].map((group) => (
            <div key={group.title} className="stack gap-16 basis-420">
              <h3 className="h3 h3--24">{group.title}</h3>
              <ChipList items={group.items} variant={group.variant} />
            </div>
          ))}
        </div>
        <p className="note note--15 measure-820">{mvpStatus.note}</p>
      </Section>

      <CtaBand title={closing.title} text={closing.text} href={FORM_URL} cta={PILOT_CTA} />
    </>
  );
}
