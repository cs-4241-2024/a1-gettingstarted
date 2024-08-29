const http = require('http'),
      fs   = require('fs'),
      path = require('path'),
      port = 3000;

const server = http.createServer(function(request, response) {
  console.log(`Request for ${request.url} received.`);  // Log the requested URL for debugging

  switch (request.url) {
    case '/':
    case '/index.html':
      sendFile(response, 'index.html', 'text/html');
      break;
    case '/style.css':
      sendFile(response, 'style.css', 'text/css');
      break;
    case '/script.js':
      sendFile(response, 'script.js', 'application/javascript');
      break;
    default:
      if (request.url.startsWith('/images/')) {
        sendFile(response, `.${request.url}`, getContentType(request.url));
      } else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.end('404 Error: File Not Found', 'utf-8');
      }
      break;
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

function sendFile(response, filePath, contentType) {
  fs.readFile(filePath, function(error, content) {
    if (error) {
      response.writeHead(500);
      response.end('Server Error: Could not read file', 'utf-8');
    } else {
      response.writeHead(200, { 'Content-Type': contentType });
      response.end(content, 'utf-8');
    }
  });
}

function getContentType(url) {
  const extname = String(path.extname(url)).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',

  };

  return mimeTypes[extname] || 'application/octet-stream';
}
