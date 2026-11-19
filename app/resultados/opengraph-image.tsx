import { PAGES } from "@/content/seo";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = PAGES.resultados.ogTitle;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ title: PAGES.resultados.ogTitle });
}
