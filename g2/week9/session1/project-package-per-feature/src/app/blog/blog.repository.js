const { pool, prisma } = require("../../common/db/connection");

async function findBlogById(id) {
  // const [data] = await pool.query(`SELECT * FROM blogs WHERE id = ? AND is_deleted = false`, [id]);
  // return data[0];// {} | null
  const data = await prisma.blog.findFirst({ where: { id: +id, isDeleted: false } });
  return data;
}

async function createBlog(title, content, userId) {
  const data = await prisma.blog.create({
    data: {
      title: title,
      content: content,
      userId: +userId// send to DB user_id
    }
  });
  return data;
}


async function deleteBlog(id) {
  // const [data] = await pool.query(`UPDATE blogs SET is_deleted = true WHERE id = ?`, [id]);
  // return data.affectedRows// 1 - 0 
  try {
    const data = await prisma.blog.update({ where: { id: +id, isDeleted: false }, data: { isDeleted: true } });
    return data;
  } catch (error) {
    return null;
  }
}


async function restoreBlog(id, userId) {
  // const [data] = await pool.query(`UPDATE blogs 
  //   SET is_deleted = false
  //    WHERE 
  //   id = ? AND user_id = ? AND is_deleted = true`, [id, userId]);
  // return data.affectedRows// 1 - 0 
  const data = await prisma.blog.update({ where: { id: +id }, data: { isDeleted: false } });
  return data;
}


module.exports = {
  findBlogById,
  createBlog,
  deleteBlog,
  restoreBlog
}