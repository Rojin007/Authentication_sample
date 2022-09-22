const http = require("http");

const { generateAccessToken } = require("./jwt");

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Hello, World!");
};

const heal = generateAccessToken(healer);
console.log(heal);

const server = http.createServer(requestListener);
server.listen(8080);
