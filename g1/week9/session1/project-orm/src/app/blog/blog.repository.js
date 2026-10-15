import { Blog } from "./blog.model.js";

export async function createBlog(title, content, userId) {
  return await Blog.create({
    title: title,
    content: content,
    userId: userId,
  });
}

// module.exports = {
//   createBlog
// }