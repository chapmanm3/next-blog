import type { NextPage } from 'next'
import styles from '../styles/Blog.module.scss'
import Head from 'next/head'


const Blog: NextPage = () => {
  return (
    <div>
      <Head>
        <title>A blog about what I&apos;m currently building</title>
        <meta name="Blog" content="My blog for writting about what I'm working on and other opinions"/>
      </Head>
    </div>
  )
}

export default Blog
