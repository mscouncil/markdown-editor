module.exports = function(data){ 
  var mark = new Remarkable({ breaks: true, linkify: true })
    , md   = mark.render.bind(mark)
    , host = this.host
    , muto = this.muto || (this.muto = new MutationObserver(ripple))
    , conf = { characterData: true, subtree: true }

  this.host.setAttribute('css', 'markdown-preview.css')
  if (!this.lastElementChild) return;
  this.lastElementChild.tagName != 'DIV'
    && this.appendChild(document.createElement('div'))
  this.lastElementChild.innerHTML = md(decode(this.host.innerHTML))
  muto.observe(host, conf)

  function decode(d) {
    return d.replace(/\\r\\n/mg, '\n')
  }
}