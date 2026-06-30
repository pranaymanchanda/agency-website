import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/CartContext";

const siteUrl = "https://retail-storefront.pranaykuwait.workers.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AURA — Modern Living & Home Essentials | Kuwait",
    template: "%s · AURA",
  },
  description:
    "Shop AURA — a modern home & lifestyle store in Kuwait. Furniture, kitchen, decor and lighting with fast delivery and easy returns.",
  keywords: ["home store Kuwait", "furniture Kuwait", "online shopping Kuwait", "decor", "lighting"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "AURA",
    title: "AURA — Modern Living & Home Essentials",
    description: "Furniture, kitchen, decor and lighting with fast delivery across Kuwait.",
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
  "@type": "Store",
  name: "AURA",
  description: "Modern home & lifestyle store in Kuwait.",
  areaServed: "Kuwait",
  url: siteUrl,
  currenciesAccepted: "KWD",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
