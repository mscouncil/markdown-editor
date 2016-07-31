'use strict';

require('utilise');

require('browserenv');

var _cssscope = require('cssscope');

var _cssscope2 = _interopRequireDefault(_cssscope);

var _markdownEditor = require('./markdown-editor');

var _markdownEditor2 = _interopRequireDefault(_markdownEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var style = window.getComputedStyle,
    o = once(document.body)('.container', 1, null, ':first-child'),
    test = require('tap').test;

once(document.head)('style', 1).html((0, _cssscope2.default)(file(__dirname + '/markdown-editor.css'), 'markdown-editor'));

test('basic output', function (t) {
  t.plan(4);

  var host = o('markdown-editor', 1).node();
  _markdownEditor2.default.call(host, { value: '# Some Heading' });

  t.ok(host.children.length == 2);
  t.ok(lo(host.children[0].nodeName) == 'textarea');
  t.ok(lo(host.children[1].nodeName) == 'markdown-preview');
  t.ok(host.children[0].value == '# Some Heading');

  o.html('');
  t.end();
});