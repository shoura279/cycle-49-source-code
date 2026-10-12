const { findUserByEmail, createUser } = require("../repository/user.repository");

async function register(userName, email, password) {
  //1. check user existence.
  const user = await findUserByEmail(email);// {} | null
  //2. if yes throw an error 'user already exists'.
  if (user) throw new Error('User already exists😡');
  //3. save user into DB.
  const createdUser = await createUser(userName, email, password);
  //4. return user. 
  return createdUser;
}

module.exports = {
  register
}