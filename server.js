const http = require("http"),
  fs = require("fs"),
  port = 3000;

// ensure that all files can be requested/received
const server = http.createServer(function (request, response) {
  switch (request.url) {
    case "/":
      sendFile(response, "index.html");
      break;
    default:
      const name = request.url.slice(1);
      sendFile(response, name);
      break;
  }
});

server.listen(process.env.PORT || port);

const sendFile = function (response, filename) {
  fs.readFile(filename, function (err, content) {
    // catch unknown files
    if (err) {
      response.error("Bad File");
    } else {
      response.end(content, "utf-8");
    }
  });
};
