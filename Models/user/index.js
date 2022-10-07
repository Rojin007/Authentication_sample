const user = require("../Schemas");
createUser = () => {
  user.create({ name: String });
};
module.exports = { createUser };
