import { notFound } from "next/navigation";
import BlogArticleContent from "./content";
import blogData from "@/data/blog.json";
import { Metadata } from "next";
import Head from "next/head";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const article = blogData.articles.find((a) => a.id === resolvedParams.id);

    if (!article) return { title: "Article Not Found | ShotSquare" };

    return {
        title: `${article.title} | ShotSquare Journal`,
        description: article.excerpt,
        openGraph: {
            images: [article.coverImage],
        }
    };
}

export async function generateStaticParams() {
    return blogData.articles.map((article) => ({
        id: article.id,
    }));
}

export default async function BlogArticlePage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const article = blogData.articles.find((a) => a.id === resolvedParams.id);

    if (!article) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": article.title,
                "description": article.excerpt,
                "image": article.coverImage,
                "author": {
                    "@type": "Person",
                    "name": article.author
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "ShotSquare Photography",
                    "logo": {
                        "@type": "ImageObject",
                        "url": "https://res.cloudinary.com/ddgbehuxg/image/upload/v1744790523/w2_r01a8b.png"
                    }
                },
                "datePublished": new Date(article.date).toISOString() || new Date().toISOString()
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.shotsquare.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Blog",
                        "item": "https://www.shotsquare.com/blog"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": article.title,
                        "item": `https://www.shotsquare.com/blog/${article.id}`
                    }
                ]
            }
        ]
    };

    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>
            <BlogArticleContent article={article} />
        </>
    );
}
