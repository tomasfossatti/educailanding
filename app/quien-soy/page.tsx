import type { Metadata } from "next";
import { Button, TextLink } from "@/components/Button";
import { Card } from "@/components/Card";
import { ChipList } from "@/components/Chip";
import { CtaBand } from "@/components/CtaBand";
import { Eyebrow } from "@/components/Eyebrow";
import { PhotoFrame } from "@/components/PhotoFrame";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { contact, hero, perspective, projects, talks } from "@/content/quien-soy";
import { EMAIL, PHOTOS, ROUTES, YOUTUBE_TEDX_URL } from "@/content/site";

const title = "Tomás Fossatti";
const description =
  "Fundador de Educai. Hijo y nieto de docentes, emprendedor y estudiante en Córdoba, Argentina.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: ROUTES.quienSoy },
  openGraph: {
    title,
    description,
    url: ROUTES.quienSoy,
    type: "profile",
  },
};

export default function QuienSoyPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="hero" layout="row" gap={56} align="center">
        <div className="stack gap-24 basis-480">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 className="h1">{hero.title}</h1>
          <p className="lead measure-560">{hero.subtitle}</p>
          <ChipList items={hero.chips} />
        </div>
        <PhotoFrame
          photo={PHOTOS.tedxEncendedorHero}
          ratio="portrait"
          hero
          preload
          sizes="(max-width: 480px) 100vw, 380px"
          className="hero-photo"
        />
      </Section>

      {/* Perspectiva */}
      <Section tone="board" layout="row" gap={64} labelledBy="perspective-title">
        <div className="stack gap-16 basis-380">
          <Eyebrow>{perspective.eyebrow}</Eyebrow>
          <h2 id="perspective-title" className="h2 h2--40">
            {perspective.title}
          </h2>
        </div>
        <div className="stack gap-22 basis-480 body-lg">
          <p>{perspective.question}</p>
          {perspective.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      {/* Proyectos */}
      <Section labelledBy="projects-title">
        <SectionHeading eyebrow={projects.eyebrow} title={projects.title} id="projects-title">
          <p className="body-lg">{projects.intro}</p>
        </SectionHeading>
        <ul className="row gap-24">
          {projects.items.map((project) => (
            <Card key={project.title} as="li" variant="sheet" padding="lg" gap={12} basis={420}>
              <p className="eyebrow">{project.label}</p>
              <h3 className="h3 h3--28">{project.title}</h3>
              <p className="card-text">{project.text}</p>
              {project.link ? <TextLink href={ROUTES.inicio}>{project.link}</TextLink> : null}
            </Card>
          ))}
        </ul>
      </Section>

      {/* Exposiciones */}
      <Section tone="sheet" gap={56} labelledBy="talks-title">
        <SectionHeading eyebrow={talks.eyebrow} title={talks.title} id="talks-title" />

        {/* TEDx */}
        <div className="row items-center gap-48">
          <div className="stack gap-18 basis-420">
            <p className="eyebrow">{talks.tedx.label}</p>
            <h3 className="h3 h3--32">{talks.tedx.title}</h3>
            <p className="body">{talks.tedx.text}</p>
            <div className="row">
              <Button href={YOUTUBE_TEDX_URL}>{talks.tedx.cta}</Button>
            </div>
          </div>
          <div className="row gap-20 basis-420">
            <PhotoFrame
              photo={PHOTOS.tedxEncendedor}
              ratio="portrait"
              sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 300px"
              className="basis-180"
            />
            <PhotoFrame
              photo={PHOTOS.tedxEscenario}
              ratio="portrait"
              sizes="(max-width: 480px) 100vw, (max-width: 1024px) 50vw, 300px"
              className="basis-180"
            />
          </div>
        </div>

        {/* Ferias, congresos y sesiones con mentores */}
        <div className="stack gap-28">
          <div className="stack gap-12 measure-760">
            <h3 className="h3 h3--30">{talks.fairs.title}</h3>
            <p className="body">{talks.fairs.text}</p>
          </div>
          <div className="row items-start gap-24">
            <PhotoFrame
              photo={PHOTOS.feria21Stand}
              ratio="landscape"
              caption={talks.fairs.captions.stand}
              sizes="(max-width: 900px) 100vw, 720px"
              className="basis-520"
            />
            <div className="stack gap-24 basis-320">
              <PhotoFrame
                photo={PHOTOS.feria21Visitantes}
                ratio="landscape"
                caption={talks.fairs.captions.visitantes}
                sizes="(max-width: 900px) 100vw, 480px"
              />
              <PhotoFrame
                photo={PHOTOS.meetTheMentors}
                ratio="landscape"
                caption={talks.fairs.captions.mentors}
                sizes="(max-width: 900px) 100vw, 480px"
              />
            </div>
          </div>
        </div>

        {/* Congreso y entrevista */}
        <div className="row gap-24">
          <Card variant="kraft" gap={10} basis={420}>
            <p className="eyebrow">{talks.congress.label}</p>
            <h3 className="h3 h3--22">{talks.congress.title}</h3>
            <TextLink href={ROUTES.resultados}>{talks.congress.link}</TextLink>
          </Card>
          <Card variant="kraft" gap={10} basis={420}>
            <p className="eyebrow">{talks.interview.label}</p>
            <h3 className="h3 h3--22">{talks.interview.title}</h3>
            <p className="small-text">{talks.interview.text}</p>
          </Card>
        </div>
      </Section>

      <CtaBand
        eyebrow={contact.eyebrow}
        title={contact.title}
        text={contact.text}
        cta={{ href: `mailto:${EMAIL}`, label: contact.cta }}
      />
    </>
  );
}
