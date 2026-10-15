const { pool } = require("../../common/db/connection");

async function findBlogById(id) {
  const [data] = await pool.query(`SELECT * FROM blogs WHERE id = ? AND is_deleted = false`, [id]);
  return data[0];// {} | null
}

async function createBlog(title, content, userId) {
  const [data, metadata] = await pool.query(`INSERT INTO blogs 
    (title,content,user_id) VALUES(?,?,?)`,
    [title, content, userId]);
  const insertedId = data.insertId;
  const blog = await findBlogById(insertedId);
  return blog;
}


async function deleteBlog(id) {
  const [data] = await pool.query(`UPDATE blogs SET is_deleted = true WHERE id = ?`, [id]);
  return data.affectedRows// 1 - 0 
}


async function restoreBlog(id, userId) {
  const [data] = await pool.query(`UPDATE blogs 
    SET is_deleted = false
     WHERE 
    id = ? AND user_id = ? AND is_deleted = true`, [id, userId]);
  return data.affectedRows// 1 - 0 
}


module.exports = {
  findBlogById,
  createBlog,
  deleteBlog,
  restoreBlog
}