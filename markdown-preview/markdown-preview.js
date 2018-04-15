const styles = require('./markdown-preview.css.js')
    , define = require('@compone/define')
    , style  = require('@compone/style')
    , Remarkable = require('remarkable')
    , once = require('utilise/once')
    
module.exports = define('markdown-preview', function markdownPreview(node, { value }){ 
  style(node, styles)
  const mark = new Remarkable({ breaks: true, linkify: true })
      , md   = mark.render.bind(mark)
      , decode = d => d.replace(/\\r\\n/mg, '\n')

  once(node)
    ('.content', 1)
      .html(md(decode(value)))
})