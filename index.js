var ripple = require('rijs')()  
  , file   = require('utilise.file')
  , fs     = require('fs')

ripple
  .resource(
      'markdown-editor'
    , require('./resources/markdown-editor')
    )
  .resource(
      'markdown-preview'
    , require('./resources/markdown-preview')
    )
  .resource(
      'markdown-editor.css'
    , file('./resources/markdown-editor.css')
    )
  .resource(
      'markdown-preview.css'
    , file('./resources/markdown-preview.css')
    )

module.exports = ripple