import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm";
import rehypeRaw from 'rehype-raw';

export default function App() {

  const input = `<div> Some *emphasis* and <strong>strong</strong>! </div>`

  return (
    <div>
      <ReactMarkdown># Heading1 </ReactMarkdown>
      <ReactMarkdown>## Heading2 </ReactMarkdown>
      <ReactMarkdown>### Heading3 </ReactMarkdown>
      <ReactMarkdown>#### Heading4 </ReactMarkdown>
      <ReactMarkdown>##### Heading5 </ReactMarkdown>
      <ReactMarkdown>###### Heading6 </ReactMarkdown>

      <ReactMarkdown>- Unordered List</ReactMarkdown>
      <ReactMarkdown>- Apple</ReactMarkdown>
      <ReactMarkdown>- Eggs</ReactMarkdown>
      <ReactMarkdown>- Bread</ReactMarkdown>

      <ReactMarkdown>1. Ordered List</ReactMarkdown>
      <ReactMarkdown>2. Apple</ReactMarkdown>
      <ReactMarkdown>3. Eggs</ReactMarkdown>
      <ReactMarkdown>4. Bread</ReactMarkdown>
      <ReactMarkdown>**Bold Text**</ReactMarkdown>

      <ReactMarkdown>*Italic Text*</ReactMarkdown>

      <ReactMarkdown>[Airplane's Website](https://www.airplane.dev/)</ReactMarkdown>

      <ReactMarkdown> ![Stock Image](https://i.imgur.com/zOGQAQm.jpg)</ReactMarkdown>

      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        ~~Strikethrough~~
      </ReactMarkdown>

      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={input} />

    </div>
  )
}
