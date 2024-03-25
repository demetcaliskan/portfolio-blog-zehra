import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const EditorComp = dynamic(() => import('@/components/Editor'), { ssr: false })

export default function AddBlogPost() {
  return (
    <Suspense fallback={null}>
      <EditorComp />
    </Suspense>
  )
}
