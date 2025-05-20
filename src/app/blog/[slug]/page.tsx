import styles from './BlogPost.module.css'
import BackButton from "../../../components/BackButton"
import { blogEntries } from '../blogEntries';

export async function generateStaticParams() {
  return blogEntries
}

export const dynamicParams = false;

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { default: Post } = await import(`/blog/${slug}.md`)

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
