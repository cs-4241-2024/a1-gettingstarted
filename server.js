const http = require('http'), //requiring libraries that are built into node -- making consts refer to these libraries
      fs   = require('fs'), //file system
      port = 3000 

const server = http.createServer( function( request,response ) { //use http library to create a new server to review requests and send specific responses back to client
  console.log( request.url ) //added in class
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
   /*below is now handled by default case
     case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/style.css':
      sendFile( response, 'style.css' )
      break */
    default:
      const name = request.url.slice(1) //slice to remove opening forward slash
      sendFile( response, name )
      break
      //response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port ) //see if env file has a var called port declared, if not use port

const sendFile = function( response, filename ) {
   fs.readFile( filename, function( err, content ) { 
    if( err ) {
      response.end( '404 Error: File Not Found' )
    } else{
      response.end( content, 'utf-8' )
    }
})
}
