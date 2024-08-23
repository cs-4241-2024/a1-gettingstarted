const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/indexScript.js':
      sendFile( response, 'indexScript.js' )
      break
    case '/indexCss.css':
      sendFile( response, 'indexCss.css' )
      break
    case '/a-star.png':
      sendFile( response, 'a-star.png' )
      break
    case '/arista.png':
      sendFile( response, 'arista.png' )
      break
    case '/ibuki.jpg':
      sendFile( response, 'ibuki.jpg' )
      break
    case '/singapore.png':
      sendFile( response, 'singapore.png' )
      break
    case '/usa.png':
      sendFile( response, 'usa.png' )
      break
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     response.end( content, 'utf-8' )
   })
}
