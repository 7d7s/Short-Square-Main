import { DM_Sans } from "next/font/google";
import "./globals.css";
import metadataConfig from '@/config/seo/home/config.json';
import { Metadata } from 'next';
import Navbar from "@/components/header";
import Footer from "@/components/footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  ...metadataConfig,
  metadataBase: new URL(metadataConfig.metadataBase as string),
  applicationName: 'ShortSquare Photography',
  authors: [{ name: 'ShortSquare Photography' }],
  generator: 'Next.js',
  keywords: ['Photography', 'Wedding Photography', 'Portrait', 'Fashion Photography', 'Event Photography', 'India', 'Studio Rental'],
  referrer: 'origin-when-cross-origin',
  creator: 'ShortSquare',
  publisher: 'ShortSquare',
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
  return (
    <html lang="en">
      <body
        className={`md:pt-7 md:px-7 pb-0 p-4 ${dmSans.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
