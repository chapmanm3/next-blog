import styles from './BlogPost.module.css'
import BackButton from "../../../components/BackButton"
import { blogEntries } from '../blogEntries';
import { Metadata } from "next";

export async function generateStaticParams() {
  return blogEntries
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogEntries.find(p => p.slug === slug)
  const title = post?.title || "Blog Post"
  
  return {
    title: `${title} | Matt Chapman`,
    description: `Read about ${title.toLowerCase()} on Matt Chapman's blog.`,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { default: Post } = await import(`../../../../blog/${slug}.md`)

  return (
    <div className={styles.page}>
      <div className={styles.blogContainer}>
        <BackButton className={styles.link} text="Back to Blogs" />
        <div className={styles.content}>
          <Post />
        </div>
      </div>
    </div>
  )
}
