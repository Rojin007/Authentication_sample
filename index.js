const { generateAccessToken } = require("./jwt");
const http = require("http");
const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Hello, World!");
};
const healer = "debugger";
const heal = generateAccessToken(healer);
console.log(heal);

const server = http.createServer(requestListener);
server.listen(8080);
