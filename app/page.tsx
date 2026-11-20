import type { Metadata } from "next";
import Image from "next/image";
import { Button, TextLink } from "@/components/Button";
import { Card } from "@/components/Card";
import { CtaBand } from "@/components/CtaBand";
import { Eyebrow } from "@/components/Eyebrow";
import { Faq, faqJsonLd } from "@/components/Faq";
import { KnowledgeLedger } from "@/components/KnowledgeLedger";
import { LiteYouTube } from "@/components/LiteYouTube";
import { MarginQuote } from "@/components/MarginQuote";
import { ProofStrip } from "@/components/ProofStrip";
import { RichText } from "@/components/RichText";
import { Scribble } from "@/components/Scribble";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Stat } from "@/components/Stat";
import { TeacherPanelMock } from "@/components/TeacherPanelMock";
import { Testimonial } from "@/components/Testimonial";
import { UnitChart } from "@/components/UnitChart";
import {
  closing,
  faq,
  hero,
  institutions,
  meta,
  model,
  notDoing,
  proof,
  results,
  steps,
  teacherPanel,
  teacherView,
  tension,
  testimonial,
  video,
  whyItMatters,
} from "@/content/inicio";
import {
  EMAIL,
  FORM_URL,
  MATERIAL,
  ROUTES,
  WHATSAPP_CTA,
  WHATSAPP_URL,
} from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: { canonical: ROUTES.inicio },
  openGraph: { title: meta.title, description: meta.description, url: ROUTES.inicio },
  twitter: { card: "summary_large_image", title: meta.title, description: meta.description },
};

/** Separa la palabra «No» del resto del título para pintarla en rojo. */
function splitNo(title: string) {
  const [first, ...rest] = title.split(" ");
  return { first, rest: rest.join(" ") };
}

function jsonLd(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}

export default function InicioPage() {
  return (
    <>
      {/* 1. Hero */}
      <Section variant="hero" containerClassName="hero-grid" labelledBy="hero-title">
        <div className="hero__text stack">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 id="hero-title" className="h1 h1--display">
            <RichText text={hero.title} underlineDelay={400} />
          </h1>
          <p className="lead">
            <RichText text={hero.subtitle} />
          </p>
          <div className="hero__actions">
            <Button href={FORM_URL}>{hero.primaryCta}</Button>
            <Button href={ROUTES.resultados} variant="secondary">
              {hero.secondaryCta}
            </Button>
          </div>
          <p className="note">{hero.ctaNote}</p>
        </div>
        <div className="hero__visual">
          <TeacherPanelMock content={teacherPanel} screenshot={MATERIAL.panelDocente} />
        </div>
      </Section>

      {/* 2. Franja de credibilidad */}
      <ProofStrip label={proof.label} items={proof.items} />

      {/* 3. Esto nos pasa */}
      <Section tone="board" gap={48} labelledBy="tension-title">
        <SectionHeading eyebrow={tension.eyebrow} title={tension.title} id="tension-title" />
        <div className="tension-grid cascade">
          {tension.columns.map((column) => (
            <Card key={column.title} variant="board" padding="lg" gap={12}>
              <h3 className="h3 text-chalk">{column.title}</h3>
              <div className="stack">
                {column.items.map((item) => (
                  <p key={item} className={`tension-item${column.voice ? " tension-item--voice" : ""}`}>
                    {item}
                  </p>
                ))}
              </div>
            </Card>
          ))}
        </div>
        <MarginQuote quote={tension.quote} cite={tension.quoteCite} className="tension-quote" />
        <p className="board-closing">{tension.closingLine}</p>
      </Section>

      {/* 4. Por qué me importa */}
      <Section containerClassName="why-grid" labelledBy="why-title">
        <div className="why__aside stack gap-16">
          <Eyebrow>{whyItMatters.eyebrow}</Eyebrow>
          <h2 id="why-title" className="h2">
            {whyItMatters.title}
          </h2>
          {whyItMatters.photo ? (
            <figure className="family-photo">
              <Image
                src={whyItMatters.photo.src}
                alt={whyItMatters.photo.alt}
                width={whyItMatters.photo.width}
                height={whyItMatters.photo.height}
                sizes="(max-width: 900px) 100vw, 360px"
                loading="lazy"
              />
              {whyItMatters.photoCaption ? (
                <figcaption className="photo-caption">{whyItMatters.photoCaption}</figcaption>
              ) : null}
            </figure>
          ) : null}
        </div>
        <div className="letter ruled">
          {whyItMatters.paragraphs.map((paragraph) => (
            <p key={paragraph}>
              <RichText text={paragraph} />
            </p>
          ))}
          <p className="letter__closing">{whyItMatters.closing}</p>
          <p className="letter__signature">{whyItMatters.signature}</p>
          <TextLink href={ROUTES.quienSoy}>{whyItMatters.link}</TextLink>
        </div>
      </Section>

      {/* 5. Cómo funciona en tres pasos */}
      <Section tone="sheet" id={steps.id} labelledBy="steps-title">
        <SectionHeading eyebrow={steps.eyebrow} title={steps.title} id="steps-title" />
        <ol className="steps3 cascade">
          {steps.items.map((step, index) => (
            <li key={step.title} className="steps3__item">
              <span className="steps3__n" aria-hidden="true">
                {index + 1}
              </span>
              <h3 className="h3">{step.title}</h3>
              <p className="card-text">{step.text}</p>
              {index < steps.items.length - 1 ? <Scribble variant="arrow" className="steps3__arrow" /> : null}
            </li>
          ))}
        </ol>
        <TextLink href={ROUTES.tecnico}>{steps.link}</TextLink>
      </Section>

      {/* Video de presentación. TODO(material): solo si existe. */}
      {video.id ? (
        <Section labelledBy="video-title">
          <h2 id="video-title" className="h2">
            {video.title}
          </h2>
          <div className="video-block">
            <LiteYouTube id={video.id} title={video.title} playLabel={video.playLabel} thumbAlt={video.thumbAlt} />
          </div>
        </Section>
      ) : null}

      {/* 6. Lo que vas a ver vos */}
      <Section containerClassName="teacher-view" labelledBy="teacher-view-title">
        <div className="teacher-view__visual">
          <TeacherPanelMock content={teacherPanel} variant="full" screenshot={MATERIAL.panelDocente} />
        </div>
        <div className="stack gap-24">
          <SectionHeading eyebrow={teacherView.eyebrow} title={teacherView.title} id="teacher-view-title">
            <p className="body">{teacherView.text}</p>
          </SectionHeading>
          <ol className="points">
            {teacherView.points.map((point, index) => (
              <li key={point.title} className="points__item">
                <span className="points__n" aria-hidden="true">
                  {index + 1}
                </span>
                <div className="stack gap-4">
                  <h3 className="points__title">{point.title}</h3>
                  <p className="card-text">{point.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <Card variant="kraft" gap={6} className="student-side">
            <h3 className="h3">{teacherView.studentSide.title}</h3>
            <p className="card-text">{teacherView.studentSide.text}</p>
          </Card>
        </div>
      </Section>

      {/* 7. Lo que Educai no hace */}
      <Section tone="kraft" labelledBy="not-doing-title">
        <SectionHeading eyebrow={notDoing.eyebrow} title={notDoing.title} id="not-doing-title" />
        <ul className="not-doing cascade">
          {notDoing.items.map((item) => {
            const { first, rest } = splitNo(item.title);
            return (
              <li key={item.title} className="not-doing__item">
                <h3 className="h3">
                  <span className="not-doing__no">{first}</span> {rest}
                </h3>
                <p className="card-text">{item.text}</p>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* 8. Lo que probamos */}
      <Section gap={48} labelledBy="results-title">
        <SectionHeading eyebrow={results.eyebrow} title={results.title} id="results-title" />
        <div className="results-grid">
          <UnitChart
            caption={results.chart.caption}
            rows={results.chart.rows}
            diffNote={results.chart.diffNote}
            notes={results.chart.notes}
          />
          <div className="results-stats">
            {results.stats.map((stat) => (
              <Stat key={stat.value} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
        <KnowledgeLedger {...results.ledger} />
        <TextLink href={ROUTES.resultados}>{results.link}</TextLink>
      </Section>

      {/* 9. Testimonio. TODO(material): no se renderiza mientras sea null. */}
      {testimonial.data ? (
        <Section tone="sheet" labelledBy="testimonial-title">
          <h2 id="testimonial-title" className="h2">
            {testimonial.title}
          </h2>
          <Testimonial data={testimonial.data} videoTitle={testimonial.videoTitle} playLabel={testimonial.playLabel} />
        </Section>
      ) : null}

      {/* 10. Que enseñar mejor valga más */}
      <Section tone="board" labelledBy="model-title">
        <div className="stack gap-24 measure-820">
          <Eyebrow>{model.eyebrow}</Eyebrow>
          <h2 id="model-title" className="h2">
            {model.title}
          </h2>
          <div className="disclaimer-card">
            <p className="disclaimer-card__label">{model.disclaimerLabel}</p>
            <p>{model.disclaimer}</p>
          </div>
          <p className="body">{model.text}</p>
        </div>
        <ul className="model-grid cascade">
          {model.stakeholders.map((item) => (
            <Card key={item.title} as="li" variant="board" gap={8}>
              <h3 className="h3 text-chalk">{item.title}</h3>
              <p className="card-text">{item.text}</p>
            </Card>
          ))}
        </ul>
      </Section>

      {/* 11. Para instituciones */}
      <Section containerClassName="institutions" labelledBy="institutions-title">
        <SectionHeading eyebrow={institutions.eyebrow} title={institutions.title} id="institutions-title">
          <p className="body">{institutions.text}</p>
        </SectionHeading>
        <div className="institutions__cta">
          <Button
            href={`mailto:${EMAIL}?subject=${encodeURIComponent(institutions.subject)}`}
            variant="secondary"
            arrow
          >
            {institutions.cta}
          </Button>
        </div>
      </Section>

      {/* 12. Preguntas frecuentes */}
      <Section tone="sheet" containerClassName="faq-grid" labelledBy="faq-title">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} id="faq-title" />
        <Faq items={faq.items} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(faqJsonLd(faq.items))} />
      </Section>

      {/* 13. Cierre */}
      <CtaBand
        id="cierre"
        eyebrow={closing.eyebrow}
        title={closing.title}
        text={closing.text}
        cta={{ href: FORM_URL, label: closing.cta }}
        next={{ title: closing.nextTitle, items: closing.next }}
        secondary={WHATSAPP_URL ? { href: WHATSAPP_URL, label: WHATSAPP_CTA } : null}
        person={{ photo: MATERIAL.tomasRetrato, text: closing.personNote }}
      />
    </>
  );
}
