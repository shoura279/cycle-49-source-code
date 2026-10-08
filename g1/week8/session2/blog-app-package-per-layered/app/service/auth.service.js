const {findUserByEmail, createUser} = require("../repository/user.repository");

async function register(userName, email, password) {
    // 1. check a user exists
    const user = await findUserByEmail(email);// {} | null
    // 2. if yes, throw an error 'user already exists'
    if (user) throw new Error('User already exists');
    // 3. if no, create a new user
    const createdUser = await createUser(email, userName, password);
    // omit hashed_password from the response
    delete createdUser.hashed_password;
    // 4. return the user
    return createdUser;
}

module.exports = {
    register
};