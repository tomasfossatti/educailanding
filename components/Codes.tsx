import { Fragment } from "react";

const CODES = /\b(DRAFT|ACTIVE|RETIRED|NO_DATA|INSUFFICIENT|SUFFICIENT)\b/;

/** Muestra en tipografía mono los identificadores de estado que aparecen en un texto. */
export function WithCodes({ text }: { text: string }) {
  const parts = text.split(new RegExp(CODES.source, "g"));
  return (
    <>
      {parts.map((part, index) =>
        CODES.test(part) ? <code key={index}>{part}</code> : <Fragment key={index}>{part}</Fragment>,
      )}
    </>
  );
}
