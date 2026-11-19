import type { Metadata } from "next";
import { Button, TextLink } from "@/components/Button";
import { Closing } from "@/components/Closing";
import { PhotoFrame } from "@/components/PhotoFrame";
import { Section, SectionHead } from "@/components/Section";
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
      {/* Apertura */}
      <Section opening>
        <div className="grid opening">
          <div className="d-7">
            <h1 className="display">{hero.title}</h1>
            <p className="lede">{hero.subtitle}</p>
            <p className="secondary mt-8">{hero.facts.join(" · ")}</p>
          </div>
          <PhotoFrame
            photo={PHOTOS.tedxEncendedorHero}
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
          {projects.items.map((project) => (
            <li key={project.title} className="d-6 t-3 peer peer--rule">
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
            photo={PHOTOS.tedxEscenario}
            ratio="portrait"
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
            sizes="(max-width: 1024px) 100vw, 790px"
            className="d-8"
          />
          <div className="d-from-9 stack-loose">
            <PhotoFrame
              photo={PHOTOS.feria21Visitantes}
              ratio="landscape"
              caption={talks.fairs.captions.visitantes}
              sizes="(max-width: 1024px) 100vw, 380px"
            />
            <PhotoFrame
              photo={PHOTOS.meetTheMentors}
              ratio="landscape"
              caption={talks.fairs.captions.mentors}
              sizes="(max-width: 1024px) 100vw, 380px"
            />
          </div>
        </div>

        {/* Congreso y entrevista */}
        <div className="grid mt-16">
          <div className="d-6 t-3 peer peer--rule">
            <p className="label">{talks.congress.label}</p>
            <h3 className="h3">{talks.congress.title}</h3>
            <p>
              <TextLink href={ROUTES.resultados}>{talks.congress.link}</TextLink>
            </p>
          </div>
          <div className="d-6 t-3 peer peer--rule">
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
