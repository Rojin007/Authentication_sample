const jwt = require("jsonwebtoken");
//> require('crypto').randomBytes(64).toString('hex')
// ''
const dotenv = require("dotenv");

// get config vars
dotenv.config();

// access config var
process.env.TOKEN_SECRET;
function generateAccessToken(username) {
  return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: "1800s" });
}

export default { generateAccessToken };
