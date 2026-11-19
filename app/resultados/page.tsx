import type { Metadata } from "next";
import { ColumnChart, HorizontalBarChart } from "@/components/BarChart";
import { Card } from "@/components/Card";
import { CtaBand } from "@/components/CtaBand";
import { Eyebrow } from "@/components/Eyebrow";
import { Section } from "@/components/Section";
import { Stat } from "@/components/Stat";
import {
  adoption,
  approvals,
  closing,
  intro,
  limits,
  nextSteps,
  observations,
} from "@/content/resultados";
import { FORM_URL, PILOT_CTA, ROUTES } from "@/content/site";

const title = "Resultados del test";
const description =
  "Qué pasó durante dos meses en una materia universitaria y en una escuela de robótica.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: ROUTES.resultados },
  openGraph: { title, description, url: ROUTES.resultados },
};

export default function ResultadosPage() {
  return (
    <>
      {/* Introducción */}
      <Section variant="hero-compact" gap={32}>
        <div className="stack gap-20 measure-820">
          <Eyebrow>{intro.eyebrow}</Eyebrow>
          <h1 className="h1 h1--compact">{intro.title}</h1>
          <p className="lead">{intro.subtitle}</p>
        </div>
        <div className="row gap-24">
          {intro.context.map((item) => (
            <Stat key={item.value} value={item.value} label={item.label} />
          ))}
        </div>
      </Section>

      {/* Datos */}
      <Section tone="board" labelledBy="observations-title">
        <div className="row gap-24">
          <Card variant="board" gap={20} basis={380}>
            <h2 className="h2 h2--22">{approvals.title}</h2>
            <ColumnChart bars={approvals.bars} />
            <p className="note">{approvals.reading}</p>
          </Card>
          <Card variant="board" gap={20} basis={380}>
            <h2 className="h2 h2--22">{adoption.title}</h2>
            <HorizontalBarChart rows={adoption.rows} />
            <p className="note">{adoption.reading}</p>
          </Card>
        </div>

        <div className="row gap-24">
          {adoption.stats.map((stat) => (
            <Stat key={stat.value} value={stat.value} label={stat.label} />
          ))}
        </div>

        <div className="stack gap-20">
          <h2 id="observations-title" className="h2 h2--28">
            {observations.title}
          </h2>
          <ol className="row gap-24">
            {observations.items.map((item) => (
              <Card key={item.title} as="li" variant="board" padding="sm" gap={8} basis={260}>
                <h3 className="h3 h3--20">{item.title}</h3>
                <p className="small-text">{item.text}</p>
              </Card>
            ))}
          </ol>
          <p className="note--15 text-chalk measure-760">{observations.roboticsNote}</p>
        </div>
      </Section>

      {/* Límites y próximos pasos */}
      <Section layout="row" gap={48}>
        {[limits, nextSteps].map((block) => (
          <div key={block.eyebrow} className="stack gap-16 basis-420">
            <Eyebrow>{block.eyebrow}</Eyebrow>
            <h2 className="h2 h2--34">{block.title}</h2>
            <p className="body">{block.text}</p>
          </div>
        ))}
      </Section>

      <CtaBand title={closing.title} text={closing.text} cta={{ href: FORM_URL, label: PILOT_CTA }} />
    </>
  );
}
