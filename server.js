const http = require("http"),
  fs = require("fs"),
  port = 3000;

const server = http.createServer(function (request, response) {
  switch (request.url) {
    case "/":
      sendFile(response, "index.html");
      break;
    default:
      sendFile(response, request.url.slice(1));
      break;
  }
});

server.listen(process.env.PORT || port);

const sendFile = function (response, filename) {
  fs.readFile(filename, function (err, content) {
    if (err) {
      response.end("404 Error: File Not Found");
    } else {
      response.end(content, "utf-8");
    }
  });
};
