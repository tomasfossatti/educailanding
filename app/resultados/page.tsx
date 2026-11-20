import type { Metadata } from "next";
import Image from "next/image";
import { HorizontalBarChart } from "@/components/BarChart";
import { TextLink } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { Eyebrow } from "@/components/Eyebrow";
import { KnowledgeLedger } from "@/components/KnowledgeLedger";
import { MarginQuote } from "@/components/MarginQuote";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Stat } from "@/components/Stat";
import { UnitChart } from "@/components/UnitChart";
import { closing as pilotClosing } from "@/content/inicio";
import {
  adoption,
  approvalRows,
  approvals,
  approvalsDiffNote,
  closing,
  intro,
  limits,
  meta,
  nextSteps,
  observations,
  poster,
} from "@/content/resultados";
import { FORM_URL, MATERIAL, PILOT_CTA, ROUTES } from "@/content/site";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: ROUTES.resultados },
  openGraph: { title: meta.title, description: meta.description, url: ROUTES.resultados },
  twitter: { card: "summary_large_image", title: meta.title, description: meta.description },
};

export default function ResultadosPage() {
  const posterImage = MATERIAL.posterInnovaEduca;
  return (
    <>
      {/* 1. Hero */}
      <Section variant="hero-compact" gap={48}>
        <div className="stack gap-20 measure-820">
          <Eyebrow>{intro.eyebrow}</Eyebrow>
          <h1 className="h1">{intro.title}</h1>
          <p className="lead">{intro.subtitle}</p>
        </div>
        <div className="stat-row">
          {intro.context.map((item) => (
            <Stat key={item.value} value={item.value} label={item.label} />
          ))}
        </div>
      </Section>

      {/* 2. Aprobados por parcial */}
      <Section tone="sheet" labelledBy="approvals-title">
        <UnitChart
          caption={approvals.title}
          rows={approvalRows}
          diffNote={approvalsDiffNote}
          notes={[approvals.reading, approvals.disclaimer]}
          headingLevel="h2"
          className="unit-chart--page"
        />
      </Section>

      {/* 3. Adopción */}
      <Section tone="board" gap={48} labelledBy="adoption-title">
        <SectionHeading eyebrow={adoption.eyebrow} title={adoption.title} id="adoption-title" />
        <div className="adoption-grid">
          <div className="stack gap-24">
            <HorizontalBarChart rows={adoption.rows} label={adoption.ariaLabel} />
            <p className="body">{adoption.reading}</p>
          </div>
          <div className="results-stats">
            {adoption.stats.map((stat) => (
              <Stat key={stat.value} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </Section>

      {/* 4. Lo que observamos en clase */}
      <Section gap={48} labelledBy="observations-title">
        <SectionHeading eyebrow={observations.eyebrow} title={observations.title} id="observations-title" />
        <ol className="numbered-cols cascade">
          {observations.items.map((item, index) => (
            <li key={item.title} className="numbered-cols__item">
              <span className="numbered-cols__n" aria-hidden="true">
                {index + 1}
              </span>
              <h3 className="h3">{item.title}</h3>
              <p className="card-text">{item.text}</p>
            </li>
          ))}
        </ol>
        <MarginQuote quote={observations.roboticsNote} size="lead" />
      </Section>

      {/* 5. Lo que sabemos / Lo que todavía no */}
      <Section tone="kraft" labelledBy="limits-title">
        <SectionHeading eyebrow={limits.eyebrow} title={limits.title} id="limits-title" />
        <KnowledgeLedger
          knownTitle={limits.knownTitle}
          unknownTitle={limits.unknownTitle}
          known={limits.known}
          unknown={limits.unknown}
        />
      </Section>

      {/* 6. Qué vamos a medir en 2027 */}
      <Section labelledBy="next-title">
        <SectionHeading eyebrow={nextSteps.eyebrow} title={nextSteps.title} id="next-title">
          <p className="body">{nextSteps.intro}</p>
        </SectionHeading>
        <ol className="goal-list">
          {nextSteps.items.map((item, index) => (
            <li key={item}>
              <span className="goal-list__n" aria-hidden="true">
                {index + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      </Section>

      {/* 7. Póster. TODO(material): solo si existe la imagen. */}
      {posterImage ? (
        <Section tone="sheet" labelledBy="poster-title">
          <SectionHeading eyebrow={poster.eyebrow} title={poster.title} id="poster-title" />
          <figure className="poster stack gap-12">
            <a href={posterImage.src} className="poster__link">
              <Image
                src={posterImage.src}
                alt={posterImage.alt}
                width={posterImage.width}
                height={posterImage.height}
                sizes="(max-width: 900px) 100vw, 720px"
                loading="lazy"
              />
            </a>
            <figcaption className="photo-caption">{poster.caption}</figcaption>
          </figure>
          <TextLink href={posterImage.src}>{poster.link}</TextLink>
        </Section>
      ) : null}

      {/* 8. Cierre */}
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
