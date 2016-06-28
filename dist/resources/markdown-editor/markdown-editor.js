'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = markdownEditor;
function markdownEditor(state) {
  var decode = function decode(d) {
    return d.replace(/\\r\\n/mg, '\n');
  },
      encode = function encode(d) {
    return d.replace(/(<br>|\n)/mg, '\\r\\n');
  },
      focus = function focus(d) {
    return o('textarea').node().focus();
  },
      value = decode(defaults(state, 'value', '')),
      preview = defaults(state, 'preview', false),
      o = once(this);

  o.on('click', focus).classed('preview', preview);

  o('textarea', 1).property('value', value).on('input.md', input).on('paste.md', paste).on('keyup.md', keyup);

  o('markdown-preview', { value: value });

  function keyup(e) {
    if (e.key == 'p' && e.altKey) o.draw(state.preview = true);

    if (e.key == 'Escape') o.draw(state.preview = false);
  }

  function paste(e) {
    e.preventDefault();
    document.execCommand("insertHTML", false, e.clipboardData.getData('text/plain'));
  }

  function input(e) {
    if (state.preview) return e.preventDefault();
    state.value = this.value;
    o.draw();
  }
}