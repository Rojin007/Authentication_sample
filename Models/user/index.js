const user = require("../Schemas");
createUser = (data) => {
  user.create(data);
  return true;
};
module.exports = { createUser };
