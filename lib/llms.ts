import * as inicio from "@/content/inicio";
import * as quienSoy from "@/content/quien-soy";
import * as resultados from "@/content/resultados";
import { CONTENT_UPDATED, ORGANIZATION, PAGES, PROFILES } from "@/content/seo";
import { EMAIL, FORM_URL, ROUTES } from "@/content/site";
import * as tecnico from "@/content/tecnico";
import { absoluteUrl } from "./seo";

/*
 * Archivos para modelos de lenguaje (https://llmstxt.org): un resumen corto
 * (llms.txt) y el texto completo del sitio (llms-full.txt). Todo sale de
 * content/, así que se actualizan solos cuando cambian los textos.
 */

type Item = { title: string; text: string };

const heading = (level: number, text: string) => `${"#".repeat(level)} ${text}`;
const bullets = (items: readonly string[]) => items.map((item) => `- ${item}`).join("\n");
const titled = (items: readonly Item[]) => bullets(items.map((item) => `**${item.title}:** ${item.text}`));
const numbered = (items: readonly string[]) => items.map((item, index) => `${index + 1}. ${item}`).join("\n");
const join = (...blocks: (string | false | undefined)[]) => blocks.filter(Boolean).join("\n\n");

function pageLink(key: keyof typeof PAGES, path: string) {
  return `- [${PAGES[key].title}](${absoluteUrl(path)}): ${PAGES[key].description}`;
}

export function buildLlmsTxt() {
  const { approvals } = resultados;
  const [before, after] = approvals.bars;
  return join(
    heading(1, ORGANIZATION.name),
    `> ${inicio.hero.subtitle}`,
    inicio.product.audiences.map((audience) => `${audience.label}: ${audience.text}`).join("\n\n"),
    heading(2, "Datos clave"),
    bullets([
      `Test de dos meses en una materia universitaria (${approvals.total} estudiantes) y en una escuela de robótica (20 estudiantes).`,
      `Aprobaron el 2.º parcial ${after.approved} de ${approvals.total} (${after.percent} %) con Educai disponible, contra ${before.approved} de ${approvals.total} (${before.percent} %) en el 1.er parcial. ${inicio.resultsTeaser.disclaimer}`,
      `${resultados.adoption.reading}`,
      `Privacidad: ${inicio.product.principles.find((p) => p.title.startsWith("Patrones"))?.text}`,
      `Estado: MVP desplegado en producción. ${tecnico.mvpStatus.note}`,
      `Modelo de negocio: ${inicio.model.disclaimer}`,
      `Fundador: Tomás Fossatti, ${ORGANIZATION.location.locality}, Argentina.`,
    ]),
    heading(2, "Páginas"),
    [
      pageLink("inicio", ROUTES.inicio),
      pageLink("resultados", ROUTES.resultados),
      pageLink("tecnico", ROUTES.tecnico),
      pageLink("quienSoy", ROUTES.quienSoy),
    ].join("\n"),
    heading(2, "Contacto"),
    bullets([
      `Piloto 2027 para docentes e instituciones: ${FORM_URL}`,
      `Correo: ${EMAIL}`,
      `Instagram de Educai: ${PROFILES.educaiInstagram}`,
      `Sitio personal de Tomás Fossatti: ${PROFILES.tomasWebsite}`,
      `LinkedIn de Tomás Fossatti: ${PROFILES.tomasLinkedin}`,
    ]),
    heading(2, "Opcional"),
    `- [Texto completo del sitio](${absoluteUrl("/llms-full.txt")}): todas las páginas en texto plano.`,
    `Última actualización: ${CONTENT_UPDATED}.`,
  ) + "\n";
}

export function buildLlmsFull() {
  const i = inicio;
  const r = resultados;
  const t = tecnico;
  const q = quienSoy;

  const home = join(
    heading(1, `${PAGES.inicio.title} (${absoluteUrl(ROUTES.inicio)})`),
    heading(2, i.hero.title),
    i.hero.subtitle,
    heading(2, i.tension.title),
    i.tension.columns.map((column) => join(heading(3, column.title), bullets(column.items))).join("\n\n"),
    i.tension.quote,
    heading(2, i.product.title),
    titled(i.product.audiences.map((a) => ({ title: `${a.label}. ${a.title}`, text: a.text }))),
    heading(3, i.product.principlesLabel),
    titled(i.product.principles),
    heading(2, i.cycle.title),
    numbered(i.cycle.steps.map((s) => `${s.title}: ${s.text}`)),
    `${i.cycle.highlightLabel}: ${i.cycle.highlight}`,
    heading(2, i.resultsTeaser.title),
    r.approvals.reading,
    titled(i.resultsTeaser.stats.map((s) => ({ title: s.label, text: `${s.value} ${s.detail}` }))),
    heading(2, `${i.model.title} (${i.model.status})`),
    i.model.text,
    titled(i.model.stakeholders),
    `${i.model.disclaimerLabel}: ${i.model.disclaimer}`,
    heading(2, i.whyItMatters.title),
    i.whyItMatters.paragraphs.join("\n\n"),
    heading(2, i.faq.title),
    i.faq.items.map((item) => join(heading(3, item.question), item.answer)).join("\n\n"),
    heading(2, i.closing.title),
    i.closing.text,
  );

  const results = join(
    heading(1, `${PAGES.resultados.title} (${absoluteUrl(ROUTES.resultados)})`),
    heading(2, r.intro.title),
    r.intro.subtitle,
    titled(r.intro.context.map((c) => ({ title: c.label, text: `${c.value} ${c.detail}` }))),
    heading(2, r.approvals.title),
    bullets(r.approvals.bars.map((b) => `${b.label}: ${b.approved} de ${r.approvals.total} (${b.percent} %)`)),
    r.approvals.reading,
    heading(2, r.adoption.title),
    bullets(
      r.adoption.groups.flatMap((g) =>
        g.rows.map((row) => `${g.name}, ${row.label.toLowerCase()}: ${row.value} de ${g.total}`),
      ),
    ),
    r.adoption.reading,
    `${r.adoption.completion.label}: ${r.adoption.completion.value} ${r.adoption.completion.detail}`,
    heading(2, r.rating.title),
    r.rating.text,
    bullets(r.rating.periods.map((p) => `${p.label}: entre ${p.from} y ${p.to}`)),
    heading(2, r.observations.title),
    titled(r.observations.items),
    r.observations.roboticsNote,
    heading(2, r.limits.title),
    r.limits.text,
    heading(2, r.nextSteps.title),
    r.nextSteps.text,
  );

  const technical = join(
    heading(1, `${PAGES.tecnico.title} (${absoluteUrl(ROUTES.tecnico)})`),
    heading(2, t.hero.title),
    t.hero.subtitle,
    `${t.hero.stackLabel}: ${t.hero.stack.join(", ")}.`,
    heading(2, t.fullCycle.title),
    numbered(t.fullCycle.steps.map((s) => `${s.title}: ${s.text}`)),
    heading(2, t.validatedTutor.title),
    t.validatedTutor.paragraphs.join("\n\n"),
    heading(3, t.validatedTutor.ragLabel),
    numbered(t.validatedTutor.rag),
    heading(2, t.signals.title),
    t.signals.paragraphs.join("\n\n"),
    bullets(t.signals.states.map((s) => `${s.code}: ${s.text}`)),
    `${t.signals.exampleLabel}: ${t.signals.example} ${t.signals.exampleNote}`,
    heading(2, t.insights.title),
    titled(t.insights.items),
    t.insights.note,
    heading(2, t.privacy.title),
    t.privacy.text,
    `${t.privacy.flowLabel}: ${t.privacy.flow.join(" → ")}.`,
    titled(t.privacy.items),
    heading(2, `${t.roadmap.title} (${t.roadmap.status})`),
    t.roadmap.intro,
    t.roadmap.engines.map((e) => join(heading(3, e.title), e.paragraphs.join("\n\n"))).join("\n\n"),
    titled(t.roadmap.proposals),
    heading(2, t.mvpStatus.title),
    join(heading(3, t.mvpStatus.done.title), bullets(t.mvpStatus.done.items)),
    join(heading(3, t.mvpStatus.pending.title), bullets(t.mvpStatus.pending.items)),
    t.mvpStatus.note,
  );

  const about = join(
    heading(1, `${PAGES.quienSoy.title} (${absoluteUrl(ROUTES.quienSoy)})`),
    q.hero.subtitle,
    q.hero.facts.join(" · "),
    heading(2, q.perspective.title),
    q.perspective.paragraphs.join("\n\n"),
    heading(2, q.projects.title),
    q.projects.intro,
    titled(q.projects.items.map((p) => ({ title: `${p.title} (${p.label})`, text: p.text }))),
    heading(2, q.talks.title),
    `${q.talks.tedx.label}. ${q.talks.tedx.title}. ${q.talks.tedx.text} ${PROFILES.tedx}`,
    `${q.talks.fairs.title}. ${q.talks.fairs.text}`,
    `${q.talks.congress.label}. ${q.talks.congress.title}.`,
    `${q.talks.interview.label}. ${q.talks.interview.title} ${q.talks.interview.text}`,
    heading(2, q.contact.title),
    `${q.contact.text} ${EMAIL}`,
  );

  return (
    join(
      `Educai: texto completo del sitio. Última actualización: ${CONTENT_UPDATED}.`,
      home,
      results,
      technical,
      about,
    ) + "\n"
  );
}
