const { generateAccessToken } = require("./jwt");

const express = require("express");
const http = require("http");
const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Hello, World!");
};
const healer = "debugger";
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/authentication");
var app = express();
//app.post('/addUser',async(req,res)=>{const (user.name)req.body.name});

const heal = generateAccessToken(healer);
console.log(heal);

const server = http.createServer(requestListener);
server.listen(8080);
