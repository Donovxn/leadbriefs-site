export const ONE_LINE_OFFER =
  "Daily Signal Brief Packs: 25–50 source-grounded leads/day with 2 openers + 2 follow-ups each, delivered as CSV + Google Sheets, plus a QA report. Demo pack in 48 hours.";

export const HERO = {
  eyebrow: "LeadBriefs",
  title: "Daily signal briefs for manual LinkedIn DMs.",
  subtitle: ONE_LINE_OFFER,
  bullets: [
    "DM-only workflow. You send manually.",
    "Source-grounded triggers with visible links.",
    "Copy includes 2 openers + 2 follow-ups per lead.",
  ],
  primaryCta: "DM ‘DEMO’ on LinkedIn",
  secondaryCta: "Pay for 48h demo",
};

export const PROOF_ITEMS = [
  {
    id: "sample_overview",
    src: "/proof/sample_overview.png",
    caption: "Sample overview (CSV + Google Sheets)",
  },
  {
    id: "sample_copy",
    src: "/proof/sample_copy.png",
    caption: "Sample copy (2 openers + 2 follow-ups)",
  },
  {
    id: "qa_micro_report",
    src: "/proof/qa_micro_report.png",
    caption: "QA micro-report",
  },
  {
    id: "demo_card",
    src: "/proof/demo_card.png",
    caption: "Demo card",
  },
] as const;

export const DELIVERABLES = [
  {
    title: "48h demo pack",
    points: [
      "10 leads",
      "Why-now trigger + source link",
      "2 openers + 2 follow-ups each",
      "DM-only CTA",
      "QA micro-report",
      "Send order",
    ],
  },
  {
    title: "7-day sprint",
    points: [
      "5 daily packs (Mon–Fri)",
      "25–50 leads/day",
      "2 openers + 2 follow-ups each",
      "Weekly calibration note",
    ],
  },
  {
    title: "30-day ongoing",
    points: [
      "Ongoing weekly packs",
      "Improve triggers",
      "Voice imprint",
      "QA workflow",
    ],
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "DM",
    body: "DM ‘DEMO’ on LinkedIn to start.",
  },
  {
    step: "02",
    title: "Intake",
    body: "Share your offer, ICP + 3 no’s, and 10 accounts or keywords/competitors.",
  },
  {
    step: "03",
    title: "Delivery",
    body: "Receive your brief pack as CSV + Google Sheets plus QA report.",
  },
] as const;
