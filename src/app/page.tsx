import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1 className='text-white mb-4 font-bold text-4xl'>Zehra Türksoy</h1>
      <div className='flex flex-col gap-2'>
        <Link className='text-blue-500 text-lg w-fit' href={'/blog/add'}>
          - Add Blog Post
        </Link>
        <Link className='text-blue-500 text-lg w-fit' href={'/blog'}>
          - See All Blog Posts
        </Link>
      </div>
    </>
  )
}
