const { Router } = require('express');
const blogController = require('./blog.controller');
const blogRouter = Router();

// original >> /api/blog/
blogRouter.post('/', blogController.createBlog);
blogRouter.get('/:id', blogController.getSpecificBlog);
blogRouter.delete('/:id/:userId', blogController.deleteBlog)
blogRouter.patch('/restore/:id/:userId', blogController.restoreBlog)


module.exports = {
  blogRouter
};