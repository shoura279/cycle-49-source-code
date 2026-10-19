import * as userRepo from '../user/user.repository.js';


export async function register(data) {
  // data.email >> undefined
  // 1. check email existence.
  const emailExists = await userRepo.findUserByEmail(data.email); // {} | null
  // 2. if yes, throw an error
  if (emailExists) throw new Error('email already exists');

  const phoneExists = await userRepo.findUserByPhone(data.phone);
  if (phoneExists) throw new Error('Phone already exists');

  // 3. save user into DB
  const newId = await userRepo.createUser(data);
  return newId;
}