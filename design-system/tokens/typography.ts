export const typography = {
  display: {
    fontSize: "clamp(3.5rem, 9vw, 8rem)",
    lineHeight: "0.92",
    letterSpacing: "-0.06em",
    fontWeight: "700",
  },

  h1: {
    fontSize: "clamp(2.75rem, 7vw, 6rem)",
    lineHeight: "0.98",
    letterSpacing: "-0.05em",
    fontWeight: "700",
  },

  h2: {
    fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
    lineHeight: "1",
    letterSpacing: "-0.04em",
    fontWeight: "700",
  },

  h3: {
    fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
    lineHeight: "1.1",
    letterSpacing: "-0.025em",
    fontWeight: "600",
  },

  h4: {
    fontSize: "1.25rem",
    lineHeight: "1.25",
    letterSpacing: "-0.015em",
    fontWeight: "600",
  },

  bodyLarge: {
    fontSize: "1.25rem",
    lineHeight: "1.55",
    fontWeight: "400",
  },

  body: {
    fontSize: "1rem",
    lineHeight: "1.6",
    fontWeight: "400",
  },

  bodySmall: {
    fontSize: "0.875rem",
    lineHeight: "1.5",
    fontWeight: "400",
  },

  label: {
    fontSize: "0.75rem",
    lineHeight: "1.4",
    letterSpacing: "0.08em",
    fontWeight: "600",
    textTransform: "uppercase",
  },
} as const;
