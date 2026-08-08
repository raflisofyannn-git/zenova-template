import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Zenova",
    template: "%s | Zenova",
  },

  description:
    "Premium Next.js template for startups, SaaS, agencies and modern businesses.",

  keywords: [
    "Next.js",
    "Tailwind CSS",
    "React",
    "SaaS",
    "Agency",
    "Business",
    "Dashboard",
    "Zenova",
  ],

  authors: [
    {
      name: "Zenova",
    },
  ],

  creator: "Zenova",

  metadataBase: new URL("https://zenova-template.vercel.app"),

  openGraph: {
    title: "Zenova",
    description:
      "Premium Next.js Template",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Zenova",
    description:
      "Premium Next.js Template",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
