import * as userRepository from '../user/user.repository.js';
// firstName - lastName - email - password
export const register = async (data) => {
  // 1. check user existence
  const user = await userRepository.findUserByEmail(data.email);
  // 2. if yes >> throw an error.
  if (user) throw new Error('User already exists');
  // 3. save user into DB.
  const createdUser = await userRepository.createUser(data);

  return createdUser;
}