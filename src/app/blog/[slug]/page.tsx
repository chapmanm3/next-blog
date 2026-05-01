import styles from './BlogPost.module.css'
import BackButton from "../../../components/BackButton"
import { blogEntries, BlogEntry } from '../blogEntries';
import { Metadata } from "next";

export async function generateStaticParams() {
  return blogEntries
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogEntries.find(p => p.slug === slug)

  if (!post) {
    return {
      title: "Post Not Found | Matt Chapman",
      description: "The requested blog post could not be found.",
    }
  }

  const postUrl = `${process.env.SITE_URL || 'http://localhost:3000'}/blog/${post.slug}`

  return {
    title: `${post.title} | Matt Chapman`,
    description: post.excerpt,
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: postUrl,
      siteName: 'Matt Chapman',
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: post.coverImage ? [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { default: Post } = await import(`../../../../blog/${slug}.md`)
  const post = blogEntries.find(p => p.slug === slug)
  const baseUrl = process.env.SITE_URL || 'http://localhost:3000'
  const postUrl = `${baseUrl}/blog/${slug}`

  const blogPostSchema = post ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "url": postUrl,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Person",
      "name": "Matt Chapman"
    },
    ...(post.coverImage && {
      "image": {
        "@type": "ImageObject",
        "url": post.coverImage,
        "width": 1200,
        "height": 630
      }
    }),
    "keywords": post.tags.join(", "),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    }
  } : null

  return (
    <>
      {blogPostSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
        />
      )}
      <div className={styles.page}>
        <div className={styles.blogContainer}>
          <BackButton className={styles.link} text="Back to Blogs" />
          <div className={styles.content}>
            <Post />
          </div>
        </div>
      </div>
    </>
  )
}
