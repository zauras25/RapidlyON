export const caseStudies = [
  {
    slug: 'true-pay',
    title: 'True Pay',
    category: 'Fintech',
    type: 'Product Design',
    summary: 'A clearer financial experience designed around visibility, confidence, and everyday decision-making.',
  },
  {
    slug: 'smart-trip',
    title: 'Smart Trip',
    category: 'Travel',
    type: 'UX / Product',
    summary: 'A structured trip-planning experience that turns complex travel constraints into a simple plan.',
  },
  {
    slug: 'umer-mobile',
    title: 'Umer Mobile Parts',
    category: 'Commerce',
    type: 'Web Experience',
    summary: 'A focused mobile-parts shopping experience designed to help customers find the right part faster.',
  },
] as const;

export const process = [
  ['01', 'Discover', 'Understand users, business goals, constraints, and the real problem.'],
  ['02', 'Define', 'Turn research and requirements into clear product direction.'],
  ['03', 'Design', 'Create flows, interfaces, systems, and prototypes.'],
  ['04', 'Validate', 'Test important decisions and refine the experience.'],
  ['05', 'Build', 'Translate validated design into a responsive product.'],
  ['06', 'Launch', 'Polish, measure, learn, and improve after release.'],
] as const;
