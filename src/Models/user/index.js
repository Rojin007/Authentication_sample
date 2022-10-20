const { generateHash } = require("../../Utils/hashed");
const { generateId } = require("../../Utils/randomGen");
const user = require("../Schemas");
const createUser = async (name, phone, password) => {
  const uid = generateId();
  const pwd = await generateHash(password);
  const result = await user.create({
    id: uid,
    name: name,
    phone: phone,
    password: pwd,
  });
  console.log(result);
  if (result) return true;
  return false;
};

module.exports = { createUser };
