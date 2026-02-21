import { ImageResponse } from "next/og";

export const alt = "LeadBriefs — Daily Signal Brief Packs";
export const size = {
  width: 1200,
  height: 627,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
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
            "radial-gradient(circle at 10% 10%, rgba(79, 70, 229, 0.16), transparent 38%)",
          color: "#111827",
          fontSize: 40,
          fontWeight: 700,
          lineHeight: 1.2,
        }}
      >
        <div style={{ fontSize: 24, opacity: 0.72, marginBottom: 16 }}>LeadBriefs</div>
        <div style={{ maxWidth: 980 }}>
          Daily Signal Brief Packs
        </div>
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
          25–50 source-grounded leads/day with 2 openers + 2 follow-ups each,
          delivered as CSV + Google Sheets, plus a QA report.
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
