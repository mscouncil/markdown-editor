var app      = require('express')()
  , static   = require('serve-static')(__dirname+'/../node_modules/')
  , server   = require('http').createServer(app)
  , ripple   = require('ripple')(server, app, { client: false })
  , markdown = require('../')
  
ripple
  .use(markdown)
  .resource('markdown-data', { text: "" } )

server.listen(4000)

app
  .use(static)
  .get('/', function(req, res){
    res.render(__dirname+'/views/index.jade')
  })