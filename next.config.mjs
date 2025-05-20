import createMDX from '@next/mdx'

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"]
}

const withMdx = createMDX({
  extension: /\.(md|mdx)$/,
})

export default withMdx(nextConfig)
