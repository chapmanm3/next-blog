type GetAllPostsResponse = {
  total: number;
  skip: number;
  limit: number;
  items: Array<{
    metadata: {},
    sys: {},
    fields: {
      title: string,
      shortDescription: string,
      slug: string,
      publishedDate: string,
      content: {}
    }
  }>
}

export type PostSummary = {
  title: string;
  slug: string;
  publishedDate: string;
}


const mapPosts = (postsResponse: GetAllPostsResponse): PostSummary[] => {
  const postSummaries = postsResponse.items.map(post => ({
    title: post.fields.title,
    slug: post.fields.slug,
    publishedDate: post.fields.publishedDate
  }))

  return postSummaries
}


export async function getAllPosts(): Promise<PostSummary[]> {
  const data = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?content_type=pageBlogPost`,
    {
      headers: {
        "Authorization": `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
      }
    }
  )
  const posts = await data.json()
  return mapPosts(posts)
}
