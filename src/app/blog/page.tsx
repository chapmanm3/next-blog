import { Metadata } from "next";
import Link from "next/link";
import styles from "./Blog.module.css"
import { blogEntries } from "./blogEntries";

export const metadata: Metadata = {
  title: "Blog | Matt Chapman",
  description: "Thoughts on web development, technology, and what I'm building."
}

export default async function BlogPage() {
  const posts = blogEntries

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Blog</h1>
        <p>Thoughts on web development, technology, and what I&apos;m building.</p>
      </header>
      <div className={styles.postList}>
        {posts.map(post => (
          <article className={styles.postCard} key={post.slug}>
            <Link className={styles.link} href={`/blog/${post.slug}`}>{post.title}</Link>
            <p className={styles.excerpt}>Read more about {post.title.toLowerCase()}.</p>
          </article>
        ))}
      </div>
    </div>
  )
}
