import { DM_Sans } from "next/font/google";
import "./globals.css";
import metadataConfig from '@/config/seo/home/config.json';
import { Metadata } from 'next';
import Navbar from "@/components/header";
import Footer from "@/components/footer";
import Preloader from "@/components/common/Preloader";
import CookieConsent from "@/components/common/CookieConsent";
import CustomCursor from "@/components/common/CustomCursor";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...metadataConfig,
  metadataBase: new URL(metadataConfig.metadataBase as string),
  applicationName: 'ShotSquare Studio',
  authors: [{ name: 'ShotSquare Studio' }],
  generator: 'Next.js',
  keywords: ['Commercial Photography', 'Editorial Fashion', 'Brand Campaigns', 'Studio Rental', 'Product Photography', 'India', 'Production House'],
  referrer: 'origin-when-cross-origin',
  creator: 'ShotSquare Studio',
  publisher: 'ShotSquare Studio',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.shotsquare.com/#organization",
        "name": "ShotSquare Studio",
        "url": "https://www.shotsquare.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744790523/w2_r01a8b.png",
          "width": 1200,
          "height": 630
        },
        "sameAs": [
          "https://www.instagram.com/shotsquare/",
          "https://www.facebook.com/shotsquare/"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.shotsquare.com/#localbusiness",
        "name": "ShotSquare Studio",
        "image": "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744790523/w2_r01a8b.png",
        "telephone": "+918882758944",
        "email": "info@shotsquare.com",
        "url": "https://www.shotsquare.com/",
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "priceRange": "$$$"
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.shotsquare.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.shotsquare.com/"
          }
        ]
      }
    ]
  };

  return (
    <html lang="en-IN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`bg-black md:pt-7 md:px-7 pb-0 p-4 ${dmSans.variable} antialiased`}
      >
        <CustomCursor />
        <Preloader />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
