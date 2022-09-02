

interface Blog {
  title: string
}

interface BlogListProps {
  blogs: Array<Blog>
}

const BlogList = ({ blogs }: BlogListProps) => {

  return (
    <>
      {blogs.map((blog, idx) => <div key={idx}>{blog.title}</div>)}
    </>
  )
}

export default BlogList
