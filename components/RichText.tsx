import { Fragment } from "react";
import { Scribble } from "./Scribble";

const TOKENS = /(==[^=]+==|__[^_]+__)/g;

/**
 * Interpreta solo dos marcas en los textos de content/:
 * ==resaltador== → <mark className="mark"> y __subrayado__ → subrayado rojo a mano.
 * No usa dangerouslySetInnerHTML.
 */
export function RichText({ text, underlineDelay }: { text: string; underlineDelay?: number }) {
  const parts = text.split(TOKENS);
  return (
    <>
      {parts.map((part, index) => {
        if (part.length > 4 && part.startsWith("==") && part.endsWith("==")) {
          return (
            <mark key={index} className="mark">
              {part.slice(2, -2)}
            </mark>
          );
        }
        if (part.length > 4 && part.startsWith("__") && part.endsWith("__")) {
          return (
            <Scribble key={index} variant="underline" delay={underlineDelay}>
              {part.slice(2, -2)}
            </Scribble>
          );
        }
        return <Fragment key={index}>{part}</Fragment>;
      })}
    </>
  );
}

/** El mismo texto sin las marcas, para metadatos, JSON-LD y aria-label. */
export function plainText(text: string) {
  return text.replace(/==([^=]+)==/g, "$1").replace(/__([^_]+)__/g, "$1");
}
