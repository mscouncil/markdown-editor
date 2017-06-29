'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = markdownPreview;
// import Remarkable from 'remarkable'

function markdownPreview(node, _ref) {
  var value = _ref.value;

  var mark = new Remarkable({ breaks: true, linkify: true }),
      md = mark.render.bind(mark),
      decode = function decode(d) {
    return d.replace(/\\r\\n/mg, '\n');
  };

  once(node)('.content', 1).html(md(decode(value)));
}