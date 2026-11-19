"use client";

import Image from "next/image";
import { useState } from "react";

type LiteYouTubeProps = {
  id: string;
  /** Título de la charla: se muestra sobre la miniatura y titula el iframe. */
  title: string;
  /** aria-label del botón de reproducir. */
  playLabel: string;
  thumbAlt: string;
};

/** Miniatura liviana: el iframe de YouTube recién se carga al hacer clic. */
export function LiteYouTube({ id, title, playLabel, thumbAlt }: LiteYouTubeProps) {
  const [active, setActive] = useState(false);

  return (
    <div className="lite-yt">
      {active ? (
        <iframe
          className="lite-yt__frame"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button type="button" className="lite-yt__button" onClick={() => setActive(true)} aria-label={playLabel}>
          <Image
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt={thumbAlt}
            fill
            sizes="(max-width: 900px) 100vw, 600px"
            loading="lazy"
            className="lite-yt__thumb"
          />
          <span className="lite-yt__play" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          </span>
          <span className="lite-yt__title" aria-hidden="true">
            {title}
          </span>
        </button>
      )}
    </div>
  );
}
