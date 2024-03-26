import prisma from '@/lib/prisma'

export default async function Blog() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  })

  if (posts?.length > 0) {
    return (
      <main>
        <h1 className='font-bold'>Blog Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </main>
    )
  } else {
    return (
      <main>
        <h1 className='font-bold'>No Blog Posts</h1>
      </main>
    )
  }
}
