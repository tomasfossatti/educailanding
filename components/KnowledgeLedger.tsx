import { Scribble } from "./Scribble";

type KnowledgeLedgerProps = {
  knownTitle: string;
  unknownTitle: string;
  known: readonly string[];
  unknown: readonly string[];
  headingLevel?: "h2" | "h3";
};

/** "Lo que sabemos / Lo que todavía no", como una hoja de cuaderno. */
export function KnowledgeLedger({
  knownTitle,
  unknownTitle,
  known,
  unknown,
  headingLevel = "h3",
}: KnowledgeLedgerProps) {
  const Heading = headingLevel;
  const columns = [
    { title: knownTitle, items: known, mark: "check" as const },
    { title: unknownTitle, items: unknown, mark: "question" as const },
  ];
  return (
    <div className="ledger ruled">
      {columns.map((column) => (
        <div key={column.title} className={`ledger__col ledger__col--${column.mark}`}>
          <Heading className="ledger__title">{column.title}</Heading>
          <ul className="ledger__list">
            {column.items.map((item) => (
              <li key={item}>
                {/* Pictograma de lista: aparece ya dibujado, no cuenta como marca. */}
                <Scribble variant={column.mark} animate={false} className="ledger__icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
