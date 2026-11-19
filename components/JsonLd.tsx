/** Inserta datos estructurados (schema.org) en formato JSON-LD. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // El contenido sale de content/ y se serializa con JSON.stringify;
      // se escapa «<» para que ningún texto pueda cerrar la etiqueta.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
