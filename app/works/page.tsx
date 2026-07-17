import ProjectsContent from './content';
import metadataConfig from '@/config/seo/works/config.json';
import { Metadata } from 'next';
import projectsData from '@/data/projects.json';

export const metadata: Metadata = {
  ...(metadataConfig as Metadata),
  alternates: {
    canonical: '/works',
  },
  openGraph: {
    ...metadataConfig.openGraph,
  },
  twitter: {
    ...metadataConfig.twitter,
  },
};

export default function ProjectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": "https://www.shotsquare.com/works#webpage",
        "url": "https://www.shotsquare.com/works",
        "name": "Our Portfolio — Commercial Photography, Fashion & Brand Campaigns | ShotSquare Studio",
        "description": "Explore the complete portfolio of ShotSquare Studio — featuring award-worthy commercial photography, high-fashion editorials, e-commerce catalogues, cinematic brand campaigns, corporate headshots, and premium product photography crafted for modern brands.",
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.shotsquare.com/#website"
        },
        "about": {
          "@type": "Organization",
          "@id": "https://www.shotsquare.com/#organization",
          "name": "ShotSquare Studio",
          "url": "https://www.shotsquare.com",
          "description": "ShotSquare Studio is a creative production company delivering commercial photography, videography, brand films, campaign production, and visual content for modern businesses and brands.",
          "sameAs": [
            "https://www.instagram.com/shotsquarestudio",
            "https://www.linkedin.com/company/shotsquarestudio"
          ]
        },
        "mainEntity": {
          "@type": "ItemList",
          "name": "ShotSquare Studio Portfolio",
          "description": "A curated collection of commercial photography, fashion editorials, brand campaigns, e-commerce catalogues, corporate headshots, and premium product photography.",
          "numberOfItems": projectsData.projects.length,
          "itemListElement": projectsData.projects.map((img: any, idx: number) => ({
            "@type": "ListItem",
            "position": idx + 1,
            "item": {
              "@type": "CreativeWork",
              "url": `https://www.shotsquare.com/works/${img.slug || idx}`,
              "name": img.title,
              "description": img.description || `${img.title} — ${img.category} photography by ShotSquare Studio`,
              "dateCreated": `${img.year}-01-01`,
              "genre": img.category,
              "creator": {
                "@type": "Organization",
                "@id": "https://www.shotsquare.com/#organization",
                "name": "ShotSquare Studio"
              },
              "provider": {
                "@type": "Organization",
                "@id": "https://www.shotsquare.com/#organization"
              },
              "image": {
                "@type": "ImageObject",
                "url": img.url,
                "contentUrl": img.url,
                "name": `${img.title} — ${img.category} photography by ShotSquare Studio`,
                "caption": img.description || `${img.title} — professional ${img.category.toLowerCase()} photography and creative production for modern brands.`
              }
            }
          }))
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.shotsquare.com/works#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.shotsquare.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Portfolio",
            "item": "https://www.shotsquare.com/works"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.shotsquare.com/works#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What types of photography does ShotSquare Studio specialize in?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ShotSquare Studio specializes in commercial photography, high-fashion editorials, e-commerce product catalogues, corporate headshots, brand campaign photography, and premium product photography for modern brands."
            }
          },
          {
            "@type": "Question",
            "name": "Can I hire ShotSquare Studio for a brand campaign?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. ShotSquare Studio delivers end-to-end campaign production — from creative direction and styling to photography, videography, and post-production — crafted to elevate your brand's visual identity."
            }
          },
          {
            "@type": "Question",
            "name": "Does ShotSquare Studio offer e-commerce photography?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. We produce clean, highly detailed e-commerce catalogue photography designed to highlight fit, texture, and color accuracy for online retailers and direct-to-consumer brands."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectsContent />
    </>
  );
}