import { ImageResponse } from "next/og";
import { SITE_META } from "@/content/site";

export const alt = SITE_META.ogAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/*
 * ImageResponse no lee variables CSS: estos son los valores de los tokens
 * --paper, --ink, --red e --ink-soft de app/globals.css.
 */
const PAPER = "#FBF8F2";
const INK = "#1E2B4A";
const RED = "#B3261E";
const INK_SOFT = "#5A6380";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "88px 96px",
          background: PAPER,
          color: INK,
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", fontSize: 88, lineHeight: 1.15, letterSpacing: -2 }}>
          {SITE_META.ogTitle
            .trim()
            .split(" ")
            .map((word) => (
              <span key={word} style={{ marginRight: 24 }}>
                {word}
              </span>
            ))}
          <span style={{ display: "flex", position: "relative" }}>
            <span>{SITE_META.ogTitleUnderlined}</span>
            <svg
              width="100%"
              height="26"
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
              style={{ position: "absolute", left: 0, bottom: -10 }}
            >
              <path d="M2 8 C 40 3, 80 11, 120 6 S 180 4, 198 7" fill="none" stroke={RED} strokeWidth="2.6" strokeLinecap="round" />
            </svg>
          </span>
          <span>{SITE_META.ogTitleEnd}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 34, color: INK_SOFT }}>
          <div style={{ width: 44, height: 3, background: RED }} />
          <span>{SITE_META.ogFooter}</span>
        </div>
      </div>
    ),
    size,
  );
}
