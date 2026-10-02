import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Instrument_Sans } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { SHOP } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument" });

/** CONFIRM: no domain yet. Swap in the real one before launch. */
const SITE_URL = "https://yankeepedlarsshoppe.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SHOP.name} | Used Furniture & Antiques in Essex Junction, VT`,
    template: `%s | ${SHOP.name}`,
  },
  description: `Quality used furniture, antiques and vintage finds at ${SHOP.address}. Family run since ${SHOP.founded}. Free local delivery, and we pay cash for furniture. Call or text ${SHOP.phone}.`,
  keywords: [
    "used furniture Essex Junction",
    "antique store Essex Junction VT",
    "antiques Chittenden County",
    "vintage furniture Burlington VT",
    "estate cleanout Vermont cash for furniture",
  ],
  openGraph: {
    type: "website",
    siteName: SHOP.name,
    url: SITE_URL,
    title: `${SHOP.name} | Used Furniture & Antiques, Essex Junction`,
    description: "Fine used furniture, antiques and vintage finds on River Road since 2004, from a family picking since 1982.",
    images: [{ url: "/images/shop/beam-room.webp", width: 1050, height: 1400 }],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#fbfaf6",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["AntiqueStore", "FurnitureStore"],
  name: SHOP.name,
  url: SITE_URL,
  telephone: SHOP.phone,
  image: `${SITE_URL}/images/shop/beam-room.webp`,
  foundingDate: String(SHOP.founded),
  priceRange: "$",
  address: {
    "@type": "PostalAddress",
    streetAddress: SHOP.street,
    addressLocality: SHOP.city,
    addressRegion: SHOP.state,
    postalCode: SHOP.zip,
    addressCountry: "US",
  },
  openingHours: SHOP.openingHours,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: SHOP.rating,
    reviewCount: SHOP.reviewCount,
  },
  sameAs: [SHOP.facebookUrl, SHOP.instagramUrl],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cormorant.variable} ${instrument.variable}`}>
      <body className="flex min-h-dvh flex-col pb-16 md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-paper focus:px-4 focus:py-2 focus:font-semibold"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" className="grow">
          {children}
        </main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
