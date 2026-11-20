import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/Eyebrow";
import { Scribble } from "@/components/Scribble";
import { NOT_FOUND, ROUTES } from "@/content/site";

export const metadata: Metadata = {
  title: NOT_FOUND.metaTitle,
};

export default function NotFound() {
  return (
    <section className="section section--paper section--hero">
      <div className="container stack gap-24">
        <Eyebrow>{NOT_FOUND.eyebrow}</Eyebrow>
        <h1 className="h1 measure-820">
          {NOT_FOUND.titleBefore}
          <Scribble variant="circle" delay={300}>
            {NOT_FOUND.titleCircled}
          </Scribble>
        </h1>
        <p className="lead">{NOT_FOUND.text}</p>
        <div className="row pt-8">
          <Button href={ROUTES.inicio}>{NOT_FOUND.cta}</Button>
        </div>
      </div>
    </section>
  );
}
