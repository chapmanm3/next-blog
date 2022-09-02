import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { gql } from '@apollo/client'
import client from '../apollo-client'
import BlogList from '../components/Blog/BlogList'
import styles from '../styles/Blog.module.scss'

interface Blog {
  title: string
}

const Blog: NextPage<{blogs: Blog[]}> = ({blogs}) => {
  return (
    <div className={styles.page}>
      <Head>
        <title>Matt Chapman Blog Stuff</title>
        <meta name="description" content="An assortment of blogs about what I am working on" />
      </Head>
      <BlogList blogs={blogs} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query Uploads {
        allUploads {
          title
        }
      }
    `
  })

  return {
    props: {
      blogs: data.allUploads
    }
  }
}

export default Blog
