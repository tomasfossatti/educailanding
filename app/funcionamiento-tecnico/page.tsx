import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/Button";
import { Closing } from "@/components/Closing";
import { WithCodes } from "@/components/Codes";
import { Section, SectionHead } from "@/components/Section";
import { Sequence } from "@/components/Sequence";
import { CONTENT_UPDATED, UPDATED_LABEL } from "@/content/seo";
import { pageMetadata, updatedMonth } from "@/lib/seo";
import { technicalGraph } from "@/lib/structured-data";
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

export const metadata: Metadata = pageMetadata("tecnico", ROUTES.tecnico);

export default function TecnicoPage() {
  const [noData, insufficient, sufficient] = signals.states;

  return (
    <>
      <JsonLd data={technicalGraph()} />
      {/* Apertura: qué es y el ciclo completo como mapa de la página */}
      <Section opening>
        <div className="grid">
          <div className="d-8 stack">
            <h1 className="title">{hero.title}</h1>
            <p className="lede">{hero.subtitle}</p>
            <p className="meta">
              <time dateTime={CONTENT_UPDATED}>
                {UPDATED_LABEL} {updatedMonth()}
              </time>
            </p>
          </div>
          <div className="d-12 opening-meta">
            <p className="secondary">
              <span className="label">{hero.stackLabel} </span>
              {hero.stack.join(", ")}.
            </p>
            <Button href={FORM_URL}>{PILOT_CTA}</Button>
          </div>
        </div>

        <div className="mt-16">
          <h2 id="cycle-title" className="h3 mb-8">
            {fullCycle.title}
          </h2>
          <ol className="grid cycle-grid">
            {fullCycle.steps.map((step, index) => (
              <li key={step.title} className="d-4 t-3 peer peer--rule">
                <span className="sequence__index" aria-hidden="true">
                  {index + 1}
                </span>
                <h3 className="h4">
                  <span className="visually-hidden">Paso {index + 1}: </span>
                  {step.title}
                </h3>
                <p className="secondary">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Tutor con contenido validado */}
      <Section labelledBy="tutor-title">
        <div className="grid rule">
          <div className="d-6 t-3">
            <h2 id="tutor-title" className="h2">
              {validatedTutor.title}
            </h2>
            <div className="prose mt-8">
              {validatedTutor.paragraphs.map((paragraph) => (
                <p key={paragraph} className="secondary">
                  <WithCodes text={paragraph} />
                </p>
              ))}
            </div>
          </div>
          <div className="d-from-8 t-3">
            <h3 className="label mb-8">{validatedTutor.ragLabel}</h3>
            <ol className="list-numbered">
              {validatedTutor.rag.map((step, index) => (
                <li key={step}>
                  <span className="sequence__index" aria-hidden="true">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* Del chat al patrón colectivo: el umbral de evidencia */}
      <Section band="secondary" labelledBy="signals-title">
        <SectionHead id="signals-title" title={signals.title}>
          {signals.paragraphs.map((paragraph) => (
            <p key={paragraph} className="secondary prose">
              {paragraph}
            </p>
          ))}
        </SectionHead>

        <figure className="threshold-wrap" aria-label={signals.scaleLabel}>
          <ul className="threshold">
            {[noData, insufficient].map((state) => (
              <li key={state.code} className="threshold__state">
                <h3 className="h4">{state.code}</h3>
                <p className="secondary">{state.text}</p>
              </li>
            ))}
            <li className="threshold__state threshold__state--met">
              <span className="threshold__marker label">{signals.thresholdLabel}</span>
              <h3 className="h4">{sufficient.code}</h3>
              <p className="secondary">{sufficient.text}</p>
            </li>
          </ul>
          <figcaption className="threshold__axis meta">
            <span>{signals.scaleLabel}</span>
            <span aria-hidden="true">{signals.scaleEnd} →</span>
          </figcaption>
        </figure>

        <figure className="example mt-16">
          <figcaption className="label">{signals.exampleLabel}</figcaption>
          <blockquote>{signals.example}</blockquote>
          <p className="meta">{signals.exampleNote}</p>
        </figure>
      </Section>

      {/* Insights y seguimiento */}
      <Section labelledBy="insights-title">
        <SectionHead id="insights-title" title={insights.title} />
        <Sequence steps={insights.items} label={insights.title} />
        <p className="caption mt-10">{insights.note}</p>
      </Section>

      {/* Privacidad desde la arquitectura */}
      <Section labelledBy="privacy-title">
        <div className="rule">
          <SectionHead id="privacy-title" title={privacy.title}>
            <p className="secondary prose">{privacy.text}</p>
          </SectionHead>
        </div>
        <h3 className="label mb-8">{privacy.flowLabel}</h3>
        <ol className="flow" aria-label={privacy.flowLabel}>
          {privacy.flow.map((step, index) => {
            const isLast = index === privacy.flow.length - 1;
            return (
              <li key={step}>
                <span className={`flow__node${isLast ? " flow__node--end" : ""}`}>{step}</span>
                {isLast ? null : (
                  <span className="flow__arrow" aria-hidden="true">
                    →
                  </span>
                )}
              </li>
            );
          })}
        </ol>
        <ul className="grid mt-16">
          {privacy.items.map((item) => (
            <li key={item.title} className="d-4 t-2 peer peer--rule">
              <h3 className="h4">{item.title}</h3>
              <p className="secondary">{item.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Hacia dónde va: especificado, todavía no construido */}
      <Section band="secondary" labelledBy="roadmap-title">
        <div className="grid section-head">
          <div className="d-8 stack">
            <p className="status">{roadmap.status}</p>
            <h2 id="roadmap-title" className="h2">
              {roadmap.title}
            </h2>
            <p className="secondary prose">{roadmap.intro}</p>
          </div>
        </div>
        <ul className="grid">
          {roadmap.engines.map((engine) => (
            <li key={engine.title} className="d-4 peer peer--rule">
              <h3 className="h4">{engine.title}</h3>
              {engine.paragraphs.map((paragraph) => (
                <p key={paragraph} className="secondary">
                  {paragraph}
                </p>
              ))}
            </li>
          ))}
        </ul>
        <ul className="grid mt-16">
          {roadmap.proposals.map((proposal) => (
            <li key={proposal.title} className="d-6 t-3 peer peer--rule">
              <h3 className="h4">{proposal.title}</h3>
              <p className="secondary">{proposal.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Estado actual del MVP */}
      <Section labelledBy="mvp-title">
        <SectionHead id="mvp-title" title={mvpStatus.title} />
        <div className="grid">
          {[mvpStatus.done, mvpStatus.pending].map((group, groupIndex) => (
            <div key={group.title} className={groupIndex === 0 ? "d-6 t-3" : "d-from-7 t-3"}>
              <h3 className="h3">
                {group.title} <span className="count">{group.items.length}</span>
              </h3>
              <ul className={`list-ruled mt-8${groupIndex === 0 ? "" : " secondary"}`}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="caption mt-10">{mvpStatus.note}</p>
      </Section>

      <Closing id="closing-title" title={closing.title} text={closing.text} href={FORM_URL} cta={PILOT_CTA} />
    </>
  );
}
