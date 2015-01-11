var ripple = require('ripple')()
  , fs     = require('fs')

ripple
  .resource(
      'markdown-editor'
    , require('./resources/markdown-editor')
    , { extends: 'input' }
    )
  .resource(
      'markdown-preview'
    , require('./resources/markdown-preview')
    )
  .resource(
      'markdown-editor.css'
    , file('./markdown-editor.css')
    )
  .resource(
      'markdown-preview.css'
    , file('./markdown-preview.css')
    )

module.exports = ripple

function file(name){
  return fs.readFileSync(__dirname + '/resources/'+name, {encoding:'utf8'})
}