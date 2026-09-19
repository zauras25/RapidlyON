export type CaseStudyType =
  | 'E-commerce'
  | 'Mobile App'
  | 'Website Redesign'
  | 'Order Management';

export type CaseStudyStatus =
  | 'Real project'
  | 'UX concept';

export type CaseStudySection = {
  eyebrow: string;
  title: string;
  text: string;
  points?: string[];
};

export type CaseStudy = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  type: CaseStudyType;
  status: CaseStudyStatus;
  description: string;
  tags: string[];
  heroLabel: string;
  context: string;
  problem: string;
  approach: string;
  outcome: string;
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'umer-mobile-parts',
    number: '01',
    title: 'Umer Mobile Parts',
    shortTitle: 'Umer Mobile Parts',
    type: 'E-commerce',
    status: 'Real project',

    description:
      'A real digital commerce experience created for a Lahore-based mobile parts business that wanted to expand beyond its local market and accept orders from retailers and everyday customers across Pakistan.',

    tags: [
      'UX Research',
      'Information Architecture',
      'E-commerce UX',
      'Responsive Web',
      'UI Design',
      'Development',
    ],

    heroLabel: 'From local business to digital commerce',

    context:
      'Umer Mobile Parts was operating from Lahore and wanted to build a digital business that could reach customers beyond its physical location. The goal was not simply to put products online, but to create a practical ordering experience for retailers as well as general customers.',

    problem:
      'The business needed a digital channel where people could discover mobile parts, understand what they were buying, move through the catalogue and place an order without depending on a physical visit or direct communication for every step.',

    approach:
      'We started with the business model and the people who would use it. The experience was structured around product discovery, clear categorisation, useful product information and a straightforward ordering journey. UX decisions were then translated into the responsive website and development.',

    outcome:
      'The business moved from a locally dependent model toward a digital ordering channel designed to serve customers beyond Lahore and support a wider retail and consumer audience.',

    sections: [
      {
        eyebrow: '01 / Business context',
        title: 'The business needed to travel beyond Lahore.',
        text:
          'The opportunity was bigger than building another product catalogue. Umer Mobile Parts needed a digital channel that could support a wider market while still feeling simple enough for everyday customers and practical enough for retailers.',
      },
      {
        eyebrow: '02 / Discovery',
        title: 'We started with the business, not the screens.',
        text:
          'Before designing the interface, we looked at what the business needed to sell, who needed to buy it, what information customers would need and where uncertainty could stop someone from completing an order.',
        points: [
          'Understand the product catalogue',
          'Separate different customer needs',
          'Make product discovery easier',
          'Reduce unnecessary ordering friction',
          'Create a scalable structure for future growth',
        ],
      },
      {
        eyebrow: '03 / Experience',
        title: 'The catalogue became a journey.',
        text:
          'Products were organised so users could move from broad categories toward specific products without losing context. The experience focused on helping users understand what they were looking at before asking them to make a decision.',
      },
      {
        eyebrow: '04 / Design & development',
        title: 'The UX became a working product.',
        text:
          'After defining the experience, the interface was designed responsively and implemented as a working website. The development phase carried the same UX decisions into the final product instead of treating development as a separate visual exercise.',
      },
    ],
  },

  {
    slug: 'visa-consultant-redesign',
    number: '02',
    title: 'Visa Consultant',
    shortTitle: 'Visa Consultant',
    type: 'Website Redesign',
    status: 'Real project',

    description:
      'A real responsive website redesign for a professional visa consultant. The project transformed an underperforming website into a clearer experience for discovering visa services, understanding requirements and requesting an appointment.',

    tags: [
      'UX Audit',
      'Website Redesign',
      'Information Architecture',
      'Lead Generation',
      'Responsive UX',
      'UI Design',
    ],

    heroLabel: 'Rebuilding trust into the experience',

    context:
      'The existing website had been developed previously but was not providing the clarity, structure or interaction needed by its audience. The consultant needed a more reliable digital presence that could explain services and turn visitors into potential clients.',

    problem:
      'The website had weak information hierarchy, unclear visa categories, limited process guidance and no effective appointment journey. The site had struggled to attract an audience for around a year and a half, making the redesign a UX and business problem rather than simply a visual refresh.',

    approach:
      'The redesign started with direct discussion with the client and an examination of the existing experience. We identified the questions users would need answered before trusting a visa consultant, then rebuilt the information architecture, content hierarchy and interaction patterns around those needs.',

    outcome:
      'The redesigned experience gives users clearer visa categories, document requirements, process information, trust signals and a direct appointment path across desktop and mobile.',

    sections: [
      {
        eyebrow: '01 / Existing experience',
        title: 'The website existed. The experience did not.',
        text:
          'The original site contained information but did not guide visitors effectively. Important decisions were difficult to make because services, requirements and next steps were not organised around the users questions.',
        points: [
          'Weak information hierarchy',
          'Unclear visa categories',
          'Limited process explanation',
          'No effective appointment flow',
          'Poor mobile experience',
          'Weak trust signals',
        ],
      },
      {
        eyebrow: '02 / Discovery',
        title: 'We talked to the person behind the service.',
        text:
          'Discussions with the consultant helped uncover what potential clients repeatedly ask, what information creates confidence and what needs to be visible before someone is willing to start a visa consultation.',
      },
      {
        eyebrow: '03 / Information architecture',
        title: 'The information was reorganised around decisions.',
        text:
          'Visa categories became easier to understand. Relevant document requirements were surfaced. The process was explained in a clearer sequence, allowing visitors to move from understanding a service to knowing what to do next.',
        points: [
          'Visa categories',
          'Required documents',
          'Application process',
          'Consultation information',
          'Client reviews',
          'Authority and trust indicators',
        ],
      },
      {
        eyebrow: '04 / Conversion experience',
        title: 'The website finally gives visitors a next step.',
        text:
          'A structured appointment form was introduced so a visitor can move from browsing to requesting an appointment instead of having to figure out how to contact the consultant independently.',
      },
      {
        eyebrow: '05 / Responsive design',
        title: 'The experience works wherever the user arrives.',
        text:
          'Because visa research can happen on a phone as easily as on a desktop, the redesigned experience was structured responsively with interaction, readability and navigation considered across screen sizes.',
      },
    ],
  },

  {
    slug: 'smart-trip',
    number: '03',
    title: 'SmartTrip',
    shortTitle: 'SmartTrip',
    type: 'Mobile App',
    status: 'UX concept',

    description:
      'A conceptual travel experience designed around a simple idea: understand what people want first, then help them discover a trip that fits.',

    tags: [
      'UX Concept',
      'User Journey',
      'Product Strategy',
      'Interaction Design',
      'Mobile UX',
      'Prototype',
    ],

    heroLabel: 'Helping people decide where to go',

    context:
      'SmartTrip is a concept case study exploring how travel planning could become more useful when the product understands the users intent before presenting destinations.',

    problem:
      'Choosing a trip can involve too many decisions. People may know that they want to travel without knowing exactly where they should go, why they should go there, or which type of experience fits their needs.',

    approach:
      'Instead of starting with a destination list, SmartTrip starts with the person. The experience gathers information about their preferences, purpose and expectations and uses that understanding to guide them toward a more relevant trip.',

    outcome:
      'The concept turns travel discovery from a broad search problem into a guided decision-making experience where users can understand why a recommended trip may be right for them.',

    sections: [
      {
        eyebrow: '01 / The problem',
        title: 'People do not always know where they want to go.',
        text:
          'A travel product can easily overwhelm users with destinations, hotels and activities. The real problem often comes earlier: the person is trying to understand what kind of trip they actually want.',
      },
      {
        eyebrow: '02 / User intent',
        title: 'Start with the reason for the trip.',
        text:
          'SmartTrip asks users about the context behind their future journey. The destination becomes an outcome of understanding the person rather than the first decision they have to make.',
        points: [
          'Where do you want to go?',
          'What is the purpose of your trip?',
          'What kind of experience do you want?',
          'What matters most to you?',
          'What would make this trip worthwhile?',
        ],
      },
      {
        eyebrow: '03 / Recommendation',
        title: 'The product guides instead of dumping information.',
        text:
          'Once the user provides enough context, SmartTrip presents a considered trip recommendation and explains why that recommendation may fit.',
      },
      {
        eyebrow: '04 / Experience',
        title: 'From questions to confidence.',
        text:
          'The core UX idea is a progressive journey: understand the person, reduce decisions, present a relevant option and give enough context to make a confident choice.',
      },
    ],
  },

  {
    slug: 'whatsapp-order-assistant',
    number: '04',
    title: 'WhatsApp Order Assistant',
    shortTitle: 'WhatsApp Order Assistant',
    type: 'Order Management',
    status: 'UX concept',

    description:
      'A concept product for small businesses that want to receive orders through WhatsApp while keeping customer information, order details and business data organised in one simple experience.',

    tags: [
      'UX Concept',
      'Small Business',
      'WhatsApp Integration',
      'Order Management',
      'Product Design',
      'Mobile UX',
    ],

    heroLabel: 'Turning conversations into structured orders',

    context:
      'Many small businesses already use WhatsApp as their primary communication channel with customers. The concept explores how an order-focused product could connect to that behaviour instead of forcing businesses and customers into an unfamiliar ordering system.',

    problem:
      'Orders received through chat can become difficult to manage. Product details, customer information, quantities and delivery information can be scattered across conversations, making it harder for a business to process orders consistently.',

    approach:
      'The product collects the information needed for an order through a simple conversational interface, connects the business workflow with WhatsApp and turns incoming conversations into structured order records that the business can review and process.',

    outcome:
      'The concept creates a bridge between familiar WhatsApp communication and a more organised business workflow, reducing manual order handling while preserving the simplicity of chat-based ordering.',

    sections: [
      {
        eyebrow: '01 / Business context',
        title: 'Small businesses already have the customers.',
        text:
          'The challenge is not always finding another communication channel. Many businesses already receive customer messages through WhatsApp. The opportunity is to make those conversations easier to turn into actual orders.',
      },
      {
        eyebrow: '02 / The problem',
        title: 'A chat is not an order management system.',
        text:
          'Important information can be buried inside conversations. Business owners may have to manually copy product names, quantities, customer details and delivery information before an order can be processed.',
        points: [
          'Customer information',
          'Product selection',
          'Quantity',
          'Delivery details',
          'Order status',
        ],
      },
      {
        eyebrow: '03 / Product idea',
        title: 'Let the interface collect the right information.',
        text:
          'The concept uses a guided interaction to collect the information required to create a complete order while keeping the experience familiar to the customer.',
      },
      {
        eyebrow: '04 / Integration',
        title: 'WhatsApp becomes the entry point.',
        text:
          'The business can continue using WhatsApp as the communication layer while the product organises the resulting information into a structured workflow for the business.',
      },
      {
        eyebrow: '05 / Experience',
        title: 'Conversation in. Structured order out.',
        text:
          'The UX focuses on reducing the gap between what customers naturally do — send a message — and what businesses need — a complete, manageable order.',
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((project) => project.slug === slug);
}
