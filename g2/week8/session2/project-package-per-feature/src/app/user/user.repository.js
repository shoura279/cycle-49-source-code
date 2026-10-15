const { pool } = require("../../common/db/connection");

async function findUserByEmail(email) {
  const [data] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
  // data >> [{}] | []
  return data[0];// {} | null
}

async function getUserById(id) {
  const [data] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
  return data[0];
}

async function createUser(userName, email, password) {

  const [data] = await pool.query(`INSERT INTO users 
    (user_name,email,hashed_password) 
    VALUES(?,?,?)`,
    [userName, email, password]);
  // data >> {insertId:1}
  const user = await getUserById(data.insertId);
  return user;// {}
}

module.exports = {
  findUserByEmail,
  createUser,
  getUserById
}