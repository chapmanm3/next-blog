export interface BlogEntry {
  slug: string
  title: string
  date: string
  author: string
  excerpt: string
  tags: string[]
  coverImage?: string
}

export const blogEntries: BlogEntry[] = [
  {
    slug: "whoAmI",
    title: "Who Am I",
    date: "2024-01-15",
    author: "Matt Chapman",
    excerpt: "Introduction to who I am, my background as a web developer, and what you can expect from this blog.",
    tags: ["personal", "introduction"],
    coverImage: "/blog-images/whoAmI.jpg"
  },
  {
    slug: "github-basics",
    title: "GitHub Basics",
    date: "2024-02-01",
    author: "Matt Chapman",
    excerpt: "Learn the essential GitHub concepts every developer needs to know, from repositories to pull requests.",
    tags: ["git", "github", "tutorial"],
    coverImage: "/blog-images/github-basics.jpg"
  },
  {
    slug: "terminal-setup",
    title: "Terminal Setup",
    date: "2024-02-15",
    author: "Matt Chapman",
    excerpt: "A guide to setting up your terminal for maximum productivity as a developer.",
    tags: ["terminal", "productivity", "tools"],
    coverImage: "/blog-images/terminal-setup.jpg"
  }
]
