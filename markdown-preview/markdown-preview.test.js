const { test } = require('tap')
    , { spawn } = require('spawn-client')

test('basic test', spawn('<markdown-preview id="el">', async () => {
  el.state = { value: `
# Cheatsheet

This is a markdown editor. Press Alt+P to see how this will render.

* Bullet points
* _Italic_ *text*
* __Bold__ **text**

1. Ordered
2. Lists

## Heading 2

A small place by the coast and [link example](https://www.google.com)
` }

  await el.render()

  same(el, `
    <markdown-preview id="el" stylesheet="2042137198">
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
  `)
}))