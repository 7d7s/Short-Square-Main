import BlogContent from "./content";
import { Metadata } from "next";
import Head from "next/head";
import blogData from "@/data/blog.json";

export const metadata: Metadata = {
    title: "Insights & Editorials | ShotSquare Studio Journal",
    description: "Industry insights, behind-the-scenes production breakdowns, and photography techniques from the creative directors at ShotSquare Studio.",
};

export default function BlogPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "ShotSquare Studio Journal",
        "description": "Industry insights, behind-the-scenes production breakdowns, and photography techniques from the creative directors at ShotSquare Studio.",
        "url": "https://www.shotsquare.com/blog",
        "publisher": {
            "@type": "Organization",
            "name": "ShotSquare Studio",
            "logo": {
                "@type": "ImageObject",
                "url": "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744790523/w2_r01a8b.png"
            }
        },
        "blogPost": blogData.articles.map(article => ({
            "@type": "BlogPosting",
            "headline": article.title,
            "url": `https://www.shotsquare.com/blog/${article.id}`,
            "image": article.coverImage,
            "datePublished": new Date(article.date).toISOString() || new Date().toISOString(),
            "author": {
                "@type": "Person",
                "name": article.author
            }
        }))
    };

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>
            <BlogContent />
        </>
    );
}
