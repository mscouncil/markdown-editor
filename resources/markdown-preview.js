module.exports = function(data){ 
  var mark = new Remarkable({ breaks: true, linkify: true })
    , md   = mark.render.bind(mark)
    , host = this.host || this
    , muto = this.muto || (this.muto = new MutationObserver(ripple.draw))
    , conf = { characterData: true, subtree: true }
    , text = host.innerHTML || data

  host.setAttribute('css', 'markdown-preview.css')
  if (!text) return;
  ;(!this.lastElementChild || this.lastElementChild.tagName != 'DIV')
    && this.appendChild(document.createElement('div'))
  this.lastElementChild.innerHTML = md(decode(text))
  muto.observe(host, conf)

  function decode(d) {
    return d.replace(/\\r\\n/mg, '\n')
  }
}