import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import remarkGfm from "remark-gfm";

export default function App() {

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

    </div>
  )
}
