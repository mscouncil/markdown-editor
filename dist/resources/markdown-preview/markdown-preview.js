'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = markdownPreview;

var _remarkable = require('remarkable');

var _remarkable2 = _interopRequireDefault(_remarkable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function markdownPreview(_ref) {
  var value = _ref.value;

  var mark = new _remarkable2.default({ breaks: true, linkify: true }),
      md = mark.render.bind(mark),
      decode = function decode(d) {
    return d.replace(/\\r\\n/mg, '\n');
  };

  once(this)('.content', 1).html(md(decode(value)));
}