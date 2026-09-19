import type { Metadata } from "next";

import { Footer, Header } from "@/components/layout";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rapidlyon.com"),

  title: {
    default: "RapidlyON — Digital Product Studio",
    template: "%s — RapidlyON",
  },

  description:
    "RapidlyON helps businesses turn ideas into digital products through strategy, UX/UI design, and development.",

  applicationName: "RapidlyON",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    siteName: "RapidlyON",
    title: "RapidlyON — Digital Product Studio",
    description:
      "Strategy, UX/UI design, and development for digital products.",
    url: "https://rapidlyon.com",
  },

  twitter: {
    card: "summary_large_image",
    title: "RapidlyON — Digital Product Studio",
    description:
      "Strategy, UX/UI design, and development for digital products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
