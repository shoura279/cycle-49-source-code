const {pool} = require("../../db/connection");

async function findBlogById(id) {
    const [data] = await pool.query(`SELECT *
                                     FROM blogs
                                     WHERE id = ?`, [id]);
    return data[0];// [{}] | []
}

async function createBlog(userId, title, content) {
    const [data] = await pool.query(`INSERT INTO blogs (user_id, title, content)
                                     VALUES (?, ?, ?)`, [userId, title, content]);
    const id = data.insertId;
    return await findBlogById(id);
}

// affectedRows >> 3 >> fit >> match
// changedRows >> 0 >>

async function deleteBlog(id) {
    const [data] = await pool.query('UPDATE blogs SET is_deleted = true WHERE id = ?', [id]);
    // data >> {insertId:0 , affectedRows:1, changedRows:1}
    return data.changedRows;// 1 | 0
}

async function getAll(userId) {
    const [data] = await pool.query('SELECT * FROM blogs WHERE user_id = ? AND is_deleted = false', [userId]);
    return data;// [{},{},{},{}];
}

async function restoreBlog(id, userId) {
    const [data] = await pool.query('UPDATE blogs SET is_deleted = false WHERE id = ? AND is_deleted = true', [id]);
    return data.changedRows;
}

module.exports = {
    createBlog, findBlogById, deleteBlog, getAll, restoreBlog
}