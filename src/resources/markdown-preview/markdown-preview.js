export default function markdownPreview({ value }){ 
  var mark = new Remarkable({ breaks: true, linkify: true })
    , md   = mark.render.bind(mark)
    , decode = d => d.replace(/\\r\\n/mg, '\n')

  once(this)
    ('.content', 1)
      .html(md(decode(value)))
}