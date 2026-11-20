import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { ChipList } from "@/components/Chip";
import { CtaBand } from "@/components/CtaBand";
import { Eyebrow } from "@/components/Eyebrow";
import { MarginQuote } from "@/components/MarginQuote";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { closing as pilotClosing, steps as homeSteps } from "@/content/inicio";
import { FORM_URL, PILOT_CTA, ROUTES } from "@/content/site";
import {
  closing,
  fullCycle,
  hero,
  insights,
  meta,
  mvpStatus,
  privacy,
  roadmap,
  signals,
  testedCycle,
  validatedTutor,
} from "@/content/tecnico";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: ROUTES.tecnico },
  openGraph: { title: meta.title, description: meta.description, url: ROUTES.tecnico },
  twitter: { card: "summary_large_image", title: meta.title, description: meta.description },
};

type Step = { title: string; text: string };

/** Línea de tiempo vertical. En desktop, dos columnas (1–5 y 6–9). */
function Timeline({ steps, split }: { steps: readonly Step[]; split: number }) {
  const columns = [steps.slice(0, split), steps.slice(split)];
  return (
    <div className="timeline">
      {columns.map((column, columnIndex) => (
        <ol key={columnIndex} className="timeline__col" start={columnIndex === 0 ? 1 : split + 1}>
          {column.map((step, index) => {
            const number = columnIndex === 0 ? index + 1 : split + index + 1;
            return (
              <li key={step.title} className="timeline__item">
                <span className="timeline__n" aria-hidden="true">
                  {number}
                </span>
                <div className="stack gap-4">
                  <h3 className="timeline__title">{step.title}</h3>
                  <p className="card-text">{step.text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      ))}
    </div>
  );
}

export default function TecnicoPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="hero-compact" gap={24}>
        <p className="notice">
          {hero.notice.before}
          <Link href={`${ROUTES.inicio}#${homeSteps.id}`}>
            <mark className="mark">{hero.notice.link}</mark>
          </Link>
          {hero.notice.after}
        </p>
        <Eyebrow>{hero.eyebrow}</Eyebrow>
        <h1 className="h1 measure-820">{hero.title}</h1>
        <p className="lead">{hero.subtitle}</p>
        <ChipList items={hero.stack} mono label={hero.stackLabel} />
        <div className="row pt-8">
          <Button href={FORM_URL}>{PILOT_CTA}</Button>
        </div>
      </Section>

      {/* El ciclo completo */}
      <Section tone="sheet" gap={48} labelledBy="cycle-title">
        <SectionHeading eyebrow={fullCycle.eyebrow} title={fullCycle.title} id="cycle-title" />
        <Timeline steps={fullCycle.steps} split={5} />
      </Section>

      {/* El ciclo que probamos en clase */}
      <Section gap={48} labelledBy="tested-title">
        <SectionHeading eyebrow={testedCycle.eyebrow} title={testedCycle.title} id="tested-title" />
        <ol className="cycle5 cascade">
          {testedCycle.steps.map((step, index) => (
            <li key={step.title} className="numbered-cols__item">
              <span className="numbered-cols__n numbered-cols__n--accent" aria-hidden="true">
                {index + 1}
              </span>
              <h3 className="timeline__title">{step.title}</h3>
              <p className="card-text">{step.text}</p>
            </li>
          ))}
        </ol>
        <Card variant="note" gap={6} className="measure-820">
          <p className="label">{testedCycle.highlightLabel}</p>
          <p className="note-highlight">{testedCycle.highlight}</p>
        </Card>
      </Section>

      {/* Tutor con contenido validado */}
      <Section containerClassName="split-grid" labelledBy="tutor-title">
        <SectionHeading eyebrow={validatedTutor.eyebrow} title={validatedTutor.title} id="tutor-title">
          {validatedTutor.paragraphs.map((paragraph) => (
            <p key={paragraph} className="body">
              {paragraph}
            </p>
          ))}
        </SectionHeading>
        <Card variant="sheet" padding="lg" gap={12}>
          <h3 className="h3">{validatedTutor.ragLabel}</h3>
          <p className="card-text">{validatedTutor.ragIntro}</p>
          <ol className="rag-list">
            {validatedTutor.rag.map((step, index) => (
              <li key={step}>
                <span className="rag-list__n" aria-hidden="true">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </Card>
      </Section>

      {/* Del chat al patrón colectivo (pizarrón) */}
      <Section tone="board" gap={48} labelledBy="signals-title">
        <SectionHeading eyebrow={signals.eyebrow} title={signals.title} id="signals-title">
          {signals.paragraphs.map((paragraph) => (
            <p key={paragraph} className="body">
              {paragraph}
            </p>
          ))}
        </SectionHeading>
        <ul className="three-grid cascade" aria-label={signals.statesLabel}>
          {signals.states.map((state) => (
            <Card key={state.code} as="li" variant="board" gap={8}>
              <span className="state-code">{state.code}</span>
              <h3 className="h3">{state.name}</h3>
              <p className="card-text">{state.text}</p>
            </Card>
          ))}
        </ul>
        <div className="stack gap-12">
          <p className="label">{signals.exampleLabel}</p>
          <MarginQuote quote={signals.example} cite={signals.exampleNote} />
        </div>
      </Section>

      {/* Insights y seguimiento */}
      <Section labelledBy="insights-title">
        <SectionHeading eyebrow={insights.eyebrow} title={insights.title} id="insights-title">
          <p className="body">{insights.intro}</p>
        </SectionHeading>
        <ul className="two-grid cascade">
          {insights.items.map((item) => (
            <Card key={item.title} as="li" variant="sheet" gap={8}>
              <h3 className="h3">{item.title}</h3>
              <p className="card-text">{item.text}</p>
            </Card>
          ))}
        </ul>
        <p className="body">{insights.note}</p>
      </Section>

      {/* Privacidad desde la arquitectura */}
      <Section tone="kraft" labelledBy="privacy-title">
        <SectionHeading eyebrow={privacy.eyebrow} title={privacy.title} id="privacy-title">
          <p className="body">{privacy.text}</p>
        </SectionHeading>
        <div className="stack gap-12">
          <p className="label">{privacy.flowLabel}</p>
          <ol className="flow" aria-label={privacy.flowLabel}>
            {privacy.flow.map((step, index) => {
              const isLast = index === privacy.flow.length - 1;
              const hasNote = step === privacy.flowNoteAfter;
              return (
                <li key={step} className="flow__step">
                  <span className={`flow__label${isLast ? " flow__label--final" : ""}`}>{step}</span>
                  {isLast ? null : (
                    <span className={`flow__arrow${hasNote ? " flow__arrow--noted" : ""}`}>
                      <span aria-hidden="true" className="flow__glyph" />
                      {hasNote ? <span className="flow__note">{privacy.flowNote}</span> : null}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
        <ul className="three-grid cascade">
          {privacy.items.map((item) => (
            <Card key={item.title} as="li" variant="sheet" gap={8}>
              <h3 className="h3">{item.title}</h3>
              <p className="card-text">{item.text}</p>
            </Card>
          ))}
        </ul>
      </Section>

      {/* Hacia dónde va: especificado, todavía no construido (pizarrón) */}
      <Section tone="board" gap={48} labelledBy="roadmap-title">
        <div className="stack gap-16 roadmap-head">
          <Eyebrow>{roadmap.eyebrow}</Eyebrow>
          <h2 id="roadmap-title" className="h2">
            {roadmap.title}
          </h2>
          <p className="stamp">{roadmap.stamp}</p>
          <p className="body">{roadmap.intro}</p>
        </div>
        <ul className="three-grid cascade">
          {roadmap.engines.map((engine) => (
            <Card key={engine.title} as="li" variant="board" gap={12}>
              <h3 className="h3 text-chalk">{engine.title}</h3>
              {engine.paragraphs.map((paragraph) => (
                <p key={paragraph} className="card-text">
                  {paragraph}
                </p>
              ))}
            </Card>
          ))}
        </ul>
        <ul className="two-grid cascade">
          {roadmap.proposals.map((proposal) => (
            <Card key={proposal.title} as="li" variant="board" gap={10}>
              <h3 className="h3 text-chalk">{proposal.title}</h3>
              <p className="card-text">{proposal.text}</p>
            </Card>
          ))}
        </ul>
      </Section>

      {/* Estado actual */}
      <Section labelledBy="mvp-title">
        <SectionHeading eyebrow={mvpStatus.eyebrow} title={mvpStatus.title} id="mvp-title" />
        <div className="status-grid">
          {[
            { ...mvpStatus.done, variant: "done" as const },
            { ...mvpStatus.pending, variant: "pending" as const },
          ].map((group) => (
            <div key={group.title} className="stack gap-16">
              <h3 className="h3">{group.title}</h3>
              <ChipList items={group.items} variant={group.variant} />
            </div>
          ))}
        </div>
        <p className="note measure-820">{mvpStatus.note}</p>
      </Section>

      <CtaBand
        id="cierre"
        title={closing.title}
        text={closing.text}
        cta={{ href: FORM_URL, label: PILOT_CTA }}
        next={{ title: pilotClosing.nextTitle, items: pilotClosing.next }}
      />
    </>
  );
}
