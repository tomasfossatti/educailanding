import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { AdoptionBars, ApprovalBars, RatingRange } from "@/components/Bars";
import { Closing } from "@/components/Closing";
import { Section, SectionHead } from "@/components/Section";
import {
  adoption,
  approvals,
  closing,
  intro,
  limits,
  nextSteps,
  observations,
  rating,
} from "@/content/resultados";
import { CONTENT_UPDATED, UPDATED_LABEL } from "@/content/seo";
import { pageMetadata, updatedMonth } from "@/lib/seo";
import { resultsGraph } from "@/lib/structured-data";
import { FORM_URL, PILOT_CTA, ROUTES } from "@/content/site";

export const metadata: Metadata = pageMetadata("resultados", ROUTES.resultados);

export default function ResultadosPage() {
  const [before, after] = approvals.bars;

  return (
    <>
      <JsonLd data={resultsGraph()} />
      {/* Apertura: la pregunta y la evidencia principal en la misma vista */}
      <Section opening>
        <div className="grid">
          <div className="d-9 stack">
            <h1 className="title">{intro.title}</h1>
            <p className="lede">{intro.subtitle}</p>
            <p className="meta">
              <time dateTime={CONTENT_UPDATED}>
                {UPDATED_LABEL} {updatedMonth()}
              </time>
            </p>
          </div>
        </div>

        <figure className="grid figure mt-16" aria-labelledby="approvals-title">
          <div className="d-4 t-2">
            <h2 id="approvals-title" className="h3">
              {approvals.title}
            </h2>
            <div className="delta mt-8">
              <span className="delta__value">+{after.approved - before.approved}</span>
              <span className="secondary">{approvals.deltaSuffix}</span>
            </div>
          </div>
          <div className="d-from-6 t-4">
            <ApprovalBars bars={approvals.bars} total={approvals.total} unit={approvals.unit} />
            <figcaption className="caption mt-8">{approvals.reading}</figcaption>
          </div>
        </figure>

        <dl className="grid mt-16">
          {intro.context.map((item) => (
            <div key={item.label} className="d-4 t-2 peer--rule">
              <dt className="label">{item.label}</dt>
              <dd>
                <span className="stat__value">{item.value}</span>
                <span className="stat__detail">{item.detail}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Adopción y valoración */}
      <Section band="secondary" labelledBy="adoption-title">
        <div className="grid">
          <figure className="d-7 figure" aria-labelledby="adoption-title">
            <h2 id="adoption-title" className="h2">
              {adoption.title}
            </h2>
            <p className="secondary mt-8 mb-8">
              {adoption.scaleLabel}
            </p>
            <AdoptionBars groups={adoption.groups} />
            <figcaption className="caption">{adoption.reading}</figcaption>
          </figure>

          <div className="d-from-9 stack-loose">
            <div className="peer--rule">
              <p className="label">{adoption.completion.label}</p>
              <span className="stat__value">{adoption.completion.value}</span>
              <p className="stat__detail">{adoption.completion.detail}</p>
            </div>
            <figure className="peer--rule" aria-labelledby="rating-title">
              <h3 id="rating-title" className="label">
                {rating.title}
              </h3>
              <p className="stat__detail mt-8 mb-8">{rating.text}</p>
              <RatingRange scale={rating.scale} periods={rating.periods} stacked />
            </figure>
          </div>
        </div>
      </Section>

      {/* Lo que observamos en clase */}
      <Section labelledBy="observations-title">
        <SectionHead id="observations-title" title={observations.title} />
        <ul className="grid">
          {observations.items.map((item) => (
            <li key={item.title} className="d-4 t-2 peer peer--rule">
              <h3 className="h4">{item.title}</h3>
              <p className="secondary">{item.text}</p>
            </li>
          ))}
        </ul>
        <p className="caption mt-10">{observations.roboticsNote}</p>
      </Section>

      {/* Límites y próximos pasos */}
      <Section labelledBy="limits-title">
        <div className="grid rule">
          <div className="d-6 t-3 peer">
            <h2 id="limits-title" className="h2">
              {limits.title}
            </h2>
            <p className="prose--lede mt-8">{limits.text}</p>
          </div>
          <div className="d-from-8 t-3 peer">
            <h2 className="h3">{nextSteps.title}</h2>
            <p className="secondary">{nextSteps.text}</p>
          </div>
        </div>
      </Section>

      <Closing id="closing-title" title={closing.title} text={closing.text} href={FORM_URL} cta={PILOT_CTA} />
    </>
  );
}
