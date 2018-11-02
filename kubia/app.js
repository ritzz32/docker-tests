const http = require('http');
const os = require('os');

console.log("Kubia Server Starting ...");

var handler = function (request, responce) {
  console.log("Received request from " + request.connection.remoteAddress);
  responce.writeHead(200);
  responce.end("You've hit " + os.hostname() + "\n");
};

var www = http.createServer(handler);
www.listen(8080);
