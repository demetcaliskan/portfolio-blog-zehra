import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

// Optional fields in body: content
export async function POST(req) {
  const body = await req.json()
  const { title, slug, mdContent } = body
  console.log('wtf', body)
  const result = await prisma.post.create({
    data: {
      title: title,
      slug: slug,
      content: mdContent,
      author: { connect: { email: 'admin@mail.com' } },
      published: true,
    },
  })
  console.log('result', result)
  return NextResponse.json({ data: result })
}
