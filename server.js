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
    case '/script.js':
      sendFile(response, 'script.js')
      break
    case '/styles.css':
      sendFile(response, 'styles.css')
      break
    case '/ben-tyler.jpg': // Add this line
      sendFile(response, 'ben-tyler.jpg') // Add this line
      break
    default:
      response.end('404 Error: File Not Found')
  }
})

server.listen(process.env.PORT || port)

const sendFile = function(response, filename) {
  fs.readFile(filename, function(err, content) {
    if (err) {
      response.writeHead(500, {'Content-Type': 'text/plain'});
      response.end('500 Internal Server Error');
    } else {
      response.end(content, 'utf-8');
    }
  })
}

