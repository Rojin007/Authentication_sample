const { CreateUser } = require("./controllers/signup");

const express = require("express");
const router = express.Router();

router.get("/signup", CreateUser);
