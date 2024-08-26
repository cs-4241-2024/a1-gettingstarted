import { createServer } from "http";
import { readFile } from "fs";
const port = 3000;

const server = createServer(function (request, response) {
  switch (request.url) {
    case "/":
      sendFile(response, "index.html");
      break;
    case "/index.html":
      sendFile(response, "index.html");
      break;
    default:
      response.end("404 Error: File Not Found");
  }
});

server.listen(process.env.PORT || port);

const sendFile = function (response, filename) {
  readFile(filename, function (err, content) {
    response.end(content, "utf-8");
  });
};
