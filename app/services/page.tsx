import ServicesPage from "@/components/servicesPage";
import AosInit from "@/components/AosInit";
import Head from "next/head";

export const metadata = {
  title: "Production Services | ShotSquare Studio",
  description: "Comprehensive production services by ShotSquare Studio. From art direction and set design to high-end retouching and commercial photography execution.",
};

export default function Services() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Production Services | ShotSquare Studio",
    "url": "https://www.shotsquare.com/services",
    "description": metadata.description,
  };

  return (
    <>
      <AosInit />
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <ServicesPage />
    </>
  );
}
