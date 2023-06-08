# React Markdown Renderer

This is a simple React application that demonstrates the usage of the `react-markdown` library to render Markdown content in a React component.

## Features

- Renders headings of various levels using the `ReactMarkdown` component.
- Renders unordered lists and ordered lists.
- Renders bold and italic text.
- Renders links to external websites.
- Renders images from URLs.
- Renders strikethrough text using the `remark-gfm` plugin.
- Renders raw HTML using the `rehype-raw` plugin.

## Prerequisites

- Node.js
- npm

## Getting Started

1. Clone the repository:

```shell
git clone https://github.com/your-username/react-markdown-renderer.git
```

2. Install the dependencies:
- cd react-markdown
- npm i

3. Start the development server:
- npm start

4. Open your web browser and visit http://localhost:3000 to see the rendered Markdown content.

## Usage

The main logic of rendering Markdown content is implemented in the App component. The ReactMarkdown component is used to render different elements such as headings, lists, text styling, links, images, and more.

Feel free to modify the input variable in the App component to customize the Markdown content that is rendered.

