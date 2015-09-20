module.exports = function markdownEditor(data){
  var self = sel(this).on('click', focus)
    , host = sel(this.host).attr('css', 'markdown-editor.css')
    , text = (data && data.text) || decode(attr(this.host, 'value'))
    , o = once(this)

  var editor = o('textarea', 1)
        .attr('contenteditable', '')
        .on('input', input)
        .on('paste', paste)
        .on('keyup', keyup)
    , preview = o('markdown-preview', 1)
        .html(text)
        .each(ripple.draw)

  editor.sel
    .html(text)
    .property('value', text)
    .call(set)

  function focus() {
    editor.sel.node().focus()
  }
  
  function keyup(d) {
    ;(d3.event.which == 80 && d3.event.altKey)
        && host.classed('preview', true)

    ;(d3.event.which == 27)
        && host.classed('preview', false)
  }

  function paste(){
    d3.event.preventDefault()
    var text = d3.event.clipboardData.getData('text/plain')
    document.execCommand("insertHTML", false, text)
  }

  function set(d) {
    host
      .property('value', encode(text))
      .attr('value', encode(text))
  }

  function decode(d) {
    return d.replace(/\\r\\n/mg, '\n')
  }

  function encode(d) {
    return d.replace(/(<br>|\n)/mg, '\\r\\n')
  }

  function input() {
    if (host.classed('preview')) return d3.event.preventDefault() 
    var value = editor.sel.property('value')
    data && (data.text = value)
    host
      .attr('value', encode(value))
      .attr('property', encode(value))
      
    preview.html(value)
  }
}