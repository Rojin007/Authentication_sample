const { generateAccessToken } = require("./jwt");
const User = require("./Models/Schemas");
const express = require("express");
const http = require("http");
const apiRoutes = require("./Routes");

const healer = "debugger";
const mongoose = require("mongoose");
const { CreateUser } = require("./Routes/controllers/signup");

mongoose.connect("mongodb://localhost:27017/authentication");
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello World");
});
app.post("/api/v1/sign", CreateUser);
app.use("/api/v1", apiRoutes);

//app.post('/api/v1/signup',async(req,res)=>{const (User.name)req.body.name});

const mark = new User({ name: "Mark" });
console.log(mark.name);
//mark.save();
const heal = generateAccessToken(healer);
console.log(heal);

//const server = http.createServer(requestListener);
app.listen(8080, () => {
  console.log("Server started...");
});
