module.exports = function markdownPreview(data){ 
  var mark = new Remarkable({ breaks: true, linkify: true })
    , md   = mark.render.bind(mark)
    , host = this.host || this
    , muto = this.muto || (this.muto = new MutationObserver(ripple.draw))
    , conf = { characterData: true, subtree: true, childList: true }
    , kids = host.childNodes
    , html = ''

  host.setAttribute('css', 'markdown-preview.css')
  
  for (var i = 0; i < kids.length; i++)
    if (kids[i].nodeName != 'STYLE' && kids[i].nodeName != 'DIV')
      (html += kids[i].textContent) 

  ;(!this.lastElementChild || this.lastElementChild.tagName != 'DIV')
    && this.appendChild(document.createElement('div'))
  this.lastElementChild.innerHTML = md(decode(data || html))
  muto.observe(host, conf)

  function decode(d) {
    return d.replace(/\\r\\n/mg, '\n')
  }
}