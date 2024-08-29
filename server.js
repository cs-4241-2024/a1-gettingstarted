function animateText() {
  var rose = document.getElementById('rose-text');
  rose.style.transition = 'transform 0.5s ease-in-out'
  rose.style.transform = 'scale(1.5)'
  console.log("transforming...")
  
  setTimeout(() => {
      rose.style.transform = 'scale(1)'
  }, 1000)
  }

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
case '/server.js':
  sendFile( response, 'server.js' )
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
