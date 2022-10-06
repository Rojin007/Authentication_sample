const user = require("../user");
createUser = () => {
  user.create({ name: String });
  user.Save();
};
module.exports = { createUser };
