import * as userRepository from '../user/user.repository.js';
import * as blogRepository from './blog.repository.js';
// create blog
export async function createBlog(title, content, userId) {
  // 1. check user existence
  const user = await userRepository.findUserById(userId);// {} | null
  // 2. if not exists, throw an error "User not found"
  if (!user) throw new Error('User not Found');
  // 3. save blog into db
  const blog = await blogRepository.createBlog(title, content, userId);
  // 4. return created blog
  return blog;
}
// get specific blog
// update blog

// module.exports = {
//   createBlog
// }