const http = require("http");
const fs = require("fs");

const public_files = ["index.html", "main.css", "main.js"];

const server = http.createServer(function (request, response) {
  const url = request.url.replaceAll("/", "");
  if (url.length === 0) sendFile(response, public_files[0]);
  else if (public_files.indexOf(url) !== -1) sendFile(response, url);
  else response.end("404 Error: File Not Found");
});

const port = process.env.PORT || 3000;
server.listen(port);
console.log("Server listening on port", port);

const sendFile = function (response, filename) {
  fs.readFile(filename, function (err, content) {
    response.end(content, "utf-8");
  });
};
