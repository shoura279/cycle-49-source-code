const { getUserById } = require("../user/user.repository");
const blogRepo = require('./blog.repository');

// create blog
async function createBlog(title, content, userId) {
  // 1. check user existence.
  const user = await getUserById(userId);// {}| null
  // 2. in case not exists. throw an error
  if (!user) throw new Error('User not Found');
  // 3. save blog into DB 
  console.log(title, content, userId);

  const blog = await blogRepo.createBlog(title, content, userId);
  return blog;
}

// get blog data
async function getSpecificBlog(id) {
  const blog = await blogRepo.findBlogById(id);// {} | null
  if (!blog) throw new Error('Blog not Found');
  return blog;
}

// delete blog
async function deleteBlog(id, userId) {
  // 1. get blog data.
  const blog = await blogRepo.findBlogById(id);// {} | null
  // 2. if not exists throw an error.
  if (!blog)
    throw new Error('Blog not Found');
  // 3. check owner of blog.

  if (blog.userId !== Number(userId))
    throw new Error('You are not allowed to delete this blog.');
  // 4. delete blog.
  const isDeleted = await blogRepo.deleteBlog(id);// 0 - 1
  if (isDeleted === null) throw new Error('fail to delete blog');
}

// restore blog
async function restoreBlog(id, userId) {
  const isRestored = await blogRepo.restoreBlog(id, userId);// 1 - 0
  if (isRestored === 0) throw new Error('fail to restore blog.');
}


module.exports = {
  createBlog,
  getSpecificBlog,
  deleteBlog,
  restoreBlog
}