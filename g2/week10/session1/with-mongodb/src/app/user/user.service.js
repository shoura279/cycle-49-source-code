import * as userRepository from './user.repository.js';
export async function updateUser() { }
export async function deleteAccount() { }

export async function getProfile(id) {
  // 1. get user data from db.
  const user = await userRepository.findUserById(id);
  // 2. if not valid user throw error.
  if (!user) throw new Error('User not found');

  delete user.password;
  // 3. return data. 
  return user;
}