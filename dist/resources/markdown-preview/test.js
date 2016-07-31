'use strict';

var _templateObject = _taggedTemplateLiteral(['\n    <markdown-preview>\n      <div class="content">\n        <h1>Cheatsheet</h1>\n        <p>This is a markdown editor. Press Alt+P to see how this will render.</p>\n        <ul>\n          <li>Bullet points</li>\n          <li><em>Italic</em> <em>text</em></li>\n          <li><strong>Bold</strong> <strong>text</strong></li>\n        </ul>\n        <ol>\n          <li>Ordered</li>\n          <li>Lists</li>\n        </ol>\n        <h2>Heading 2</h2>\n        <p>A small place by the coast and <a href="https://www.google.com">link example</a></p>\n      </div>\n    </markdown-preview>\n  '], ['\n    <markdown-preview>\n      <div class="content">\n        <h1>Cheatsheet</h1>\n        <p>This is a markdown editor. Press Alt+P to see how this will render.</p>\n        <ul>\n          <li>Bullet points</li>\n          <li><em>Italic</em> <em>text</em></li>\n          <li><strong>Bold</strong> <strong>text</strong></li>\n        </ul>\n        <ol>\n          <li>Ordered</li>\n          <li>Lists</li>\n        </ol>\n        <h2>Heading 2</h2>\n        <p>A small place by the coast and <a href="https://www.google.com">link example</a></p>\n      </div>\n    </markdown-preview>\n  ']);

require('utilise');

require('browserenv');

var _cssscope = require('cssscope');

var _cssscope2 = _interopRequireDefault(_cssscope);

var _markdownPreview = require('./markdown-preview');

var _markdownPreview2 = _interopRequireDefault(_markdownPreview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var style = window.getComputedStyle,
    o = once(document.body)('.container', 1, null, ':first-child'),
    test = require('tap').test;

once(document.head)('style', 1).html((0, _cssscope2.default)(file(__dirname + '/markdown-preview.css'), 'markdown-preview'));

test('basic output', function (t) {
  t.plan(1);

  var host = o('markdown-preview', 1).node();
  _markdownPreview2.default.call(host, { value: '\n# Cheatsheet\n\nThis is a markdown editor. Press Alt+P to see how this will render.\n\n* Bullet points\n* _Italic_ *text*\n* __Bold__ **text**\n\n1. Ordered\n2. Lists\n\n## Heading 2\n\nA small place by the coast and [link example](https://www.google.com)\n' });

  t.equal(stripws(host.outerHTML), stripws(_templateObject), 'basic structure');

  o.html('');
  t.end();
});