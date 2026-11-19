export type FaqItem = { q: string; answer: string | null };

/** Solo las preguntas con respuesta confirmada se publican. */
export function publishedFaq(items: readonly FaqItem[]) {
  return items.filter((item): item is { q: string; answer: string } => item.answer !== null);
}

/** Datos estructurados FAQPage, solo con las preguntas publicadas. */
export function faqJsonLd(items: readonly FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: publishedFaq(items).map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

/** Preguntas frecuentes con <details> nativos: funcionan sin JS. */
export function Faq({ items }: { items: readonly FaqItem[] }) {
  return (
    <div className="faq">
      {publishedFaq(items).map((item) => (
        <details key={item.q} className="faq__item">
          <summary className="faq__q">
            <span>{item.q}</span>
          </summary>
          <p className="faq__a">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
