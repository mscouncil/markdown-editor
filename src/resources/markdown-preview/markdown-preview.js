// import Remarkable from 'remarkable'

export default function markdownPreview(node, { value }){ 
  var mark = new Remarkable({ breaks: true, linkify: true })
    , md   = mark.render.bind(mark)
    , decode = d => d.replace(/\\r\\n/mg, '\n')

  once(node)
    ('.content', 1)
      .html(md(decode(value)))
}