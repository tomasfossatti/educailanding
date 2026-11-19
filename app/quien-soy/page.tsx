import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { Button, TextLink } from "@/components/Button";
import { Closing } from "@/components/Closing";
import { PhotoFrame } from "@/components/PhotoFrame";
import { Section, SectionHead } from "@/components/Section";
import { contact, hero, perspective, projects, talks } from "@/content/quien-soy";
import { pageMetadata } from "@/lib/seo";
import { aboutGraph } from "@/lib/structured-data";
import { EMAIL, PERSONAL_SITE_URL, PHOTOS, ROUTES, YOUTUBE_TEDX_URL } from "@/content/site";

export const metadata: Metadata = pageMetadata("quienSoy", ROUTES.quienSoy);

export default function QuienSoyPage() {
  return (
    <>
      <JsonLd data={aboutGraph()} />
      {/* Apertura */}
      <Section opening>
        <div className="grid opening">
          <div className="d-7">
            <h1 className="display">{hero.title}</h1>
            <p className="lede">{hero.subtitle}</p>
            <p className="secondary mt-8">{hero.facts.join(" · ")}</p>
            <p className="mt-8">
              <TextLink href={PERSONAL_SITE_URL}>{hero.personalSite}</TextLink>
            </p>
          </div>
          <PhotoFrame
            photo={PHOTOS.tedxEnEscena}
            ratio="portrait"
            preload
            sizes="(max-width: 1024px) 100vw, 400px"
            className="d-from-9 t-4"
          />
        </div>
      </Section>

      {/* Perspectiva */}
      <Section labelledBy="perspective-title">
        <div className="grid rule">
          <h2 id="perspective-title" className="h2 d-5">
            {perspective.title}
          </h2>
          <div className="d-from-7 prose prose--lede">
            {perspective.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* Proyectos */}
      <Section labelledBy="projects-title">
        <div className="rule">
          <SectionHead id="projects-title" title={projects.title}>
            <p className="secondary prose">{projects.intro}</p>
          </SectionHead>
        </div>
        <ul className="grid">
          {projects.items.map((project, index) => (
            <li key={project.title} className="d-6 t-3 peer">
              <PhotoFrame
                photo={index === 0 ? PHOTOS.espacioIdiStand : PHOTOS.feria21Presentacion}
                ratio="square"
                caption={project.photoCaption}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 590px"
              />
              <p className="label">{project.label}</p>
              <h3 className="h3">{project.title}</h3>
              <p className="secondary">{project.text}</p>
              {project.link ? (
                <p>
                  <TextLink href={ROUTES.inicio}>{project.link}</TextLink>
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </Section>

      {/* Exposiciones */}
      <Section band="secondary" labelledBy="talks-title">
        <SectionHead id="talks-title" title={talks.title} />

        {/* TEDx */}
        <div className="grid opening">
          <div className="d-5 peer">
            <p className="label">{talks.tedx.label}</p>
            <h3 className="h3">{talks.tedx.title}</h3>
            <p className="secondary">{talks.tedx.text}</p>
            <div className="actions mt-8">
              <Button href={YOUTUBE_TEDX_URL}>{talks.tedx.cta}</Button>
            </div>
          </div>
          <PhotoFrame
            photo={PHOTOS.tedxCharla}
            ratio="tall"
            sizes="(max-width: 1024px) 100vw, 400px"
            className="d-from-9 t-4"
          />
        </div>

        {/* Ferias, congresos y sesiones con mentores */}
        <div className="grid mt-16 rule">
          <div className="d-8 peer">
            <h3 className="h3">{talks.fairs.title}</h3>
            <p className="secondary">{talks.fairs.text}</p>
          </div>
          <PhotoFrame
            photo={PHOTOS.feria21Stand}
            ratio="landscape"
            caption={talks.fairs.captions.stand}
            sizes="(max-width: 1024px) 100vw, 590px"
            className="d-6 t-3"
          />
          <PhotoFrame
            photo={PHOTOS.meetTheMentors}
            ratio="landscape"
            caption={talks.fairs.captions.mentors}
            sizes="(max-width: 1024px) 100vw, 590px"
            className="d-6 t-3"
          />
        </div>

        {/* Congreso Innova Educa 21 */}
        <div className="grid mt-16 rule">
          <div className="d-4 peer">
            <p className="label">{talks.congress.label}</p>
            <h3 className="h3">{talks.congress.title}</h3>
            <p>
              <TextLink href={ROUTES.resultados}>{talks.congress.link}</TextLink>
            </p>
          </div>
          <div className="d-12 photo-row">
            <PhotoFrame
              photo={PHOTOS.innovaEducaCartel}
              ratio="tall"
              caption={talks.congress.captions.cartel}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 250px"
            />
            <PhotoFrame
              photo={PHOTOS.innovaEducaPoster}
              ratio="tall"
              caption={talks.congress.captions.poster}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 250px"
            />
            <PhotoFrame
              photo={PHOTOS.tonucci}
              ratio="tall"
              caption={talks.congress.captions.tonucci}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 250px"
            />
          </div>
        </div>

        {/* Entrevista */}
        <div className="grid mt-16">
          <div className="d-8 peer peer--rule">
            <p className="label">{talks.interview.label}</p>
            <h3 className="h3">{talks.interview.title}</h3>
            <p className="secondary">{talks.interview.text}</p>
          </div>
        </div>
      </Section>

      <Closing
        id="contact-title"
        title={contact.title}
        text={contact.text}
        href={`mailto:${EMAIL}`}
        cta={contact.cta}
      />
    </>
  );
}
