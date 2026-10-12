const { User } = require("../common/db/user.model");

async function findUserByEmail(email) {
  // SELECT * FROM users WHERE email = ? LIMIT 1;
  const user = await User.findOne({ where: { email: email }, });// {} | null
  return user;
}

async function findUserById(id) {
  // SELECT * FROM users WHERE id = ? LIMIT 1;
  const user = await User.findByPk(id, {});// {} | null
  return user;
}

async function createUser(userName, email, password) {
  const createdUser = await User.create({ userName, email, password });
  return createdUser;
}

async function deleteUser(id) {
  const result = await User.destroy({
    where: {
      id: id
    },// soft delete
    // force: true >> hard deleted
  });
  return result;
}

async function restoreUser(id) {
  return await User.restore({
    where: {
      id: id
    }
  })
}

module.exports = {
  findUserByEmail,
  createUser,
  findUserById,
  deleteUser,
  restoreUser
}