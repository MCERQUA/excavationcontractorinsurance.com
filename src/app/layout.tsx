import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import LenisProvider from "@/components/lenis-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://excavationcontractorinsurance.com"),
  title: {
    default: "Excavation Contractor Insurance | GL, Workers Comp & Equipment Coverage",
    template: "%s | Excavation Contractor Insurance",
  },
  description:
    "Specialized insurance for excavation contractors — general liability with XCU, pollution liability, workers comp, commercial auto, equipment coverage, and umbrella. Licensed in all 50 states. 15-minute quotes.",
  keywords: [
    "excavation contractor insurance",
    "excavation company insurance",
    "excavation general liability insurance",
    "excavation workers compensation",
    "heavy equipment insurance excavation",
    "trenching contractor insurance",
    "grading contractor insurance",
    "dirt work contractor insurance",
  ],
  alternates: { canonical: "https://excavationcontractorinsurance.com" },
  openGraph: {
    type: "website",
    url: "https://excavationcontractorinsurance.com",
    title: "Excavation Contractor Insurance | Contractors Choice Agency",
    description:
      "Insurance built for excavation contractors. GL with XCU, pollution liability, workers comp, equipment, auto, and umbrella. Licensed in all 50 states.",
    siteName: "Excavation Contractor Insurance",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Excavation Contractor Insurance" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Excavation Contractor Insurance | Contractors Choice Agency",
    description:
      "Insurance built for excavation contractors. GL with XCU, pollution, workers comp, equipment, auto, and umbrella.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "Contractors Choice Agency",
  description:
    "Specialized commercial insurance for excavation contractors and earthmoving operations.",
  url: "https://excavationcontractorinsurance.com",
  telephone: "+1-844-967-5247",
  email: "josh@contractorschoiceagency.com",
  founder: { "@type": "Person", name: "Josh Cotner" },
  foundingDate: "2005",
  identifier: { "@type": "PropertyValue", propertyID: "NPN", value: "8608479" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "12220 E Riggs Rd",
    addressLocality: "Chandler",
    addressRegion: "AZ",
    postalCode: "85249",
    addressCountry: "US",
  },
  areaServed: "US",
  knowsAbout: [
    "Excavation Contractor Insurance",
    "Contractors Pollution Liability",
    "Workers Compensation",
    "Commercial Auto Insurance",
    "Inland Marine Equipment Insurance",
    "Commercial Umbrella Insurance",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
