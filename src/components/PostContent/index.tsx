import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { IPostContent } from './types'
import { MarkdownContainer } from './styles'

export function PostContent({ content }: IPostContent) {
  return (
    <MarkdownContainer
      children={content}
      components={{
        code({ children, className, ...rest }) {
          const match = /language-(\w+)/.exec(className || '')

          if (!match) {
            return <code className={className} {...rest} />
          }

          return (
            <SyntaxHighlighter
              PreTag="div"
              style={dracula}
              language={match[1]}
              children={String(children).replace(/\n$/, '')}
            />
          )
        },
      }}
    />
  )
}
