import type { Metadata } from "next";
import { TextLink } from "@/components/Button";
import { Card } from "@/components/Card";
import { ChipList } from "@/components/Chip";
import { CtaBand } from "@/components/CtaBand";
import { Eyebrow } from "@/components/Eyebrow";
import { LiteYouTube } from "@/components/LiteYouTube";
import { MarginNote } from "@/components/MarginNote";
import { MarginQuote } from "@/components/MarginQuote";
import { PhotoFrame } from "@/components/PhotoFrame";
import { plainText } from "@/components/RichText";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { contact, hero, meta, origins, perspective, projects, talks } from "@/content/quien-soy";
import {
  EMAIL,
  PHOTOS,
  ROUTES,
  WHATSAPP_CTA,
  WHATSAPP_URL,
  YOUTUBE_TEDX_ID,
  YOUTUBE_TEDX_URL,
} from "@/content/site";

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: ROUTES.quienSoy },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: ROUTES.quienSoy,
    type: "profile",
    // En Quién soy, la foto TEDx queda como imagen para compartir propia.
    images: [
      {
        url: PHOTOS.tedxEncendedorHero.src,
        width: PHOTOS.tedxEncendedorHero.width,
        height: PHOTOS.tedxEncendedorHero.height,
        alt: PHOTOS.tedxEncendedorHero.alt,
      },
    ],
  },
  twitter: { card: "summary_large_image", title: meta.title, description: meta.description },
};

export default function QuienSoyPage() {
  return (
    <>
      {/* 1. Hero */}
      <Section variant="hero" containerClassName="profile-hero">
        <div className="stack gap-24">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <h1 className="h1">{hero.title}</h1>
          <p className="lead">{hero.subtitle}</p>
          <ChipList items={hero.chips} />
        </div>
        <div className="profile-hero__photo">
          <MarginNote text={hero.photoNote} className="profile-hero__note" />
          <PhotoFrame
            photo={PHOTOS.tedxEncendedorHero}
            ratio="portrait"
            preload
            border="lg"
            sizes="(max-width: 640px) 100vw, 380px"
            className="photo-frame--hero"
          />
        </div>
      </Section>

      {/* 2. Perspectiva */}
      <Section tone="board" containerClassName="split-grid" labelledBy="perspective-title">
        <div className="stack gap-16">
          <Eyebrow>{perspective.eyebrow}</Eyebrow>
          <h2 id="perspective-title" className="h2">
            {perspective.title}
          </h2>
        </div>
        <div className="stack gap-24">
          <MarginQuote quote={perspective.question} size="lead" />
          {perspective.paragraphs.map((paragraph) => (
            <p key={paragraph} className="body">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      {/* 3. De dónde vengo. TODO(material): sin foto familiar, se omite. */}
      {origins.photo ? (
        <Section containerClassName="split-grid" labelledBy="origins-title">
          <PhotoFrame
            photo={origins.photo}
            ratio="landscape"
            caption={origins.caption ?? undefined}
            border="lg"
            tilt="left"
            sizes="(max-width: 900px) 100vw, 480px"
          />
          <div className="letter ruled">
            <h2 id="origins-title" className="h2">
              {origins.title}
            </h2>
            <p>{plainText(origins.paragraph)}</p>
          </div>
        </Section>
      ) : null}

      {/* 4. Proyectos */}
      <Section tone="sheet" labelledBy="projects-title">
        <SectionHeading eyebrow={projects.eyebrow} title={projects.title} id="projects-title">
          <p className="body">{projects.intro}</p>
        </SectionHeading>
        <ul className="two-grid cascade">
          {projects.items.map((project) => (
            <Card key={project.title} as="li" variant="sheet" padding="lg" gap={12}>
              <p className="label">{project.label}</p>
              <h3 className="h3">{project.title}</h3>
              <p className="card-text">{project.text}</p>
              {project.link ? <TextLink href={ROUTES.inicio}>{project.link}</TextLink> : null}
            </Card>
          ))}
        </ul>
      </Section>

      {/* 5. Exposiciones */}
      <Section gap={64} labelledBy="talks-title">
        <SectionHeading eyebrow={talks.eyebrow} title={talks.title} id="talks-title" />

        <div className="talk-grid">
          <div className="stack gap-16">
            <p className="label">{talks.tedx.label}</p>
            <h3 className="h3 talk-title">{talks.tedx.title}</h3>
            <p className="body">{talks.tedx.text}</p>
            <TextLink href={YOUTUBE_TEDX_URL}>{talks.tedx.cta}</TextLink>
          </div>
          <LiteYouTube
            id={YOUTUBE_TEDX_ID}
            title={talks.tedx.title}
            playLabel={talks.tedx.playLabel}
            thumbAlt={talks.tedx.thumbAlt}
          />
        </div>

        <div className="stack gap-32">
          <div className="stack gap-12 measure-760">
            <h3 className="h3">{talks.fairs.title}</h3>
            <p className="body">{talks.fairs.text}</p>
          </div>
          <div className="collage">
            <PhotoFrame
              photo={PHOTOS.feria21Stand}
              ratio="landscape"
              caption={talks.fairs.captions.stand}
              tilt="left"
              sizes="(max-width: 900px) 100vw, 720px"
              className="collage__big"
            />
            <div className="collage__small">
              <PhotoFrame
                photo={PHOTOS.feria21Visitantes}
                ratio="landscape"
                caption={talks.fairs.captions.visitantes}
                tilt="right"
                sizes="(max-width: 900px) 100vw, 420px"
              />
              <PhotoFrame
                photo={PHOTOS.meetTheMentors}
                ratio="landscape"
                caption={talks.fairs.captions.mentors}
                tilt="right"
                sizes="(max-width: 900px) 100vw, 420px"
              />
            </div>
          </div>
        </div>

        {/* 6. Congreso y entrevista */}
        <ul className="two-grid cascade">
          <Card as="li" variant="kraft" gap={10}>
            <p className="label">{talks.congress.label}</p>
            <h3 className="h3">{talks.congress.title}</h3>
            <TextLink href={ROUTES.resultados}>{talks.congress.link}</TextLink>
          </Card>
          <Card as="li" variant="kraft" gap={10}>
            <p className="label">{talks.interview.label}</p>
            <h3 className="h3">{talks.interview.title}</h3>
            <p className="card-text">{talks.interview.text}</p>
          </Card>
        </ul>
      </Section>

      {/* 7. Contacto */}
      <CtaBand
        id="contacto"
        eyebrow={contact.eyebrow}
        title={contact.title}
        text={contact.text}
        cta={{ href: `mailto:${EMAIL}`, label: contact.cta }}
        secondary={WHATSAPP_URL ? { href: WHATSAPP_URL, label: WHATSAPP_CTA } : null}
      />
    </>
  );
}
