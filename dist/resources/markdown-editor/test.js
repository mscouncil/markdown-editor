'use strict';

var _templateObject = _taggedTemplateLiteral(['\n    <markdown-editor>\n      <textarea></textarea>\n      <markdown-preview></markdown-preview>\n    </markdown-editor>\n  '], ['\n    <markdown-editor>\n      <textarea></textarea>\n      <markdown-preview></markdown-preview>\n    </markdown-editor>\n  ']);

require('utilise');

require('browserenv');

var _cssscope = require('cssscope');

var _cssscope2 = _interopRequireDefault(_cssscope);

var _markdownEditor = require('./markdown-editor');

var _markdownEditor2 = _interopRequireDefault(_markdownEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var style = window.getComputedStyle,
    o = once(document.body)('.container', 1, null, ':first-child'),
    test = require('tap').test;

once(document.head)('style', 1).html((0, _cssscope2.default)(file(__dirname + '/markdown-editor.css'), 'markdown-editor'));

test('basic output', function (t) {
  t.plan(1);

  var host = o('markdown-editor', 1).node();
  _markdownEditor2.default.call(host, { value: '# Some Heading' });

  t.equal(stripws(host.outerHTML), stripws(_templateObject), 'basic structure');

  o.html('');
  t.end();
});