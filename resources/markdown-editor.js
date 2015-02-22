module.exports = function(data){
  var self = d3.select(this)
    , host = d3.select(this.host).attr('css', 'markdown-editor.css')
    , html = (data && data.text) || decode(attr(this.host, 'value'))
  
  var editor = once(self, 'textarea')
        .attr('contenteditable', '')
        .on('input', input)
        .on('paste', paste)
    , preview = once(self, 'markdown-preview')
        .each(ripple)

  editor.in.html(html).call(set)
  preview.in.html(html)

  d3.select('body')
    .on('keyup.markdown', function(d) {
      ;(d3.event.which == 80 && d3.event.altKey)
          && host.classed('preview', true)

      ;(d3.event.which == 27)
          && host.classed('preview', false)
    })

  function paste(){
    d3.event.preventDefault()
    var text = d3.event.clipboardData.getData('text/plain')
    document.execCommand("insertHTML", false, text)
  }

  function set(d) {
    attr(host, 'value', encode(html))
  }

  function decode(d) {
    return d.replace(/\\r\\n/mg, '\n')
  }

  function encode(d) {
    return d.replace(/(<br>|\n)/mg, '\\r\\n')
  }

  function input() {
    if (host.classed('preview')) return d3.event.preventDefault() 
    var value = editor.property('value')
    data && (data.text = value)
    attr(host, 'value', encode(value))
    preview.html(value)
  }
}