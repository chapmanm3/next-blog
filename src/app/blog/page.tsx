import { Metadata } from "next";
import Link from "next/link";

import styles from "./Blog.module.css"
import { blogEntries } from "./blogEntries";

export const metadata: Metadata = {
  title: "A blog about what I am currently building",
  description: "My blog for writting about what I am working on and other opinions"
}

export default async function BlogPage() {
  const posts = blogEntries

  return (
    <div className={styles.page}>
      <h3 className={styles.titleText}>Blog Posts</h3>
      {posts.map(post => (
        <div className={styles.postWrapper} key={post.slug}>
          <Link className={styles.link} href={`/blog/${post.slug}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  )
}
