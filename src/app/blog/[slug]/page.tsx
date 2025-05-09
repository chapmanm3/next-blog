import { getAllPosts } from "../../../queries/getAllPosts"
import { getPost } from "../../../queries/getPost"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import styles from './BlogPost.module.css'
import Link from "next/link"


export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map(post => ({
    slug: post.slug
  }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)

  return (
    <div className={styles.page}>
      <Link className={styles.link} href="./">Back to Blogs</Link>
      <h3>{post.title}</h3>
      <div className={styles.content}>
        {documentToReactComponents(post.content as any)}
      </div>
    </div>
  )
}
