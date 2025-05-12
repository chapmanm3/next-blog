export type GetPostResponse = {
  items: Array<{
    metadata: {},
    sys: {},
    fields: {
      title: string,
      slug: string,
      publishedDate: string,
      content: string
    }
  }>
}

export type PostDetails = {
  title: string,
  slug: string,
  content: string,
}

const mapPostDetails = (postResponse: GetPostResponse): PostDetails => {
  const post = postResponse.items[0]
  return {
    title: post.fields.title,
    slug: post.fields.slug,
    content: post.fields.content
  }
}


export async function getPost(slug: string): Promise<PostDetails> {
  const data = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/entries?content_type=pageBlogPost&fields.slug[match]=${slug}`,
    {
      headers: {
        "Authorization": `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`
      }
    }
  )

  const post = await data.json()
  return mapPostDetails(post)
}
