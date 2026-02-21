import { ImageResponse } from "next/og";

export const alt = "LeadBriefs — Daily Signal Brief Packs";
export const size = {
  width: 1200,
  height: 627,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          backgroundColor: "#fafafa",
          backgroundImage:
            "radial-gradient(circle at 90% 16%, rgba(14, 165, 233, 0.16), transparent 32%)",
          color: "#111827",
          fontSize: 40,
          fontWeight: 700,
          lineHeight: 1.2,
        }}
      >
        <div style={{ fontSize: 24, opacity: 0.72, marginBottom: 16 }}>LeadBriefs</div>
        <div style={{ maxWidth: 980 }}>Manual DM briefs. Real output proof.</div>
        <div
          style={{
            marginTop: 20,
            maxWidth: 1040,
            fontSize: 28,
            fontWeight: 500,
            opacity: 0.84,
            lineHeight: 1.35,
          }}
        >
          Demo pack in 48 hours. CSV + Google Sheets delivery with QA report.
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
