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
  t.plan(4)

  const host = o('markdown-editor', 1).node()
  mde.call(host, { value: `# Some Heading` })

  t.ok(host.children.length == 2)
  t.ok(lo(host.children[0].nodeName) == 'textarea')
  t.ok(lo(host.children[1].nodeName) == 'markdown-preview')
  t.ok(host.children[0].value == '# Some Heading')

  o.html('')
  t.end()
})