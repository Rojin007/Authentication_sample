const { generateId } = require("../../Utils/randomGen");
const user = require("../Schemas");
const createUser = async (data) => {
  const uid = generateId();
  const result = await user.create({ id: uid, name: data });
  console.log(result);
  if (result) return true;
  return false;
};

module.exports = { createUser };
