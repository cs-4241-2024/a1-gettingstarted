const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer(function(request, response) {
  switch(request.url) {
    case '/':
      sendFile(response, 'index.html')
      break
    case '/index.html':
      sendFile(response, 'index.html')
      break
    case '/style.css':
      sendFile(response, 'style.css')
      break
    case '/about.html':
      sendFile(response, 'about.html')
      break
    case '/colorpallet.html':
      sendFile(response, 'colorpallet.html')
      break
      case '/script.js':
      sendFile(response, 'script.js')
      break
    default:
      response.end('404 Error: File Not Found')
  }
})

server.listen(process.env.PORT || port)

const sendFile = function(response, filename) {
   fs.readFile(filename, function(err, content) {
     if (err) {
       response.end('500 Server Error')
     } else {
       // Set the correct MIME type for CSS
       const mimeType = filename.endsWith('.css') ? 'text/css' : 'text/html';
       response.writeHead(200, { 'Content-Type': mimeType });
       response.end(content, 'utf-8');
     }
   })
}

