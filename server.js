const http = require('http'),
      fs   = require('fs'),
      port = 3000 // Default for glitch VMs

      const server = http.createServer( function( request,response ) {
        switch( request.url ) {
          case '/':
            sendFile( response, 'index.html' )
            break
          default:
            const name = request.url.slice(1) // Remove slash from request url
            sendFile( response, name ) // Ask to open that file
            break
        }
      })

server.listen( process.env.PORT || port )

const sendFile = function( response, filename ) {
  fs.readFile( filename, function( err, content ) {
    // Error handling if a file doesn't exist
    if (err) {
      console.error( "Couldn't open file " + filename )
      response.end()
    } else {
      response.end( content, 'utf-8' )
    }
  })
}
