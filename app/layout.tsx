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
