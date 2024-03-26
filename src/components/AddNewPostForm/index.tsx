'use client'
import dynamic from 'next/dynamic'
import { Suspense, useState } from 'react'

const EditorComp = dynamic(() => import('@/components/Editor'), { ssr: false })

const AddNewPostForm = () => {
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [description, setDescription] = useState('')
  const [mdContent, setMdContent] = useState(``)

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    // TODO
    // You will implement this next ...
    try {
      const body = { title, slug, mdContent }
      console.log('annen ', body)
      await fetch('/api/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={submitData}>
      <h1>New Draft</h1>
      <input
        autoFocus
        onChange={(e) => setTitle(e.target.value)}
        placeholder='Title'
        type='text'
        value={title}
      />
      <input
        autoFocus
        onChange={(e) => setSlug(e.target.value)}
        placeholder='Slug'
        type='text'
        value={slug}
      />
      <textarea
        cols={50}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Description'
        rows={8}
        value={description}
      />
      <Suspense fallback={null}>
        <EditorComp markdown={mdContent} setMarkdown={setMdContent} />
      </Suspense>
      <input disabled={!mdContent || !title} type='submit' value='Create' />
      <style jsx>{`
        .page {
          background: var(--geist-background);
          padding: 3rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        input[type='text'],
        textarea {
          color: #000;
          width: 100%;
          padding: 0.5rem;
          margin: 0.5rem 0;
          border-radius: 0.25rem;
          border: 0.125rem solid rgba(0, 0, 0, 0.2);
        }

        input[type='submit'] {
          background: #ececec;
          color: #000;
          font-weight: 500;
          border: 0;
          padding: 1rem 2rem;
          margin-top: 12px;
        }

        .back {
          margin-left: 1rem;
        }
      `}</style>
    </form>
  )
}

export default AddNewPostForm
