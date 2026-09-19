export const projectTypes = [
  {
    value: "new-product",
    label: "Build a new digital product",
  },
  {
    value: "website",
    label: "Website",
  },
  {
    value: "web-app",
    label: "Web application",
  },
  {
    value: "mobile-app",
    label: "Mobile application",
  },
  {
    value: "ux-ui",
    label: "UX / UI design",
  },
  {
    value: "existing-product",
    label: "Improve an existing product",
  },
  {
    value: "other",
    label: "Something else",
  },
] as const;

export const budgetRanges = [
  {
    value: "not-sure",
    label: "I'm not sure yet",
  },
  {
    value: "under-5k",
    label: "Under $5,000",
  },
  {
    value: "5k-15k",
    label: "$5,000 – $15,000",
  },
  {
    value: "15k-30k",
    label: "$15,000 – $30,000",
  },
  {
    value: "30k-plus",
    label: "$30,000+",
  },
] as const;

export const timelines = [
  {
    value: "asap",
    label: "As soon as possible",
  },
  {
    value: "1-3-months",
    label: "1–3 months",
  },
  {
    value: "3-6-months",
    label: "3–6 months",
  },
  {
    value: "6-plus-months",
    label: "6+ months",
  },
  {
    value: "flexible",
    label: "Flexible",
  },
] as const;
