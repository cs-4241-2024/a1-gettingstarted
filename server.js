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
    case '/style.css':
      sendFile( response, 'style.css' )
      break
    case '/abbeyimg.jpg':
      sendFile( response, 'abbeyimg.jpg' )
      break
    case '/nunito.tff':
      sendFile( response, 'nunito.tff' )
      break
        case '/script.js':
      sendFile( response, 'script.js' )
      break
    default:
      const name = request.url.slice(1);
      sendFile(response, name)
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) {
     if( err ) {
       response.error('bad file name')
     }else{
       response.end( content, 'utf-8' )
     }
   })
}