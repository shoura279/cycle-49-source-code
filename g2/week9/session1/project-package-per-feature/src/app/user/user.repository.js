const { prisma } = require("../../common/db/connection");

async function findUserByEmail(email) {
  // const [data] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
  // // data >> [{}] | []
  // return data[0];// {} | null
  const data = await prisma.user.findUnique({ where: { email: email } });
  return data;
}

async function getUserById(id) {
  // const [data] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
  // return data[0];
  const data = await prisma.user.findUnique({ where: { id: +id } });
  return data;
}

async function createUser(userName, email, password) {

  // const [data] = await pool.query(`INSERT INTO users 
  //   (user_name,email,hashed_password) 
  //   VALUES(?,?,?)`,
  //   [userName, email, password]);
  // // data >> {insertId:1}
  // const user = await getUserById(data.insertId);
  // return user;// {}
  const data = await prisma.user.create({
    data: {
      userName: userName,
      email: email,
      password: password
    }
  });
  return data;
}

module.exports = {
  findUserByEmail,
  createUser,
  getUserById
}