const userRepository = require("../repository/user.repository");
const blogRepository = require("../repository/blog.repository");

async function createBlog(userId, title, content) {
    // 1. check a user exists.
    const user = await userRepository.findUserById(userId);// {} | null
    // 2. if no, throw an error 'user not found'
    if (!user) throw new Error('user not found');
    // 3. create a new blog
    const blog = await blogRepository.createBlog(userId, title, content);
    // 4. return the blog
    return blog;
}


async function deleteBlog(userId, id) {
    // 1. check a blog exists >> blog data or null
    const blogExist = await blogRepository.findBlogById(id);
    if (!blogExist) throw new Error('blog not found');
    // 2. check owner of the blog >> if blog.user_id === userId
    // 1 >> 5
    // 1 >> 1
    console.log({"userIdParam": userId, "blogDBId": blogExist.user_id});
    if (blogExist.user_id !== Number(userId)) throw new Error('you are not the owner of this blog');
    // 3. delete the blog
    const deletedCount = await blogRepository.deleteBlog(id);
    if (deletedCount === 0) throw new Error('blog already deleted');
}

async function getBlogs(userId) {
    const blogs = await blogRepository.getAll(userId);
    return blogs;
}


async function restoreBlog(id, userId) {
    const blog = await blogRepository.findBlogById(id);
    if (!blog) throw new Error('blog not found');

    if (blog.user_id !== Number(userId)) throw new Error('you are not allowed to restore this blog');

    const count = await blogRepository.restoreBlog(id, userId);

    if (count === 0) throw new Error('blog already restored');
}

module.exports = {createBlog, deleteBlog, getBlogs, restoreBlog};