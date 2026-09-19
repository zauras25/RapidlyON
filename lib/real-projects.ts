export type ProjectType =
  | 'SaaS'
  | 'E-commerce'
  | 'Mobile App'
  | 'Website Redesign'
  | 'Order Management';

export type Project = {
  slug: string;
  number: string;
  title: string;
  type: ProjectType;
  category: string;
  description: string;
  tags: string[];
  problem: string;
  approach: string;
  outcome: string;
};

export const realProjects: Project[] = [
  {
    slug: 'umer-mobile-parts',
    number: '01',
    title: 'Umer Mobile Parts',
    type: 'E-commerce',
    category: 'Real Project',
    description:
      'A real digital commerce experience designed to help a Lahore-based mobile parts business expand nationwide and accept orders from retailers and general customers.',
    tags: [
      'UX Research',
      'UX Design',
      'UI Design',
      'E-commerce',
      'Development',
    ],
    problem:
      'The business was operating from Lahore and wanted to expand beyond its physical market. It needed a digital experience capable of reaching retailers and a wider customer base while making ordering easier.',
    approach:
      'We worked from discovery through UX, interface design and development, shaping the product around product discovery, trust, product information and a practical ordering journey.',
    outcome:
      'A complete digital commerce experience that gives the business a foundation for nationwide orders and a more scalable way to serve customers.',
  },

  {
    slug: 'visa-consultant-redesign',
    number: '02',
    title: 'Visa Consultant',
    type: 'Website Redesign',
    category: 'Real Project',
    description:
      'A complete UX redesign for a professional visa consultant, transforming an underperforming website into a clearer, more trustworthy and conversion-focused experience.',
    tags: [
      'UX Audit',
      'UX Research',
      'Responsive Design',
      'Lead Generation',
      'UI Design',
    ],
    problem:
      'The existing website had poor UX, unclear information architecture and almost no meaningful audience engagement. Visitors had limited guidance and no clear appointment journey.',
    approach:
      'We discussed the business and its audience with the consultant, identified the major usability and trust issues, then redesigned the information architecture, visa categories, documentation guidance, process information and appointment flow.',
    outcome:
      'A responsive experience designed to communicate credibility, answer user questions and turn visitors into potential consultation leads.',
  },

  {
    slug: 'smart-trip',
    number: '03',
    title: 'SmartTrip',
    type: 'Mobile App',
    category: 'UX Concept',
    description:
      'A conceptual travel experience that helps users discover the right trip by understanding their purpose, preferences and expectations before recommending a destination.',
    tags: [
      'UX Concept',
      'Product Strategy',
      'User Journey',
      'Interaction Design',
      'Mobile UX',
    ],
    problem:
      'Travel planning can overwhelm people with destinations and choices before they even understand what kind of trip they actually want.',
    approach:
      'The experience starts with user intent, collecting information about the traveller and using that context to guide them toward a more relevant trip.',
    outcome:
      'A guided travel discovery experience that reduces decision-making friction and gives users more confidence in their trip choice.',
  },

  {
    slug: 'whatsapp-order-assistant',
    number: '04',
    title: 'WhatsApp Order Assistant',
    type: 'Order Management',
    category: 'UX Concept',
    description:
      'A concept product for small businesses that want to receive orders through WhatsApp while keeping customer information, order details and business data organised.',
    tags: [
      'UX Concept',
      'Small Business',
      'WhatsApp Integration',
      'Order Management',
      'Product Design',
      'Mobile UX',
    ],
    problem:
      'Orders received through WhatsApp can become difficult to manage because customer details, products, quantities and delivery information are scattered across conversations.',
    approach:
      'The product collects the information needed for an order through a guided interface, connects with WhatsApp and turns conversations into structured order records.',
    outcome:
      'A concept that bridges familiar WhatsApp communication with a more organised business workflow while keeping ordering simple.',
  },
];
