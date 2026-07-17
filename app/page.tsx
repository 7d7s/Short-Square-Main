import Home from "@/components/Home";
import AosInit from "@/components/AosInit";
import Head from "next/head";

export default function App() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "ShotSquare Studio",
    "url": "https://www.shotsquare.com/",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.shotsquare.com/gallery?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
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
      <Home />
    </>
  );
}
