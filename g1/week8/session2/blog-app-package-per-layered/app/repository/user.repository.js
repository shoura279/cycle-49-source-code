const {pool} = require("../../db/connection");

async function findUserByEmail(email) {
    const [data] = await pool.query(`SELECT *
                                     FROM users
                                     WHERE email = ?`, [email]);// [userData,metadata]
    return data[0];// [{email,id,name,password}] | [null]
}

async function findUserById(id) {
    const [data] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    return data[0];
}

async function createUser(email, userName, password) {
    const [data] = await pool.query(`INSERT INTO users (email, user_name, hashed_password)
                                     VALUES (?, ?, ?)`, [email, userName, password]);
    const insertedId = data.insertId;/// 4

    return await findUserById(insertedId);
}

module.exports = {
    findUserByEmail,
    createUser,
    findUserById,
};