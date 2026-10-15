import * as userRepository from "./user.repository.js"

export async function createUser(userName, email, password) {
  // 1. check user existence
  const user = await userRepository.findUserByEmail(email);// {}|null
  // 2. if yes throw an error user already exists.
  if (user) throw new Error('User already exists');
  // 3. save user into DB
  const createdUser = await userRepository.createUser(userName, email, password);
  return createdUser;
}

export async function getUser(id) {
  const user = await userRepository.findUserById(id);
  if (!user) throw new Error('User not Found');

  delete user.dataValues.password
  return user;
}

export async function deleteUser(id) {
  // 1. check user exists
  const user = await userRepository.findUserById(id);
  if (!user) throw new Error('User not Found');
  // 2. delete user
  const result = await userRepository.deleteUser(id);
  return result;
}


export async function restoreUser(id) {
  const result = await userRepository.restoreUser(id);
  return result;
}

// module.exports = {
//   createUser,
//   getUser,
//   deleteUser,
//   restoreUser
// }