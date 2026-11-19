import { Scribble } from "./Scribble";

/**
 * Nota al margen en lápiz rojo (máximo 8 palabras), con una flecha a mano que
 * apunta a lo que comenta. En mobile la flecha se oculta y la nota baja debajo.
 * TODO(material): si existen escaneos de notas manuscritas en public/notas/*.svg,
 * se reemplaza el texto por la imagen, con el texto como alt.
 */
export function MarginNote({
  text,
  arrow = true,
  flip = false,
  className = "",
}: {
  text: string;
  arrow?: boolean;
  /** Invierte la flecha horizontalmente. */
  flip?: boolean;
  className?: string;
}) {
  const classes = ["margin-note", flip ? "margin-note--flip" : "", className].filter(Boolean).join(" ");
  return (
    <p className={classes}>
      {arrow ? <Scribble variant="arrow" className="margin-note__arrow" /> : null}
      <span className="margin-note__text">{text}</span>
    </p>
  );
}
