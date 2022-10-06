const { generateAccessToken } = require("./jwt");
const User = require("./Models/user");
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
app.get("/", (req, res) => {
  res.send("hello World");
});
//app.post('/api/v1/signup',async(req,res)=>{const (User.name)req.body.name});

const mark = new User({ name: "Mark" });
console.log(mark.name);
//mark.save();
const heal = generateAccessToken(healer);
console.log(heal);

const server = http.createServer(requestListener);
server.listen(8080);
