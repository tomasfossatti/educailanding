import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { OG_IMAGE, SITE_NAME } from "@/content/seo";
import { SITE_URL } from "@/content/site";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

async function loadFonts() {
  const dir = join(process.cwd(), "assets", "fonts");
  const [regular, semibold] = await Promise.all([
    readFile(join(dir, "Geist-Regular.ttf")),
    readFile(join(dir, "Geist-SemiBold.ttf")),
  ]);
  return [
    { name: "Geist", data: regular, weight: 400 as const, style: "normal" as const },
    { name: "Geist", data: semibold, weight: 600 as const, style: "normal" as const },
  ];
}

/** Imagen para compartir en redes (1200 × 630), con el mismo sistema visual del sitio. */
export async function renderOgImage({ title, kicker }: { title: string; kicker?: string }) {
  const host = new URL(SITE_URL).host;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          color: "#171717",
          padding: "72px 80px",
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: "#171717",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 28,
              fontWeight: 600,
            }}
          >
            E
          </div>
          <div style={{ fontSize: 32, fontWeight: 600, letterSpacing: "-0.04em" }}>{SITE_NAME}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {kicker ? <div style={{ fontSize: 28, color: "#5c5c5c" }}>{kicker}</div> : null}
          <div
            style={{
              fontSize: title.length > 48 ? 64 : 76,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.045em",
              maxWidth: 1000,
              display: "flex",
              flexDirection: "column",
            }}
          >
            {title.split(/(?<=,) /).map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #e0e0e0",
            paddingTop: 28,
            fontSize: 24,
            color: "#5c5c5c",
          }}
        >
          <span>{OG_IMAGE.footer}</span>
          <span>{host}</span>
        </div>
      </div>
    ),
    { ...ogSize, fonts: await loadFonts() },
  );
}
