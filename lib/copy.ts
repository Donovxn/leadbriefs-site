export const ONE_LINE_OFFER =
  "Daily Signal Brief Packs: 25–50 source-grounded leads/day with 2 openers + 2 follow-ups each, delivered as CSV + Google Sheets, plus a QA report. Demo pack in 48 hours.";

export const HERO = {
  eyebrow: "LeadBriefs",
  title: "Daily signal briefs for manual LinkedIn DMs.",
  subtitle: "Source-grounded lead and copy packs, delivered in a format you can send from today.",
  icpLine: "Best for B2B teams selling to a defined ICP with clear exclusions.",
  bullets: [
    "You send every DM manually.",
    "Each lead includes a why-now trigger with a visible source link.",
    "Each lead includes 2 openers and 2 follow-ups.",
  ],
  disclaimer: "No calls. Manual DMs only.",
  primaryCta: "DM ‘DEMO’ on LinkedIn",
  secondaryCta: "Pay for 48h demo",
};

export const PRICING = {
  demoLabel: "48h demo",
  weekLabel: "7-day sprint",
  demoCta: "Buy 48h demo",
  weekCta: "Buy 7-day sprint",
  disclaimer: "Delivery guarantee only: make-up pack or pro-rated refund for missed SLA.",
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
    id: "qa_report_card",
    src: "/proof/qa_report_card.png",
    caption: "QA micro-report",
  },
  {
    id: "demo_pack",
    src: "/proof/demo_pack.png",
    caption: "48-hour demo pack",
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
