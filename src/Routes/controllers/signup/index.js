const { createUser } = require("../../../src/Models/user");

const CreateUser = async (req, res) => {
  const result = await createUser(req.body);

  if (result) res.send("true");
};
module.exports = { CreateUser };
