import { compileMDX } from 'next-mdx-remote/rsc'

export default async function RemoteMdxPage() {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  const markdown = '' //fetch from api

  // Optionally provide a type for your frontmatter object
  const { content } = await compileMDX({
    source: markdown,
    options: { parseFrontmatter: true },
  })
  return <>{content}</>
}
