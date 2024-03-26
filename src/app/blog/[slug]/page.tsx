import { compileMDX } from 'next-mdx-remote/rsc'
import prisma from '@/lib/prisma'

export default async function RemoteMdxPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await prisma.post.findUnique({
    where: {
      slug: String(params.slug),
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  })

  // Optionally provide a type for your frontmatter object
  if (post) {
    const { content } = await compileMDX({
      source: post.content,
      options: { parseFrontmatter: true },
    })
    return <>{content}</>
  } else {
    return <>Nothing to see here.</>
  }
}
