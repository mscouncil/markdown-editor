const styles   = require('./markdown-editor.css.js')
    , defaults = require('utilise/defaults')
    , define   = require('@compone/define')
    , style    = require('@compone/style')
    , once     = require('utilise/once')
    
module.exports = define('markdown-editor', function markdownEditor(node, state){ 
  style(node, styles)
  const decode  = d => d.replace(/\\r\\n/mg, '\n')
      , encode  = d => d.replace(/(<br>|\n)/mg, '\\r\\n')
      , focus   = d => o('.editor').node().focus()
      , value   = decode(defaults(state, 'value', state.default || ''))
      , preview = defaults(state, 'preview', false)
      , o = once(node)
  
  o.on('click.focus', focus)
    .classed('preview', preview)

  o('.editor[contenteditable="true"]', 1)
    .text(value)
    .on('input.md', input)
    .on('paste.md', paste)
    .on('keyup.md', keyup)

  o('markdown-preview', { value })

  function keyup(e) {
    if (e.key == 'p' && e.altKey) 
      o.draw(state.preview = true)

    if (e.key == 'Escape') 
      o.draw(state.preview = false)
  }

  function paste(e){
    e.preventDefault()
    document.execCommand("insertHTML", false, e.clipboardData.getData('text/plain'))
  }

  function input(e) {
    if (state.preview) return e.preventDefault() 
    state.value = this.textContent
    o.draw()   
  }
})