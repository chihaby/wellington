import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

import Script from "next/script";
// import { Geist, Geist_Mono } from "next/font/google";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  metadataBase: new URL("https://wellingtoncma.com"),
  title: {
    default:
      "Trusted property management company with 15 years of service in the Bay Area. We focus on simplifying the rental experience for owners and tenants alike, ensuring every property is well-maintained, efficiently managed, and consistently profitable. From tenant screening to rent collection, our dedicated team handles every detail so you can enjoy peace of mind and maximize your investment.",
    template: "%s | Wellington CMA",
  },
  description:
  "Your greater Bay Area asset management company. Providing parking management services, special events parking, and property management services. Proudly serving our community since 2014.", 
  keywords: ["asset management company", "Oakland parking management company", "East Bay commercial parking management"],
  authors: [{ name: "Wellington CMA" }],
  creator: "Wellington CMA",
  publisher: "Wellington CMA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  // verification: {
  //   google: "your-google-site-verification",
  //   yandex: "your-yandex-verification",
  //   yahoo: "your-yahoo-verification",
  // },
  alternates: {
    canonical: "https://wellingtoncma.com", // 👈 canonical URL
  },
};

function LocalBusinessSchema() {
  const structuredData = {
    "@context": "https://wellingtoncma.com",
    "@type": "LocalBusiness",
    "@id": "https://wellingtoncma.com/#organization",
    name: "Wellington CMA",
    url: "https://wellingtoncma.com",
    logo: "https://wellingtoncma.com/logo.png",
    image: "https://wellingtoncma.com/og-image.jpg",
    description:
      "East Bay commercial parking management",
    priceRange: "$$",
    telephone: "(510) 874-7808",
    email: "info@wellingtoncma.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bay Area",
      addressRegion: "CA",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "37.7749",
      longitude: "-122.4194",
    },
    openingHours: "Mo-Fr 09:00-17:00",
    areaServed: {
      "@type": "State",
      name: "California",
    },
    serviceType: ["Asset Management"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <LocalBusinessSchema />
      </head>
      <body>
        <header>
          <Link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
            rel="stylesheet"
          />
        </header>
        {children}
        <Script
          src="https://www.google.com/recaptcha/api.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
