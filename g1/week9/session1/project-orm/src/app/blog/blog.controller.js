import * as blogService from './blog.service.js';

export async function createBlog(req, res, next) {
  try {
    const { title, content, userId } = req.body
    const blog = await blogService.createBlog(title, content, userId);
    res.status(201).json({
      message: "blog created successfully", success: true, data: blog
    });
  } catch (error) {
    next(error);
  }
}

// module.exports = {
//   createBlog
// }