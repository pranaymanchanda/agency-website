import type { Metadata, Viewport } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

const siteUrl = "https://yourbrand.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GulfAutomation — Websites, AI Automations & Business Systems in Kuwait",
    template: "%s · GulfAutomation",
  },
  description:
    "We build premium websites, AI chatbots and business automations that generate more customers for small and medium businesses in Kuwait.",
  keywords: [
    "web design Kuwait",
    "AI chatbots Kuwait",
    "business automation Kuwait",
    "SEO Kuwait",
    "website development Kuwait",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_KW",
    url: siteUrl,
    siteName: "GulfAutomation",
    title: "Websites, AI Automations & Business Systems in Kuwait",
    description:
      "Premium websites, AI chatbots and automations that generate more customers for SMBs in Kuwait.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Websites, AI Automations & Business Systems in Kuwait",
    description:
      "Premium websites, AI chatbots and automations that generate more customers for SMBs in Kuwait.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "GulfAutomation",
  description:
    "Websites, AI automations and business systems for small and medium businesses in Kuwait.",
  areaServed: "Kuwait",
  url: siteUrl,
  serviceType: ["Web Design", "AI Chatbots", "Business Automation", "SEO", "Website Maintenance"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
