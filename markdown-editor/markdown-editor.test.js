const { test } = require('tap')
    , { spawn } = require('spawn-client')

test('basic test', spawn('<markdown-editor id="el">', async () => {
  el.state = { value: '# Some Heading' }
  await el.render()

  same(el, `
    <markdown-editor id="el" stylesheet="3209186252">
      <div contenteditable="true" class="editor"># Some Heading</div>
      <markdown-preview></markdown-preview>
    </markdown-editor>
  `)
}))