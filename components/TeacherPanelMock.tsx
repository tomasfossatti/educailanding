import Image from "next/image";
import type { Photo } from "@/content/site";
import { Chip } from "./Chip";
import { MarginNote } from "./MarginNote";

export type TeacherPanelContent = {
  ariaLabel: string;
  course: string;
  when: string;
  repeatLabel: string;
  repeatText: string;
  evidence: string;
  nextLabel: string;
  nextText: string;
  decide: string;
  originLabel: string;
  studentQuestion: string;
  tutorAnswer: string;
  marginNote: string;
  dataNote: string;
};

type TeacherPanelMockProps = {
  content: TeacherPanelContent;
  /** "hero": con el chat de origen y la nota al margen. "full": solo el panel, más grande. */
  variant?: "hero" | "full";
  /** TODO(material): captura real del panel. Mientras sea null se usa el mock en código. */
  screenshot?: Photo | null;
};

/** Lo que ve el docente en Educai, con el chat del estudiante como origen. */
export function TeacherPanelMock({ content: c, variant = "hero", screenshot = null }: TeacherPanelMockProps) {
  const panel = screenshot ? (
    <div className="browser-frame">
      <div className="browser-frame__bar" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <Image
        src={screenshot.src}
        alt={screenshot.alt}
        width={screenshot.width}
        height={screenshot.height}
        sizes="(max-width: 900px) 100vw, 520px"
        className="browser-frame__img"
      />
    </div>
  ) : (
    <div className="panel-mock__panel">
      <div className="panel-mock__bar">
        <span className="panel-mock__course">{c.course}</span>
        <Chip>{c.when}</Chip>
      </div>
      <div className="panel-mock__card">
        <p className="label">{c.repeatLabel}</p>
        <p className="panel-mock__finding">{c.repeatText}</p>
        <p className="panel-mock__evidence">{c.evidence}</p>
      </div>
      <div className="panel-mock__card panel-mock__card--next">
        <p className="label">{c.nextLabel}</p>
        <p className="panel-mock__finding">{c.nextText}</p>
        <p className="panel-mock__decide">{c.decide}</p>
      </div>
    </div>
  );

  return (
    <div className={`panel-mock panel-mock--${variant}`} role="group" aria-label={c.ariaLabel}>
      {variant === "hero" ? (
        <>
          <div className="panel-mock__origin">
            <p className="label">{c.originLabel}</p>
            <p className="bubble bubble--student">{c.studentQuestion}</p>
            <p className="bubble bubble--tutor">{c.tutorAnswer}</p>
          </div>
          <MarginNote text={c.marginNote} className="panel-mock__margin" />
        </>
      ) : null}
      {panel}
      <p className="panel-mock__data-note">{c.dataNote}</p>
    </div>
  );
}
