import { PAGES } from "@/content/seo";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = PAGES.tecnico.ogTitle;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({ title: PAGES.tecnico.ogTitle });
}
