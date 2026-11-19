import type { MetadataRoute } from "next";
import { CONTENT_UPDATED } from "@/content/seo";
import { NAV_LINKS } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return NAV_LINKS.map((link) => ({
    url: absoluteUrl(link.href),
    lastModified: CONTENT_UPDATED,
    changeFrequency: "monthly",
    priority: link.href === "/" ? 1 : 0.8,
  }));
}
