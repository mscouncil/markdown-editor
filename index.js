var file   = require('utilise.file')

module.exports = [
  { 
    name: 'markdown-editor'
  , body: require('./resources/markdown-editor')
  }
, { 
    name: 'markdown-preview'
  , body: require('./resources/markdown-preview')
  }
, { 
    name: 'markdown-editor.css'
  , body: file(__dirname + '/resources/markdown-editor.css')
  }
, {
    name: 'markdown-preview.css'
  , body: file(__dirname + '/resources/markdown-preview.css')
  }
]