import type { Project } from './real-projects';

export const conceptProjects: Project[] = [
  {
    slug: 'smart-trip',
    number: '01',
    title: 'Smart Trip',
    type: 'Mobile App',
    category: 'Concept',
    description:
      'A travel product concept that helps people discover a suitable trip by understanding their destination preferences, purpose and travel needs.',
    tags: [
      'Product Design',
      'UX Research',
      'User Journey',
      'Personalization',
      'Mobile UX',
    ],
    problem:
      'Planning a trip can require too many decisions. Users often know they want to travel but are unsure which destination or experience is right for their goals.',
    approach:
      'The experience gathers meaningful information about the user, their destination preferences and the purpose of their trip, then turns those inputs into a guided recommendation experience.',
    outcome:
      'A concept focused on reducing decision fatigue and helping users understand why a suggested trip could be suitable for them.',
  },
  {
    slug: 'whatsapp-order-hub',
    number: '02',
    title: 'WhatsApp Order Hub',
    type: 'SaaS',
    category: 'Concept',
    description:
      'A product concept for small businesses that turns WhatsApp conversations into a more structured order-management workflow.',
    tags: [
      'Product Strategy',
      'UX Design',
      'Order Management',
      'WhatsApp',
      'Small Business',
    ],
    problem:
      'Small businesses often receive orders through WhatsApp, leaving conversations, customer information and order history scattered across chats and difficult to manage.',
    approach:
      'We explored a lightweight business experience where incoming WhatsApp orders could become structured records inside a central workspace, allowing the business owner to review orders, manage customers and track order status.',
    outcome:
      'A concept for transforming unstructured WhatsApp conversations into a simple workflow for receiving, organizing and processing business orders.',
  },
];
