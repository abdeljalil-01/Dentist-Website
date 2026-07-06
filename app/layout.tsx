import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const siteUrl = "https://lumine-dental-studio.example.com";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Lumine Dental Studio | Healthy Smiles. Exceptional Care.",
    template: "%s | Lumine Dental Studio"
  },
  description:
    "A boutique dental studio offering cosmetic dentistry, implants, emergency care, pediatric dentistry, whitening, and digital smile design.",
  keywords: [
    "Lumine Dental Studio",
    "boutique dental studio",
    "cosmetic dentistry",
    "dental implants",
    "emergency dentist",
    "teeth whitening"
  ],
  openGraph: {
    title: "Lumine Dental Studio",
    description: "Healthy Smiles. Exceptional Care.",
    url: siteUrl,
    siteName: "Lumine Dental Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Lumine Dental Studio"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Lumine Dental Studio",
    description: "Healthy Smiles. Exceptional Care.",
    images: ["/og-image.png"]
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    apple: "/apple-touch-icon.png"
  },
  manifest: "/site.webmanifest"
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Lumine Dental Studio",
  image: `${siteUrl}/lumine-logo.png`,
  url: siteUrl,
  telephone: "+1-415-555-0198",
  email: "hello@luminedental.studio",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1288 Meridian Avenue",
    addressLocality: "San Francisco",
    addressRegion: "CA",
    postalCode: "94109",
    addressCountry: "US"
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "14:00"
    }
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "1000"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
