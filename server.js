const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  console.log( request.url )
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    default:
      const name = request.url.slice(1)
      sendFile( response, request.url )
      break
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
