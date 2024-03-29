import {unified} from 'unified'
import remarkParse from 'remark-parse'
import remarkFootnotes from 'remark-footnotes'
import remarkRehype from 'remark-rehype'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
  .use(remarkParse)
  .use(remarkFootnotes, {inlineNotes: true})
  .use(remarkRehype, {allowDangerousHtml: true})
  .use(rehypeFormat)
  .use(rehypeStringify, {allowDangerousHtml: true})
  .process(markdown)
  return result.toString()
}
