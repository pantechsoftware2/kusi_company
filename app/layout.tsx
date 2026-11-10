import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MotionProvider } from "@/components/animations/MotionProvider";
import { BUSINESS } from "@/lib/business";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kusi-and-company-hardware.goodsole10.chatgpt.site"),
  title: { default: "Kusi and Company | Hardware & Fastening Products in Kolkata", template: "%s | Kusi and Company" },
  description: "Explore machine screws, nuts, washers, spring washers, and split pins at Kusi and Company in Kolkata. Contact us for product inquiries.",
  openGraph: { title: "Kusi and Company | Hardware & Fastening Products in Kolkata", description: "Essential fastening components, available for direct inquiry in Kolkata.", type: "website", locale: "en_IN" },
  twitter: { card: "summary_large_image" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const localBusiness = {
  "@context": "https://schema.org", "@type": "LocalBusiness", name: BUSINESS.name, telephone: BUSINESS.phone,
  address: { "@type": "PostalAddress", streetAddress: "113/B, Manohar Das Chowk, Ground Floor", addressLocality: "Kolkata", postalCode: "700055", addressRegion: "West Bengal", addressCountry: "IN" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <MotionProvider><Header />{children}<Footer /></MotionProvider>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      </body>
    </html>
  );
}
