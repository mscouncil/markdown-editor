import 'utilise'
import 'browserenv'
import scope from 'cssscope'
import mde from './markdown-editor'

const style = window.getComputedStyle
    , o = once(document.body)('.container', 1, null, ':first-child')
    , test = require('tap').test

once(document.head)
  ('style', 1)
    .html(scope(file(__dirname + '/markdown-editor.css'), 'markdown-editor'))

test('basic output', t => {
  t.plan(1)

  const host = o('markdown-editor', 1).node()
  mde.call(host, { value: `# Some Heading` })

  t.equal(stripws(host.outerHTML), stripws`
    <markdown-editor>
      <textarea></textarea>
      <markdown-preview></markdown-preview>
    </markdown-editor>
  `, 'basic structure')

  o.html('')
  t.end()
})