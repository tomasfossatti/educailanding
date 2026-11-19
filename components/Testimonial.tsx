import Image from "next/image";
import type { Photo } from "@/content/site";
import { LiteYouTube } from "./LiteYouTube";
import { MarginQuote } from "./MarginQuote";

export type TestimonialData = {
  quote: string;
  name: string;
  /** Materia e institución. */
  role: string;
  photo?: Photo;
  videoId?: string;
};

/**
 * TODO(material): testimonio real de un docente del piloto, con autorización.
 * Quien lo usa no lo renderiza mientras el dato sea null.
 */
export function Testimonial({
  data,
  videoTitle,
  playLabel,
}: {
  data: TestimonialData;
  videoTitle: string;
  playLabel: string;
}) {
  return (
    <div className="testimonial">
      <div className="stack gap-24">
        <MarginQuote quote={data.quote} />
        <div className="testimonial__person">
          {data.photo ? (
            <Image
              src={data.photo.src}
              alt={data.photo.alt}
              width={64}
              height={64}
              sizes="64px"
              loading="lazy"
              className="testimonial__photo"
            />
          ) : null}
          <div className="stack">
            <span className="testimonial__name">{data.name}</span>
            <span className="testimonial__role">{data.role}</span>
          </div>
        </div>
      </div>
      {data.videoId ? (
        <LiteYouTube id={data.videoId} title={videoTitle} playLabel={playLabel} thumbAlt={data.name} />
      ) : null}
    </div>
  );
}
