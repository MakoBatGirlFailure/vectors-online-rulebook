import MarkdownIt from 'markdown-it'

const mdOptions = {
    html: true,
    breaks: true,
    linkify: true
}
const md = MarkdownIt(mdOptions)


export function renderMarkdown(content) {
    return md.render(content)
}