'use client'
import '@mdxeditor/editor/style.css'

import {
  MDXEditor,
  MDXEditorMethods,
  headingsPlugin,
  imagePlugin,
  BoldItalicUnderlineToggles,
  toolbarPlugin,
  UndoRedo,
  BlockTypeSelect,
  CreateLink,
  InsertImage,
  ListsToggle,
  listsPlugin,
  linkDialogPlugin,
  InsertTable,
  tablePlugin,
} from '@mdxeditor/editor'
import { FC } from 'react'

interface EditorProps {
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>
  markdown: string
  setMarkdown: (md: string) => void
}

/**
 * Extend this Component further with the necessary plugins or props you need.
 * proxying the ref is necessary. Next.js dynamically imported components don't support refs.
 */
const Editor: FC<EditorProps> = ({ editorRef, markdown, setMarkdown }) => {
  return (
    <MDXEditor
      ref={editorRef}
      markdown={markdown}
      className='w-full min-h-[450px] bg-white'
      onChange={(e) => setMarkdown(e)}
      plugins={[
        headingsPlugin(),
        linkDialogPlugin(),
        tablePlugin(),
        imagePlugin(),
        listsPlugin(),
        toolbarPlugin({
          toolbarContents: () => (
            <div className='flex flex-row w-full '>
              <BlockTypeSelect />
              <UndoRedo />
              <BoldItalicUnderlineToggles />
              <ListsToggle />
              <InsertTable />
              <CreateLink />
              <InsertImage />
            </div>
          ),
        }),
      ]}
    />
  )
}

export default Editor
