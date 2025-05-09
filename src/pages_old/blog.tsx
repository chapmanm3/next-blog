import styles from '../styles/Blog.module.scss'
import Head from 'next/head'
import { getAllPosts } from '../queries/getAllPosts'

export default function Blog() {
  const allPosts = getAllPosts().then((resp) => console.log(resp.data))

  return (
    <div>
      <Head>
        <title>A blog about what I&apos;m currently building</title>
        <meta name="Blog" content="My blog for writting about what I'm working on and other opinions"/>
      </Head>
    </div>
  )
}
