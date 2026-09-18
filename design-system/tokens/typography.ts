export const typography = {
  fonts: {
    body: "'DM Sans', sans-serif",
    display: "'Space Grotesk', sans-serif",
  },

  sizes: {
    displayXL: 'clamp(3.5rem, 8vw, 6.5rem)',
    displayL: 'clamp(3rem, 6vw, 5rem)',
    displayM: 'clamp(2.5rem, 5vw, 4rem)',

    headingXL: 'clamp(2.25rem, 4vw, 3.5rem)',
    headingL: 'clamp(2rem, 3vw, 2.75rem)',
    headingM: '1.5rem',
    headingS: '1.25rem',

    bodyL: '1.125rem',
    body: '1rem',
    bodyS: '0.875rem',
    caption: '0.75rem',
  },

  lineHeights: {
    tight: '0.95',
    snug: '1.15',
    normal: '1.5',
    relaxed: '1.75',
  },

  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const;
