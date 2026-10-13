import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL("https://vsmevents.com"),
  title: {
    default: "VSM Events | Luxury Wedding Planner & Event Decor in Chittoor, Tirupati, Vellore & Bengaluru",
    template: "%s | VSM Events",
  },
  description:
    "With 15+ years of experience and 2,000+ celebrated events, VSM Events is South India's premier luxury wedding and event planning team. Specializing in grand mandaps, bespoke stage decorations, Haldi, receptions, and birthday galas across Chittoor (CTR), Tirupati (TPT), Vellore (VLR), and Bengaluru (BLR).",
  keywords: [
    "Wedding planners in Chittoor",
    "Wedding decorators in Tirupati",
    "Event planners in Vellore",
    "Luxury wedding decoration in Bengaluru",
    "Birthday party decorators near me",
    "Mandap decoration Chittoor",
    "Reception decor Tirupati",
    "Haldi decoration Vellore",
    "VSM Events",
  ],
  authors: [{ name: "VSM Events" }],
  creator: "VSM Events",
  publisher: "VSM Events",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vsmevents.com",
    siteName: "VSM Events",
    title: "VSM Events | Creating Unforgettable Celebrations",
    description:
      "Transforming special moments into extraordinary memories. 15+ Years Experience • 2,000+ Celebrations • Serving Chittoor, Tirupati, Vellore & Bengaluru.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "VSM Events Luxury Wedding Planning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VSM Events | Luxury Wedding & Event Planning",
    description: "Creating unforgettable celebrations across Chittoor, Tirupati, Vellore & Bengaluru.",
    images: ["https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org EventPlanner / LocalBusiness Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventPlanner",
    name: siteConfig.name,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    url: "https://vsmevents.com",
    telephone: siteConfig.contact.primaryPhone,
    priceRange: "₹₹₹ - Luxury",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: "Chittoor",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "13.2172",
      longitude: "79.1003",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "21:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Chittoor" },
      { "@type": "City", name: "Tirupati" },
      { "@type": "City", name: "Vellore" },
      { "@type": "City", name: "Bengaluru" },
    ],
    description:
      "VSM Events is a premier luxury event planning and wedding decoration company with 15+ years experience and 2,000+ completed events across Chittoor, Tirupati, Vellore, and Bengaluru.",
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-ivory text-obsidian antialiased selection:bg-burgundy selection:text-champagne">
        {/* Subtle Luxury Film Grain */}
        <div className="luxury-noise" />

        {/* Global Floating Island Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow w-full">{children}</main>

        {/* Floating WhatsApp and Quick Enquiry Drawer */}
        <FloatingWhatsApp />

        {/* Editorial Footer */}
        <Footer />
      </body>
    </html>
  );
}
