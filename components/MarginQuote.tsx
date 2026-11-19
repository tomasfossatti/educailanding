/** Cita con la línea de margen del cuaderno. Reemplaza a los blockquote viejos. */
export function MarginQuote({
  quote,
  cite,
  size = "quote",
  className = "",
}: {
  quote: string;
  cite?: string;
  /** "lead" = versión chica, para notas. */
  size?: "quote" | "lead";
  className?: string;
}) {
  const classes = ["margin-quote", size === "lead" ? "margin-quote--lead" : "", className]
    .filter(Boolean)
    .join(" ");
  return (
    <figure className={classes}>
      <blockquote>
        <p>{quote}</p>
      </blockquote>
      {cite ? (
        <figcaption>
          <cite>{cite}</cite>
        </figcaption>
      ) : null}
    </figure>
  );
}
