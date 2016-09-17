import 'utilise'
import 'browserenv'
import scope from 'cssscope'
import mdp from './markdown-preview'

const style = window.getComputedStyle
    , o = once(document.body)('.container', 1, null, ':first-child')
    , test = require('tap').test

once(document.head)
  ('style', 1)
    .html(scope(file(__dirname + '/markdown-preview.css'), 'markdown-preview'))

test('basic output', t => {
  t.plan(1)

  const host = o('markdown-preview', 1).node()
  mdp(host, { value: `
# Cheatsheet

This is a markdown editor. Press Alt+P to see how this will render.

* Bullet points
* _Italic_ *text*
* __Bold__ **text**

1. Ordered
2. Lists

## Heading 2

A small place by the coast and [link example](https://www.google.com)
` })

  t.equal(stripws(host.outerHTML), stripws`
    <markdown-preview>
      <div class="content">
        <h1>Cheatsheet</h1>
        <p>This is a markdown editor. Press Alt+P to see how this will render.</p>
        <ul>
          <li>Bullet points</li>
          <li><em>Italic</em> <em>text</em></li>
          <li><strong>Bold</strong> <strong>text</strong></li>
        </ul>
        <ol>
          <li>Ordered</li>
          <li>Lists</li>
        </ol>
        <h2>Heading 2</h2>
        <p>A small place by the coast and <a href="https://www.google.com">link example</a></p>
      </div>
    </markdown-preview>
  `, 'basic structure')

  o.html('')
  t.end()
})