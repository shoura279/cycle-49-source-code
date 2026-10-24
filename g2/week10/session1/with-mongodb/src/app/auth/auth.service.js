import * as userRepository from '../user/user.repository.js';

/**
 * @param {*} data : {userName,password} | {email,password} | {phone,password} | {userName,email,phone,password}
 */
export async function register(data) {
  // 1. check user exists
  // const emailExists = await userRepository.findUserByEmail(data.email);
  // const phoneExists = await userRepository.findUserByPhone(data.phone);
  // const userNameExists = await userRepository.findUserByUserName(data.userName);

  const userExists = await userRepository.findUserExists(data.email, data.phone, data.userName);

  // 2. if yes throw an error user already exists.
  // if (emailExists)
  //   throw new Error('email already exists.');

  // if (phoneExists)
  //   throw new Error('phone already exists.');

  // if (userNameExists)
  //   throw new Error('userName already exists.');


  if (userExists)
    throw new Error('user already exists.');
  // 3. save user into DB
  const insertedId = await userRepository.createUser(data);
  return insertedId;
}

