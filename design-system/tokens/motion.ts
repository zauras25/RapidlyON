export const motion = {
  duration: {
    instant: "100ms",
    fast: "150ms",
    normal: "250ms",
    slow: "400ms",
    slower: "600ms",
  },

  easing: {
    standard: "cubic-bezier(0.2, 0.8, 0.2, 1)",
    smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
    emphasized: "cubic-bezier(0.22, 1, 0.36, 1)",
  },
} as const;
