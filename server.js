const http = require("http");
const fs = require("fs");
const path = require("path"); // Require the path module
const port = 3000;

const server = http.createServer(function (request, response) {
  switch (request.url) {
    case "/":
      sendFile(response, "index.html");
      break;
    case "/index.html":
      sendFile(response, "index.html");
      break;
    case "/style.css":
      sendFile(response, "style.css");
      break;
    case "/script.js": // Added case for script.js
      sendFile(response, "script.js");
      break;
    default:
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.end("404 Error: File Not Found");
  }
});

server.listen(process.env.PORT || port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

const sendFile = function (response, filename) {
  const filepath = path.join(__dirname, filename); // Create an absolute path
  const ext = path.extname(filename).toLowerCase(); // Get the file extension

  // Set the appropriate Content-Type based on the file extension
  let contentType = "text/html"; // Default to HTML
  if (ext === ".css") {
    contentType = "text/css";
  } else if (ext === ".js") {
    // Added Content-Type for JavaScript
    contentType = "text/javascript";
  }

  fs.readFile(filepath, function (err, content) {
    if (err) {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.end("404 Error: File Not Found");
    } else {
      response.writeHead(200, { "Content-Type": contentType });
      response.end(content, "utf-8");
    }
  });
};
