import type { Metadata } from 'next';
import './globals.css';

import {
  Header,
  Footer,
} from '@/components/layout';

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://rapidlyon.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      'RapidlyOn — UX Design & Digital Product Development',
    template: '%s | RapidlyOn',
  },

  description:
    'We design clear, useful digital experiences through UX research and product design, then develop them into working websites and apps when you need us to.',

  applicationName: 'RapidlyOn',

  keywords: [
    'UX design',
    'UX research',
    'UI design',
    'product design',
    'website design',
    'app design',
    'web development',
    'Next.js development',
    'digital product design',
    'RapidlyOn',
  ],

  alternates: {
    canonical: '/',
  },

  openGraph: {
    type: 'website',
    siteName: 'RapidlyOn',
    title:
      'RapidlyOn — UX Design That Becomes Real Products',
    description:
      'UX research, product design, and development for websites and apps.',
    url: '/',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'RapidlyOn — UX Design and Product Development',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title:
      'RapidlyOn — UX Design & Product Development',
    description:
      'We design digital experiences and build them when you need us to.',
    images: ['/opengraph-image'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'RapidlyOn',
    url: siteUrl,
    description:
      'UX design and digital product development studio.',
  };

  return (
    <html lang="en">
      <body className="noise">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
