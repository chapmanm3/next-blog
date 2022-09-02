import type { NextPage } from 'next'
import { gql } from '@apollo/client'
import client from '../../apollo-client'

interface BlogPostProps {
  post: {}
}

const BlogPost: NextPage<BlogPostProps> = ({post}) => {

  return (
    <div>
      this is a post
    </div>
  )

}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query Uploads {
        allUploads {
          title
          id
        }
      }
    `
  })

  const paths = data.allUploads.map((upload) => {params: {id : upload.id}})

  return { paths, fallback: true}
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: gql`
      query Upload {
        upload(filter: {id: {eq: ${params.id}}}) {
          title
          url
        }
      }
    `
  })

  return { props: { data }}

}

export default BlogPost
